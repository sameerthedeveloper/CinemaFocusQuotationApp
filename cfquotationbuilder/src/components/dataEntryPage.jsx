import React from 'react'
import SurroundSpeakers from './SurroundSpeakers';


function dataEntryPage() {
    const [surroundType, setSurroundType] = React.useState('');
    
    const surroundVersions = [
        { name: "5.1 System", value: "5.1" },
        { name: "7.1 System", value: "7.1" },
        { name: "7.2 System", value: "7.2" },
        { name: "9.1 System", value: "9.1" },
        { name: "9.2 System", value: "9.2" },
        { name: "11.1 System", value: "11.1" },
        { name: "11.2 System", value: "11.2" },
    ];
    return (
        <>
        <div className="h-screen bg-white">
            {/* <!-- Header --> */}
            <div className="p-5 w-[100%] border-b-1 border-gray-300 shadow-lg sticky top-0 bg-white z-10">
                <h1 className="font-semibold text-3xl font-stretch-extra-condensed">Cinema Focus</h1>
            </div>
            <div className="m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md">
                <div>
                    <h1 className="font-semibold text-md">Choose The Surround Version</h1>
                </div>
                <div>
                    <div
                        className="flex-1 mt-2 bg-amber-100 p-3 rounded-lg shadow border border-black flex justify-center items-center ">
                        <select className="bg-amber-100 w-full text-sm font-medium outline-none text-center " id="surroundType" onChange={(e) => setSurroundType(e.target.value)}>
                            <option disabled selected>Select The Surround Type</option>
                            {surroundVersions.map((item, index) => (
                                <option key={index} value={item.value}>
                                    {item.name}
                                </option>
                            ))}

                        </select>
                    </div>
                </div>
            </div>

            <div className="m-5 p-4 border-1 border-gray-400 rounded-lg shadow-md">
                <div>
                    <h1 className='font-semibold text-md'>Choose The Brand</h1>
                </div>
                <div className='flex-1 mt-2 bg-amber-100 p-3 rounded-lg shadow border border-black flex justify-center items-center'>
                    <select className='bg-amber-100 w-full text-sm font-medium outline-none text-center' id="">
                        <option disabled selected>Select The Brand </option>
                    </select>
                </div>
            </div>

            {/* <div className='m-5 p-4 border-1 border-gray-400 rounded-lg shadow-md'></div> */}
            <SurroundSpeakers type={surroundType} />

            

                            <div className='mb-20'></div>
            {/* <!-- Footer --> */}
        </div>
        
        </>
    )
}

export default dataEntryPage