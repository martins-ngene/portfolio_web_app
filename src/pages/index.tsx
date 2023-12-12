// import Footer from "@/components/footer";
// import Logo from "@/components/logo";
// import Navbar from "@/components/navbar";
import Contact from "@/components/sections/contacts";
// import Hero from "@/components/sections/home";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      {/* <Logo /> */}
      {/* <Navbar /> */}
      {/* <Hero /> */}
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}
