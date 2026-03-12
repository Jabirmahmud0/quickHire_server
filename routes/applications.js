import express from 'express';
import { body, validationResult } from 'express-validator';
import Application from '../models/Application.js';

const router = express.Router();

// POST new application
router.post(
  '/',
  [
    body('job_id').isMongoId().withMessage('Invalid job ID'),
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email'),
    body('resume_link').isURL().withMessage('Invalid resume link URL'),
    body('cover_note').notEmpty().withMessage('Cover note is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const application = new Application({
      job_id: req.body.job_id,
      name: req.body.name,
      email: req.body.email,
      resume_link: req.body.resume_link,
      cover_note: req.body.cover_note,
    });

    try {
      const newApplication = await application.save();
      res.status(201).json(newApplication);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
);

export default router;
