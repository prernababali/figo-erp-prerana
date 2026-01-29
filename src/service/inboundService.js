const supabase = require("../config/supabase");

/**
 * Create inbound receipt
 */
async function createReceipt(data) {
  const receiptNumber = `RCV-${Date.now()}`;

  const { data: result, error } = await supabase
    .from("inbound_receipts")
    .insert([
      {
        ...data,
        receipt_number: receiptNumber,
        warehouse_id: "WH-001" // ✅ default warehouse
      }
    ])
    .select()
    .single();

  if (error) throw error;
  return result;
}


/**
 * List inbound receipts
 */
async function listReceipts(filters = {}) {
  let query = supabase.from("inbound_receipts").select("*");

  if (filters.qc_status) {
    query = query.eq("qc_status", filters.qc_status);
  }

  const { data, error } = await query.order("created_at", { ascending: false });
  if (error) throw error;

  return data;
}

/**
 * Update QC status
 */
async function updateQcStatus(receiptId, payload) {
  const { data, error } = await supabase
    .from("inbound_receipts")
    .update(payload)
    .eq("id", receiptId)
    .select()
    .single();

  if (error) throw error;
  return data;
}




 async function getInboundSummary() {
  const { data, error } = await supabase
    .from("inbound_receipts")
    .select("qc_status");

  if (error) throw error;

  const totalReceipts = data.length;

  const pendingQc = data.filter(
    r => r.qc_status === "PENDING"
  ).length;

  const completedQc = data.filter(
    r => r.qc_status === "PASSED" || r.qc_status === "FAILED"
  ).length;

  return {
    totalReceipts,
    pendingQc,
    completedQc
  };
}





module.exports = {
  createReceipt,
  listReceipts,
  updateQcStatus,
  getInboundSummary
};
