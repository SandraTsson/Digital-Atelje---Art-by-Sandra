
import Hero from "./components/Hero";
import MainContent from "./components/MainContent";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import AboutBio from "./components/AboutBio";
import InTheStudio from "./components/InTheStudio";
import InstagramEmbed from "./components/InstagramEmbed";

export default function Home() {
  return (
    <div className="relative">

      {/* Bakgrundsbild */}
      <div className="fixed inset-0 -z-10">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/cookieswirl.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>

      <Hero />

      {/* Scrollbart content */}
      <div className="relative z-10  mt-screen">
        <MainContent />
        <InstagramEmbed permalink="https://www.instagram.com/p/ClMKQeHotsD/?img_index=1"/>
        <AboutBio />
        <InTheStudio />
        <div className="w-[90%] mx-auto my-16 grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>

    </div>
  );
}