"use client";
import { useState } from "react";
import { useSaveData } from "../app/hooks/useSaveData";
// model
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Textarea } from "@mui/joy";

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

const EditBaptismModel = ({ editbaptism, setEditBaptism, data }) => {
  const { saveData } = useSaveData();
  const [name, setName] = useState(data.name || "");
  const [sex, setSex] = useState(data.sex || "");
  const [dateOfBirth, setDateOfBirth] = useState(data.dateOfBirth || "");
  const [placeOfBirth, setPlaceOfBirth] = useState(data.placeOfBirth || "");
  const [dateOfBaptism, setDateOfBaptism] = useState(data.dateOfBaptism || "");
  const [placeOfBaptism, setPlaceOfBaptism] = useState(data.placeOfBaptism || "");
  const [fatherName, setFatherName] = useState(data.fatherName || "");
  const [motherName, setMotherName] = useState(data.motherName || "");
  const [residence, setResidence] = useState(data.residence || "");
  const [caste, setCaste] = useState(data.caste || "");
  const [godFather, setGodFather] = useState(data.godFather || "");
  const [godMother, setGodMother] = useState(data.godMother || "");
  const [Minister, setMinister] = useState(data.Minister || "");
  const [textArea, setTextArea] = useState(data.textArea || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updates = {
      name,
      sex,
      dateOfBirth,
      placeOfBirth,
      dateOfBaptism,
      placeOfBaptism,
      fatherName,
      motherName,
      residence,
      caste,
      godFather,
      godMother,
      Minister,
      textArea,
      id: data.id,
    };
    try {
      const fileName = "Baptism.json";
      const response = await fetch(`/api/dataHandler?fileName=${fileName}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: data.id,
          updates,
        }),
      });
      const result = await response.json();
      console.log(result.message);
      handleClose();
      editbaptism();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClose = () => setEditBaptism(false);

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  return (
    <div>
      <Modal
        open={editbaptism}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black">
            <div className="bg-white p-8 rounded-lg shadow-md w-full">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Baptism Certificate
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="keptAt mb-4">
                  <div className="keptAtChilde">
                    <label
                      htmlFor="Name"
                      className="text-gray-700 font-bold mb-2 ml-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="Name"
                      name="Name"
                      value={name}
                      onChange={handleChange(setName)}
                      className="input"
                      required
                    />
                  </div>
                  <div className="keptAtChilde">
                    <label
                      htmlFor="sex"
                      className="text-gray-700 font-bold mb-2 ml-2"
                    >
                      Sex
                    </label>
                    <input
                      type="text"
                      id="sex"
                      name="sex"
                      value={sex}
                      onChange={handleChange(setSex)}
                      className="input"
                      required
                    />
                  </div>
                </div>
                <div className="keptAt mb-4">
                  <div className="keptAtChilde">
                    <label
                      htmlFor="Date"
                      className="text-gray-700 font-bold mb-2 ml-2"
                    >
                      Date Of Birth
                    </label>
                    <input
                      type="text"
                      id="date"
                      name="date"
                      className="input"
                      value={dateOfBirth}
                      onChange={handleChange(setDateOfBirth)}
                      required
                    />
                  </div>
                  <div className="keptAtChilde">
                    <label
                      htmlFor="placeofbirth"
                      className="text-gray-700 font-bold mb-2 ml-2"
                    >
                      Place Of Birth
                    </label>
                    <input
                      type="text"
                      id="placeofbirth"
                      name="placeofbirth"
                      className="input"
                      value={placeOfBirth}
                      onChange={handleChange(setPlaceOfBirth)}
                      required
                    />
                  </div>
                </div>
                <div className="keptAt mb-4">
                  <div className="keptAtChilde">
                    <label
                      htmlFor="dateofbaptism"
                      className="text-gray-700 font-bold mb-2 ml-2"
                    >
                      Date Of Baptism
                    </label>
                    <input
                      type="text"
                      id="dateofbaptism"
                      name="dateofbaptism"
                      className="input"
                      value={dateOfBaptism}
                      onChange={handleChange(setDateOfBaptism)}
                    />
                  </div>
                  <div className="keptAtChilde">
                    <label
                      htmlFor="placeofbaptism"
                      className="text-gray-700 font-bold mb-2 ml-2"
                    >
                      Place Of Baptism
                    </label>
                    <input
                      type="text"
                      id="placeofbaptism"
                      name="placeofbaptism"
                      className="input"
                      value={placeOfBaptism}
                      onChange={handleChange(setPlaceOfBaptism)}
                    />
                  </div>
                </div>
                <div className="keptAt mb-4">
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
                      value={fatherName}
                      onChange={handleChange(setFatherName)}
                    />
                  </div>
                  <div className="keptAtChilde">
                    <label
                      htmlFor="motherName"
                      className="text-gray-700 font-bold mb-2 ml-2"
                    >
                      Mother Name
                    </label>
                    <input
                      type="text"
                      id="motherName"
                      name="motherName"
                      className="input"
                      value={motherName}
                      onChange={handleChange(setMotherName)}
                    />
                  </div>
                </div>
                <div className="keptAt mb-4">
                  <div className="keptAtChilde">
                    <label
                      htmlFor="residence"
                      className="text-gray-700 font-bold mb-2 ml-2"
                    >
                      Residence Of Parents
                    </label>
                    <input
                      type="text"
                      id="residence"
                      name="residence"
                      className="input"
                      value={residence}
                      onChange={handleChange(setResidence)}
                    />
                  </div>
                  <div className="keptAtChilde">
                    <label
                      htmlFor="caste"
                      className="text-gray-700 font-bold mb-2 ml-2"
                    >
                      Caste
                    </label>
                    <input
                      type="text"
                      id="caste"
                      name="caste"
                      className="input"
                      value={caste}
                      onChange={handleChange(setCaste)}
                    />
                  </div>
                </div>
                <div className="keptAt mb-4">
                  <div className="keptAtChilde">
                    <label
                      htmlFor="godfather"
                      className="text-gray-700 font-bold mb-2 ml-2"
                    >
                      Godfather Name
                    </label>
                    <input
                      type="text"
                      id="godfather"
                      name="godfather"
                      className="input"
                      value={godFather}
                      onChange={handleChange(setGodFather)}
                    />
                  </div>
                  <div className="keptAtChilde">
                    <label
                      htmlFor="godmother"
                      className="text-gray-700 font-bold mb-2 ml-2"
                    >
                      GodMother Name
                    </label>
                    <input
                      type="text"
                      id="godmother"
                      name="godmother"
                      className="input"
                      value={godMother}
                      onChange={handleChange(setGodMother)}
                    />
                  </div>
                </div>
                <div className="keptAt mb-4">
                  <div className="keptAtChilde">
                    <label
                      htmlFor="minister"
                      className="text-gray-700 font-bold mb-2 ml-2"
                    >
                      Minister Of Baptism
                    </label>
                    <input
                      type="text"
                      id="minister"
                      name="minister"
                      className="input"
                      value={Minister}
                      onChange={handleChange(setMinister)}
                    />
                  </div>
                  <div className="keptAttextarea mb-4">
                    <label htmlFor="keptAt" className="text-gray-700 font-bold">
                      KEPT AT
                    </label>
                    <Textarea
                      className="textarea"
                      minRows={2}
                      placeholder="Type anything…"
                      value={textArea}
                      onChange={handleChange(setTextArea)}
                    />
                  </div>
                </div>
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
  );
};

export default EditBaptismModel;
