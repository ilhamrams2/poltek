import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <FloatingButtons />
      <Footer />
    </>
  );
}
