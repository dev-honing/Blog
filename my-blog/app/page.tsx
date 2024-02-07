// app/page.tsx
import Header from '@/components/Layouts/Header';
import Container from '@/components/Layouts/Container';
import Footer from '@/components/Layouts/Footer';
import Etc from '@/components/Layouts/Etc';

export default function MainPage() {
  return (
    <div id="root">
      <Header />
      <Container />
      <Footer />
      <Etc />
    </div>
  );
}
