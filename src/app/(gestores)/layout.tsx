import { Sidebar, TopMenu } from "@/components";

export default function GestoresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      {/* Top Menu */}
      <TopMenu />
      {/* SideBar */}
      <Sidebar />

      <div className="px-0 sm:px-10">{children}</div>
    </main>
  );
}
