import { Footer, Sidebar, TopMenu } from "@/components";

export default function GestoresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen">
          {/* Top Menu */}
          <TopMenu />
          {/* SideBar */}
          <Sidebar />
          <div className="px-0 sm:px-10" style={{ marginTop: "4rem" }}>
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
