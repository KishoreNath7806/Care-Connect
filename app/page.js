import Image from "next/image";
import { Button } from "@/components/ui/button";
import Banner from '../components/Banner';
import HospitalList from '../components/HospitalList'
import Services from '../components/Services';
import ConsultationPackages from "@/components/ConsultationPackages";
import Testimonials from "@/components/Testimonials";
import Banner2 from "@/components/Banner2";

export default function Home() {
  return (
    <div className="pt-10">
          <Banner/>
          <HospitalList/>
          <Services />
          <ConsultationPackages />
          <Testimonials />
          <Banner2 />
          
    </div>
  );
}
