import { FaClipboardCheck } from "react-icons/fa";
import { MdHome, MdOutlineFaceRetouchingNatural } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import { IoGlobeOutline } from "react-icons/io5";
import { FaHandPointRight } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='mt-5 bg-[#50437e] text-white pt-5'>
            <div className="mx-1">
                <h2 className="text-center text-[29px] font-bold ">আমাদের অঙ্গীকার</h2>
                <div className="flex items-center">
                    <div className="text-center flex-1 space-y-2">
                        <h2 className="text-[18px] font-bold">গুণমান</h2>
                        <SlBadge className="text-[#ffeb3b] inline-block text-[70px]" />
                        <p className="text-[15px]">সন্তুষ্ট না হলে বা প্রস্তুতকারকের ত্রুটি থাকলে 7 দিনের মধ্যে বিনিময় করুন বা ফেরত দিন</p>
                    </div>
                    <div className="text-center flex-1 space-y-2">
                        <h2 className="text-[18px] font-bold">শর্তাবলী</h2>
                        <FaClipboardCheck className="text-[#ffeb3b]  inline-block text-[70px]" />
                        <p className="text-[15px]">দেশব্যাপী সিওডি শিপিং, অর্থপ্রদানের আগে পণ্যগুলি পরিদর্শন করা হয়</p>
                    </div>
                </div>
                <div className="border mx-2 my-4 border-[#ffeb3b]"></div>
                <div className="text-center flex-1 space-y-2">
                    <h2 className="text-[18px] font-bold">গ্রাহক সেবা</h2>
                    <MdOutlineFaceRetouchingNatural className="text-[#ffeb3b]  inline-block text-[70px]" />
                    <p className="text-[15px]">24/7 কাস্টমার কেয়ার <br />ব্যবহারের সময় এবং পরে দীর্ঘমেয়াদী সমর্থন</p>
                </div>
                <div className="border mx-2 my-4 border-[#ffeb3b]"></div>
            </div>
            <div className="mx-3 space-y-2">
                <h2 className="text-center text-[27px] font-bold mb-3">যোগাযোগের তথ্য</h2>
                <div className="flex gap-2">
                    <MdHome className="text-[26px]" />
                    <p className="text-[14px]">Address: 47 Atlas Road San Bartolome, Novaliches, Quezon City, Metro Manila</p>
                </div>
                <div className="flex gap-2">
                    <IoGlobeOutline className="text-[18px]" />
                    <p className="text-[14px]">Website: https://www.bld-store.top/watchswiss-ba</p>
                </div>
            </div>
            <div className="flex items-center justify-center gap-3 h-28">
                <FaHandPointRight className="text-[36px] font-bold text-[#ffeb3b]" />
                <h2 className="text-2xl font-bold text-[#8adcff] uppercase">Our policies</h2>
            </div>
        </div>
    );
};

export default Footer;