import Image from 'next/image';
import bgImg from '../../assets/banner.jpg';
import OfferCount from '../OfferCount/OfferCount';

const Banner = () => {
    return (
        <>
            <div className="w-full">
                <Image
                    alt="Banner image"
                    src={bgImg}
                />
            </div>
            <OfferCount />
        </>
    );
};

export default Banner;
