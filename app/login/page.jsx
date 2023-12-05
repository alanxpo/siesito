import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <>
      <main className="bg-[#F5F0EA] md:flex md:flex-col md:items-center md:justify-between md:h-screen">
        <Header />
        <LoginForm />
        <Footer />
      </main>
    </>
  );
}
