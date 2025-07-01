import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";

function dataMangementPage() {
 

  return (
    <div className="h-screen bg-white ">
      <div className="p-5 w-[100%] border-b-1 border-gray-300 shadow-lg sticky top-0 bg-white z-10">
    <h1 className="text-2xl font-stretch-semi-condensed font-semibold">Database Manager</h1>
      </div>
      <div className="main ">
        <div className="p-5 m-3 border-1 border-gray-300 shadow-xl rounded-xl">
          <div>
            <h1 className="font-bold">Enter The Details Of The Product to Update</h1>
          </div>
          <div>
            <p className="m-1 font-semibold">BRAND</p>
            <input type="text" className=" mt-2 w-full bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center "/>
          </div>
          <div>
            <p className="m-1 font-semibold">MODEL</p>
            <input type="text" className=" mt-2 w-full bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center "/>
          </div>
          <div>
            <p className="m-1 font-semibold">TYPE</p>
            <div
                                        className="flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center ">
                                        <select className="bg-amber-100 w-full text-sm font-medium outline-none text-center " id="surroundType" onChange={(e) => setSurroundType(e.target.value)}>
                                            <option disabled selected>Select The Surround Type</option>

                                        </select>
                                    </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default dataMangementPage;
