export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="w-full h-full items-start justify-between">
        {children}
      </div>
    </>
  );
}
