import Image from "next/image";
import gift from "../../assets/giftBox.png";
import info from "../../assets/info.jpg";
import off from "../../assets/off.png";
import img from "../../assets/watch2.jpg";

const LuckyGift = () => {
    return (
        <>
            <div className="relative overflow-hidden">
                <Image alt="" src={img} className="w-full" />
                <div className="absolute w-full top-0 left-0 ring-0 text-white py-2">
                    <h2 className="text-[23px] text-center">মেবিন কোয়ার্টজ ঘড়ি</h2>
                    <h3 className="text-xl text-center">ভাগ্যবান এবং অর্থপূর্ণ প্রেম উপহার</h3>
                    <div className="flex justify-center items-center gap-2 -ml-8 -mt-6">
                        <Image src={off} alt="" width={192} height={192} />
                        <div className="-ml-8">
                            <div className="flex justify-center items-center gap-2 border-2 border-white px-2">
                                <h3 className="text-[23px]"><del>5,499Tk</del></h3>
                                <span
                                    style={{
                                        clipPath: "polygon(0 0, 0% 100%, 100% 50%)",
                                        display: "inline-block",
                                        width: "20px",
                                        height: "35px",
                                        backgroundColor: "#555",
                                        borderLeft: "2px solid #fff"
                                    }}
                                ></span>
                                <h2 className="text-[30px] font-bold">2,299TK</h2>
                            </div>
                            <h2 className="text-2xl">ONLY TODAY</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="-translate-y-3">
                <Image src={info} alt="" />
            </div>
            <div className="relative overflow-hidden">
                <h2 className="bg-[#edf0ff] text-[#008906] text-[23px] max-w-[360px] p-3 pr-10 "><span className=" font-bold">মহিলাদের জন্য দুর্দান্ত উপহার</span> (দাদি, মা, বান্ধবী, জন্মদিনের উপহার, ...)</h2>
                <div className="absolute -top-[77px] -right-14">
                    <Image alt="" src={gift} width={270} />
                </div>
            </div>
        </>
    );
};

export default LuckyGift;