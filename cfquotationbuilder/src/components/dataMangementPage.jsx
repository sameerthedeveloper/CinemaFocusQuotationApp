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
  const [versions, setVersions] = useState([]);
  const [form, setForm] = useState({ name: "", value: "" });
  const [editId, setEditId] = useState(null);

  const colRef = collection(db, "surround_versions");

  // Realtime Listener
  useEffect(() => {
    const unsub = onSnapshot(colRef, (snapshot) => {
      const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setVersions(items);
    });

    return () => unsub();
  }, []);

  // Add or Update
  const handleSubmit = async () => {
    if (!form.name || !form.value) return;

    if (editId) {
      const ref = doc(db, "surround_versions", editId);
      await updateDoc(ref, form);
      setEditId(null);
    } else {
      await addDoc(colRef, form);
    }

    setForm({ name: "", value: "" });
  };

  // Delete
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "surround_versions", id));
  };

  // Edit
  const handleEdit = (item) => {
    setForm({ name: item.name, value: item.value });
    setEditId(item.id);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Surround Version CRUD</h2>

      <div className="mb-4">
        <input
          name="name"
          placeholder="e.g. 5.1 Surround"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          name="value"
          placeholder="e.g. 5.1"
          value={form.value}
          onChange={(e) => setForm({ ...form, value: e.target.value })}
          className="border p-2 mr-2"
        />
        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
          {editId ? "Update" : "Add"}
        </button>
      </div>

      <ul>
        {versions.map((item) => (
          <li key={item.id} className="mb-2 flex justify-between items-center">
            <span>{item.name} ({item.value})</span>
            <div>
              <button onClick={() => handleEdit(item)} className="text-blue-500 mr-2">Edit</button>
              <button onClick={() => handleDelete(item.id)} className="text-red-500">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default dataMangementPage;
