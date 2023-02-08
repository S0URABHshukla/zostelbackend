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





