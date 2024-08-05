"use client";
import { React, useState } from "react";
import { useSaveData } from "../app/hooks/useSaveData";
// model
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Textarea } from "@mui/joy";
import { useRouter } from "next/navigation";
import Head from "next/head";

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

const LetterPadModel = ({ letterPad, setLetterPad }) => {
  const router = useRouter();
  const { saveData } = useSaveData();

  //   text area font style useStates
  const [fontStyle, setFontStyle] = useState("normal");
  const [fontWeight, setFontWeight] = useState("normal");
  const [fontSize, setFontSize] = useState("16px");
  const [textAlign, setTextAlign] = useState("left");
  const [textarea, setTextArea] = useState("")

  const handleClose = () => setLetterPad(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      fontStyle,
      fontWeight,
      fontSize,
      textAlign,
      textarea,
    };
    try {
        const fileName = "LetterPad.json";
      const response = await fetch(`/api/dataHandler?fileName=${fileName}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result.message);
      router.push(`/LetterPad/${result.id}`);
    } catch (error) {
        console.error("Error:", error);
    }
  };

  return (
    <div>
      <Modal
        open={letterPad}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Head style={{ textAlign: "center" }}>
            <title>Letter Pad</title>
          </Head>
          <form onSubmit={handleSubmit}>
            <div className="max-w-4xl mx-auto p-8">
              <h1 className="text-2xl font-bold mb-6">Text Editor</h1>

              <div className="mb-6">
                <label className="block mb-2">Font Style</label>
                <select
                  className="border p-2 rounded w-full"
                  value={fontStyle}
                  onChange={(e) => setFontStyle(e.target.value)}
                >
                  <option value="normal">Normal</option>
                  <option value="italic">Italic</option>
                  <option value="oblique">Oblique</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block mb-2">Font Weight</label>
                <select
                  className="border p-2 rounded w-full"
                  value={fontWeight}
                  onChange={(e) => setFontWeight(e.target.value)}
                >
                  <option value="normal">Normal</option>
                  <option value="bold">Bold</option>
                  <option value="bolder">Bolder</option>
                  <option value="lighter">Lighter</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block mb-2">Font Size</label>
                <input
                  type="number"
                  className="border p-2 rounded w-full"
                  value={parseInt(fontSize, 10)}
                  onChange={(e) => setFontSize(`${e.target.value}px`)}
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2">Text Alignment</label>
                <select
                  className="border p-2 rounded w-full"
                  value={textAlign}
                  onChange={(e) => setTextAlign(e.target.value)}
                >
                  <option value="left">Left</option>
                  <option value="center">Center</option>
                  <option value="right">Right</option>
                  <option value="justify">Justify</option>
                </select>
              </div>

              <textarea
                className="w-full h-64 border rounded p-4"
                placeholder="Type here..."
                value={textarea}
                onChange={(e) => setTextArea(e.target.value)}
                style={{
                  fontStyle: fontStyle,
                  fontWeight: fontWeight,
                  fontSize: fontSize,
                  textAlign: textAlign,
                }}
              />
              <button
                type="submit"
                style={{ float: "right", margin: "10px" }}
                className=" w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default LetterPadModel;
