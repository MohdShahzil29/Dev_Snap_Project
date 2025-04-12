import FeaturedJobs from "@/page/FeaturedJobs";
import Footer from "@/page/Footer";
import HeroSection from "@/page/HeroSection";
import Navbar from "@/page/Navbar";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    {/* <Navbar /> */}
    <HeroSection />
    <FeaturedJobs />
    {/* <Footer /> */}
   </div>
  );
}
