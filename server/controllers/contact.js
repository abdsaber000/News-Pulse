import { NewReport } from "../models/contact.js";
import statusCodes from "http-status-codes";
export const addreport = async (req, res) => {
  try {
    const addnewReport = await NewReport.create(req.body);
    res.status(statusCodes.ACCEPTED).json({ addnewReport });
  } catch (error) {
    res.status(statusCodes.BAD_REQUEST).json({ msg: error });
  }
};

