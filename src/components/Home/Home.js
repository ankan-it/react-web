
// import Banner from 'D:\react-html-temp\src\components\Home';

import BannerSection from "./BannerSection";

import Header from "../Common/Header";
import ShopSection from "./ShopSection";
import AboutSection from "./AboutSection";
import OfferSection from "./OfferSection";
import BlogSection from "./BlogSection";
import ClientSection from "./ClientSection";


export default function Home() {
  return (
    <>
      <BannerSection />
      <ShopSection/>
      <AboutSection/>
      <OfferSection />
      <BlogSection/>
      <ClientSection/>
    </>
  )
}

