const Menu = require("../models/Menu");

module.exports = {
  getMenu: async (req, res) => {
    try {
      const menuItems = await Menu.find({});
      // const itemsLeft = await Todo.countDocuments({completed: false})
      res.send(menuItems);
    } catch (err) {
      console.log(err);
    }
  },

  createMenuItem: async (req, res) => {
    console.log(req.body.data);
    try {
      const count = await Menu.find({});
      const id = (await count.length) + 1;
      await Menu.create({
        id,
        name: req.body.data.name,
        price: Number(req.body.data.price),
        img: req.body.data.img,
        desc: req.body.data.desc,
      });
      console.log(`Menu has been added! : ${req.body}`);
      await res.redirect("/menu");
    } catch (err) {
      console.log(err);
    }
  },

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
