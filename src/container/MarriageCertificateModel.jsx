"use client";
import { useState } from "react";
import { useSaveData } from "../app/hooks/useSaveData";
// model
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Textarea from "@mui/joy/Textarea";
import "@/container/modelstyles.css";
import { useRouter } from "next/navigation";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  color: "#000",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: "80vh",
  overflowY: "auto",
};

export default function MarriageCertificateModel({ marriage, setMarriage }) {
  const router = useRouter();
  const { saveData } = useSaveData();
  const [textArea, setTextArea] = useState("");
  const [placeOfMarriage, setPlaceOfMarriage] = useState("");
  const [DateOfMarriage, setDateOfMarriage] = useState("");

  const [groomChristianName, setGroomChristianName] = useState("");
  const [groomsurName, setGroomSurName] = useState("");
  const [groomage, setGroomAge] = useState("");
  const [groomcondition, setGroomCondition] = useState("");
  const [groomrank, setGroomRank] = useState("");
  const [groomresidence, setGroomResidence] = useState("");
  const [groomfatherName, setGroomFatherName] = useState("");
  const [groommotherName, setGroomMotherName] = useState("");
  const [groomfirstWitness, setGroomFirstWitness] = useState("");
  const [groomsecondWitness, setGroomSecondWitness] = useState("");

  const [brideChristianName, setBrideChristianName] = useState("");
  const [brideSurName, setBrideSurName] = useState("");
  const [brideage, setBrideAge] = useState("");
  const [brideCondition, setBrideCondition] = useState("");
  const [brideRank, setBrideRank] = useState("");
  const [brideResidence, setBrideResidence] = useState("");
  const [brideFatherName, setBrideFatherName] = useState("");
  const [brideMotherName, setBrideMotherName] = useState("");
  const [brideFirstWitness, setBrideFirstWitness] = useState("");
  const [brideSecondWitness, setBrideSecondWitness] = useState("");

  const tabs = ["Groom", "Bride"];
  const [tabActive, setTabActive] = useState("Groom");

  const renderPage = () => {
    switch (tabActive) {
      case "Groom":
        return <Groom />;
      case "Bride":
        return <Bride />;
      default:
        return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      textArea,
      placeOfMarriage,
      DateOfMarriage,
      groomChristianName,
      groomsurName,
      groomage,
      groomcondition,
      groomrank,
      groomresidence,
      groomfatherName,
      groommotherName,
      groomfirstWitness,
      groomsecondWitness,
      brideChristianName,
      brideSurName,
      brideage,
      brideCondition,
      brideRank,
      brideResidence,
      brideFatherName,
      brideMotherName,
      brideFirstWitness,
      brideSecondWitness,
    };
    try {
      const fileName = "MarriageCertificate.json";
      const response = await fetch(`/api/dataHandler?fileName=${fileName}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result.message);
      router.push(`/MarriageCertificate/${result.id}`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClose = () => setMarriage(false);

  const Groom = () => {
    return (
      <div className="keptAt">
        <div className="keptAtChilde">
          <label htmlFor="christianName" className="text-gray-700 font-bold">
            Christian Name
          </label>
          <input
            type="text"
            id="christianName"
            name="christianName"
            className="input"
            value={groomChristianName}
            onChange={(e) => setGroomChristianName(e.target.value)}
          />
        </div>
        <div className="keptAtChilde">
          <label
            htmlFor="surname"
            className="text-gray-700 font-bold mb-2 ml-2"
          >
            Surname / Common Name
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            className="input"
            value={groomsurName}
            onChange={(e) => setGroomSurName(e.target.value)}
          />
        </div>

        <div className="keptAtChilde">
          <label htmlFor="age" className="text-gray-700 font-bold">
            Age
          </label>
          <input
            type="text"
            id="age"
            name="age"
            className="input"
            value={groomage}
            onChange={(e) => setGroomAge(e.target.value)}
          />
        </div>
        <div className="keptAtChilde">
          <label
            htmlFor="condition"
            className="text-gray-700 font-bold mb-2 ml-2"
          >
            Condition
          </label>
          <input
            type="text"
            id="condition"
            name="condition"
            className="input"
            value={groomcondition}
            onChange={(e) => setGroomCondition(e.target.value)}
          />
        </div>

        <div className="keptAtChilde">
          <label htmlFor="rank" className="text-gray-700 font-bold">
            Rank of Profession
          </label>
          <input
            type="text"
            id="rank"
            name="rank"
            className="input"
            value={groomrank}
            onChange={(e) => setGroomRank(e.target.value)}
          />
        </div>
        <div className="keptAtChilde">
          <label
            htmlFor="residence"
            className="text-gray-700 font-bold mb-2 ml-2"
          >
            Residence at the time of Marriage
          </label>
          <input
            type="text"
            id="residence"
            name="residence"
            className="input"
            value={groomresidence}
            onCanPlay={(e) => setGroomResidence(e.target.value)}
          />
        </div>

        <div className="keptAtChilde">
          <label
            htmlFor="fatherName"
            className="text-gray-700 font-bold mb-2 ml-2"
          >
            Father Name
          </label>
          <input
            type="text"
            id="fatherName"
            name="fatherName"
            className="input"
            value={groomfatherName}
            onChange={(e) => setGroomFatherName(e.target.value)}
          />
        </div>
        <div className="keptAtChilde">
          <label htmlFor="motherName" className="text-gray-700 font-bold">
            Mother Name
          </label>
          <input
            type="text"
            id="motherName"
            name="motherName"
            className="input"
            value={groommotherName}
            onChange={(e) => setGroomMotherName(e.target.value)}
          />
        </div>
        {/* <h1 className="heading">Name of Witness with Address</h1> */}
        <div className="keptAtChilde">
          <label htmlFor="firstWitness" className="text-gray-700 font-bold">
            First Witness
          </label>
          <Textarea
            minRows={3}
            placeholder="Enter Name and Address"
            className="textarea"
            value={groomfirstWitness}
            onChange={(e) => setGroomFirstWitness(e.target.value)}
          />
        </div>
        <div className="keptAtChilde">
          <label
            htmlFor="secondWitness"
            className="text-gray-700 font-bold mb-2 ml-2"
          >
            Second Witness
          </label>
          <Textarea
            minRows={3}
            placeholder="Enter Name and Address"
            className="textarea"
            value={groomsecondWitness}
            onChange={(e) => setGroomSecondWitness(e.target.value)}
          />
        </div>
      </div>
    );
  };
  const Bride = () => {
    return (
      <div className="keptAt">
        <div className="keptAtChilde">
          <label htmlFor="christianName" className="text-gray-700 font-bold">
            Christian Name
          </label>
          <input
            type="text"
            id="christianName"
            name="christianName"
            className="input"
            value={brideChristianName}
            onChange={(e) => setBrideChristianName(e.target.value)}
          />
        </div>
        <div className="keptAtChilde">
          <label
            htmlFor="surname"
            className="text-gray-700 font-bold mb-2 ml-2"
          >
            Surname / Common Name
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            className="input"
            value={brideSurName}
            onChange={(e) => setBrideSurName(e.target.value)}
          />
        </div>

        <div className="keptAtChilde">
          <label htmlFor="age" className="text-gray-700 font-bold">
            Age
          </label>
          <input
            type="text"
            id="age"
            name="age"
            className="input"
            value={brideage}
            onChange={(e) => setBrideAge(e.target.value)}
          />
        </div>
        <div className="keptAtChilde">
          <label
            htmlFor="condition"
            className="text-gray-700 font-bold mb-2 ml-2"
          >
            Condition
          </label>
          <input
            type="text"
            id="condition"
            name="condition"
            className="input"
            value={brideCondition}
            onChange={(e) => setBrideCondition(e.target.value)}
          />
        </div>

        <div className="keptAtChilde">
          <label htmlFor="rank" className="text-gray-700 font-bold">
            Rank of Profession
          </label>
          <input
            type="text"
            id="rank"
            name="rank"
            className="input"
            value={brideRank}
            onChange={(e) => setBrideRank(e.target.value)}
          />
        </div>
        <div className="keptAtChilde">
          <label
            htmlFor="residence"
            className="text-gray-700 font-bold mb-2 ml-2"
          >
            Residence at the time of Marriage
          </label>
          <input
            type="text"
            id="residence"
            name="residence"
            className="input"
            value={brideResidence}
            onChange={(e) => setBrideResidence(e.target.value)}
          />
        </div>

        <div className="keptAtChilde">
          <label
            htmlFor="fatherName"
            className="text-gray-700 font-bold mb-2 ml-2"
          >
            Father Name
          </label>
          <input
            type="text"
            id="fatherName"
            name="fatherName"
            className="input"
            value={brideFatherName}
            onChange={(e) => setBrideFatherName(e.target.value)}
          />
        </div>
        <div className="keptAtChilde">
          <label htmlFor="motherName" className="text-gray-700 font-bold">
            Mother Name
          </label>
          <input
            type="text"
            id="motherName"
            name="motherName"
            className="input"
            value={brideMotherName}
            onChange={(e) => setBrideMotherName}
          />
        </div>
        {/* <h1 className="heading">Name of Witness with Address</h1> */}
        <div className="keptAtChilde">
          <label htmlFor="firstWitness" className="text-gray-700 font-bold">
            First Witness
          </label>
          <Textarea
            minRows={3}
            placeholder="Enter Name and Address"
            className="textarea"
            value={brideFirstWitness}
            onChange={(e) => setBrideFirstWitness(e.target.value)}
          />
        </div>
        <div className="keptAtChilde">
          <label
            htmlFor="secondWitness"
            className="text-gray-700 font-bold mb-2 ml-2"
          >
            Second Witness
          </label>
          <Textarea
            minRows={3}
            placeholder="Enter Name and Address"
            className="textarea"
            value={brideSecondWitness}
            onChange={(e) => setBrideSecondWitness(e.target.value)}
          />
        </div>
      </div>
    );
  };
  return (
    <>
      <div>
        <Modal
          open={marriage}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black">
              <div className="bg-white p-8 rounded-lg shadow-md w-full">
                <h2 className="text-2xl font-bold mb-6 text-center">
                  Marriage Certificate
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="keptAttextarea mb-4">
                    <label htmlFor="keptAt" className="text-gray-700 font-bold">
                      KEPT AT
                    </label>
                    <Textarea
                      className="textarea"
                      minRows={2}
                      placeholder="Type anything…"
                      value={textArea}
                      onChange={(e) => setTextArea(e.target.value)}
                    />
                  </div>

                  <div className="keptAt mb-4">
                    <div className="keptAtChilde">
                      <label
                        htmlFor="placeOfMarriage"
                        className="text-gray-700 font-bold mb-2 ml-2"
                      >
                        Place Of Marriage
                      </label>
                      <input
                        type="text"
                        id="placeOfMarriage"
                        name="placeOfMarriage"
                        className="input"
                        value={placeOfMarriage}
                        onChange={(e) => setPlaceOfMarriage(e.target.value)}
                      />
                    </div>
                    <div className="keptAtChilde">
                      <label
                        htmlFor="dateOfMarriage"
                        className="text-gray-700 font-bold mb-2 ml-2"
                      >
                        Date Of Marriage
                      </label>
                      <input
                        type="date"
                        id="dateOfMarriage"
                        name="date"
                        className="input"
                        value={DateOfMarriage}
                        onChange={(e) => setDateOfMarriage(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="Tab">
                    {tabs.map((val, idx) => (
                      <h1
                        className="heading"
                        onClick={() => setTabActive(val)}
                        key={idx}
                        style={{
                          background: `${tabActive == val ? "lightgray" : ""}`,
                        }}
                      >
                        {val}
                      </h1>
                    ))}
                  </div>
                  {renderPage()}
                  <button
                    type="submit"
                    style={{ float: "right", margin: "10px" }}
                    className=" w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}
