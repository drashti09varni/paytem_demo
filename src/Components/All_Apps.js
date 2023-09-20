import React from "react";
import banner1 from "../Images/banner1.webp";
import banner2 from "../Images/banner2.webp";
import banner3 from "../Images/banner3.webp";
import banner4 from "../Images/banner4.webp";
import banner5 from "../Images/banner5.webp";
import banner6 from "../Images/banner6.webp";
import banner7 from "../Images/banner7.webp";
import app1 from '../Images/app1.webp';
import app2 from '../Images/app2.webp';
import app3 from '../Images/app3.webp';
import app4 from '../Images/app4.webp';
import app5 from '../Images/app5.webp';
import app6 from '../Images/app6.webp';
import app7 from '../Images/app7.webp';
import { Outlet, Link } from "react-router-dom";



export default function AllApps() {
    return <>
<div className="flex min-h-screen items-center justify-cetner ">
<div className="flex w-full flex-col items-center py-10 sm:justify-center">
        <div className="m-7 ">
            <div className="">
                <h1 className="text-3xl font-[500] mb-7">Finance Bites LLC</h1>
                <div class="grid grid-cols-1 sm:grid-cols-1 xsm:grid-cols-1 md:grid-cols-1 gap-x-8 gap-y-10">
                    {/* app 1 */}

                    <div>
                        <div class="transition-all transform translate-y-8 opacity-0
								group-hover:opacity-100
							group-hover:translate-y-0">


                        </div>
                        <div className="rounded-md  bg-gray-900 group shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] cursor-pointer ">
                            <Link to="app_1" ><img src={banner1}
                                alt="Fiction Product"
                                class="object-cover  rounded-md  object-cover
							 group-hover:opacity-80"/></Link>
                        </div>
                        <div className="flex mt-5">
                            <div >
                                <img src={app1} className="rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
                            </div>
                            <div className="ml-5 leading-5 font-medium text-[16px]">
                                <p className="">GoRupee : Easy Earning App</p>
                                <p>Finance Bites LLC</p>
                                <p>4.3 &#9733;</p>
                            </div>
                        </div>
                    </div>

                    {/* app 2 */}

                    <div>
                        <div className="rounded-md   bg-gray-900 group shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                            <Link to="app_2"><img src={banner2}
                                alt="Fiction Product"
                                class="object-cover  rounded-md  object-cover
							 group-hover:opacity-80"/></Link>
                        </div>
                        <div className="flex mt-5">
                            <div >
                                <img src={app2} className="rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
                            </div>
                            <div className="ml-5 leading-5 font-medium text-[16px]">
                                <p>OkRupee : Earning App</p>
                                <p>Finance Bites LLC</p>
                                <p>4.5 &#9733;</p>
                            </div>
                        </div>
                    </div>

                    {/* app 3 */}

                    <div>
                        <div className="rounded-md   bg-gray-900 group shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                            <Link to="app_3"><img src={banner3}
                                alt="Fiction Product"
                                class="object-cover  rounded-md  object-cover
                                group-hover:opacity-80" /></Link>
                        </div>
                        <div className="flex mt-5">
                            <div >
                                <img src={app3} className="rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
                            </div>
                            <div className="ml-5 leading-5 font-medium text-[16px]">
                                <p>Easy : Earning App</p>
                                <p>Finance Bites LLC</p>
                                <p>4.2 &#9733;</p>
                            </div>
                        </div>
                    </div>

                    {/* app 4 */}

                    <div>
                        <div className="rounded-md   bg-gray-900 group shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                            <Link to="app_4"><img src={banner4}
                                alt="Fiction Product"
                                class="object-cover  rounded-md  object-cover
                                group-hover:opacity-80" /></Link>
                        </div>
                        <div className="flex mt-5">
                            <div >
                                <img src={app4} className="rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
                            </div>
                            <div className="ml-5 leading-5 font-medium text-[16px]">
                                <p>Spin For Earn-Earn Dollar</p>
                                <p>Finance Bites LLC</p>
                                <p>4.5 &#9733;</p>
                            </div>
                        </div>
                    </div>

                    {/* app 5 */}

                    <div>
                        <div className="rounded-md   bg-gray-900 group shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                            <Link to="app_5"><img src={banner5}
                                alt="Fiction Product"
                                class="object-cover  rounded-md  object-cover
							 group-hover:opacity-80" /></Link>
                        </div>
                        <div className="flex mt-5">
                            <div >
                                <img src={app5} className="rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
                            </div>
                            <div className="ml-5 leading-5 font-medium text-[16px]">
                                <p>Auto Call Recording App</p>
                                <p>Finance Bites LLC</p>
                                <p>4.3 &#9733;</p>
                            </div>
                        </div>
                    </div>

                    {/* app 6 */}

                    <div>
                        <div className="rounded-md   bg-gray-900 group shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                            <Link to="app_6"><img src={banner6}
                                alt="Fiction Product"
                                class="object-cover  rounded-md  object-cover
							 group-hover:opacity-80"/></Link>
                        </div>
                        <div className="flex mt-5">
                            <div >
                                <img src={app6} className="rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
                            </div>
                            <div className="ml-5 leading-5 font-medium text-[16px]">
                                <p>Visit For Earn : Make Money</p>
                                <p>Finance Bites LLC</p>
                                <p>4.3 &#9733;</p>
                            </div>
                        </div>
                    </div>

                    {/* app 7 */}

                    <div>
                        <div className="rounded-md   bg-gray-900 group  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                            <Link to="app_7"><img src={banner7}
                                alt="Fiction Product"
                                class="object-cover  rounded-md  object-cover
							 group-hover:opacity-80" /></Link>
                        </div>
                        <div className="flex mt-5">
                            <div >
                                <img src={app7} className="rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
                            </div>
                            <div className="ml-5 leading-5 font-medium text-[16px]">
                                <p>Task Cash : Cash Earning App</p>
                                <p>Finance Bites LLC</p>
                                <p>4.4 &#9733;</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</div>


    <Outlet />
    </>;
}
