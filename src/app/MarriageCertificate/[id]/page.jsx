"use client";
import React, { useEffect, useState } from "react";
import "./certificate.css";
import { usePathname, useRouter } from "next/navigation";

const MarriageCertificate = () => {
  const router = useRouter();
  //Date formate
  const convertIdToDate = (id) => {
    const [datePart, timePart] = id.split("-").slice(1);
    const year = datePart.slice(0, 4);
    const month = datePart.slice(4, 6);
    const day = datePart.slice(6, 8);
    return `${year}-${month}-${day}`;
  };

  const [data, setData] = useState({});
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
        const fileName = "MarriageCertificate.json";
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
  }, [id]);

  console.log(data);
  // print functionalities
  const handlePrint = () => {
    window.print();
  };

  const handleHome = () => {
    router.push("/");
  };
  return (
    <>
      <div className="parent">
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
        <div className="wid">
          <div className="head" align="center">
            <h1 style={{ fontWeight: "bold", fontSize: "30px" }}>
              ST.ANTONY`S CHURCH
            </h1>
            <br/>
            <h3 style={{ fontWeight: "bold" }}>
              Konnaikudi, Anbil (Via),Trichy-621 702.
            </h3>{" "}
            <br />
          </div>
          <h2 align="center" style={{ fontWeight: "bold", fontSize: "20px" }}>
            Marriage Certificate
          </h2>
          <br />
          <form>
            <label>Kept It</label>
            <input className="kep" disabled="text" value={data.textArea} />
            <br />
            <br />
            <input className="kept" disabled="text" />
            <br />
            <br />
            <input className="kept" disabled="text" />
            <br />
            <br />
            <br />
            <label>Date of Marriage</label>
            <input disabled type="text" value={data.DateOfMarriage} />
            <label>Place of Marriage</label>
            <input disabled type="text" value={data.placeOfMarriage} />
          </form>
          <br />
          <br />
          <div>
            <table>
              <tr>
                <th colSpan="2"></th>
                <th>Bridegroom</th>
                <th>Bride</th>
              </tr>
              <tr>
                <td colSpan="2">Christian Name</td>
                <td>{data.groomChristianName}</td>
                <td>{data.brideChristianName}</td>
              </tr>
              <tr>
                <td colspan="2">Surname/Common Name</td>
                <td>{data.groomsurName}</td>
                <td>{data.brideSurName}</td>
              </tr>
              <tr>
                <td colSpan="2">Age</td>
                <td>{data.groomage}</td>
                <td>{data.brideage}</td>
              </tr>
              <tr>
                <td colSpan="2">Condition</td>
                <td>{data.groomcondition}</td>
                <td>{data.brideCondition}</td>
              </tr>
              <tr>
                <td colSpan="2">Rank of Profession</td>
                <td>{data.groomrank}</td>
                <td>{data.brideRank}</td>
              </tr>
              <tr>
                <td colSpan="2">Residence at the time of Marriage</td>
                <td>{data.groomresidence}</td>
                <td>{data.brideResidence}</td>
              </tr>
              <tr>
                <td rowSpan="2">Name of Parents</td>
                <td>Father</td>
                <td>{data.groomfatherName}</td>
                <td>{data.brideFatherName}</td>
              </tr>
              <tr>
                <td>Mother</td>
                <td>{data.groommotherName}</td>
                <td>{data.brideMotherName}</td>
              </tr>
              <tr>
                <td rowSpan="3">Name of the Witness and Addresses</td>
                <td>1.</td>
                <td>{data.groomfirstWitness}</td>
                <td>{data.brideFirstWitness}</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>{data.groomsecondWitness}</td>
                <td>{data.brideSecondWitness}</td>
              </tr>
            </table>
          </div>
          <br />
          <br />

          <label>Name of the Minister by whom the Ceremony is performed:</label>
          <input disabled className="foot" type="text" />
          <br />
          <br />
          <p className="font">
            I Certify that the above extract is a true copy
          </p>
          <label>Date: </label>
          <input
            disabled
            className="date"
            type="text"
            value={convertIdToDate(id)}
          />
        </div>
      </div>
    </>
  );
};

export default MarriageCertificate;
