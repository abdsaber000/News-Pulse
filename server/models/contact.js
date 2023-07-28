import mongoose from "mongoose";

export const ReportSchema = new mongoose.Schema({
  
  email: {
    type: String,
  },

  "report": {
    type: String,
  },
});

export const NewReport = mongoose.model('NewReport', ReportSchema);
