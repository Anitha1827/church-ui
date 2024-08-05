"use client";
import React, { useEffect, useState } from "react";
import "./page.css";
import { usePathname, useRouter } from "next/navigation";

const LetterPad = () => {
  const [data, setData] = useState({});
  let router = useRouter();

  const useParams = () => {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);
    return {
      id: segments[1],
    };
  };
  const { id } = useParams();
  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fileName = "LetterPad.json";
        const response = await fetch(`/api/dataHandler?fileName=${fileName}`);
        const result = await response.json();
        result.map((val, idx) => {
          console.log(val.id, id);
          if (val.id === id) {
            setData(val);
          }
        });
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };
    fetchData();
  }, []);

  // print functionalities
  const handlePrint = () => {
    window.print();
  };

  const handleHome = () => {
    router.push("/");
  };
  console.log(data);
  return (
    <page size="A4" class="parent">
      <div>
        <button
          onClick={handlePrint}
          className="px-4 py-2 m-3 bg-pink-500 text-white rounded hover:bg-pink-700 transition-colors duration-200"
        >
          Print
        </button>
        <button
          onClick={handleHome}
          className="px-4 py-2 m-3 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200"
        >
          Home
        </button>
      </div>
      <div class="wid">
        <div class="head">
          <h1 style={{ fontWeight: "bold", fontSize: "30px" }}>
            ST.ANTONY`S CHURCH
          </h1>
          <br />
          <h3 style={{ fontWeight: "bold" }}>
            Konnaikudi, Anbil (Via),Trichy-621 702.
          </h3>
          <br />
        </div>
        <div class="let">
          <br />
          <h3 style={{ color: "#5D3FD3", fontWeight: "bold" }}>
            Rev. Fr. A. Williams
          </h3>
          <br />
          <p>Parish Priest</p>
          <br />
          <p>9626639044</p>
          <br />
        </div>
        <div
          style={{
            marginTop: "8%",
            padding: "17px",
            fontStyle: data.fontStyle,
            fontWeight: data.fontWeight,
            fontSize: data.fontSize,
            textAlign: data.textAlign,
          }}
        >
          {data.textarea}
        </div>
      </div>
    </page>
  );
};

export default LetterPad;
