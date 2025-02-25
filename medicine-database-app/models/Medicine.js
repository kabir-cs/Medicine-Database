import mongoose from 'mongoose';

const MedicineSchema = new mongoose.Schema({
  name: String,
  name: someting
  description: String
});commit

export default mongoose.models.Medicine || mongoose.model('Medicine', MedicineSchema);