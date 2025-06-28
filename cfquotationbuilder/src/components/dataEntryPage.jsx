import React from 'react'

function dataEntryPage() {
  return (
    <div className="h-screen bg-white">
        {/* <!-- Header --> */}
        <div className="p-5 w-[100%] border-b-1 border-gray-300 shadow-lg">
            <h1 className="font-semibold text-3xl font-stretch-extra-condensed">Cinema Focus</h1>
        </div>
        <div className="m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md">
            <div>
                <h1 className="font-semibold text-md">Choose The Brand</h1>
            </div>
            <div>
                <div
                    className="flex-1 mt-2 bg-amber-100 p-3 rounded-lg shadow border border-black flex justify-center items-center ">
                    <select className="bg-amber-100 w-full text-sm font-medium outline-none text-center " id="series">
                        <option disabled>Select The Brand</option>

                    </select>
                </div>
            </div>
        </div>

        <div className="m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md"></div>

    </div>
  )
}

export default dataEntryPage