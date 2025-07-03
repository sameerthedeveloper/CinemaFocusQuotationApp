import React, { useEffect, useState } from 'react';
import { db, auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';

function Audio({ type }) {
  const [user, setUser] = useState(null);
  const [speakerData, setSpeakerData] = useState({});

  useEffect(() => {
    signInWithEmailAndPassword(auth, 'demo@gmail.com', '123456')
      .then((cred) => setUser(cred.user))
      .catch((err) => console.error("Login failed:", err));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!type) return;
      try {
        const colRef = collection(db, type);
        const snapshot = await getDocs(colRef);
        const categorized = {};
        snapshot.docs.forEach(doc => {
          const data = doc.data();
          if (!categorized[data.TYPE]) categorized[data.TYPE] = [];
          categorized[data.TYPE].push(data);
        });
        setSpeakerData(categorized);
      } catch (err) {
        console.error('Fetching error:', err);
      }
    };
    fetchData();
  }, [type]);

  const renderSelect = (label, speakerType) => (
    <div className='m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md'>
      <div>
        <h1 className='font-semibold text-md'>{label}</h1>
      </div>
      <div className='flex-1 mt-2 bg-amber-100 p-3 rounded-xl shadow border border-black flex justify-center items-center'>
        <select className='bg-amber-100 w-full text-sm font-medium outline-none text-center'>
          <option disabled selected>Select The Model</option>
          {(speakerData[speakerType] || []).map((item, idx) => (
            <option key={idx}>{item.MODEL}</option>
          ))}
        </select>
      </div>
    </div>
  );

  if (!user) return <div className='text-center mt-10'>Logging in...</div>;

  return (
    <div className='mb-20'>
      {type === '5.1' && (
        <>
          {renderSelect('Left & Right', 'LEFT/RIGHT')}
          {renderSelect('Center Speaker', 'CENTER')}
          {renderSelect('Surround', 'SURROUND')}
          {renderSelect('Subwoofer', 'SUBWOOFER')}
        </>
      )}

      {type === '7.1' && (
        <>
          {renderSelect('Left & Right', 'LEFT/RIGHT')}
          {renderSelect('Center Speaker', 'CENTER')}
          {renderSelect('Rear Surround', 'REAR SURROUND')}
          {renderSelect('Rear Back Surround', 'REAR BACK SURROUND')}
          {renderSelect('Atmos', 'ATMOS')}
          {renderSelect('Subwoofer', 'SUBWOOFER')}
        </>
      )}

      {type === '7.2' && (
        <>
          {renderSelect('Left & Right', 'LEFT/RIGHT')}
          {renderSelect('Center Speaker', 'CENTER')}
          {renderSelect('Surround', 'SURROUND')}
          {renderSelect('Rear Surround', 'REAR SURROUND')}
          {renderSelect('Subwoofer', 'SUBWOOFER')}
        </>
      )}

      {['9.1', '9.2', '11.1', '11.2', '13.1', '13.2'].includes(type) && (
        <div className='m-5 p-4 border-1 border-gray-400 rounded-xl shadow-md'>No data implemented for this layout.</div>
      )}

      {renderSelect('Amplifier', 'AMPLIFIER')}
      {renderSelect('Projector', 'PROJECTOR')}
      {renderSelect('Signature Screen', 'SCREEN')}
    </div>
  );
}

export default SurroundSpeakers;
