const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  event_name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  on_sale_date: {
    type: Date,
    required: true,
  },
  code_type: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const DashEvent = mongoose.model("dashboard_event", UserSchema);

module.exports = DashEvent;
