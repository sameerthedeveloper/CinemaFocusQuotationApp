import React from 'react'

function SurroundSpeakers({ type }) {
    return (
        <>
            <div className='mb-20'>
                {type === '5.1' && <div>    <div className='m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md'>
                    <div>
                        <h1 className='font-semibold text-md'>Left & Right </h1>
                    </div>
                    <div className='flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center'>
                        <select className='bg-amber-100 w-full text-sm font-medium outline-none text-center'>
                            <option disabled defaultValue>Select The Model</option>
                        </select>
                    </div>
                </div>

                    <div className='m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md'>
                        <div>
                            <h1 className='font-semibold text-md'>Center Speaker </h1>
                        </div>
                        <div className='flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center'>
                            <select className='bg-amber-100 w-full text-sm font-medium outline-none text-center'>
                                <option disabled defaultValue>Select The Model</option>
                            </select>
                        </div>
                    </div>

                    <div className='m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md'>
                        <div>
                            <h1 className='font-semibold text-md'>Surround </h1>
                        </div>
                        <div className='flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center'>
                            <select className='bg-amber-100 w-full text-sm font-medium outline-none text-center'>
                                <option disabled defaultValue>Select The Model</option>
                            </select>
                        </div>
                    </div>

                    <div className='m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md'>
                        <div>
                            <h1 className='font-semibold text-md'>Subwoofer </h1>
                        </div>
                        <div className='flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center'>
                            <select className='bg-amber-100 w-full text-sm font-medium outline-none text-center'>
                                <option disabled defaultValue>Select The Model</option>
                            </select>
                        </div>
                    </div></div>}

                {type === '7.1' && <div>    <div className='m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md'>
                    <div>
                        <h1 className='font-semibold text-md'>Left & Right </h1>
                    </div>
                    <div className='flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center'>
                        <select className='bg-amber-100 w-full text-sm font-medium outline-none text-center'>
                            <option disabled defaultValue>Select The Model</option>
                        </select>
                    </div>
                </div>

                    <div className='m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md'>
                        <div>
                            <h1 className='font-semibold text-md'>Center Speaker </h1>
                        </div>
                        <div className='flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center'>
                            <select className='bg-amber-100 w-full text-sm font-medium outline-none text-center'>
                                <option disabled defaultValue>Select The Model</option>
                            </select>
                        </div>
                    </div>

                    <div className='m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md'>
                        <div>
                            <h1 className='font-semibold text-md'>Rear Surround </h1>
                        </div>
                        <div className='flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center'>
                            <select className='bg-amber-100 w-full text-sm font-medium outline-none text-center'>
                                <option disabled defaultValue>Select The Model</option>
                            </select>
                        </div>
                    </div>

                    <div className='m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md'>
                        <div>
                            <h1 className='font-semibold text-md'>Rear Back Surround </h1>
                        </div>
                        <div className='flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center'>
                            <select className='bg-amber-100 w-full text-sm font-medium outline-none text-center'>
                                <option disabled defaultValue>Select The Model</option>
                            </select>
                        </div>
                    </div>

                    <div className='m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md'>
                        <div>
                            <h1 className='font-semibold text-md'>Atmos </h1>
                        </div>
                        <div className='flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center'>
                            <select className='bg-amber-100 w-full text-sm font-medium outline-none text-center'>
                                <option disabled defaultValue>Select The Model</option>
                            </select>
                        </div>
                    </div>

                    <div className='m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md'>
                        <div>
                            <h1 className='font-semibold text-md'>Subwoofer </h1>
                        </div>
                        <div className='flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center'>
                            <select className='bg-amber-100 w-full text-sm font-medium outline-none text-center'>
                                <option disabled defaultValue>Select The Model</option>
                            </select>
                        </div>
                    </div></div>}

                {type === '7.2' && <div>    <div className='m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md'>
                    <div>
                        <h1 className='font-semibold text-md'>Left & Right </h1>
                    </div>
                    <div className='flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center'>
                        <select className='bg-amber-100 w-full text-sm font-medium outline-none text-center'>
                            <option disabled defaultValue>Select The Model</option>
                        </select>
                    </div>
                </div>

                    <div className='m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md'>
                        <div>
                            <h1 className='font-semibold text-md'>Center Speaker </h1>
                        </div>
                        <div className='flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center'>
                            <select className='bg-amber-100 w-full text-sm font-medium outline-none text-center'>
                                <option disabled defaultValue>Select The Model</option>
                            </select>
                        </div>
                    </div>

                    <div className='m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md'>
                        <div>
                            <h1 className='font-semibold text-md'>Surround </h1>
                        </div>
                        <div className='flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center'>
                            <select className='bg-amber-100 w-full text-sm font-medium outline-none text-center'>
                                <option disabled defaultValue>Select The Model</option>
                            </select>
                        </div>
                    </div>

                    <div className='m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md'>
                        <div>
                            <h1 className='font-semibold text-md'>Rear Surround </h1>
                        </div>
                        <div className='flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center'>
                            <select className='bg-amber-100 w-full text-sm font-medium outline-none text-center'>
                                <option disabled defaultValue>Select The Model</option>
                            </select>
                        </div>
                    </div>

                    <div className='m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md'>
                        <div>
                            <h1 className='font-semibold text-md'>Subwoofer </h1>
                        </div>
                        <div className='flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center'>
                            <select className='bg-amber-100 w-full text-sm font-medium outline-none text-center'>
                                <option disabled defaultValue>Select The Model</option>
                            </select>
                        </div>
                    </div></div>}

                {type === '9.1' && <div>    <div className='m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md'>
                </div></div>}

                {type === '9.2' && <div>    <div className='m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md'>
                </div></div>}

                {type === '11.1' && <div>    <div className='m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md'>
                </div></div>}

                {type === '11.2' && <div>    <div className='m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md'>
                </div></div>}

                {type === '13.1' && <div>    <div className='m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md'>
                </div></div>}

                {type === '13.2' && <div>    <div className='m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md'>
                </div></div>}

                <div className='m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md'>
                        <div>
                            <h1 className='font-semibold text-md'>Amplifier </h1>
                        </div>
                        <div className='flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center'>
                            <select className='bg-amber-100 w-full text-sm font-medium outline-none text-center'>
                                <option disabled defaultValue>Select The Model</option>
                            </select>
                        </div>
                    </div>
                
                <div className='m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md'>
                        <div>
                            <h1 className='font-semibold text-md'>Projector </h1>
                        </div>
                        <div className='flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center'>
                            <select className='bg-amber-100 w-full text-sm font-medium outline-none text-center'>
                                <option disabled defaultValue>Select The Model</option>
                            </select>
                        </div>
                    </div>

                <div className='m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md'>
                        <div>
                            <h1 className='font-semibold text-md'>Signature Screen </h1>
                        </div>
                        <div className='flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center'>
                            <select className='bg-amber-100 w-full text-sm font-medium outline-none text-center'>
                                <option disabled defaultValue>Select The Model</option>
                            </select>
                        </div>
                    </div>
            </div>
            {/* <div className="mb-30" ></div> */}

        </>
    );


}

export default SurroundSpeakers