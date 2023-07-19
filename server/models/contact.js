import mongoose from "mongoose";

export const ReportSchema = new mongoose.Schema({
  user_name: {
    type: String,
  },

  email: {
    type: String,
  },

  "report": {
    type: String,
  },
});

export const NewReport = mongoose.model('NewReport', ReportSchema);
