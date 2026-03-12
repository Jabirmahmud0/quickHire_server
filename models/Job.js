import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Design', 'Sales', 'Marketing', 'Finance', 'Technology', 'Engineering', 'Business', 'Human Resource'],
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'Full Time',
  },
  tags: [String],
  companyLogo: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Job', jobSchema);
