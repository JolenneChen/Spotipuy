
import Hero from "@/components/Hero";
import Recents from "@/components/Recents";
import Recplaylist from "@/components/Recplaylist";

export default function Page() {
  return (
    <div className="w-full h-full bg-[#1d1c1c] p-8 ">
     <Hero />
     <Recplaylist/>
     <Recents/>
    </div>
  )
}
