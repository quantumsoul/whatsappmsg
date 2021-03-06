const express = require("express")
const router = express.Router()
router.post("/send/pdf",async(req,res)=>{
    try {
        const accountSid = process.env.SID
        const authToken = process.env.token
        console.log(accountSid)
        const url = req.body.url
        console.log(url)
        var number = req.body.number
        const client = require('twilio')(accountSid, authToken)
        console.log(client)
        const Num = "whatsapp:" + "+91" + `${number}`
        console.log(Num)
        client.messages.create({
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