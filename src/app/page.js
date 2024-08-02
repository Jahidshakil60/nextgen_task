import Hero from "@/components/landingPage/Hero";
import Section10 from "@/components/landingPage/Section10";
import Section2 from "@/components/landingPage/Section2";
import Section3 from "@/components/landingPage/Section3";
import Section4 from "@/components/landingPage/Section4";
import Section5 from "@/components/landingPage/Section5";
import Section6 from "@/components/landingPage/Section6";
import Section7 from "@/components/landingPage/Section7";
import Section8 from "@/components/landingPage/Section8";
import Section9 from "@/components/landingPage/Section9";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
     <Hero />
     <Section2 />
     <Section3 />
     <Section4 />
     <Section5 />
     <Section6 />
     <Section7 />
     <Section8 />
     <Section9 />
     <Section10 />
    </main>
  );
}
