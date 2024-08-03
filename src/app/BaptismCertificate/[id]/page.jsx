"use client";
import React, { useEffect, useState } from "react";
import "./certificate.css";
import { usePathname } from "next/navigation";

const Baptism = () => {
   //Date formate
   const convertIdToDate = (id) => {
    const [datePart, timePart] = id.split('-').slice(1);
    const year = datePart.slice(0, 4);
    const month = datePart.slice(4, 6);
    const day = datePart.slice(6, 8);
    return `${year}-${month}-${day}`;
  };

  const [data, setData] = useState({});

  const useParams = () => {
    const pathname = usePathname();
    const segments = pathname.split('/').filter(Boolean);
    return {
      id: segments[1],
    };
  };
  const { id } = useParams();
  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fileName = "Baptism.json";
        const response = await fetch(`/api/dataHandler?fileName=${fileName}`);
        const result = await response.json();
        result.map((val, idx) => {
          console.log(val.id, id)
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

  console.log(data);
  return (
    <>
      <div  className='parent'>
        <div class="wid">
            <div class="head" align="center">
                <h1>ST.ANTONY`S CHURCH</h1>
                <h3>Konnaikudi, Anbil (Via),Trichy-621 702.</h3>
            </div>

            <h2 align="center">BAPTISM CERTIFICATE</h2><br/>
            <table align="center">
                <tr>
                    <td>
                        <label>1.Name</label>
                    </td>
                    <td>
                        <input class="short" disabled type="text" value={data.name}/>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td>
                        <label>2.Sex</label>
                    </td>
                    <td>
                        <input class="short" disabled type="text" value={data.sex}/>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td>
                        <label>3.Date of Birth</label>
                    </td>
                    <td>
                        <input class="short" disabled type="text" value={data.dateOfBirth}/>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td>
                        <label>4.Place of Birth</label>
                    </td>
                    <td>
                        <input class="short" disabled type="text" value={data.placeOfBirth}/>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td>
                        <label>5.Date of Baptism</label>
                    </td>
                    <td>
                        <input class="short" disabled type="text" value={data.dateOfBaptism}/>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td>
                        <label>6.Place of Baptism</label>
                    </td>
                    <td>
                        <input class="short" disabled type="text" value={data.placeOfBaptism}/>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td>
                        <label>7.Fathers Name</label>
                    </td>
                    <td>
                        <input class="short" disabled type="text" value={data.fatherName}/>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td>
                        <label>8.Mothers Name</label>
                    </td>
                    <td>
                        <input class="short" disabled type="text" value={data.motherName}/>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td>
                        <label>9.Residence of Parents</label>
                    </td>
                    <td>
                        <input class="short" disabled type="text" value={data.residence}/>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td>
                        <label>10.Caste</label>
                    </td>
                    <td>
                        <input class="short" disabled type="text" value={data.caste}/>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td>
                        <label>11.Godfather`s Name</label>
                    </td>
                    <td>
                        <input class="short" disabled type="text" value={data.godFather}/>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td>
                        <label>12.Godmothers`s Name</label>
                    </td>
                    <td>
                        <input class="short" disabled type="text" value={data.godMother}/>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td>
                        <label>13.Minister of Baptism</label>
                    </td>
                    <td>
                        <input class="short" disabled type="text" value={data.Minister}/>
                    </td>
                </tr>
                <br/>
            </table>
            <br/><br/>
            <p class="font">Certified that this is a true copy of an entry in the register of baptism </p>
            <label class="font">kept at</label>
            <input disabled class="long" type="text" value={data.textArea}/><br/><br/><br/>
            <label>Date:</label>
            <input disabled class="date" type="text" value={convertIdToDate(id)}/><br/><br/>
        </div>
    </div>
    </>
  );
};

export default Baptism;
