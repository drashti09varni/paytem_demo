import React from "react";
import App_d_1 from '../Images/APP_3/App_d_3.webp';
import rating_symbol from '../Images/rating_symbol.webp';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import ad_1 from '../Images/APP_3/ad_1.webp';
import ad_2 from '../Images/APP_3/ad_2.webp';
import ad_3 from '../Images/APP_3/ad_3.webp';
import ad_4 from '../Images/APP_3/ad_4.webp';
import Slider from 'react-slick';
import { HiArrowSmRight } from 'react-icons/hi';
import more_app_1 from '../Images/APP_1/more_app_1.png';
import more_app_2 from '../Images/APP_1/more_app_2.png';
import more_app_3 from '../Images/APP_1/more_app_3.png';
import more_app_4 from '../Images/APP_1/more_app_4.png';
import more_app_5 from '../Images/APP_1/more_app_5.png';
import more_app_6 from '../Images/APP_1/more_app_6.png';


export default function App3() {
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
                        EasyRupee : Earning App
                    </h1>
                    <p className="mt-0 text-[#01875f] font-[550] text-[19px]"> Finance Bites LLC</p>


                </div>
            </div>
            <div className="flex space-x-4 m-5">
                <div className="">
                    <p className="text-center font-[500]">4.2  &#9733;</p>
                    <p className="text-[14px] text-slate-800">19.4K reviews</p>

                </div>
                <p className="mt-2 text-[20px] text-[#e6e6e6]">|</p>
                <div>
                    <p className="text-center font-[500]">500K+</p>
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
            <img src={ad_1} alt="image" className="h-[270px] w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl" />
            <img src={ad_2} alt="image" className="h-[270px] w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl" />
            <img src={ad_3} alt="image" className="h-[270px] w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl" />
            <img src={ad_4} alt="image" className="h-[270px] w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl object-cover" />
        </div>
        <div className="flex m-5 text-xl font-[500]">
            <h1>About this game</h1>
            <HiArrowSmRight size={30} className="ml-auto" onClick={() => setShowModal(true)} />
        </div>
        <div className="m-5">
            <p className="text-[15px] text-slate-800">If you like earning money online by playing games, this
                earns money-playing game is made for you. This fantasy earns money online game
                is a fantasy game, where the users play a simple game and get money. This make-money online game
                is the best game who can make...

            </p>
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
                                        <h1 className="font-roboto text-[21px] font-sans font-[500] leading-7">
                                            EasyRupee : Earnin...
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

                                <div className=" text-slate-500 text-[16px] leading-6 mt-9">
                                    <p> If you like earning money online by playing games, this
                                        earns money-playing game is made for you. This fantasy
                                        earns money online game is a fantasy game, where the users play a simple game and get money.
                                        This make-money online game is the best game who can make money easily and make money with
                                        playing a simple fantasy game, if you have to make money easily and make money by playing a simple
                                        fantasy game so install this free money-earning game and make money just playing a simple
                                        fantasy game.</p>
                                    <br /><br />
                                    <p>What's new in this Earn money playing games?</p>
                                    <br /><br />
                                    <ul className="list-disc mx-5 listUlLi">
                                        <li>
                                            This Free money-earning game is very easy to play.
                                        </li>
                                        <li>
                                            This Earn money game is making free money with a '0' investment.
                                        </li>
                                        <li>
                                            This Earn money playing games interface is very user-friendly and very easy to use.
                                        </li>
                                        <li>
                                            This Easy earn-money game is very easy to make or earn a big amount of money.
                                        </li>
                                        <li>
                                            This playing online earn money game is very safe for every user.
                                        </li>
                                        <li>
                                            This makes money online game has advanced UI this UI gave users smooth gameplay and provides thrill experience.
                                        </li>
                                        <li>
                                            This earns money online game work on any android cell phone.
                                        </li>
                                        <li>
                                            This earns money playing game is very easy to use and earns a big amount of money in a short time.
                                        </li>
                                        <li>
                                            This earns money playing game is very easy to use and earns a big amount of money in a short time.
                                        </li>
                                    </ul>
                                    <p className="my-5">Benefit of this Earn money playing game</p>
                                    <ul className="list-disc mx-5 listUlLi">
                                        <li>
                                            With the help of this Free money-earning game you can earn easy money online.
                                        </li>
                                        <li>
                                            In this Earn money game you can enjoy money making process.
                                        </li>
                                        <li>
                                            This Earn money playing games give smooth gameplay and provides thrill experience so user can enjoy playing this game.
                                        </li>
                                        <li>
                                            This Easy earn-money game is very safer comparing other games.
                                        </li>
                                        <li>
                                            This playing online earn money game is more entertaining comparing other games.
                                        </li>
                                    </ul>
                                    <p className="my-5">How to play Earn money playing game ?</p>

                                    <p className="my-5">This playing online earn money game is very easy to play and very easy
                                        to download. That is a very simple stapes to download and play this
                                        Easy earn money game. Just follow those simple steps and download this
                                        earn money playing game...</p>

                                    <p className="my-5">
                                        Open your phone and open the play store and install this Earn money playing game
                                    </p>
                                    <p className="my-5"> After installation open Earn money playing game and give Permissions this game need. </p>
                                    <p className="my-5"> After give Permissions this playing online earn money game open and enjoy your Earn money playing game</p>
                                <p  className="my-5">This Earn money game is safe?</p>

                                <p  className="my-5">This money-earning game is safe for every user. This 
                                money-earning game is safer than any other game because this game
                                 never sells its user's data. This is the reason why this game is safer than 
                                 other games.<br/></p>

                                 <p  className="my-5"><br />Hurry and install this Earn money game and earn easy money enjoy this game, and give your honest review.<br /></p>
                                <hr/>
                                </div>

                                <div className="grid grid-cols-2 mt-9 text-slate-500">
                                    <div className="my-3">
                                        <p className="font-[500] text-[#000]">Version</p>
                                        <p >1.7</p>
                                    </div>
                                    <div className="my-3">
                                        <p className="font-[500] text-[#000]">Updated on</p>
                                        <p>Jul 14, 2023 </p>
                                    </div>
                                    <div className="my-3">
                                        <p className="font-[500] text-[#000]">Requires Android</p>
                                        <p>5.0 and up</p>
                                    </div>
                                    <div className="my-3">
                                        <p className="font-[500] text-[#000]">Downloads</p>
                                        <p>500,000+ downloads</p>
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
                                        <p>May 13,2023</p>
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