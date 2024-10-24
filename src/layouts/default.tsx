import { Link } from "@nextui-org/link";
import MatrixRainingCode from "@/components/MatrixRainingEffect";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <MatrixRainingCode/>
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://github.com/paulohenrique64"
          title="nextui.org homepage"
        >
          <span className="text-default-600">Criado por</span>
          <p className="text-primary">Paulo Henrique Ribeiro Alves</p>
        </Link>
      </footer>
    </div>
  );
}
