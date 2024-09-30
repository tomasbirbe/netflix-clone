import { MoviesController } from "../controllers/movies.controller";

export default async function Home() {
  const [recommendation, ...movies] = await MoviesController.getPopularMovies();

  return (
    <>
      <header>
        <nav className="flex gap-[43px] items-center px-[4%] text-[14px] h-[68px]">
          <p className="min-w-[92.5px]">Logo</p>
          <div className="flex justify-between w-full">
            <ul className="flex gap-[18px]">
              <li className="font-medium">Inicio</li>
              <li>Series</li>
              <li>Peliculas</li>
              <li>Novedades populares</li>
              <li>Mi lista</li>
              <li>Explora por idiomas</li>
            </ul>
            <ul className="flex gap-3">
              <li>Buscar</li>
              <li>Notificaciones</li>
              <li>Perfil</li>
            </ul>
          </div>
        </nav>
        {recommendation.title}
      </header>
      <main>Hello, World!</main>
    </>
  );
}
