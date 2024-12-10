import { Schema, model } from 'mongoose';

// Define the Book Schema
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  yearPublished: { type: Number, required: true },
  type: { type: String, enum: ['fiction', 'non-fiction'], required: true },
});

// Create the Book model
const Book = model('Book', bookSchema);

export default Book;
