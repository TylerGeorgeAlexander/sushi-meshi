const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: false,
  },
  img: {
    type: String,
    required: false,
  },
  desc: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Menu", MenuSchema);

// {
//     name: "Rainbow Roll",
//     price: 11.99,
//     img: "./assets/horizontal-pictures/rainbow-roll.jpg",
//     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum voluptates voluptatibus maiores illum dicta animi debitis ad aperiam omnis molestias! Corporis corrupti iure sed ex eos? Ad accusantium minus a!",
//   },
