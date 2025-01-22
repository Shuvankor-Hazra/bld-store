import Image from "next/image";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import watchImg from '../../assets/watch.png';

const OfferCount = () => {
    return (
        <div className="px-3 min-h-[86px] relative"
            style={{
                background: 'linear-gradient(rgb(142, 14, 0) 0%, rgb(31, 28, 24) 100%)',
            }}>
            <h2 className="text-xl font-bold text-[#eeff49]">50% ছাড় - প্রচার শীঘ্রই শেষ হচ্ছে ৷</h2>
            <div className="flex items-center gap-6">
                <CountdownTimer targetDate={"2025-01-31T23:59:59"} />
                <button className="bg-[#eeff49] border-2 border-[#fff] text-[19px] font-bold py-1 px-5 rounded animate-zoom-in-out mt-2">
                    BUY NOW
                </button>
                <div className="absolute right-3 top-0">
                    <Image
                        width={59}
                        height={132}
                        alt="Banner image"
                        src={watchImg}
                    />
                </div>
            </div>
        </div>
    );
};

export default OfferCount;