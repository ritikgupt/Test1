const express = require("express");
const router = express.Router();
const Ticket = require("../models/ticket");
router.post("/reserveticket", async (req, res) => {
available_seat=[]
  try {
    await Screen.find({types_of_seat}, (err, types_of_seats) => {
      if (err) {
        console.log(err);
      } else {
        for(i=0;i<types_of_seats.length;i++){
            available_seat.push(types_of_seats[i])
        }
      }
    });
  } catch (e) {
    res.json({ message: e });
  }
  console.log(available_seat)
  try {
    await Ticket.create({
      user: req.body.name,
      num_of_seats: req.body.num_of_seats,
      types_of_seat: req.body.types_of_seat,
    });
    res.json({ message: "sample database created" });
  } catch (e) {
    console.log(e);
    res.json({ message: e });
  }
});

router.get("/showscreen", async (req, res) => {
  try {
    await Screen.find({}, (err, screens) => {
      if (err) {
        console.log(err);
      } else {
        res.json(screens);
      }
    });
  } catch (e) {
    res.json({ message: e });
  }
});

module.exports = router;
