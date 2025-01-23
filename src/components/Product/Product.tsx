

const styles = "relative pl-6 before:content-[''] before:absolute before:top-2 before:left-0  before:w-3 before:h-3 before:bg-[#008906] before:[clip-path:polygon(50%_0,100%_25%,50%_100%,0_25%)] text-lg"
const Product = () => {
    return (
        <div className='bg-[#edf0ff]'>
            <h2 className='text-[34px] font-bold text-center text-[#008906]'>পণ্য তথ্য</h2>
            <div className="text-with-polygon p-4 pb-0">
                <p className={styles} >
                    উপাদান: অত্যন্ত উচ্চ মানের কোয়ার্টজ পাথর
                </p>
                <p className={styles}>
                    একটি বিলাসবহুল এবং মার্জিত মহিলার ক্যারিশমা আছে
                </p>
                <p className={styles}>
                    জেনুইন 1 বছরের ওয়ারেন্টি
                </p>
                <p className={styles}>
                    মূল: সুইজারল্যান্ড
                </p>
                <p className={styles}>
                    পণ্য সেট অন্তর্ভুক্ত: ঘড়ি, বাক্স
                </p>
            </div>
        </div >
    );
};

export default Product;