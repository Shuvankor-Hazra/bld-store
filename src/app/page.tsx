import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import FormArea from "@/components/FormArea/FormArea";
import LuckyGift from "@/components/LuckyGift/LuckyGift";
import Luxurious from "@/components/Luxurious/Luxurious";
import Product from "@/components/Product/Product";
import SliderArea from "@/components/SliderArea/SliderArea";
import WomenValue from "@/components/WomenValue/WomenValue";


export default function Home() {
  return (
    <div className="max-w-[420px] mx-auto">
      <Banner />
      <SliderArea />
      <WomenValue />
      <LuckyGift />
      <Luxurious />
      <Product />
      <FormArea />
      <Footer />
    </div>
  );
}
