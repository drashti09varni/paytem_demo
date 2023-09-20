import React from "react";
import App_d_1 from '../Images/APP_7/App_d_6.webp';
import rating_symbol from '../Images/rating_symbol.webp';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import ad_1 from '../Images/APP_7/ad_1.webp';
import ad_2 from '../Images/APP_7/ad_2.webp';
import ad_3 from '../Images/APP_7/ad_3.webp';
import ad_4 from '../Images/APP_7/ad_4.webp';

import Slider from 'react-slick';
import { HiArrowSmRight } from 'react-icons/hi';
import more_app_1 from '../Images/APP_1/more_app_1.png';
import more_app_2 from '../Images/APP_1/more_app_2.png';
import more_app_3 from '../Images/APP_1/more_app_3.png';
import more_app_4 from '../Images/APP_1/more_app_4.png';
import more_app_5 from '../Images/APP_1/more_app_5.png';
import more_app_6 from '../Images/APP_1/more_app_6.png';


export default function App7() {
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
                                    Task Cash : Cash Earning App
                                </h1>
                                <p className="mt-0 text-[#01875f] font-[550] text-[19px]"> Finance Bites LLC</p>
                                <p className="text-slate-500"> In-app purchase </p>

                            </div>
                        </div>
                        <div className="flex space-x-4 m-5">
                            <div className="">
                                <p className="text-center font-[500]">4.4  &#9733;</p>
                                <p className="text-[14px] text-slate-800">944 reviews</p>

                            </div>
                            <p className="mt-2 text-[20px] text-[#e6e6e6]">|</p>
                            <div>
                                <p className="text-center font-[500]">10K+</p>
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
                        <img src={ad_1} alt="image" className="h-[240px] object-cover w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl" />
                        <img src={ad_2} alt="image" className="h-[240px] w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl" />
                        <img src={ad_3} alt="image" className="object-cover h-[240px] w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl" />
                        <img src={ad_4} alt="image" className="object-cover h-[240px] w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl" />

                    </div>
                    <div className="flex m-5 text-xl font-[500]">
                        <h1>About this App</h1>
                        <HiArrowSmRight size={30} className="ml-auto" onClick={() => setShowModal(true)} />
                    </div>
                    <div>
    <p></p>

                    </div>
                    <div className="m-5">
                        <p className="text-[15px] text-slate-800">
                            <p>Task Cash : Cash Earning App. <br /><br />
                            Introducing Task Cash, the revolutionary cash earning app that allows you to turn 
                            your spare time into real money effortlessly. With Task Cash, you can finally say
                             goodbye to those boring moments and hello...
                            </p>
                            
                        </p>

                        <p className="mt-4 text-black"> Updated on </p>
                        <p className="text-slate-500"> Jun 21,2023 </p>
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
                                    <p> 4.4  &#9733;</p>
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

                                    <p> Task Cash : Cash Earning App.</p>
                                    <br />
                                    <p>Introducing Task Cash, the revolutionary cash earning app that allows you to turn your spare time into real money effortlessly. With Task Cash, you can finally say goodbye to those boring moments and hello to a rewarding and engaging experience that puts cash directly into your pocket.
                                        </p>                                    <br />
                                    <p>Task Cash is designed with the modern user in mind, offering a simple yet powerful platform that enables you to earn money through various tasks and activities. Whether you're waiting in line, commuting, or just relaxing at home, Task Cash gives you the opportunity to make the most out of your free time by completing fun and rewarding tasks.
                                      <br/> <br/>One of the standout features of Task Cash is its diverse range of tasks and activities. From taking surveys and watching videos to playing games and trying out new apps, there's always something exciting to do within the app. Task Cash partners with reputable companies and advertisers to bring you a wide selection of tasks that cater to different interests and preferences, ensuring there's something for everyone.<br/>
                                        <br/>With Task Cash, earning money is as easy as completing tasks and accumulating points. Each task you complete rewards you with a specific number of points, which can later be converted into real cash or gift cards from popular retailers. The app provides a transparent and user-friendly points system, allowing you to track your progress and see how close you are to reaching your cash-out goal.
                                        <br/><br/>In addition to its extensive task library, Task Cash offers a referral program that lets you boost your earnings even further. By inviting your friends, family, and acquaintances to join Task Cash using your unique referral code, you earn additional points whenever they complete tasks. It's a win-win situation that not only allows you to make more money but also brings your loved ones into the exciting world of Task Cash.
                                    <br/><br/>Task Cash takes user satisfaction seriously, and the app is constantly updated with new features and improvements based on user feedback. The developers understand the importance of a smooth and glitch-free experience, ensuring that the app runs seamlessly on both iOS and Android devices. The user interface is intuitive, making it easy to navigate and discover new tasks, while the support team is always ready to assist you with any questions or concerns.
                                    <br/><br/>Furthermore, Task Cash emphasizes the security and privacy of its users. The app adheres to strict data protection protocols, ensuring that your personal information is encrypted and safeguarded at all times. You can feel confident knowing that your privacy is respected and your earnings are secure within the Task Cash ecosystem.
                                    <br/><br/>So why wait? Start your cash-earning journey today with Task Cash and unlock a world of possibilities. Whether you're looking to earn extra income, save up for a special purchase, or simply enjoy the satisfaction of turning your free time into cash, Task Cash is the ultimate app for you. Get ready to experience a seamless, rewarding, and fun-filled cash earning experience like no other.
                                    </p>
                                </div><br/>
                                <hr/>

                                <div className="grid grid-cols-2 mt-9 text-slate-500">
                                    <div className="my-3">
                                        <p className="font-[500] text-[#000]">Version</p>
                                        <p >1.2</p>
                                    </div>
                                    <div className="my-3">
                                        <p className="font-[500] text-[#000]">Updated on</p>
                                        <p>Jun 21, 2023 </p>
                                    </div>
                                    <div className="my-3">
                                        <p className="font-[500] text-[#000]">Requires Android</p>
                                        <p>5.0 and up</p>
                                    </div>
                                    <div className="my-3">
                                        <p className="font-[500] text-[#000]">Downloads</p>
                                        <p>10,000+ downloads</p>
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
                                        <p>Jun 21,2023</p>
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