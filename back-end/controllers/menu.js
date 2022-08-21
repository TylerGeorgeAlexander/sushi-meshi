const Menu = require("../models/Menu");

module.exports = {
  getMenu: async (req, res) => {
    try {
      const menuItems = await Menu.find();
      // const itemsLeft = await Todo.countDocuments({completed: false})
      res.send([
        {
          name: "Rainbow Roll",
          price: 11.99,
          img: "./assets/horizontal-pictures/rainbow-roll.jpg",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum voluptates voluptatibus maiores illum dicta animi debitis ad aperiam omnis molestias! Corporis corrupti iure sed ex eos? Ad accusantium minus a!",
        },
        {
          name: "Salmon Nigiri",
          price: 9.99,
          img: "./assets/horizontal-pictures/salmon-nigiri.jpg",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum voluptates voluptatibus maiores illum dicta animi debitis ad aperiam omnis molestias!",
        },
        {
          name: "Rainbow Roll",
          price: 11.99,
          img: "./assets/horizontal-pictures/rainbow-roll.jpg",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum voluptates voluptatibus maiores illum dicta animi debitis ad aperiam omnis molestias! Corporis corrupti iure sed ex eos? Ad accusantium minus a!",
        },
        {
          name: "Salmon Nigiri",
          price: 9.99,
          img: "./assets/horizontal-pictures/salmon-nigiri.jpg",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum voluptates voluptatibus maiores illum dicta animi debitis ad aperiam omnis molestias!",
        },
      ]);
    } catch (err) {
      console.log(err);
    }
  },
  // createTodo: async (req, res)=>{
  //     try{
  //         await Todo.create({todo: req.body.todoItem, completed: false})
  //         console.log('Todo has been added!')
  //         res.redirect('/todos')
  //     }catch(err){
  //         console.log(err)
  //     }
  // },
  // markComplete: async (req, res)=>{
  //     try{
  //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
  //             completed: true
  //         })
  //         console.log('Marked Complete')
  //         res.json('Marked Complete')
  //     }catch(err){
  //         console.log(err)
  //     }
  // },
  // markIncomplete: async (req, res)=>{
  //     try{
  //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
  //             completed: false
  //         })
  //         console.log('Marked Incomplete')
  //         res.json('Marked Incomplete')
  //     }catch(err){
  //         console.log(err)
  //     }
  // },
  // deleteTodo: async (req, res)=>{
  //     console.log(req.body.todoIdFromJSFile)
  //     try{
  //         await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
  //         console.log('Deleted Todo')
  //         res.json('Deleted It')
  //     }catch(err){
  //         console.log(err)
  //     }
  // }
};
