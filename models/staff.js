import { Schema, model } from 'mongoose';

// Define the Staff Schema
const staffSchema = new Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

// Create the Staff model
const Staff = model('Staff', staffSchema);

export default Staff;
