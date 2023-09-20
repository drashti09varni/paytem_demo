import React from "react";
import App_d_1 from '../Images/APP_2/App_d_2.webp';
import rating_symbol from '../Images/rating_symbol.webp';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import ad_1 from '../Images/APP_2/ad_1.webp';
import ad_2 from '../Images/APP_2/ad_2.webp';
import ad_3 from '../Images/APP_2/ad_3.webp';
import Slider from 'react-slick';
import { HiArrowSmRight } from 'react-icons/hi';
import more_app_1 from '../Images/APP_1/more_app_1.png';
import more_app_2 from '../Images/APP_1/more_app_2.png';
import more_app_3 from '../Images/APP_1/more_app_3.png';
import more_app_4 from '../Images/APP_1/more_app_4.png';
import more_app_5 from '../Images/APP_1/more_app_5.png';
import more_app_6 from '../Images/APP_1/more_app_6.png';


export default function App2() {
    const [showModal, setShowModal] = React.useState(false);

   
    return <>
        <div>
            <div class="min-w-screen min-h-screen flex items-center justify-center py-5">
                <div class=" text-gray-800 rounded-xl  relative overflow-x-auto w-[424px] overflow-x-hidden"  >
                    <div className="">
                        <div className="flex m-5 mt-8">
                            <img src={App_d_1} alt="Logo" className="h-[80px] w-[80px] rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
                            <div className="ml-9">
                                <h1 className="font-roboto text-[25px] font-sans font-[500] leading-7">
                                    OkRupee : Earning App
                                </h1>
                                <p className="mt-2 text-[#01875f] font-[550] text-[19px]"> Finance Bites LLC</p>
                                <p className="text-slate-500"> In-app purchase </p>

                            </div>
                        </div>
                        <div className="flex space-x-4 m-5">
                            <div className="">
                                <p className="text-center font-[500]">4.5  &#9733;</p>
                                <p className="text-[14px] text-slate-800">10.2K reviews</p>

                            </div>
                            <p className="mt-2 text-[20px] text-[#e6e6e6]">|</p>
                            <div>
                                <p className="text-center font-[500]">100K+</p>
                                <p className="text-[14px] text-slate-800">Downloads</p>

                            </div>
                            <p className="mt-2 text-[20px] text-[#e6e6e6]">|</p>
                            <div>
                                <img src={rating_symbol} className="mx-auto mt-1" />
                                <p className="text-[14px] mt-1 flex text-slate-800">Rated for 3+ <HiOutlineInformationCircle className="mt-1 ml-1" /></p>
                            </div>
                        </div>
                        <center className="mt-10">
                            <button className="mx-auto border-2 border-[#01875f] rounded-xl px-40 py-1.5 text-white bg-[#01875f]"> Install </button>
                        </center>
                    </div>
               
                <div class="container m-5 rounded-xl">
                    <img src={ad_1} alt="image" className="h-[250px] w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl" />
                    <img src={ad_2} alt="image" className="h-[250px] w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl" />
                    <img src={ad_3} alt="image" className="h-[250px] w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl" />
                </div>
                <div className="flex m-5 text-xl font-[500]">
                    <h1>About this game</h1>
                    <HiArrowSmRight size={30} className="ml-auto" onClick={() => setShowModal(true)} />
                </div>
                <div className="m-5">
                    <p className="text-[15px] text-slate-800">Introducing the revolutionary "OkRupee : Earning App," a cutting-edge mobile
                        application designed to supercharge your earning potential like never before. With its innovative features
                        and user-friendly interface, this app is poised to transform the way you make money and take your
                        financial goals to new heights. </p>
                    <p className="mt-4 text-black"> Updated on </p>
                    <p className="text-slate-500">Jul 5, 2023</p>
                </div>
                <div className="m-5">
                    <h1 className="text-xl font-[500]"> More By Finance Bites LLC </h1>
                </div>
                <div >
                    <div className="grid grid-cols-2 m-4 mb-14">
                        <div className="flex">
                            <img src={more_app_1} className="w-[55px] h-[55px] rounded-xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]" />
                            <div className="text-[15px] ml-2">
                                <p>OkRupee : Earn </p>
                                <p> Finance Bites LLC </p>
                                <p> 4.5  &#9733;</p>
                            </div>
                        </div>
                        <div className="flex">
                            <img src={more_app_2} className="w-[55px] h-[55px] rounded-xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]" />
                            <div className="text-[15px] ml-2">
                                <p>EasyRupee : Earn</p>
                                <p> Finance Bites LLC </p>
                                <p> 4.2  &#9733;</p>
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <img src={more_app_3} className="w-[55px] h-[55px] rounded-xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]" />
                            <div className="text-[15px] ml-2">
                                <p>Visit For Earn : M  </p>
                                <p> Finance Bites LLC </p>
                                <p> 4.3  &#9733;</p>
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <img src={more_app_4} className="w-[55px] h-[55px] rounded-xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]" />
                            <div className="text-[15px] ml-2">
                                <p> spin For Earn - E </p>
                                <p> Finance Bites LLC </p>
                                <p> 4.5  &#9733;</p>
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <img src={more_app_5} className="w-[55px] h-[55px] rounded-xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]" />
                            <div className="text-[15px] ml-2">
                                <p>Auto Call Record</p>
                                <p> Finance Bites LLC </p>
                                <p> 4.3  &#9733;</p>
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <img src={more_app_6} className="w-[55px] h-[55px] rounded-xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]" />
                            <div className="text-[15px] ml-2">
                                <p> Task Cash : Cash</p>
                                <p> Finance Bites LLC </p>
                                <p> 4.4  &#9733;</p>
                            </div>
                        </div>
                    </div>
                </div> </div>


                {showModal ? (
                    <>
                        <div
                            className="justify-center items-center flex  fixed inset-0 z-50  w-[424px] mx-auto"
                        >
                            <div className="relative h-[800px] m-3 mt-10 ">

                                <div className=" rounded-lg shadow-lg relative flex flex-col w-full h-full bg-white ">

                                    <div className="flex items-start justify-between p-4 rounded-t shadow-lg">
                                        <div className="flex ">
                                            <img src={App_d_1} alt="Logo" className="h-[60px] w-[60px] rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
                                            <div className="ml-9">
                                                <h1 className="font-roboto text-[22px] font-sans font-[500] leading-7">
                                                    OkRupee : Earning...
                                                </h1>
                                                <p className="text-[17px]"> About this game</p>
                                            </div>
                                        </div>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black float-right text-5xl mt-[-15px] "
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="bg-transparent text-black opacity-100 h-12 w-12 text-4xl block">
                                                ×
                                            </span>
                                        </button>
                                    </div>

                                    <div className=" px-6  overflow-y-auto ">
                                        <p className=" text-slate-500 text-[16px] leading-relaxed mt-9">
                                            Introducing the revolutionary "OkRupee : Earning App," a cutting-edge mobile application designed to
                                            supercharge your earning potential like never before. With its innovative features and user-friendly
                                            interface, this app is poised to transform the way you make money and take your financial goals to new heights.
                                            <br />
                                            <br />

                                            Imagine a world where every minute you spend on your smartphone can translate into tangible rewards. With the OkRupee : Earning App, this dream becomes a reality. Whether you're browsing social media, playing games, or simply engaging with your favorite apps, you can now earn real cash, gift cards, and exciting prizes effortlessly.

                                            <br /><br />
                                            Unlock a multitude of earning opportunities through various interactive activities provided by the app. Complete fun and engaging surveys tailored to your interests, share your opinions through insightful reviews, or participate in captivating games and challenges that will keep you hooked. The more time you spend on the app, the more you'll earn, multiplying your income potential like never before.
                                            <br />
                                            <br />
                                            The OkRupee : Earning App boasts a wide range of redemption options, allowing you to convert your hard-earned points into tangible rewards. Redeem them for PayPal cash, Amazon gift cards, popular e-commerce vouchers, or even donate to your favorite charities. The choice is yours, and the possibilities are endless.
                                            <br /><br />
                                            Your journey with the OkRupee : Earning App doesn't end with earning alone. Connect with a vibrant community of like-minded individuals, share your success stories, and exchange valuable tips and tricks to maximize your earnings. Engage in friendly competitions and leaderboards to challenge yourself and strive for the top spot.
                                            <br />
                                            <br />
                                            Worried about the security of your personal information and earnings? Rest assured, the OkRupee : Earning App employs state-of-the-art security measures, ensuring your data is protected at all times. Your privacy and security are of paramount importance, so you can focus on earning without any worries.
                                            <br />
                                            <br />
                                            Don't let your valuable time on your smartphone go to waste any longer. Harness the power of the OkRupee : Earning App and turn your screen time into a lucrative venture. Experience a whole new level of financial freedom and make every moment count. Download the OkRupee : Earning App now and unlock the unlimited potential of your smartphone!

                                        </p>
                                        <div className="grid grid-cols-2 mt-9 text-slate-500">
                                            <div className="my-3">
                                                <p className="font-[500] text-[#000]">Version</p>
                                                <p >1.9</p>
                                            </div>
                                            <div className="my-3">
                                                <p className="font-[500] text-[#000]">Updated on</p>
                                                <p>Jun 21, 2023</p>
                                            </div>
                                            <div className="my-3">
                                                <p className="font-[500] text-[#000]">Requires Android</p>
                                                <p>5.0 and up</p>
                                            </div>
                                            <div className="my-3">
                                                <p className="font-[500] text-[#000]">Downloads</p>
                                                <p>100,000+ downloads</p>
                                            </div>
                                            <div className="my-3">
                                                <p className="font-[500] text-[#000]">In-app purchase</p>
                                                <p>₹20.00 - ₹120.00 per item</p>
                                            </div>
                                            <div className="my-3">
                                                <p className="font-[500] text-[#000]">Content rating</p>
                                                <p>Rated for 3+ <span>Learn more</span></p>
                                            </div>
                                            <div className="my-3">
                                                <p className="font-[500] text-[#000]"> Permissions </p>
                                                <p>View details</p>
                                            </div>
                                            <div className="my-3">
                                                <p className="font-[500] text-[#000]">Released on</p>
                                                <p>Feb 13, 2023</p>
                                            </div>
                                            <div className="my-3">
                                                <p className="font-[500] text-[#000]">Offered by</p>
                                                <p>Finance Bites LLC</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="my-7 font-[500] "> Compatibility for your active devices. </p>
                                            <p className="my-5 font-[500] "> You need to login to view the compatible devices. </p>
                                            <p className="my-5 text-slate-500"> * How this app works on your devices</p>
                                            <p className="mb-10 text-slate-500">This section shows you whether this app works on your devices. You’ll
                                                only see devices that are linked to your Google Account and that have
                                                been active in the last 30 days.
                                            </p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </div>
        </div>
    </>;
}