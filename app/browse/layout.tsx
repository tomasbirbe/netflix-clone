export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-rows-[68px_745px_auto]">
      <nav className="flex gap-7">
        <p>Logo</p>
        <div className="flex justify-between w-full">
          <ul className="flex gap-3">
            <li>Inicio</li>
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
      {children}
    </div>
  );
}
