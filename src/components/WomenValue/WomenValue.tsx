import Image from "next/image";
import stone from "../../assets/stone.jpg";
import img1 from "../../assets/women1.jpg";
import img2 from "../../assets/women2.jpg";

const WomenValue = () => {
    return (
        <>
            <h2 className="text-[22px] text-center my-3">
                নারীদের মূল্য বৃদ্ধির মূলমন্ত্রের সাথে, এই কোয়ার্টজ ঘড়িটি সুইজারল্যান্ডে তৈরি করা হয়েছে, ঘড়িটি কোয়ার্টজ দিয়ে তৈরি এবং প্রতিটি বিশদ বিবরণে সূক্ষ্ম। এটি বিলাসিতা, ফ্যাশন এবং অনেক ফেং শুই সুবিধা নিয়ে আসে
            </h2>
            <div className="relative">
                <Image src={img1} alt="Watch" layout="responsive" />
                <div className="absolute bottom-0 left-0 w-full">
                    <div className="bg-[#2b502b85] p-3 text-white">
                        <h2 className="text-[19px] font-bold">
                            সুইজারল্যান্ডে তৈরি <br />
                            স্ট্র্যাপের ঘড়ির মুখ এবং পাথরগুলি কোয়ার্টজ থেকে 100% হস্তনির্মিত
                        </h2>
                    </div>
                </div>
                <div className="absolute bottom-[70px] right-8">
                    <Image src={stone} alt="Watch" width={190} height={130} className="rounded-full border-2 border-white" />
                </div>
            </div>
            <div>
                <Image src={img2} alt="" />
                <h2 className="text-lg m-3">কোয়ার্টজ একটি মূল্যবান পাথর যা লক্ষ লক্ষ বছর ধরে ভূগর্ভে বিদ্যমান। এবং এটি প্রায় 300,000 বছর আগে পাওয়া গেছে। কোয়ার্টজ পাথরে প্রচুর পরিমাণে শক্তি থাকে, তাই ফেং শুইতে এর অনেক অর্থ রয়েছে। জীবনে অনেক সুযোগ এবং ভাগ্য নিয়ে আসে। শান্তি, সম্পদ এবং সুখ আনতে একটি তাবিজ হিসাবে ব্যবহৃত
                </h2>
            </div>
        </>
    );
};

export default WomenValue;
