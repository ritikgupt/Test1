const c = require("mongoose");
const TicketSchema = new c.Schema({
  user: {
    type: String,
    required: true,
    unique: true,
  },
  number: {
    type: String,
    required: true,
    unique: true,
  },
  num_of_seats: {
    type: Number,
    required: true,
  },
  types_of_seat: {
    type: Array,
    required: true,
  },
});
module.exports = c.model("Screen", TicketSchema);
