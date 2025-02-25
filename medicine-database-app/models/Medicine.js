import mongoose from 'mongoose';

const MedicineSchema = new mongoose.Schema({
  name: String,
  description: String
});

export default mongoose.models.Medicine || mongoose.model('Medicine', MedicineSchema);