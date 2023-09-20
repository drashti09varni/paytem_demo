import React from "react";
import App_d_1 from '../Images/APP_6/App_d_6.png';
import rating_symbol from '../Images/rating_symbol.webp';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import ad_1 from '../Images/APP_6/ad_1.jpg';
import ad_2 from '../Images/APP_6/ad_2.jpg';
import ad_3 from '../Images/APP_6/ad_3.jpg';
import ad_4 from '../Images/APP_6/ad_4.jpg';

import Slider from 'react-slick';
import { HiArrowSmRight } from 'react-icons/hi';
import more_app_1 from '../Images/APP_1/more_app_1.png';
import more_app_2 from '../Images/APP_1/more_app_2.png';
import more_app_3 from '../Images/APP_1/more_app_3.png';
import more_app_4 from '../Images/APP_1/more_app_4.png';
import more_app_5 from '../Images/APP_1/more_app_5.png';
import more_app_6 from '../Images/APP_1/more_app_6.png';


export default function App6() {
    const [showModal, setShowModal] = React.useState(false);
    return <>
        <div>
            <div class="min-w-screen min-h-screen flex items-center justify-center py-5">
                <div class=" text-gray-800 rounded-xl  relative overflow-x-auto w-[424px] overflow-x-hidden"  >
                    <div className="">
                        <div className="flex m-5 mt-8">
                            <img src={App_d_1} alt="Logo" className="h-[80px] w-[80px] rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
                            <div className="ml-9">
                                <h1 className="font-roboto text-[22px] mt-4 font-sans font-[500] leading-7">
                                    Visit For Earn : Make Money
                                </h1>
                                <p className="mt-0 text-[#01875f] font-[550] text-[19px]"> Finance Bites LLC</p>


                            </div>
                        </div>
                        <div className="flex space-x-4 m-5">
                            <div className="">
                                <p className="text-center font-[500]">4.3  &#9733;</p>
                                <p className="text-[14px] text-slate-800">254 reviews</p>

                            </div>
                            <p className="mt-2 text-[20px] text-[#e6e6e6]">|</p>
                            <div>
                                <p className="text-center font-[500]">50K+</p>
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
                    <div class="container m-5 rounded-xl mt-14">
                        <img src={ad_1} alt="image" className="h-[240px] object-cover  w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl" />
                        <img src={ad_2} alt="image" className="h-[240px] w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl" />
                        <img src={ad_3} alt="image" className="object-cover h-[240px] w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl" />
                        <img src={ad_4} alt="image" className="object-cover h-[240px] w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl" />

                    </div>
                    <div className="flex m-5 text-xl font-[500]">
                        <h1>About this App</h1>
                        <HiArrowSmRight size={30} className="ml-auto" onClick={() => setShowModal(true)} />
                    </div>
                    <div className="m-5">
                        <p className="text-[15px] text-slate-800">
                            <p>Earn Money is a very difficult task. If you find some new source of
                                income, it's Making Money Online, so this Money Making App is helping
                                you to Making Money Online. This Visit For Earn: Make Money Online is
                                Free Money Making App. With the help of this Free Money... <br /><br /></p>
                        </p>

                        <p className="mt-4 text-black"> Updated on </p>
                        <p className="text-slate-500"> May 23,2023 </p>
                    </div>
                    <div className="m-5 mt-20">
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
                </div>
            </div></div>

        {showModal ? (
            <>
                <div
                    className="justify-center items-center flex  fixed inset-0 z-50  w-[424px] mx-auto "
                >
                    <div className="relative h-[800px] m-3 mt-10 ">

                        <div className=" rounded-lg shadow-lg relative flex flex-col w-full h-full bg-white ">

                            <div className="flex items-start justify-between p-4 rounded-t shadow-lg">
                                <div className="flex ">
                                    <img src={App_d_1} alt="Logo" className="h-[60px] w-[60px] rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
                                    <div className="ml-9">
                                        <h1 className="font-roboto text-[21px] font-sans font-[500] leading-7">
                                            Visit for Earn : Mak...
                                        </h1>
                                        <p className="text-[17px]"> About this app</p>
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

                                <div className=" text-slate-500 text-[16px] leading-6 mt-9">

                                    <p> Earn Money is a very difficult task. If you find some new source of income, it's  Making Money Online  , so this  Money Making App   is helping you to  Making Money Online  . This  Visit For Earn: Make Money Online   is  Free Money Making App  . With the help of this  Free Money Earning App  , you can make  Free Money Online  . This  Free Money Earning App   provides various ways to  Earn Money Online  . With the help of these various ways to  Earn Money Online  , users can  Make Free Money Online  . Its user-friendly interface &amp; flexible working hours make it a great option for anyone looking to make some  Free Online Money  . <br /></p>
                                    <br /><br />
                                    <h2>Feathers of this  Visit For Earn: Make Money Online  </h2>
                                    <br />
                                    <br />
                                    <ul className="list-disc mx-5 listUlLi">
                                        <li>This  Make Money Earn Cash App   have user-friendly interface.</li>
                                        <li>It is very simple to use this  Free Money Earning App  .</li>
                                        <li>It is very easy to install this  Make Money Free Cash App  .</li>
                                        <li>This  Money Making App   has a very advanced user interface.</li>
                                        <li>This is,  The Earning App   can be used on any Android phone.</li>
                                        <li>All you need to do is download this  Make Money Earn Cash App  , create an account, &amp; start completing tasks to earn money.</li>
                                        <li>This  Free Money Earning App   has a user-friendly interface that makes it easy to navigate &amp; find tasks to complete.</li>
                                        <li>This  Make Money Free Cash App   provides users with a seamless experience &amp; allows them to easily navigate through the app's various features.</li>
                                        <li> Money Making App   is run very smooth on any Android phone.</li>
                                        <li>Earn money working from home with the help of this  Make Money, Earn Cash App  .</li>
                                    </ul>
                                    <h2>Benefits of  Visit For Earn: Make Money Online  .</h2>
                                    <ul className="list-disc mx-5 listUlLi">
                                        <li>It is very simple to  Making Money Online   With the help of this  Make Money, Earn Cash App  .</li>
                                        <li>This  Free Money Earning App   is free for anyone.</li>
                                        <li>With the help of this  Make Money Free Cash App  , you can make money by sitting home.</li>
                                        <li>With the help of this advanced user interface, this  Money Making App   give very smooth experience.</li>
                                        <li>In this  Making Money Online App  , you can easily earn money by completing simple tasks.</li>
                                        <li>Download this  Make Money Earn Cash App  , create an account, &amp; start completing tasks to  Earn Money   on this  Make Money Earn Cash App  .</li>
                                        <li> Earn Money   on your free time with the help of this  Make Money, Earn Cash App  .</li>
                                        <li>Make some easy pocket money online with the help of this  Make Money Earn Cash App  .</li>

                                        <li>For individuals who wish to  Making Money Online   without committing to a full-time or part-time job, this  Free Money Earning App   is a fantastic choice.</li>

                                        <li>This  Make Money Free Cash App   is available for every Android phone.</li>
                                        <li>It's simple to navigate &amp; find activities to accomplish this  Free Money Earning App   because of its user-friendly layout.</li>
                                        <li>Users of this  Make Money Free Cash App   enjoy a fluid user experience &amp; have no trouble navigating the app's many features.</li>

                                    </ul>
                                    <br /><br /><br />
                                    <h2>This  Visit For Earn: Make Money Online   is safe?</h2>
                                    <br />
                                    <p><br />Yes, this  Make Money Earn Cash App   is safe, because this  Free Money Earning App   is never stealing their user's data. This  Make Money Free Cash App   is safe because of this reason. Additionally, this  Money Making App   has received positive reviews &amp; high ratings from its users, indicating that it is a trustworthy platform for earning money.<br /></p>
                                    <br />
                                    <br />
                                    <p> Install this  Free Money Earning App   now &amp;  Making Money Online   in four free time.</p>
                                    <br />
                                    <p> Don't forget to give reviews...</p>

                                </div>

                                <div className="grid grid-cols-2 mt-9 text-slate-500">
                                    <div className="my-3">
                                        <p className="font-[500] text-[#000]">Version</p>
                                        <p >1.6</p>
                                    </div>
                                    <div className="my-3">
                                        <p className="font-[500] text-[#000]">Updated on</p>
                                        <p>Jun 2, 2023 </p>
                                    </div>
                                    <div className="my-3">
                                        <p className="font-[500] text-[#000]">Requires Android</p>
                                        <p>5.0 and up</p>
                                    </div>
                                    <div className="my-3">
                                        <p className="font-[500] text-[#000]">Downloads</p>
                                        <p>50,000+ downloads</p>
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
                                        <p>Apr 17,2023</p>
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

    </>;
}