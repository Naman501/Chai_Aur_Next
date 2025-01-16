import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/ui/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestimonial from "@/components/TestimonialCards";
import Upcomingwebinars from "@/components/Upcomingwebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-3 pb-10 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"  > 
  <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
     {/* <h1 className="text-2xl text-center">NEXT-BC</h1> */}
    <HeroSection />
    <FeaturedCourses />
    <WhyChooseUs />
    <MusicSchoolTestimonial />
    <Upcomingwebinars />
    <Instructors />
    <Footer />
  </main>
  );
}
