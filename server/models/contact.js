import mongoose from "mongoose";

export const ReportSchema = new mongoose.Schema({
  
  email: {
    type: String,
    required: [true, "You must provide an email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
  },

  report: {
    type: String,
    required: [true, "The report Can't be empty"],

  },
});

export const NewReport = mongoose.model('NewReport', ReportSchema);
