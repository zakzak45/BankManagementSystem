const mongoose = require('mongoose')

const Bank = new mongoose.Schema({
accountNumber: {
    type: String,
    required: true,
    unique: true
  },
  accountHolder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    required: true
  },
  accountType: {
    type: String,
    enum: ["savings", "checking", "business"],
    default: "savings"
  },
  balance: {
    type: Number,
    default: 0,
    min: 0
  },
  currency: {
    type: String,
    default: "USD"
  },
  transactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Transaction"
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }

})

module.exports = mongoose.model("Bank",Bank)