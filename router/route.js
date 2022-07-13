const express = require("express")
const router = express.Router()
router.post("/send/pdf",async(req,res)=>{
    try {
        const accountSid = "AC913d0204e11592428f9fbc0ee87664fe"
        const authToken = "e1de3bc1a936bb353eb1d36de27d8324"
        const url = req.body.url
        var number = req.body.number
        const client = require('twilio')(accountSid, authToken)
        const Num = "whatsapp:" + "+91" + `${number}`
        client.messages
        .create({
            mediaUrl: [`${url}`],
            body: 'Hello',
            from: 'whatsapp:+14155238886',
            to: `${Num}`
        })
        .then((message) => {
            console.log(message.sid)
            res.json({message: "sent pdf successfully!"})
        })
    } catch (error) {
        res.status(400)
    }
})
module.exports = router