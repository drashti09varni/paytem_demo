import React from "react";
import App_d_1 from '../Images/APP_1/App_d_1.webp';
import rating_symbol from '../Images/rating_symbol.webp';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import ad_1 from '../Images/APP_1/ad_1.png';
import ad_2 from '../Images/APP_1/ad_2.jpg';
import ad_3 from '../Images/APP_1/ad_3.png';
import Slider from 'react-slick';
import { HiArrowSmRight } from 'react-icons/hi';
import more_app_1 from '../Images/APP_1/more_app_1.png';
import more_app_2 from '../Images/APP_1/more_app_2.png';
import more_app_3 from '../Images/APP_1/more_app_3.png';
import more_app_4 from '../Images/APP_1/more_app_4.png';
import more_app_5 from '../Images/APP_1/more_app_5.png';
import more_app_6 from '../Images/APP_1/more_app_6.png';


export default function App1() {
    const [showModal, setShowModal] = React.useState(false);

   
    return <>
        <div>
            <div class="min-w-screen min-h-screen flex items-center justify-center py-5">
                <div class=" text-gray-800 rounded-xl  relative overflow-x-auto w-[424px] overflow-x-hidden"  >
                    <div class="">
                        <div className="flex m-5 mt-8">
                            <img src={App_d_1} alt="Logo" className="h-[80px] w-[80px] rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
                            <div className="ml-9">
                                <h1 className="font-roboto text-[25px] font-sans font-[500] leading-7">GoRupee : Easy Earning App</h1>
                                <p className="mt-2 text-[#01875f] font-[550] text-[19px]"> Finance Bites LLC</p>
                            </div>
                        </div>
                        <div className="flex space-x-4 m-5">
                            <div className="">
                                <p className="text-center">4.3  &#9733;</p>
                                <p className="text-[14px]">14.7K reviews</p>

                            </div>
                            <p className="mt-2 text-[20px] text-[#e6e6e6]">|</p>
                            <div>
                                <p className="text-center">100K+</p>
                                <p className="text-[14px]">Downloads</p>

                            </div>
                            <p className="mt-2 text-[20px] text-[#e6e6e6]">|</p>
                            <div>
                                <img src={rating_symbol} className="mx-auto mt-1" />
                                <p className="text-[14px] mt-1 flex">Rated for 3+ <HiOutlineInformationCircle className="mt-1 ml-1" /></p>
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
                        <p className="text-[15px]">Are you ready to turn your free time into a rewarding adventure? Look no further than GoRupee,
                            the ultimate Easy Earning App designed to transform the way you make money from the comfort of
                            your own device. Whether you're looking to earn a little extra cash or seeking a sustainable income stream,
                            GoRupee offers... </p>
                        <p className="mt-4"> Updated on </p>
                        <p>Jul 5, 2023</p>
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
                    </div>


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
                                                    <h1 className="font-roboto text-[25px] font-sans font-[500] leading-7">GoRupee : Easy...</h1>
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
                                                Are you ready to turn your free time into a rewarding adventure? Look no further than GoRupee,
                                                the ultimate Easy Earning App designed to transform the way you make money from the comfort of
                                                your own device. Whether you're looking to earn a little extra cash or seeking a sustainable income
                                                stream, GoRupee offers a user-friendly and engaging platform that caters to your financial aspirations.
                                                <br />
                                                <br />
                                                <b>Seamless Sign-Up:</b>
                                                <br />
                                                Getting started with GoRupee is a breeze. With a quick and straightforward registration process,
                                                you'll be up and running in no time. All you need is a smartphone and an
                                                internet connection to embark on your journey towards effortless earnings.

                                                <br /><br />
                                                <b>Diverse Earning Opportunities:</b>
                                                <br />
                                                GoRupee opens the doors to a world of earning possibilities. From taking surveys and participating in market research to completing simple tasks and micro-jobs, there's something for everyone. Whether you're waiting for your morning coffee or have a few minutes between meetings, you can seize these moments to boost your bank balance.
                                                <br />
                                                <br />
                                                <b>Engaging Mini-Games:</b>
                                                <br />
                                                Who said earning can't be fun? GoRupee introduces a range of entertaining mini-games that not only keep you engaged but also offer exciting rewards. Whether you're matching gems, solving puzzles, or testing your memory, each game you conquer brings you closer to your financial goals.
                                                <br /><br />
                                                <b>Flexible Payout Options:</b>
                                                <br />
                                                When it comes to getting your hard-earned rewards, GoRupee offers flexible payout options that cater to your preferences. From direct bank transfers and PayPal payments to gift cards and vouchers from your favorite brands, the choice is yours.
                                                <br />
                                                <br />
                                                <b>User-Friendly Interface:</b>
                                                <br />
                                                Navigating GoRupee is a breeze, thanks to its intuitive and user-friendly interface. Whether you're a tech-savvy user or just starting your digital journey, you'll find the app's layout and features easy to understand and use.
                                                <br />
                                                <br />
                                                <b>Secure and Trustworthy:</b>
                                                <br />
                                                Your privacy and security are our top priorities. GoRupee employs state-of-the-art encryption and security measures to ensure that your personal information and earnings are safe and protected.
                                                <br />
                                                <br />
                                                <b>24/7 Customer Support:</b>
                                                <br />
                                                Questions or concerns? Our dedicated customer support team is available around the clock to assist you. Whether you need help with using the app, understanding the earning opportunities, or resolving any issues, we're here to provide the support you need.
                                                <br />
                                                <br />
                                                <b>Community and Rewards:</b>
                                                <br />
                                                Join a vibrant community of GoRupee users who share tips, success stories, and insights on maximizing earnings. Additionally, our loyalty program offers exciting rewards and bonuses as you progress on your earning journey.
                                                <br /><br />
                                                Say goodbye to idle moments and hello to a world of effortless earnings with GoRupee. Download the app today and start your exciting venture towards financial empowerment. Remember, every moment counts, and with GoRupee, every moment can also earn!
                                                <br /><br />[Download Now Button]
                                                <br /><br />
                                                Disclaimer: GoRupee is an app that offers earning opportunities through various activities. Earnings are not guaranteed and may vary based on user engagement and effort. Always read and understand the app's terms of use and privacy policy before use.
                                            </p>
                                            <div className="grid grid-cols-2 mt-9 text-slate-500">
                                                <div className="my-3">
                                                    <p className="font-[500] text-[#000]">Version</p>
                                                    <p >1.3</p>
                                                </div>
                                                <div className="my-3">
                                                    <p className="font-[500] text-[#000]">Updated on</p>
                                                    <p>Jul 5, 2023</p>
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
                                                    <p className="font-[500] text-[#000]">Content rating</p>
                                                    <p>Rated for 3+ Learn more</p>
                                                </div>
                                                <div className="my-3">
                                                    <p className="font-[500] text-[#000]">Permissions</p>
                                                    <p>View details</p>
                                                </div>
                                                <div className="my-3">
                                                    <p className="font-[500] text-[#000]">Released on</p>
                                                    <p>Mar 10, 2023</p>
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
        </div>
    </>;
}