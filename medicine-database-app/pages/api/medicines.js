import dbConnect from '../../utils/dbConnect';
import Medicine from '../../models/Medicine';

export default async function handler(req, res) {
  await dbConnect();
  
  if (req.method === 'GET') {
    const medicines = await Medicine.find({});
    res.status(200).json(medicines);
  } else if (req.method === 'POST') {
    const { name, description } = req.body;
    const newMedicine = new Medicine({ name, description });
    await newMedicine.save();
    res.status(201).json(newMedicine);
  }
}