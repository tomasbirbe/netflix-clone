import React from "react";
import { MoviesController } from "../controllers/movies.controller";

export default async function Home() {
  const [recommendation, ...movies] = await MoviesController.getPopularMovies();

  return (
    <>
      <header className="grid grid-rows-[68px_1fr_1fr] grid-cols-2">
        {recommendation.title}
        <img
          src={MoviesController.getPoster(recommendation.backdrop_path)}
          className="w-full row-start-1 col-start-1 col-end-3"
          alt=""
        />
        <div className="row-start-2 col-start-1 from-black/50 to-black/30 bg-gradient-to-r">
          <p className="text-[60px] font-black">{recommendation.title}</p>
        </div>
        <nav className="flex gap-[43px] items-center px-[4%] bg-black/30 text-[14px] h-[68px] row-start-1 col-start-1 col-end-3">
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
        {/* <img src="" alt="" /> */}
      </header>
      <main>Hello, World!</main>
    </>
  );
}
