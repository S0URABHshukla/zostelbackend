const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

async function ConnectDatabase() 
{
    const result = await mongoose.connect("mongodb+srv://zostel:zostel123@cluster0.h33fnhs.mongodb.net/?retryWrites=true&w=majority")
    return result;
}
module.exports = ConnectDatabase;