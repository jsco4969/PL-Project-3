import { Schema, model } from 'mongoose';

// Define the Member Schema
const memberSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  membershipDate: { type: Date, default: Date.now },
});

// Create the Member model
const Member = model('Member', memberSchema);

export default Member;
