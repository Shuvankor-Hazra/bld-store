import Image from 'next/image';
import img1 from "../../assets/gallery1.jpg";
import img2 from "../../assets/gallery2.png";
import img3 from "../../assets/gallery3.png";
import Slider from '../Slider/Slider';

const SliderArea = () => {
    return (
        <div className='mt-16 text-center '
            style={{
                background: 'linear-gradient(rgb(255, 255, 255) 0%, rgb(8, 53, 10) 100%)',
            }}>
            <h2 className="text-[#008906cc] text-4xl font-medium">সুইস কোয়ার্টজ ঘড়ি</h2>
            <h3 className="text-[#8e0e00] text-[26px] font-medium leading-loose">ভাগ্যবান - বিলাসবহুল - স্মার্ট</h3>
            <h4 className="text-[#006b05] text-xl m-3 mt-0 px-2 py-1 bg-[#edf0ff] rounded-full">4.9 ⭐| 2,389 রেটিং | 5,097 বিক্রি হয়েছে
            </h4>
            <Slider />
            <h2 className='text-[24px] font-bold text-white mx-3 my-5'>
                এই কোয়ার্টজ ঘড়ি বিলাসিতা এবং সুন্দর জিনিসগুলির প্রতীক। এটি পরিধানকারীর জন্য কাজের ভাগ্য, ভালবাসা এবং স্বাস্থ্য নিয়ে আসবে
            </h2>
            <div className='relative mx-3 h-[380px]'>
                <Image className='border-2 border-white absolute top-0 left-14' alt='' src={img1} width={255} height={165} />
                <Image className='border-2 border-white absolute bottom-5' alt='' src={img2} width={240} height={165} />
                <Image className='border-2 border-white absolute right-0 bottom-16  ' alt='' src={img3} width={230} height={140} />
            </div>
        </div>
    );
};

export default SliderArea;