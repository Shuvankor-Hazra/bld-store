import Image from 'next/image';
import newYear from "../../assets/newYear.png";
import watch from "../../assets/watch4.png";
import CountdownTimer2 from '../CountdownTimer2/CountdownTimer2';

const FormArea = () => {
    return (
        <div style={{ background: "linear-gradient(rgb(217, 217, 217) 0%, rgb(255, 255, 255) 100%)" }}>
            <div className='mx-3 py-2 relative'>
                <div className='flex items-center gap-6'
                    style={{ background: "linear-gradient(rgb(115, 2, 0) 0%, rgb(255, 255, 255) 100%)" }}>
                    <Image src={newYear} alt='' width={125} height={135} />
                    <div className='text-white text-center space-y-1'>
                        <h2 className='text-4xl'><del>5,499Tk</del></h2>
                        <span className='text-xs'>Only</span>
                        <h2 className='text-[#008906] text-[32px] font-bold border-2 border-[#008906] px-2 bg-[#eeff49] shadow-lg'>2,299Tk</h2>
                    </div>
                    <Image className='absolute -right-4 -top-[60px] -bottom-10' src={watch} alt='' width={145} height={213} />
                </div>
            </div>
            <div className='text-center bg-[#ffc107] mx-3 rounded-md pb-8'>
                <h2 className='text-[25px] font-bold'>এখানে কিনতে নিবন্ধন করুন</h2>
                <p className='text-[14px] font-bold text-white'>পরে প্রচার শেষ হওয়ার কথা</p>

                {/* Countdown */}
                <CountdownTimer2 targetDate={"2025-01-31T23:59:59"} />

                {/* Form */}
                <div>
                    <input
                        type="text"
                        placeholder="Full name"
                        className="border-none outline-none rounded-lg w-[90%] px-3 py-2 mb-3 placeholder-gray-600 text-sm"
                    />
                    <input
                        type="text"
                        placeholder="Phone number"
                        className="border-none outline-none rounded-lg w-[90%] px-3 py-2 mb-3 placeholder-gray-600 text-sm"
                    />
                    <input
                        type="text"
                        placeholder="Specific address"
                        className="border-none outline-none rounded-lg w-[90%] px-3 py-2 mb-3 placeholder-gray-600 text-sm"
                    />
                </div>

                <h2 className='text-[15px] font-bold mx-3'>অর্ডার করার জন্য সমস্ত তথ্য পূরণ করুন, যদি আপনার কোন প্রশ্ন থাকে, আমাদের ফ্যানপেজের মাধ্যমে আমাদের সাথে যোগাযোগ করুন!!</h2>

                {/* Checkbox */}
                <div className='bg-white px-3 py-1 rounded-[9px] m-3 space-y-2'>
                    <label className="flex items-center space-x-3">
                        <input type="checkbox"
                            className="form-checkbox text-blue-600 rounded" />
                        <span className='text-[14px]'>Buy 1 watch 2,299Tk + 100Tk Fee Shipping</span>
                    </label>
                    <label className="flex items-center space-x-3">
                        <input type="checkbox"
                            className="form-checkbox text-blue-600 rounded" />
                        <span className='text-[14px]'>Buy 2 watch 3,899Tk + Free Shipping</span>
                    </label>
                    <label className="flex items-center space-x-3">
                        <input type="checkbox"
                            className="form-checkbox text-blue-600 rounded" />
                        <span className='text-[14px]'>Buy 3 watch Get 1 Free 5,999Tk + Free Shipping</span>
                    </label>
                </div>

                {/* Btn */}
                <button className="bg-black text-[#fda354] border-2 border-[#E5E7EB] text-xl font-bold py-2 px-6 rounded-[14px] uppercase">
                    Complete Registration
                </button>
            </div>
        </div>
    );
};

export default FormArea;