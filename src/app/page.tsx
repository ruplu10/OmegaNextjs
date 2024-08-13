import Image from "next/image";
import Carousel from "../components/Carousel";
import HomeVoucher from "@/components/HomeVoucher";
import { HomeOffer } from "@/components/HomeOffer";
import HomeFeatures from "@/components/HomeFeatures";
import Branchimage from "@/components/Branchimage";
import { PersonalServices } from "@/components/PersonalServices";
import Homewear from "@/components/Homewear";
import HomeGlass from "@/components/HomeGlass";
import Review from "@/components/Review";
export default function Home() {
  return (
    <>

<Carousel/>
<HomeOffer/>
<HomeFeatures/>
<Branchimage/>
<PersonalServices/>
<Homewear/>
<HomeGlass/>

<HomeVoucher/>
<Review/>


 

    </>
   
  );
}
