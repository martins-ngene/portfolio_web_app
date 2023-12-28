import { useState } from "react";
import { Inter } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Contact from "@/components/sections/contacts";
import Hero from "@/components/sections/home";
import Modal from "@/components/modals";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

// Fonts For Project
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // State management for forms
  const [displayModal, setDisplayModal] = useState(true);

  // Function to handle form display state
  const showModal = (open: boolean) => {
    setDisplayModal(open);
  };

  return (
    <main className={`${inter.className}`}>
      {displayModal ? (
        <Modal onClick={() => showModal(!displayModal)}>
          <div>
            <iframe
              className='w-full mt-0'
              src='https://player.vimeo.com/video/895108606?h=deef811fc9'
              width='640'
              height='564'
              allow='autoplay; fullscreen'
              allowFullScreen></iframe>
          </div>
        </Modal>
      ) : (
        ""
      )}
      <Navbar />
      <Hero />
      <Projects onClick={() => showModal(!displayModal)} />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
