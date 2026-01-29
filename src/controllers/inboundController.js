const inboundService = require("../service/inboundService");




/**
 * Inbound Summary
 */
async function getInboundSummary(req, res) {
  try {
    const summary = await inboundService.getInboundSummary();
    return res.status(200).json(summary);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}





/**
 * Create Inbound Receipt
 */
async function createInboundReceipt(req, res) {
  try {
    const result = await inboundService.createReceipt(req.body);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

/**
 * List Inbound Receipts
 */
async function getInboundReceipts(req, res) {
  try {
    const data = await inboundService.listReceipts(req.query);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

/**
 * Update QC Status
 */
async function updateQcStatus(req, res) {
  try {
    const result = await inboundService.updateQcStatus(
      req.params.receiptId,
      req.body
    );
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

module.exports = {
  getInboundSummary,
  createInboundReceipt,
  getInboundReceipts,
  updateQcStatus
};
