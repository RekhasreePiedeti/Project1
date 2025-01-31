const mongoose = require('mongoose');

const TransactionProposalSchema = new mongoose.Schema({
  sender: { type: String, required: true },
  receiver: { type: String, required: true },
  amount: { type: Number, required: true },
  transactionType: { type: String, default: 'Payment' },
  status: { type: String, default: 'Pending' }, // Pending, Approved, Rejected
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('TransactionProposal', TransactionProposalSchema);