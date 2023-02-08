const mongoose = require('mongoose');


const SummarySchema = mongoose.Schema({
    room1: Number,
    room1name: String,
    room1price: Number,
    room2: Number,
    room2name: String,
    room2price: Number,
    room3: Number,
    room3name: String,
    room3price: Number,
    total: Number,
    tax: Number,
});


const orderSchema = mongoose.Schema({
    name: String,
    Mname: String,
    Lname: String,
    gender: String,
    email: String,
    phone: String,
    address: String,
    summary: [
        {
            room1: Number,
            room1name: String,
            room1price: Number,
            room2: Number,
            room2name: String,
            room2price: Number,
            room3: Number,
            room3name: String,
            room3price: Number,
            total: Number,
            tax: Number,
        },
    ]

})

// const orderSchema = mongoose.Schema({
//     image: String,
//     name: String,
//     price: Number,
//     quantity: Number,
//     measurement: String,
//     details: String,
//     user: [
//         {
//             user_id: String,
//             user_name: String,
//         },
//     ]
// }
// )



const order = mongoose.model('order', orderSchema);


const destination = mongoose.model('destination', {});
const news = mongoose.model('new', {});
const newYear = mongoose.model('newyear', {});
const northen = mongoose.model('northen', {});
const southern = mongoose.model('southern', {});
const weekend = mongoose.model('weekend', {});
const awardmedia = mongoose.model('award&media', {});
const food = mongoose.model('food', {});
const nature = mongoose.model('nature', {});
const off = mongoose.model('off', {});
const latestread = mongoose.model('latestread', {});
const booking = mongoose.model('booking', {});



module.exports = {
    destination,
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
    order
}





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