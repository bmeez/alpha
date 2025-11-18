import express, { Request, Response } from 'express';
import Installation from '../models/Installation';

const router = express.Router();

// @route   POST /api/installations
// @desc    Create a new installation record
// @access  Public
router.post('/', async (req: Request, res: Response) => {
  try {
    // Basic validation: Ensure body is not empty
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ success: false, message: 'Please provide installation data' });
    }

    const installation = await Installation.create(req.body);

    res.status(201).json({
      success: true,
      data: installation
    });
  } catch (error) {
    console.error('Error creating installation:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
});

export default router;
