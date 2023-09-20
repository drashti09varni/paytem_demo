import React from "react";
import App_d_1 from '../Images/APP_5/App_d_5.webp';
import rating_symbol from '../Images/rating_symbol.webp';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import ad_1 from '../Images/APP_5/ad_1.webp';
import ad_2 from '../Images/APP_5/ad_2.webp';
import ad_3 from '../Images/APP_5/ad_3.webp';
import ad_4 from '../Images/APP_5/ad_4.webp';
import ad_5 from '../Images/APP_5/ad_5.webp';

import Slider from 'react-slick';
import { HiArrowSmRight } from 'react-icons/hi';
import more_app_1 from '../Images/APP_1/more_app_1.png';
import more_app_2 from '../Images/APP_1/more_app_2.png';
import more_app_3 from '../Images/APP_1/more_app_3.png';
import more_app_4 from '../Images/APP_1/more_app_4.png';
import more_app_5 from '../Images/APP_1/more_app_5.png';
import more_app_6 from '../Images/APP_1/more_app_6.png';


export default function App5() {
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
                                    Auto Call Recording App
                                </h1>
                                <p className="mt-0 text-[#01875f] font-[550] text-[19px]"> Finance Bites LLC</p>


                            </div>
                        </div>
                        <div className="flex space-x-4 m-5">
                            <div className="">
                                <p className="text-center font-[500]">4.4  &#9733;</p>
                                <p className="text-[14px] text-slate-800">254 reviews</p>

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
                        <img src={ad_1} alt="image" className="object-cover h-full w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl" />
                        <img src={ad_2} alt="image" className="h-[190px] w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl" />
                        <img src={ad_3} alt="image" className="object-cover h-[190px] w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl" />
                        <img src={ad_4} alt="image" className="object-cover h-[190px] w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl" />
                        <img src={ad_5} alt="image" className="object-cover h-[190px] w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl" />

                    </div>
                    <div className="flex m-5 text-xl font-[500]">
                        <h1>About this App</h1>
                        <HiArrowSmRight size={30} className="ml-auto" onClick={() => setShowModal(true)} />
                    </div>
                    <div className="m-5">
                        <p className="text-[15px] text-slate-800">
                            Auto Call Recording App
                            <br />
                            <br />
                            <p>Q -&gt;  How to get others' number call recordings in our cell phones, without them knowing or any access?</p>
                        </p>
                        <p>...</p>

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
                                            Auto Call Recording...
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
                                    <p className="my-4">Auto Call Recording App</p>

                                    <p><br />Q -&gt; How to get others' number call recordings in our
                                        cell phones, without them knowing or any access?<br /></p>
                                    <p className="my-5"><br />
                                        Ans... Install our auto call recording app and get others' unkwown people number call recordings without them knowing their call recording is stolen.<br /></p>

                                    <p className="my-5">Why this Auto Call Recording App</p>
                                    <p className="my-5"><br />If you want someone's call recording, this Call Recorder Application is made for you. This
                                        Call Recorder Download App gives you someone's call recordings without knowing their call recording is stolen.
                                        that is the main purpose of our auto-call recording app.<br /></p>

                                    <br /><br />
                                    <p>What are the main benefits of the Auto Call Recording App ?</p>
                                    <br /><br />
                                    <ul className="list-disc mx-5 listUlLi">
                                        <li>To get access to someone's contacts, call logs, and call recordings.</li>
                                        <li>
                                            To save their call recordings for future use.
                                        </li>
                                        <li>
                                            To get their personal call history.
                                        </li>
                                    </ul>
                                    <p className="my-5"> What purpose to make this Auto Call Recording App? </p>


                                    <p><br />The main purpose of making this call recorder downloader
                                        is to get access to someone's contacts, call logs, and call recordings.
                                        It's a record of contacts, call logs and call recordings on the desired
                                        device. When necessary, you even have the opportunity to export and save
                                        this data for future use.<br /></p>

                                    <br />
                                    <br />
                                    <p>This auto-call recording app is safe?</p>
                                    <br />
                                    <p><br />We never save our user's data in our database. The user's data is stored in their cell phone so nobody can take or steal their data. We don't take any kind of user data so our call recorder application is safe for every user.</p>
                                    <br /><br />
                                    <p>How to use this auto call recording app ?</p><br />
                                    <p><br />This call recorder downloader app is very easy to use and this app is user-friendly. Follow the following steps and use this call recorder downloader app...</p>
                                    <br /><br />
                                    <ul className="mx-5 listUlLi">
                                        <li>Install - Fast go on your play store and install this auto call recording app.</li>
                                        <li>   Give Permissions - After installation, open this app and give all permissions that the app needs.</li>
                                        <li>Enjoy - After the simple process is complete, you can use this app and get someone's contacts, call logs, and call recordings.</li>
                                    </ul>
                                    <p>Why our call recorder app is the best?</p><br/>
                                    <p>Our Call Recorder Application provides services to get access to someone's contacts, call logs, and call recordings and the user saves this data for future use. These services make us unique,
                                        those are unique benefits why our call recorder app is the best</p><br/>
                                    <p>
                                        If you enjoy those unique benefits, so install our auto call recording app now and enjoy those types of unique benefits, and give your honest review.</p>                                                 
                                        <br/>  <hr />
                               <br/> </div>

                                <div className="grid grid-cols-2 mt-9 text-slate-500">
                                    <div className="my-3">
                                        <p className="font-[500] text-[#000]">Version</p>
                                        <p >1.6</p>
                                    </div>
                                    <div className="my-3">
                                        <p className="font-[500] text-[#000]">Updated on</p>
                                        <p>Jun 26, 2023 </p>
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
                                        <p>Feb 3,2023</p>
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