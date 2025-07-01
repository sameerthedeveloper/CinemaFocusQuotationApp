// src/components/UploadSurrounds.js
import React from "react";
import { db } from "../firebase"; // Adjust the path as necessary
import { collection, addDoc } from "firebase/firestore";

// Paste your JSON data here or import it
const jsonData = {
   "5.1": [
        [
            {
                "BRAND": "SYSTEM AUDIO"
            },
            {
                "MODEL": "SIGNATURE 40",
                "TYPE": "LEFT RIGHT ",
                "PRICE": 225000.0,
                "COUNT": "2"
            },
            {
                "MODEL": "SIGNATURE 10",
                "TYPE": "CENTER",
                "PRICE": 90000.0,
                "COUNT": "1"
            },
            {
                "MODEL": "SIGNATURE 6",
                "TYPE": "SURROUND",
                "PRICE": 91000.0,
                "COUNT": "1"
            },
            {
                "MODEL": "SIGNATURE SUB",
                "TYPE": "SUB",
                "PRICE": 135000.0,
                "COUNT": "1"
            }
        ]
    ],
    "7.1": [
        [
            {
                "BRAND": "SYSTEM AUDIO"
            },
            {
                "MODEL": "SIGNATURE 40",
                "TYPE": "LEFT RIGHT",
                "PRICE": 225000.0,
                "COUNT": "2"
            },
            {
                "MODEL": "SIGNATURE 10",
                "TYPE": "CENTER",
                "PRICE": 90000.0,
                "COUNT": "1"
            },
            {
                "MODEL": "SIGNATURE 6",
                "TYPE": "SURROUND",
                "PRICE": 91000.0,
                "COUNT": "1"
            },
            {
                "MODEL": "SIGNATURE SUB",
                "TYPE": "SUB",
                "PRICE": 135000.0,
                "COUNT": "1"
            },
            {
                "MODEL": "SS82 ",
                "TYPE": "ATMOS ",
                "PRICE": 38000.0,
                "COUNT": "1"
            },
            {
                "MODEL": " IQ8S",
                "TYPE": "ATMOS ",
                "PRICE": 21000.0,
                "COUNT": "1"
            },
            {
                "BRAND": "AUDIO VECTOR "
            },
            {
                "MODEL": "QR 5",
                "TYPE": "LEFT RIGHT",
                "PRICE": 484000.0,
                "COUNT": "2"
            },
            {
                "MODEL": "QR CENTER",
                "TYPE": "CENTER",
                "PRICE": 165000.0,
                "COUNT": "1"
            },
            {
                "MODEL": "QR WALL",
                "TYPE": "SURROUND ",
                "PRICE": 100000.0,
                "COUNT": "1"
            },
            {
                "MODEL": "QR SUB",
                "TYPE": "SUB",
                "PRICE": 230000.0,
                "COUNT": "1"
            },
            {
                "MODEL": "SS82 ",
                "TYPE": "ATMOS ",
                "PRICE": 38000.0,
                "COUNT": "1"
            },
            {
                "MODEL": " IQ8S",
                "TYPE": "ATMOS ",
                "PRICE": 21000.0,
                "COUNT": "1"
            }
        ]
    ],
    "9.1": [
        [
            {
                "BRAND": "ATC"
            },
            {
                "MODEL": "SCM 40",
                "TYPE": "LEFT RIGHT",
                "PRICE": 652000,
                "COUNT": "2"
            },
            {
                "MODEL": "C3C CENTER",
                "TYPE": "CENTER",
                "PRICE": 196000,
                "COUNT": "1"
            },
            {
                "MODEL": "HTS 7",
                "TYPE": "SURROUND",
                "PRICE": 78000,
                "COUNT": "1"
            },
            {
                "MODEL": "HTS 11",
                "TYPE": "SURROUND",
                "PRICE": 115000,
                "COUNT": "1"
            },
            {
                "MODEL": "C4 SUB MK 2",
                "TYPE": "SUB",
                "PRICE": null,
                "COUNT": "1"
            },
            {
                "MODEL": "MJ ACOUSTICS REF 400",
                "TYPE": "SUB",
                "PRICE": 263000,
                "COUNT": "1"
            },
            {
                "MODEL": "SS82 ",
                "TYPE": "ATMOS",
                "PRICE": 38000,
                "COUNT": "1"
            },
            {
                "MODEL": " IQ8S",
                "TYPE": "ATMOS",
                "PRICE": 21000,
                "COUNT": "1"
            },
            {
                "BRAND": "AUDIO VECTOR"
            },
            {
                "MODEL": "QR 5",
                "TYPE": "LEFT RIGHT",
                "PRICE": 484000,
                "COUNT": "2"
            },
            {
                "MODEL": "QR7",
                "TYPE": "LEFT RIGHT",
                "PRICE": 672000,
                "COUNT": "2"
            },
            {
                "MODEL": "QR CENTER",
                "TYPE": "CENTER",
                "PRICE": 165000,
                "COUNT": "1"
            },
            {
                "MODEL": "RC ARRETE",
                "TYPE": "CENTER",
                "PRICE": 465000,
                "COUNT": "1"
            },
            {
                "MODEL": "R C AVANTGARDE",
                "TYPE": "CENTER",
                "PRICE": 385000,
                "COUNT": "1"
            },
            {
                "MODEL": "R C SIGNATURE",
                "TYPE": "CENTER",
                "PRICE": 325000,
                "COUNT": "1"
            },
            {
                "MODEL": "QR WALL",
                "TYPE": "SURROUND",
                "PRICE": 100000,
                "COUNT": "1"
            },
            {
                "MODEL": "QR SUB",
                "TYPE": "SUB",
                "PRICE": 230000,
                "COUNT": "1"
            },
            {
                "MODEL": "R SUB ARRETE",
                "TYPE": "SUB",
                "PRICE": 415000,
                "COUNT": "1"
            },
            {
                "MODEL": "SS82 ",
                "TYPE": "ATMOS",
                "PRICE": 38000,
                "COUNT": "1"
            },
            {
                "MODEL": " IQ8S",
                "TYPE": "ATMOS",
                "PRICE": 21000,
                "COUNT": "1"
            },
            {
                "BRAND": "ORBID SOUND"
            },
            {
                "MODEL": "TELESTO",
                "TYPE": "LEFT RIGHT",
                "PRICE": 500000,
                "COUNT": "2"
            },
            {
                "MODEL": "JUPITER",
                "TYPE": "LEFT RIGHT",
                "PRICE": 740000,
                "COUNT": "2"
            },
            {
                "MODEL": "BIG CINEMA CENTER",
                "TYPE": "CENTER",
                "PRICE": 310000,
                "COUNT": "1"
            },
            {
                "MODEL": "KOMET",
                "TYPE": "SURROUND",
                "PRICE": 115000,
                "COUNT": "1"
            },
            {
                "MODEL": "TERRA III",
                "TYPE": "SUB",
                "PRICE": 298000,
                "COUNT": "1"
            },
            {
                "MODEL": "TERRA II",
                "TYPE": "SUB",
                "PRICE": 235000,
                "COUNT": "1"
            },
            {
                "MODEL": "SS82 ",
                "TYPE": "ATMOS",
                "PRICE": 38000,
                "COUNT": "1"
            },
            {
                "MODEL": " IQ8S",
                "TYPE": "ATMOS",
                "PRICE": 21000,
                "COUNT": "1"
            },
            {
                "BRAND": "SYSTEM AUDIO "
            },
            {
                "MODEL": "SIGNATURE 6",
                "TYPE": "SURROUND",
                "PRICE": 91000,
                "COUNT": "1"
            },
            {
                "MODEL": "SS82 ",
                "TYPE": "ATMOS ",
                "PRICE": 38000,
                "COUNT": "1"
            },
            {
                "MODEL": " IQ8S",
                "TYPE": "ATMOS ",
                "PRICE": 21000,
                "COUNT": "1"
            }
        ]
    ],
    "11.1": [
        [
            {
                "BRAND": "ATC"
            },
            {
                "MODEL": "SCM 40",
                "TYPE": "LEFT RIGHT",
                "PRICE": 652000,
                "COUNT": "2"
            },
            {
                "MODEL": "C3C CENTER",
                "TYPE": "CENTER",
                "PRICE": 196000,
                "COUNT": "1"
            },
            {
                "MODEL": "HTS 7",
                "TYPE": "SURROUND",
                "PRICE": 78000,
                "COUNT": "1"
            },
            {
                "MODEL": "HTS 11",
                "TYPE": "SURROUND",
                "PRICE": 115000,
                "COUNT": "1"
            },
            {
                "MODEL": "C4 SUB MK 2",
                "TYPE": "SUB",
                "PRICE": null,
                "COUNT": "1"
            },
            {
                "MODEL": "MJ ACOUSTICS REF 400",
                "TYPE": "SUB",
                "PRICE": 263000,
                "COUNT": "1"
            },
            {
                "MODEL": "SS82 ",
                "TYPE": "ATMOS",
                "PRICE": 38000,
                "COUNT": "1"
            },
            {
                "MODEL": " IQ8S",
                "TYPE": "ATMOS",
                "PRICE": 21000,
                "COUNT": "1"
            },
            {
                "BRAND": "AUDIO VECTOR"
            },
            {
                "MODEL": "QR 5",
                "TYPE": "LEFT RIGHT",
                "PRICE": 484000,
                "COUNT": "2"
            },
            {
                "MODEL": "QR7",
                "TYPE": "LEFT RIGHT",
                "PRICE": 672000,
                "COUNT": "2"
            },
            {
                "MODEL": "QR CENTER",
                "TYPE": "CENTER",
                "PRICE": 165000,
                "COUNT": "1"
            },
            {
                "MODEL": "RC ARRETE",
                "TYPE": "CENTER",
                "PRICE": 465000,
                "COUNT": "1"
            },
            {
                "MODEL": "R C AVANTGARDE",
                "TYPE": "CENTER",
                "PRICE": 385000,
                "COUNT": "1"
            },
            {
                "MODEL": "R C SIGNATURE",
                "TYPE": "CENTER",
                "PRICE": 325000,
                "COUNT": "1"
            },
            {
                "MODEL": "QR WALL",
                "TYPE": "SURROUND",
                "PRICE": 100000,
                "COUNT": "1"
            },
            {
                "MODEL": "QR SUB",
                "TYPE": "SUB",
                "PRICE": 230000,
                "COUNT": "1"
            },
            {
                "MODEL": "R SUB ARRETE",
                "TYPE": "SUB",
                "PRICE": 415000,
                "COUNT": "1"
            },
            {
                "MODEL": "SS82 ",
                "TYPE": "ATMOS",
                "PRICE": 38000,
                "COUNT": "1"
            },
            {
                "MODEL": " IQ8S",
                "TYPE": "ATMOS",
                "PRICE": 21000,
                "COUNT": "1"
            },
            {
                "BRAND": "ORBID SOUND"
            },
            {
                "MODEL": "TELESTO",
                "TYPE": "LEFT RIGHT",
                "PRICE": 500000,
                "COUNT": "2"
            },
            {
                "MODEL": "JUPITER",
                "TYPE": "LEFT RIGHT",
                "PRICE": 740000,
                "COUNT": "2"
            },
            {
                "MODEL": "BIG CINEMA CENTER",
                "TYPE": "CENTER",
                "PRICE": 310000,
                "COUNT": "1"
            },
            {
                "MODEL": "KOMET",
                "TYPE": "SURROUND",
                "PRICE": 115000,
                "COUNT": "1"
            },
            {
                "MODEL": "TERRA III",
                "TYPE": "SUB",
                "PRICE": 298000,
                "COUNT": "1"
            },
            {
                "MODEL": "TERRA II",
                "TYPE": "SUB",
                "PRICE": 235000,
                "COUNT": "1"
            },
            {
                "MODEL": "SS82 ",
                "TYPE": "ATMOS",
                "PRICE": 38000,
                "COUNT": "1"
            },
            {
                "MODEL": " IQ8S",
                "TYPE": "ATMOS",
                "PRICE": 21000,
                "COUNT": "1"
            },
            {
                "BRAND": "SYSTEM AUDIO "
            },
            {
                "MODEL": "SIGNATURE 6",
                "TYPE": "SURROUND",
                "PRICE": 91000,
                "COUNT": "1"
            },
            {
                "MODEL": "SS82 ",
                "TYPE": "ATMOS ",
                "PRICE": 38000,
                "COUNT": "1"
            },
            {
                "MODEL": " IQ8S",
                "TYPE": "ATMOS ",
                "PRICE": 21000,
                "COUNT": "1"
            }
        ]
    ],
    "13.1": [
        [
            {
                "BRAND": "ATC"
            },
            {
                "MODEL": "SCM 40",
                "TYPE": "LEFT RIGHT",
                "PRICE": 652000,
                "COUNT": "2"
            },
            {
                "MODEL": "C3C CENTER",
                "TYPE": "CENTER",
                "PRICE": 196000,
                "COUNT": "1"
            },
            {
                "MODEL": "HTS 7",
                "TYPE": "SURROUND",
                "PRICE": 78000,
                "COUNT": "1"
            },
            {
                "MODEL": "HTS 11",
                "TYPE": "SURROUND",
                "PRICE": 115000,
                "COUNT": "1"
            },
            {
                "MODEL": "C4 SUB MK 2",
                "TYPE": "SUB",
                "PRICE": null,
                "COUNT": "1"
            },
            {
                "MODEL": "MJ ACOUSTICS REF 400",
                "TYPE": "SUB",
                "PRICE": 263000,
                "COUNT": "1"
            },
            {
                "MODEL": "SS82 ",
                "TYPE": "ATMOS",
                "PRICE": 38000,
                "COUNT": "1"
            },
            {
                "MODEL": " IQ8S",
                "TYPE": "ATMOS",
                "PRICE": 21000,
                "COUNT": "1"
            },
            {
                "BRAND": "AUDIO VECTOR"
            },
            {
                "MODEL": "QR 5",
                "TYPE": "LEFT RIGHT",
                "PRICE": 484000,
                "COUNT": "2"
            },
            {
                "MODEL": "QR7",
                "TYPE": "LEFT RIGHT",
                "PRICE": 672000,
                "COUNT": "2"
            },
            {
                "MODEL": "QR CENTER",
                "TYPE": "CENTER",
                "PRICE": 165000,
                "COUNT": "1"
            },
            {
                "MODEL": "RC ARRETE",
                "TYPE": "CENTER",
                "PRICE": 465000,
                "COUNT": "1"
            },
            {
                "MODEL": "R C AVANTGARDE",
                "TYPE": "CENTER",
                "PRICE": 385000,
                "COUNT": "1"
            },
            {
                "MODEL": "R C SIGNATURE",
                "TYPE": "CENTER",
                "PRICE": 325000,
                "COUNT": "1"
            },
            {
                "MODEL": "QR WALL",
                "TYPE": "SURROUND",
                "PRICE": 100000,
                "COUNT": "1"
            },
            {
                "MODEL": "QR SUB",
                "TYPE": "SUB",
                "PRICE": 230000,
                "COUNT": "1"
            },
            {
                "MODEL": "R SUB ARRETE",
                "TYPE": "SUB",
                "PRICE": 415000,
                "COUNT": "1"
            },
            {
                "MODEL": "SS82 ",
                "TYPE": "ATMOS",
                "PRICE": 38000,
                "COUNT": "1"
            },
            {
                "MODEL": " IQ8S",
                "TYPE": "ATMOS",
                "PRICE": 21000,
                "COUNT": "1"
            },
            {
                "BRAND": "ORBID SOUND"
            },
            {
                "MODEL": "TELESTO",
                "TYPE": "LEFT RIGHT",
                "PRICE": 500000,
                "COUNT": "2"
            },
            {
                "MODEL": "JUPITER",
                "TYPE": "LEFT RIGHT",
                "PRICE": 740000,
                "COUNT": "2"
            },
            {
                "MODEL": "BIG CINEMA CENTER",
                "TYPE": "CENTER",
                "PRICE": 310000,
                "COUNT": "1"
            },
            {
                "MODEL": "KOMET",
                "TYPE": "SURROUND",
                "PRICE": 115000,
                "COUNT": "1"
            },
            {
                "MODEL": "TERRA III",
                "TYPE": "SUB",
                "PRICE": 298000,
                "COUNT": "1"
            },
            {
                "MODEL": "TERRA II",
                "TYPE": "SUB",
                "PRICE": 235000,
                "COUNT": "1"
            },
            {
                "MODEL": "SS82 ",
                "TYPE": "ATMOS",
                "PRICE": 38000,
                "COUNT": "1"
            },
            {
                "MODEL": " IQ8S",
                "TYPE": "ATMOS",
                "PRICE": 21000,
                "COUNT": "1"
            },
            {
                "BRAND": "SYSTEM AUDIO "
            },
            {
                "MODEL": "SIGNATURE 6",
                "TYPE": "SURROUND",
                "PRICE": 91000,
                "COUNT": "1"
            },
            {
                "MODEL": "SS82 ",
                "TYPE": "ATMOS ",
                "PRICE": 38000,
                "COUNT": "1"
            },
            {
                "MODEL": " IQ8S",
                "TYPE": "ATMOS ",
                "PRICE": 21000,
                "COUNT": "1"
            }
        ]
    ]
  // Add 7.1, 9.1, 11.1, etc.
};

const UploadSurrounds = () => {
  const uploadData = async () => {
    try {
      for (const [collectionName, [items]] of Object.entries(jsonData)) {
        let currentBrand = "";

        for (const item of items) {
          if (item.BRAND) {
            currentBrand = item.BRAND.trim();
          } else {
            const docData = {
              BRAND: currentBrand,
              MODEL: item.MODEL?.trim(),
              TYPE: item.TYPE?.trim(),
              PRICE: item.PRICE ?? null,
              COUNT: item.COUNT?.trim()
            };
            await addDoc(collection(db, collectionName), docData);
            console.log(`Uploaded to ${collectionName}:`, docData);
          }
        }
      }
      alert("Upload successful!");
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed!");
    }
  };


  return (
    <div className="p-4">
      <button
        onClick={uploadData}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Upload Surround Configs to Firebase
      </button>
    </div>
  );
};

export default UploadSurrounds;
