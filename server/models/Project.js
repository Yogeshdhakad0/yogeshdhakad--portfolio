import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
    trim: true
  },
  image: {
    type: String,
    required: [true, 'Project image is required']
  },
  technologies: {
    type: [String],
    required: [true, 'Technologies used are required']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['frontend', 'backend', 'fullstack', 'other']
  },
  liveLink: {
    type: String,
    trim: true
  },
  githubLink: {
    type: String,
    trim: true
  },
  order: {
    type: Number,
    default: 0
  }
});

const Project = mongoose.model('Project', ProjectSchema);

export default Project;