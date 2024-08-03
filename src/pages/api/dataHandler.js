import { readData, writeData, addUniqueId, updateData, deleteData } from '@/app/lib/fileHandler';

export default function handler(req, res) {
  const { method, query, body } = req;
  const fileName = query.fileName;

  if (!fileName) {
    return res.status(400).json({ message: 'fileName is required' });
  }

  switch (method) {
    case 'GET':
      // Read data
      const data = readData(fileName);
      res.status(200).json(data);
      break;

    case 'POST':
      // Add new data
      const newData = addUniqueId(req.body);
      const existingData = readData(fileName);
      existingData.push(newData);
      writeData(fileName, existingData);
      res.status(200).json({ message: 'Data added successfully',id:newData.id });
      break;

    case 'PUT':
      // Update existing data
      const { id, updates } = req.body;
      updateData(fileName, id, updates);
      res.status(200).json({ message: 'Data updated successfully' });
      break;

    case 'DELETE':
      // Delete data
      const deleteId = req.body.id;
      deleteData(fileName, deleteId);
      res.status(200).json({ message: 'Data deleted successfully' });
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
