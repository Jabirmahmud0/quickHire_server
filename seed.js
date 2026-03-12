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
    companyLogo: 'https://logo.clearbit.com/revolut.com',
  },
  {
    title: 'Brand Designer',
    company: 'Dropbox',
    location: 'San Fransisco, USA',
    category: 'Design',
    description: 'Dropbox is looking for Brand Designer to help the team t ...',
    tags: ['Design', 'Business'],
    type: 'Full Time',
    companyLogo: 'https://logo.clearbit.com/dropbox.com',
  },
  {
    title: 'Email Marketing',
    company: 'Pitch',
    location: 'Berlin, Germany',
    category: 'Marketing',
    description: 'Pitch is looking for Customer Manager to join marketing t ...',
    tags: ['Marketing'],
    type: 'Full Time',
    companyLogo: 'https://logo.clearbit.com/pitch.com',
  },
  {
    title: 'Visual Designer',
    company: 'Blinklist',
    location: 'Granada, Spain',
    category: 'Design',
    description: 'Blinklist is looking for Visual Designer to help team desi ...',
    tags: ['Design'],
    type: 'Full Time',
    companyLogo: 'https://logo.clearbit.com/blinklist.com',
  },
  {
    title: 'Product Designer',
    company: 'ClassPass',
    location: 'Manchester, UK',
    category: 'Design',
    description: 'ClassPass is looking for Product Designer to help us ...',
    tags: ['Marketing', 'Design'],
    type: 'Full Time',
    companyLogo: 'https://logo.clearbit.com/classpass.com',
  },
  {
    title: 'Lead Designer',
    company: 'Canva',
    location: 'Ontario, Canada',
    category: 'Design',
    description: 'Canva is looking for Lead Engineer to help develop n ...',
    tags: ['Design', 'Business'],
    type: 'Full Time',
    companyLogo: 'https://logo.clearbit.com/canva.com',
  },
  {
    title: 'Brand Strategist',
    company: 'GoDaddy',
    location: 'Marseille, France',
    category: 'Marketing',
    description: 'GoDaddy is looking for Brand Strategist to join the team...',
    tags: ['Marketing'],
    type: 'Full Time',
    companyLogo: 'https://logo.clearbit.com/godaddy.com',
  },
  {
    title: 'Data Analyst',
    company: 'Twitter',
    location: 'San Diego, US',
    category: 'Technology',
    description: 'Twitter is looking for Data Analyst to help team desi ...',
    tags: ['Technology'],
    type: 'Full Time',
    companyLogo: 'https://logo.clearbit.com/twitter.com',
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
