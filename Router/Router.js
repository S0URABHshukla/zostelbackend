const express = require('express');
const router = express.Router();
const { destination,
    news,
    newYear,
    northen,
    southern,
    awardmedia,
    weekend,
    food,
    nature,
    off,
    latestread,
    booking,
    order } = require('../database/schema');

router.get('/destination', async (req, res) => {
    try {
        let data = await destination.find();

        return res.send(data);
    }
    catch (err) {
        return res.status(500).send({
            message: err.message
        })
    }

});
router.get('/news', async (req, res) => {
    try {
        let data = await news.find();

        return res.send(data);
    }
    catch (err) {
        return res.status(500).send({
            message: err.message
        })
    }
});
router.get('/newyear', async (req, res) => {
    try {
        let data = await newYear.find();

        return res.send(data);
    }
    catch (err) {
        return res.status(500).send({
            message: err.message
        })
    }
});
router.get('/northen', async (req, res) => {
    try {
        let data = await northen.find();

        return res.send(data);
    }
    catch (err) {
        return res.status(500).send({
            message: err.message
        })
    }
});
router.get('/southern', async (req, res) => {
    try {
        let data = await southern.find();

        return res.send(data);
    }
    catch (err) {
        return res.status(500).send({
            message: err.message
        })
    }
});
router.get('/awardmedia', async (req, res) => {
    try {
        let data = await awardmedia.find();

        return res.send(data);
    }
    catch (err) {
        return res.status(500).send({
            message: err.message
        })
    }
});
router.get('/weekend', async (req, res) => {
    try {
        let data = await weekend.find();

        return res.send(data);
    }
    catch (err) {
        return res.status(500).send({
            message: err.message
        })
    }
});
router.get('/food', async (req, res) => {
    try {
        let data = await food.find();

        return res.send(data);
    }
    catch (err) {
        return res.status(500).send({
            message: err.message
        })
    }
});
router.get('/nature', async (req, res) => {
    try {
        let data = await nature.find();

        return res.send(data);
    }
    catch (err) {
        return res.status(500).send({
            message: err.message
        })
    }
});
router.get('/off', async (req, res) => {
    try {
        let data = await off.find();

        return res.send(data);
    }
    catch (err) {
        return res.status(500).send({
            message: err.message
        })
    }
});
router.get('/latestread', async (req, res) => {
    try {
        let data = await latestread.find();

        return res.send(data);
    }
    catch (err) {
        return res.status(500).send({
            message: err.message
        })
    }
});
router.get('/booking', async (req, res) => {
    try {
        let city = req.query.city;
        console.log(city);
        let data = await booking.find()
        console.log(data);

        return res.send(data);
    }
    catch (err) {
        return res.status(500).send({
            message: err.message
        })
    }
});

router.post('/order', async (req, res) => {
    try {
        let data = req.body;
        const { name, Mname, Lname, gender, email, phone, address, room1, room1name, room1price, room2, room2name, room2price, room3, room3name, room3price, total, tax } = data;
        console.log(data);
        // await order.create({
        //     name: name,
        //     Mname: Mname,
        //     Lname: Lname,
        //     gender: gender,
        //     email: email,
        //     phone: phone,
        //     address: address,
        //     summary: [
        //         {
        //             room1: room1,
        //             room1name: room1name,
        //             room1price: room1price,
        //             room2: room2,
        //             room2name: room2name,
        //             room2price: room2price,
        //             room3: room3,
        //             room3name: room3name,
        //             room3price: room3price,
        //             total: total,
        //             tax: tax
        //         },
        //     ]
        // });

        await order.create(data)


        return res.send(data);
    }
    catch (err) {
        return res.status(500).send({
            message: err.message
        })
    }
});


router.get('/order', async (req, res) => {
    try {
        let data = await order.find();

        return res.send(data);
    }
    catch (err) {
        return res.status(500).send({
            message: err.message
        })
    }
});





module.exports = router;


// {
//     "name": "Denish",
//     "Mname": "j",
//     "Lname": "Fuletra",
//     "gender": "Male",
//     "email": "fuletradenish@gmail.com",
//     "phone": "7383243000",
//     "address": "C-308 Essencia Heights, near educomn internastional school, baner mahalunge road.",
//     "summary": [
//         {
//             "room1": 2,
//             "room1name": "4 Bed Mixed Dorm(Ensuite)",
//             "room1price": 949,
//             "room2": 2,
//             "room2name": "6 Bed Mixed Dorm (shared washroom)",
//             "room2price": 749,
//             "room3": 0,
//             "room3name": "10 Bed Mixed Dorm (shared washroom)",
//             "room3price": 649,
//             "total": 3396,
//             "tax": 611.28
//         }
//     ]
// }





