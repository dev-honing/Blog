// app/page.tsx

import Header from "@/components/Layouts/Header";
import Container from "@/components/Layouts/Container";
import Footer from "@/components/Layouts/Footer";
import ETC from "@/components/Layouts/ETC";

export default function MainPage() {
  return (
    <div id="root">
      <Header />
      <Container />
      <Footer />
      <ETC />
    </div>
  );
}
