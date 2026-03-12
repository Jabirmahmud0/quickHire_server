import mongoose from 'mongoose';
import Job from './models/Job.js';
import dotenv from 'dotenv';

dotenv.config();

const jobs = [
  {
    title: 'Email Marketing',
    company: 'Revolut',
    location: 'Madrid, Spain',
    category: 'Marketing',
    description: 'Revolut is looking for Email Marketing to help team ma ...',
    tags: ['Marketing', 'Design'],
    type: 'Full Time',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Revolut_logo.svg',
  },
  {
    title: 'Brand Designer',
    company: 'Dropbox',
    location: 'San Fransisco, USA',
    category: 'Design',
    description: 'Dropbox is looking for Brand Designer to help the team t ...',
    tags: ['Design', 'Business'],
    type: 'Full Time',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Dropbox_Logo.png',
  },
  {
    title: 'Social Media Assistant',
    company: 'Nomad',
    location: 'Paris, France',
    category: 'Marketing',
    description: 'Nomad is looking for Social Media Assistant to join the team ...',
    tags: ['Marketing', 'Design'],
    type: 'Full Time',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Nomad_Logo.svg',
  },
  {
    title: 'Interactive Developer',
    company: 'Terraform',
    location: 'Hamburg, Germany',
    category: 'Technology',
    description: 'Terraform is looking for Interactive Developer to help develop n ...',
    tags: ['Developer'],
    type: 'Full Time',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Terraform_Logo.svg',
  },
  {
    title: 'HR Manager',
    company: 'Packer',
    location: 'Lucern, Switzerland',
    category: 'Human Resource',
    description: 'Packer is looking for HR Manager to lead the recruitment ...',
    tags: ['Marketing', 'Management'],
    type: 'Full Time',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Packer_Logo.svg',
  },
  {
    title: 'Data Analyst',
    company: 'Twitter',
    location: 'San Diego, US',
    category: 'Technology',
    description: 'Twitter is looking for Data Analyst to help team desi ...',
    tags: ['Technology'],
    type: 'Full Time',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg',
  },
];

const seedDB = async () => {
  try {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/quickhire';
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB for seeding');

    await Job.deleteMany({});
    await Job.insertMany(jobs);

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
};

seedDB();
