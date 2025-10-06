import Image from "next/image";
import { Button } from "@/components/ui/button";
import Banner from '../components/Banner';
import HospitalList from '../components/HospitalList'
import Services from '../components/Services';
import ConsultationPackages from "@/components/ConsultationPackages";

export default function Home() {
  return (
    <div className="pt-10">
          <Banner/>
          <HospitalList/>
          <Services />
          <ConsultationPackages />
          
    </div>
  );
}
