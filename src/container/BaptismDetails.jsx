"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import EditBaptismModel from "./EditBaptismModel";

const BaptismDetails = () => {
    //Date formate
  const convertIdToDate = (id) => {
    const [datePart, timePart] = id.split("-").slice(1);
    const year = datePart.slice(0, 4);
    const month = datePart.slice(4, 6);
    const day = datePart.slice(6, 8);
    return `${year}-${month}-${day}`;
  };

  const [data, setData] = useState([]);
  let router = useRouter();
  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fileName = "Baptism.json";
        const response = await fetch(`/api/dataHandler?fileName=${fileName}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };
    fetchData();
  }, []);
  const [editbaptism, setEditBaptism] = useState(false);
  // Functions for View, Edit, and Delete
  const handleView = (id) => {
    console.log("View data with ID:", id);
    router.push(`/BaptismCertificate/${id}`);
  };

  const [editdata, setEditData] = useState();

  const handleEdit = async (data) => {
    console.log("Edit data with ID:", data);
    setEditData(data);
    setEditBaptism(true);
  };

  const handleDelete = async (id) => {
    try {
      const fileName = "Baptism.json";
      await fetch(`/api/dataHandler?fileName=${fileName}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      // Remove deleted item from state
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Failed to delete data", error);
    }
  };
  return (
    <>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Sl. No</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Date of Register</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, idx) => (
            <tr key={idx}>
              <td className="py-2 px-4 border-b text-center">{idx + 1}</td>
              <td className="py-2 px-4 border-b text-center">{val.name}</td>
              <td className="py-2 px-4 border-b text-center">
                {convertIdToDate(val.id)}
              </td>
              <td className="py-2 px-4 border-b text-center">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => handleView(val.id)}
                >
                  View
                </button>
                <button
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => handleEdit(val)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(val.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editdata && (
        <EditBaptismModel
          editbaptism={editbaptism}
          setEditBaptism={setEditBaptism}
          data={editdata}
        />
      )}
    </>
  );
};

export default BaptismDetails;
