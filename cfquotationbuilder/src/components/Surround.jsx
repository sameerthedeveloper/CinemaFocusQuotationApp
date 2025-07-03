import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // ✅ correct import
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBJLLh74xMFOLwl67agdd6imcl3ZIglBG8",
  authDomain: "cinemafocusinventory.firebaseapp.com",
  projectId: "cinemafocusinventory",
  storageBucket: "cinemafocusinventory.firebasestorage.app",
  messagingSenderId: "232322170393",
  appId: "1:232322170393:web:296907062efd7ec75a7488",
  measurementId: "G-23G7G2N3PX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Surround() {
  const [data, setData] = useState([]);
  const [LR ,setLR] = useState();
  const [center, setCenter] = useState();
  const [surround, setSurround] = useState();
  const [sub, setSub] = useState();
  const { type } = useParams(); // ✅ use lowercase 'type'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, type));
        const formatted = snapshot.docs.map(doc => doc.data());
        setData(formatted);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    if (type) fetchData();
  }, [type]);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">{type} Surround System</h2>

      <p className="font-semibold">Center</p>
      {data.filter(item => item.TYPE === 'CENTER').map((item, i) => (
        <div key={`center-${i}`} className="mb-4 p-4 border rounded shadow">
          <p>{item.MODEL}</p>
        </div>
      ))}

      <p className="font-semibold">L&R</p>
      {data.filter(item => item.TYPE === 'LEFT RIGHT').map((item, i) => (
        <div key={`lr-${i}`} className="mb-4 p-4 border rounded shadow">
          <p>{item.MODEL}</p>
        </div>
      ))}

      <p className="font-semibold">Surround</p>
      {data.filter(item => item.TYPE === 'SURROUND').map((item, i) => (
        <div key={`surround-${i}`} className="mb-4 p-4 border rounded shadow">
          <p>{item.MODEL}</p>
        </div>
      ))}

      <p className="font-semibold">Sub</p>
      {data.filter(item => item.TYPE === 'SUB').map((item, i) => (
        <div key={`sub-${i}`} className="mb-4 p-4 border rounded shadow">
          <p>{item.MODEL}</p>
        </div>
      ))}
    </div>
  );
}

export default Surround;
