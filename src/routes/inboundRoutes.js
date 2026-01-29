const express = require("express");
const router = express.Router();

const {
  createInboundReceipt,
  getInboundReceipts,
  updateQcStatus,
  getInboundSummary
} = require("../controllers/inboundController");






router.get("/summary", getInboundSummary);

// Inbound (Receiving)
router.post("/", createInboundReceipt);
router.get("/", getInboundReceipts);
router.post("/:receiptId/qc", updateQcStatus);

module.exports = router;
