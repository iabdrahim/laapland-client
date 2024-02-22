import { Aside } from "@/components/dashboard/aside";
import { Nav } from "@/components/dashboard/nav";

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
