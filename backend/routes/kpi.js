import express from 'express';
import KPI from '../models/KPI.js'; // Ensure this matches the actual filename.

const router = express.Router();

router.get("/kpis" , async (req, res) => {
  try{
    const kpis = await kpis.find();

  }
  catch(error){
    res.status(404).json({message: error.message});
  }
});

export default router;