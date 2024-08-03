"use client";
import { useState } from "react";
import { useSaveData } from "../app/hooks/useSaveData";
import "@/container/modelstyles.css";
// model
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import img from "@/app/img/mform.png";
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

const EditMarriageFormModel = ({ editMarriageForm, setEditMarriageForm, editdata }) => {
  const router = useRouter();
  const { saveData } = useSaveData();
  const [marrefno, setMarRefNo] = useState(editdata.marrefno ? editdata.marrefno : "");
  const [date, setDate] = useState(editdata.date ? editdata.date : "");
  const [parish, setParish] = useState(editdata.parish ? editdata.parish : "");
  const [yourRefNo, setYourRefNo] = useState(
    editdata.yourRefNo ? editdata.yourRefNo : ""
  );
  const [impediment, setImpediment] = useState(
    editdata.impediment ? editdata.impediment : ""
  );
  const [banns, setBanns] = useState(editdata.banns ? editdata.banns : "");
  const [bannsSecond, setBannsSecond] = useState(
    editdata.bannsSecond ? editdata.bannsSecond : ""
  );
  const [bannsThird, setBannsThird] = useState(
    editdata.bannsThird ? editdata.bannsThird : ""
  );
  const [celebration, setCelebration] = useState(
    editdata.celebration ? editdata.celebration : ""
  );
  const [format, setFormAt] = useState(editdata.format ? editdata.format : "");
  const [mr, setMr] = useState(editdata.mr ? editdata.mr : "");
  const [soneOf, setSonOf] = useState(editdata.soneOf ? editdata.soneOf : "");
  const [from, setFrom] = useState(editdata.from ? editdata.from : "");
  const [oftheparishof, setOfTheParishOf] = useState(
    editdata.oftheparishof ? editdata.oftheparishof : ""
  );
  const [dioces, setDioces] = useState(editdata.dioces ? editdata.dioces : "");
  const [bornOn, setBornOn] = useState(editdata.bornOn ? editdata.bornOn : "");
  const [baptized, setBaptized] = useState(
    editdata.baptized ? editdata.baptized : ""
  );
  const [on, setOn] = useState(editdata.on ? editdata.on : "");
  const [daughterwith, setDaughterWith] = useState(
    editdata.daughterwith ? editdata.daughterwith : ""
  );
  const [daughterOf, setDaughterOf] = useState(
    editdata.daughterOf ? editdata.daughterOf : ""
  );
  const [daughterfrom, setDaughterFrom] = useState(
    editdata.daughterfrom ? editdata.daughterfrom : ""
  );
  const [daughteroftheparishof, setDaughterOfTheParishOf] = useState(
    editdata.daughteroftheparishof ? editdata.daughteroftheparishof : ""
  );
  const [daughterdioces, setDaughterDioces] = useState(
    editdata.daughterdioces ? editdata.daughterdioces : ""
  );
  const [daughterbornOn, setDaughterBornOn] = useState(
    editdata.daughterbornOn ? editdata.daughterbornOn : ""
  );
  const [daughterbaptized, setDaughterBaptized] = useState(
    editdata.daughterbaptized ? editdata.daughterbaptized : ""
  );
  const [daughteron, setDaughterOn] = useState(
    editdata.daughteron ? editdata.daughteron : ""
  );

  const tabs = ["Mr", "With"];
  const [tabActive, setTabActive] = useState("Mr");

  const pageRender = () => {
    switch (tabActive) {
      case "Mr":
        return <Mr />;
      case "With":
        return <With />;
      default:
        return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updates = {
      marrefno,
      date,
      parish,
      yourRefNo,
      impediment,
      banns,
      bannsSecond,
      bannsThird,
      celebration,
      format,
      mr,
      soneOf,
      from,
      oftheparishof,
      dioces,
      bornOn,
      baptized,
      on,
      daughterwith,
      daughterOf,
      daughterfrom,
      daughteroftheparishof,
      daughterdioces,
      daughterbornOn,
      daughterbaptized,
      daughteron,
      id:editdata.id,
    };
    try {
      const fileName = "MarriageForm.json";
      const response = await fetch(`/api/dataHandler?fileName=${fileName}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: editdata.id,
          updates
        }),
      });
      const result = await response.json();
      console.log(result.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClose = () => setEditMarriageForm(false);
  const Mr = () => {
    return (
      <div>
        <div className="keptAt mb-4">
          <div className="keptAtChilde">
            <label htmlFor="mr" className="text-gray-700 font-bold mb-2 ml-2">
              Mr.
            </label>
            <input
              type="text"
              id="mr"
              name="mr"
              className="input"
              required
              value={mr}
              onChange={(e) => setMr(e.target.value)}
            />
          </div>
          <div className="keptAtChilde">
            <label
              htmlFor="sonOf"
              className="text-gray-700 font-bold mb-2 ml-2"
            >
              Son Of
            </label>
            <input
              type="text"
              id="sonOf"
              name="sonOf"
              className="input"
              required
              value={soneOf}
              onChange={(e) => setSonOf(e.target.value)}
            />
          </div>
        </div>
        <div className="keptAt mb-4">
          <div className="keptAtChilde">
            <label htmlFor="from" className="text-gray-700 font-bold mb-2 ml-2">
              From
            </label>
            <input
              type="text"
              id="from"
              name="from"
              className="input"
              required
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <div className="keptAtChilde">
            <label
              htmlFor="oftheparishof"
              className="text-gray-700 font-bold mb-2 ml-2"
            >
              Of the parish of
            </label>
            <input
              type="text"
              id="oftheparishof"
              name="oftheparishof"
              className="input"
              required
              value={oftheparishof}
              onChange={(e) => setOfTheParishOf(e.target.value)}
            />
          </div>
        </div>
        <div className="keptAt mb-4">
          <div className="keptAtChilde">
            <label
              htmlFor="dioces"
              className="text-gray-700 font-bold mb-2 ml-2"
            >
              In the Dioces of
            </label>
            <input
              type="text"
              id="dioces"
              name="dioces"
              className="input"
              required
              value={dioces}
              onChange={(e) => setDioces(e.target.value)}
            />
          </div>
          <div className="keptAtChilde">
            <label
              htmlFor="bornon"
              className="text-gray-700 font-bold mb-2 ml-2"
            >
              Born On
            </label>
            <input
              type="text"
              id="bornon"
              name="bornon"
              className="input"
              required
              value={bornOn}
              onChange={(e) => setBornOn(e.target.value)}
            />
          </div>
        </div>
        <div className="keptAt mb-4">
          <div className="keptAtChilde">
            <label
              htmlFor="baptized"
              className="text-gray-700 font-bold mb-2 ml-2"
            >
              Baptized at
            </label>
            <input
              type="text"
              id="baptized"
              name="baptized"
              className="input"
              required
              value={baptized}
              onChange={(e) => setBaptized(e.target.value)}
            />
          </div>
          <div className="keptAtChilde">
            <label htmlFor="on" className="text-gray-700 font-bold mb-2 ml-2">
              On
            </label>
            <input
              type="text"
              id="on"
              name="on"
              className="input"
              required
              value={on}
              onChange={(e) => setOn(e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  };
  const With = () => {
    return (
      <div>
        <div className="keptAt mb-4">
          <div className="keptAtChilde">
            <label htmlFor="with" className="text-gray-700 font-bold mb-2 ml-2">
              With
            </label>
            <input
              type="text"
              id="mr"
              name="mr"
              className="input"
              required
              value={daughterwith}
              onChange={(e) => setDaughterWith(e.target.value)}
            />
          </div>
          <div className="keptAtChilde">
            <label
              htmlFor="daughterOf"
              className="text-gray-700 font-bold mb-2 ml-2"
            >
              Daughter Of
            </label>
            <input
              type="text"
              id="daughterOf"
              name="daughterOf"
              className="input"
              required
              value={daughterOf}
              onChange={(e) => setDaughterOf(e.target.value)}
            />
          </div>
        </div>
        <div className="keptAt mb-4">
          <div className="keptAtChilde">
            <label htmlFor="from" className="text-gray-700 font-bold mb-2 ml-2">
              From
            </label>
            <input
              type="text"
              id="from"
              name="from"
              className="input"
              required
              value={daughterfrom}
              onChange={(e) => setDaughterFrom(e.target.value)}
            />
          </div>
          <div className="keptAtChilde">
            <label
              htmlFor="oftheparishof"
              className="text-gray-700 font-bold mb-2 ml-2"
            >
              Of the parish of
            </label>
            <input
              type="text"
              id="oftheparishof"
              name="oftheparishof"
              className="input"
              required
              value={daughteroftheparishof}
              onChange={(e) => setDaughterOfTheParishOf(e.target.value)}
            />
          </div>
        </div>
        <div className="keptAt mb-4">
          <div className="keptAtChilde">
            <label
              htmlFor="dioces"
              className="text-gray-700 font-bold mb-2 ml-2"
            >
              In the Dioces of
            </label>
            <input
              type="text"
              id="dioces"
              name="dioces"
              className="input"
              required
              value={daughterdioces}
              onChange={(e) => setDaughterDioces(e.target.value)}
            />
          </div>
          <div className="keptAtChilde">
            <label
              htmlFor="bornon"
              className="text-gray-700 font-bold mb-2 ml-2"
            >
              Born On
            </label>
            <input
              type="text"
              id="bornon"
              name="bornon"
              className="input"
              required
              value={daughterbornOn}
              onChange={(e) => setDaughterBornOn(e.target.value)}
            />
          </div>
        </div>
        <div className="keptAt mb-4">
          <div className="keptAtChilde">
            <label
              htmlFor="baptized"
              className="text-gray-700 font-bold mb-2 ml-2"
            >
              Baptized at
            </label>
            <input
              type="text"
              id="baptized"
              name="baptized"
              className="input"
              required
              value={daughterbaptized}
              onChange={(e) => setDaughterBaptized(e.target.value)}
            />
          </div>
          <div className="keptAtChilde">
            <label htmlFor="on" className="text-gray-700 font-bold mb-2 ml-2">
              On
            </label>
            <input
              type="text"
              id="on"
              name="on"
              className="input"
              required
              value={daughteron}
              onChange={(e) => setDaughterOn(e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <Modal
        open={editMarriageForm}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black">
            <div className="bg-white p-8 rounded-lg shadow-md w-full">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Marriage Form
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="keptAt mb-4">
                  <div className="keptAtChilde">
                    <label
                      htmlFor="refno"
                      className="text-gray-700 font-bold mb-2 ml-2"
                    >
                      Our Ref.No
                    </label>
                    <input
                      type="text"
                      id="refno"
                      name="refno"
                      className="input"
                      required
                      value={marrefno}
                      onChange={(e) => setMarRefNo(e.target.value)}
                    />
                  </div>
                  <div className="keptAtChilde">
                    <label
                      htmlFor="date"
                      className="text-gray-700 font-bold mb-2 ml-2"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className="input"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>

                <div className="keptAt mb-4">
                  <div className="keptAtChilde">
                    <label
                      htmlFor="parish"
                      className="text-gray-700 font-bold mb-2 ml-2"
                    >
                      Parish
                    </label>
                    <input
                      type="text"
                      id="parish"
                      name="parish"
                      className="input"
                      required
                      value={parish}
                      onChange={(e) => setParish(e.target.value)}
                    />
                  </div>
                  <div className="keptAtChilde">
                    <label
                      htmlFor="yourrefno"
                      className="text-gray-700 font-bold mb-2 ml-2"
                    >
                      Your Ref.No
                    </label>
                    <input
                      type="text"
                      id="date"
                      name="yourrefno"
                      className="input"
                      required
                      value={yourRefNo}
                      onChange={(e) => setYourRefNo(e.target.value)}
                    />
                  </div>
                </div>
                <div className="keptAt mb-4">
                  <div className="keptAtChilde">
                    <label
                      htmlFor="Dioces"
                      className="text-gray-700 font-bold mb-2 ml-2"
                    >
                      Dioces
                    </label>
                    <input
                      type="text"
                      id="dioces"
                      name="dioces"
                      className="input"
                      required
                    />
                  </div>
                </div>
                <Image src={img} alt="form text"></Image>
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
                {pageRender()}
                <div className="keptAt mb-4">
                  <div className="keptAtChilde">
                    <label
                      htmlFor="impediment"
                      className="text-gray-700 font-bold mb-2 ml-2"
                    >
                      Impediment
                    </label>
                    <input
                      type="text"
                      id="impediment"
                      name="impediment"
                      className="input"
                      required
                      value={impediment}
                      onChange={(e) => setImpediment(e.target.value)}
                    />
                  </div>
                </div>
                <div className="Bannsparant mb-4">
                  <div className="keptAtChilde">
                    <label
                      htmlFor="with"
                      className="text-gray-700 font-bold mb-2 ml-2"
                    >
                      Banns Will be published in this parish on
                    </label>
                  </div>
                  <div className="Banns">
                    <input
                      type="text"
                      id="first"
                      name="first"
                      className="input"
                      placeholder="First"
                      value={banns}
                      onChange={(e) => setBanns(e.target.value)}
                    />
                    <input
                      type="text"
                      id="second"
                      name="second"
                      className="input"
                      placeholder="second"
                      value={bannsSecond}
                      onChange={(e) => setBannsSecond(e.target.value)}
                    />
                    <input
                      type="text"
                      id="third"
                      name="third"
                      className="input"
                      placeholder="Third"
                      value={bannsThird}
                      onChange={(e) => setBannsThird(e.target.value)}
                    />
                  </div>
                </div>
                <div className="keptAt mb-4">
                  <div className="keptAtChilde">
                    <label
                      htmlFor="celebration"
                      className="text-gray-700 font-bold mb-2 ml-2"
                    >
                      Marriage is to celebrated on
                    </label>
                    <input
                      type="text"
                      id="celebration"
                      name="celebration"
                      className="input"
                      required
                      value={celebration}
                      onChange={(e) => setCelebration(e.target.value)}
                    />
                  </div>
                  <div className="keptAtChilde">
                    <label
                      htmlFor="at"
                      className="text-gray-700 font-bold mb-2 ml-2"
                    >
                      At
                    </label>
                    <input
                      type="text"
                      id="at"
                      name="at"
                      className="input"
                      required
                      value={format}
                      onChange={(e) => setFormAt(e.target.value)}
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

export default EditMarriageFormModel;
