// import { auth } from '@/auth.config';
import { redirect } from "next/navigation";

export default async function GestoresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await auth();

  // if ( session?.user ) {
  //   redirect('/');
  // }

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
