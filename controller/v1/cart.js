const Cart = require("../../model/v1/Cart")

module.exports = () => {
    return {
        create : async (req,res) => {
            const newCart = new Cart(req.body);
            try{
                const savedCart = await newCart.save();
                res.status(200).json(savedCart);
            }catch(e){
                res.status(500).json(e);
            }
        },

        update : async (req,res)=>{
            console.log("update controller")
            try{
                const updateCart = await Cart.findByIdAndUpdate(req.params.id, {
                    $set : req.body
                },
                {
                    new :true
                }
              );
                
              res.status(200).json(updateCart);
            }catch(e){
                res.status(500).json(e);
            }
        },

        delete : async (req,res) => {
            try{
                const deleteCart = await Cart.findByIdAndDelete(req.params.id);
                res.status(200).json("Cart hasbeen deleted..")
            }catch(e){
                res.status(500).json(e);
            }
        },

        getCart : async (req,res) => {
            try{
                const cart = await Cart.findOne({userId : req.params.userId});
                res.status(200).json(cart);
            }catch(e){
                res.status(500).json(e);
            }
        },

        getAllCarts : async (req,res) => {
            try{
                const carts = await Cart.find();
                res.status(200).send(carts)
            }catch(e){
                res.status(500).json(e);
            }
        }
    }
}