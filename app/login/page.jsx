"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoginForm from "@/components/LoginForm";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  /*const router = useRouter();
  const { status } = useSession();

  if (status !== "loading" && status === "authenticated") {
    router.push("/sie");
  }*/

  return (
    <>
      <Header />
      <main className="bg-[#F5F0EA] flex-grow flex h-screen items-start py-12 justify-center">
        <LoginForm />
      </main>
      <Footer />
    </>
  );
}
