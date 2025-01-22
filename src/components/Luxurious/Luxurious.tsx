import Image from "next/image";
import img from "../../assets/luxurious.jpg";
import img2 from "../../assets/watch3.jpg";

const Luxurious = () => {
    return (
        <>
            <div className="mt-8 relative">
                <Image className="-ml-14" src={img} alt="" />
                <div className="absolute top-0 left-0 text-black bg-white p-2">
                    <h2 className="text-4xl font-bold mb-2">সুন্দর এবং বিলাসবহুল</h2>
                    <h3 className="text-xl">
                        এই কোয়ার্টজ ঘড়িটি কেবল বিলাসিতাই নয়, পরিধানকারীর জন্য ভাগ্যও নিয়ে আসে
                    </h3>
                </div>
                <div className="max-w-[320px] absolute bottom-0 right-3 bg-white">
                    <h2 className="text-xl">ঘড়ির ডিজাইনে ভালো উদ্দেশ্য অন্তর্ভুক্ত করুন</h2>
                    <h2 className="text-xl">বিশ্বাস, আশা, ভালবাসা এবং সুখ নিয়ে আসে</h2>
                    <h2 className="text-xl">জীবনে আপনার ভাগ্য দ্বিগুণ করুন</h2>
                </div>
                <Image
                    className="absolute rounded-full right-7 bottom-36 animate-upDown"
                    src={img2}
                    alt=""
                    width={117}
                    height={117}
                />
            </div>
            <div className="p-5 flex items-center gap-3">
                <h2 className="text-[22px] text-right m-3">
                    অত্যন্ত জল প্রতিরোধী, জল বা বৃষ্টিতে পড়ার বিষয়ে কোন উদ্বেগ নেই
                </h2>
                {/* Video Section */}
                <video
                    className="h-[195px] w-[155px] border border-black"
                    src="assets/video.mp4"
                    controls
                    autoPlay
                ></video>
            </div>
        </>
    );
};

export default Luxurious;
