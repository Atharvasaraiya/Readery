import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Track() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section>
                <div className=" container mx-auto px-5 md:py-5">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                {/* <svg className="text-pink-600 w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg> */}

                                <h2 className="title-font font-medium text-lg text-center text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}></h2>
                                <p className="leading-relaxed">"𝘐𝘴𝘰𝘭𝘢𝘵𝘦 𝘢𝘴 𝘮𝘶𝘤𝘩 𝘢𝘴 𝘺𝘰𝘶 𝘸𝘢𝘯𝘵 𝘵𝘰 𝘣𝘦𝘤𝘰𝘮𝘦 𝘴𝘵𝘳𝘰𝘯𝘨𝘦𝘳, 𝘦𝘷𝘦𝘯 𝘪𝘧 𝘺𝘰𝘶 𝘴𝘦𝘦 𝘵𝘩𝘢𝘵 𝘭𝘰𝘯𝘦𝘭𝘪𝘯𝘦𝘴𝘴 𝘪𝘴 𝘢𝘯 𝘶𝘯𝘣𝘦𝘢𝘳𝘢𝘣𝘭𝘦 𝘩𝘦𝘭𝘭, 𝘪𝘵 𝘪𝘴 𝘮𝘶𝘤𝘩 𝘣𝘦𝘵𝘵𝘦𝘳 𝘵𝘩𝘢𝘯 𝘵𝘩𝘦 𝘮𝘶𝘭𝘵𝘪𝘱𝘭𝘦 𝘮𝘢𝘴𝘬𝘴 𝘰𝘧 𝘩𝘶𝘮𝘢𝘯𝘴.” – 𝘍𝘺𝘰𝘥𝘰𝘳 𝘋𝘰𝘴𝘵𝘰𝘦𝘷𝘴𝘬𝘺

                                </p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                {/* <svg className="text-pink-600 w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg> */}

                                <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}></h2>
                                <p className="leading-relaxed">"𝘛𝘩𝘦 𝘺𝘦𝘢𝘳𝘴 𝘯𝘪𝘯𝘦𝘵𝘦𝘦𝘯 𝘢𝘯𝘥 𝘵𝘸𝘦𝘯𝘵𝘺 𝘢𝘳𝘦 𝘢 𝘤𝘳𝘶𝘤𝘪𝘢𝘭 𝘴𝘵𝘢𝘨𝘦 𝘪𝘯 𝘵𝘩𝘦 𝘮𝘢𝘵𝘶𝘳𝘢𝘵𝘪𝘰𝘯 𝘰𝘧 𝘤𝘩𝘢𝘳𝘢𝘤𝘵𝘦𝘳, 𝘢𝘯𝘥 𝘪𝘧 𝘺𝘰𝘶 𝘢𝘭𝘭𝘰𝘸 𝘺𝘰𝘶𝘳𝘴𝘦𝘭𝘧 𝘵𝘰 𝘣𝘦𝘤𝘰𝘮𝘦 𝘸𝘢𝘳𝘱𝘦𝘥 𝘸𝘩𝘦𝘯 𝘺𝘰𝘶'𝘳𝘦 𝘵𝘩𝘢𝘵 𝘢𝘨𝘦, 𝘪𝘵 𝘸𝘪𝘭𝘭 𝘤𝘢𝘶𝘴𝘦 𝘺𝘰𝘶 𝘱𝘢𝘪𝘯 𝘸𝘩𝘦𝘯 𝘺𝘰𝘶'𝘳𝘦 𝘰𝘭𝘥𝘦𝘳" – 𝘏𝘢𝘳𝘶𝘬𝘪 𝘔𝘶𝘳𝘢𝘬𝘢𝘮𝘪
                                </p>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                {/* <svg className="text-pink-600 w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg> */}

                                <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}></h2>
                                <p className="leading-relaxed">"𝘞𝘩𝘦𝘯 𝘰𝘯𝘦 𝘨𝘢𝘻𝘦𝘴 𝘭𝘰𝘯𝘨 𝘪𝘯𝘵𝘰 𝘢𝘯 𝘢𝘣𝘺𝘴𝘴 𝘵𝘩𝘦 𝘢𝘣𝘺𝘴𝘴 𝘢𝘭𝘴𝘰 𝘨𝘢𝘻𝘦𝘴 𝘪𝘯𝘵𝘰 𝘵𝘩𝘦𝘦" – 𝘍𝘳𝘪𝘦𝘥𝘳𝘪𝘤𝘩 𝘕𝘪𝘦𝘵𝘻𝘴𝘤𝘩𝘦

                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Track