export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="grid grid-rows-[745px_auto]">{children}</div>;
}
