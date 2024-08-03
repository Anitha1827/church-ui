import { readData, writeData } from "../../../src/app/lib/fileHandler";

export default function handler(req, res) {
  if (req.method === "POST") {
    const newData = req.body.data;
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    newData["id"] = `id-${year}${month}${day}-${hours}${minutes}${seconds}`;

    // Define the file name you want to store the data in
    const fileName = req.body.fileName;

    const currentData = readData(fileName);
    currentData.push(newData);

    writeData(fileName, currentData);

    res.status(200).json({ message: "Data saved successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
