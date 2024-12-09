// models/project.js
import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  year: { type: Number, required: true }
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
