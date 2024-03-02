// app/page.tsx

import Header from "@/components/Layouts/Header";
import Container from "@/components/Layouts/Container";
import Footer from "@/components/Layouts/Footer";
import { ToPosts } from '../components/Links/Links';

export default function MainPage() {
  return (
    <div id="root">
      <ToPosts />
      <Header className="bg-primary flex justify-center items-center flex-col" />
      <Container className="bg-slate-100 text-center" />
      <Footer className="bg-slate-600 flex justify-center items-center flex-col" />
    </div>
  );
}
