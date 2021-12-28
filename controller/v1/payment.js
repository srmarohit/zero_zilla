const stripe = require("stripe")(process.env.STRIPE_KEY);

module.exports = () => {
    return {
        payByCard : (req,res) => {
            stripe.charges.create({
                sources : req.body.tokenId,
                amount : req.body.amount,
                currency : "usd"
            },
            (stripeErr, stripeRes) => {
                if(stripeErr) res.status(500).json(stripeErr)

                res.status(200).json(stripeRes)
            })
        }
    }
}