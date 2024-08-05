"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
//select
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import MarriageCertificateModel from "@/container/MarriageCertificateModel";
import BaptismModel from "@/container/BaptismModel";
import MarriageFormModel from "@/container/MarriageForm";
import EditMarriageCertificateModel from "@/container/EditMarriageCertificateModel";
import BaptismDetails from "@/container/BaptismDetails";
import MarriageDetails from "@/container/MarriageDetails";
import MarriageCertificateDetail from "@/container/MarriageCertificateDetail";
import LetterPadDetails from "@/container/LetterPadDetails";
import LetterPadModel from "@/container/LetterPadModel";
// import Image from "next/image";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  color: "#000",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Home() {
  //select usestate
  const [option, setOption] = useState("");
  const tabs = ["Baptism", "MarriageForm", "MarriageCertificate","LetterPad"];
  const [tabActive, setTabActive] = useState("Baptism");
  const renderPage = () => {
    switch (tabActive) {
      case "Baptism":
        return <BaptismDetails />;
      case "MarriageForm":
        return <MarriageDetails />;
      case "MarriageCertificate":
        return <MarriageCertificateDetail />;
        case "LetterPad":
        return <LetterPadDetails />;
      default:
        return null;
    }
  };

  const handleChange = (event) => {
    const selectedOption = event.value;
    setOption(selectedOption);
    if (selectedOption) {
      handleClick(selectedOption);
    }
  };
  const handleClick = (selectedOption) => {
    console.log("Option selected:", selectedOption);
  };
  // add modal usestate
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //marriage certificate modal
  const [marriage, setMarriage] = useState(false);
  const handleMarriage = () => setMarriage(true);

  // Baptism Certificate modal
  const [baptismModel, setBaptismModel] = useState(false);
  const handleBaptismModel = () => setBaptismModel(true);

  const [editmarriagecertificate, setEditMarriageCertificate] = useState(false);

  // Marriage Form modal
  const [marriageForm, setMarriageForm] = useState(false);
  const handleMarriageForm = () => setMarriageForm(true);

  // Letter pad modal
  const [letterPad, setLetterPad] = useState(false)
  const handleLetterPad = () => setLetterPad(true)

  const [editdata, setEditData] = useState();

  return (
    <main>
      <div className="container mx-auto p-4 text-black bg-white mtt-5">
        <h1 className="text-2xl font-bold mb-4 float-left">
          ST.Antony`s Church
        </h1>
        <button
          className="float-right bg-blue-500 text-white px-2 py-1 rounded mr-2"
          onClick={handleOpen}
        >
          Add New
        </button>
        <br/>
        <div className="flex gap-[10px]">
        {tabs.map((val, idx) => (
          <button
            key={idx}
            onClick={() => setTabActive(val)}
            className={` border-black rounded-xl p-4 text-black px-2 py-1 mb-5 mr-2 ${
              val == tabActive ? "bg-blue-300 text-black" : ""
            }`}
          >
            {val}
          </button>
        ))}
        </div>
        {renderPage()}
      </div>

      {/* select modal */}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <FormControl className="w-64">
              <InputLabel id="demo-simple-select-label">Select Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={option}
                label="Select Page"
                onChange={handleChange}
                className="bg-white"
              >
                <MenuItem
                  value={marriage}
                  onClick={() => handleMarriage("/Certificate")}
                >
                  Marriage Certificate
                </MenuItem>
                <MenuItem
                  value={baptismModel}
                  onClick={() => handleBaptismModel("/page2")}
                >
                  Baptism Certificate
                </MenuItem>
                <MenuItem
                  value={marriageForm}
                  onClick={() => handleMarriageForm("/page3")}
                >
                  Marriage Form
                </MenuItem>
                <MenuItem
                  value={letterPad}
                  onClick={() => handleLetterPad()}
                >
                  LetterPad
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Modal>
        {/* Marriage certificate Modal */}
        <MarriageCertificateModel
          marriage={marriage}
          setMarriage={setMarriage}
        />
        {editdata && (
          <EditMarriageCertificateModel
            editmarriagecertificate={editmarriagecertificate}
            setEditMarriageCertificate={editmarriagecertificate}
            editData={editdata}
          />
        )}

        {/* Baptism Modal */}
        <BaptismModel
          baptismModel={baptismModel}
          setBaptismModel={setBaptismModel}
        />
        {/* Marriage form */}
        <MarriageFormModel
          marriageForm={marriageForm}
          setMarriageForm={setMarriageForm}
        />
        {/* Letter Pad */}
        <LetterPadModel  letterPad = {letterPad} setLetterPad={setLetterPad}/>
      </div>
    </main>
  );
}
