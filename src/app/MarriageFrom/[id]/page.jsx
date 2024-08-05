"use client";
import React, { useEffect, useState } from "react";
import "./page.css";
import { usePathname, useRouter } from "next/navigation";
import img from "./mform.png";
import Image from "next/image";

const MarriageForm = () => {
  let router = useRouter();
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
        const fileName = "MarriageForm.json";
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

  console.log("51", data);
  return (
    <div className="parent" size="A4" layout="landscape">
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

      <div class="wid" id="printable-form">
        <div class="head" align="center">
          <h1>ST.ANTONY`S CHURCH</h1>
          <br />
          <h3>Konnaikudi, Anbil (Via),Trichy-621 702.</h3>
          <br />
          <br />
        </div>
        <br />
        <table>
          <tr>
            <td>
              <label>Our Ref. No.</label>
            </td>
            <td>
              <input disabled class="foot" type="text" value={data.refno} />
            </td>
            <td class="lab">
              <label>Date:</label>
            </td>
            <td>
              <input
                disabled
                class="foot"
                type="text"
                value={convertIdToDate(id)}
              />
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>Parish</label>
            </td>
            <td>
              <input disabled class="foot" type="text" value={data.parish} />
            </td>
            <td>
              <label class="lab">Your Ref. No.</label>
            </td>
            <td>
              <input disabled class="foot" type="text" value={data.yourRefNo} />
            </td>
          </tr>
          <br />
        </table>

        <p>Dear. Rev. Father</p>
        <Image src={img} alt="form text"></Image>
        <br />
        <table>
          <tr>
            <td class="label">
              <label>Mr.</label>
            </td>
            <td>
              <input disabled class="text" type="text" value={data.mr} />
            </td>
            <td class="label">
              <label>With</label>
            </td>
            <td>
              <input
                disabled
                class="text"
                type="text"
                value={data.daughterwith}
              />
            </td>
          </tr>
          <br />
          <tr>
            <td class="label">
              <label>Son of</label>
            </td>
            <td>
              <input disabled class="text" type="text" value={data.soneOf} />
            </td>
            <td class="label">
              <label>Daughter of</label>
            </td>
            <td>
              <input
                disabled
                class="text"
                type="text"
                value={data.daughterOf}
              />
            </td>
          </tr>
          <br />
          <tr>
            <td class="label">
              <label>From</label>
            </td>
            <td>
              <input disabled class="text" type="text" value={data.from} />
            </td>
            <td class="label">
              <label>From</label>
            </td>
            <td>
              <input
                disabled
                class="text"
                type="text"
                value={data.daughterfrom}
              />
            </td>
          </tr>
          <br />
          <tr>
            <td class="label">
              <label>of the parish</label>
            </td>
            <td>
              <input
                disabled
                class="text"
                type="text"
                value={data.oftheparishof}
              />
            </td>
            <td class="label">
              <label>of the parish</label>
            </td>
            <td>
              <input
                disabled
                class="text"
                type="text"
                value={data.daughteroftheparishof}
              />
            </td>
          </tr>
          <br />
          <tr>
            <td class="label">
              <label>in the Diocese of</label>
            </td>
            <td>
              <input disabled class="text" type="text" value={data.dioces} />
            </td>
            <td class="label">
              <label>in the Diocese of</label>
            </td>
            <td>
              <input
                disabled
                class="text"
                type="text"
                value={data.daughterdioces}
              />
            </td>
          </tr>
          <br />
          <tr>
            <td class="label">
              <label>Born on</label>
            </td>
            <td>
              <input disabled class="text" type="text" value={data.bornOn} />
            </td>
            <td class="label">
              <label>Born On</label>
            </td>
            <td>
              <input
                disabled
                class="text"
                type="text"
                value={data.daughterbornOn}
              />
            </td>
          </tr>
          <br />
          <tr>
            <td class="label">
              <label>Baptized at</label>
            </td>
            <td>
              <input disabled class="text" type="text" value={data.baptized} />
            </td>
            <td class="label">
              <label>Baptized at</label>
            </td>
            <td>
              <input
                disabled
                class="text"
                type="text"
                value={data.daughterbaptized}
              />
            </td>
          </tr>
          <br />
          <tr>
            <td class="label">
              <label>On</label>
            </td>
            <td>
              <input disabled class="text" type="text" value={data.on} />
            </td>
            <td class="label">
              <label>On</label>
            </td>
            <td>
              <input
                disabled
                class="text"
                type="text"
                value={data.daughteron}
              />
            </td>
          </tr>
          <br />
        </table>
        <br />
        <div>
          <label>Impediment</label>
          <input disabled class="imp" type="text" value={data.impediment} />
        </div>
        <br />
        <br />
        <div>
          <label>Banns will be published in this parish on I</label>
          <input disabled class="foo" type="text" value={data.banns} />
          <label>II</label>
          <input disabled class="foo" type="text" value={data.bannsSecond} />
          <label>III</label>
          <input disabled class="foo" type="text" value={data.bannsThird} />
        </div>
        <br />
        <div>
          <label>Marriage is to celebrated on</label>
          <input disabled class="foot" type="text" value={data.celebration} />
        </div>
        <br />
        <div style={{ paddingLeft: "50px" }}>
          <label>at</label>
          <input disabled class="foot" type="text" value={data.format} />
        </div>
      </div>
    </div>
  );
};

export default MarriageForm;
