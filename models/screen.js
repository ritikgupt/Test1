const c = require("mongoose");
const ScreenSchema = new c.Schema({
  name:{
    type:String,
    required:true,
    unique:true,
  },
  num_of_seats:{
    type:Number,
    required:true,
  },
  types_of_seat:{
    type:Array,
    required:true,
  }
});
module.exports = c.model("Screen", ScreenSchema)
