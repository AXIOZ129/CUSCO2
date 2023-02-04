const mongoose = require('mongoose');
const URL = 'mongodb+srv://lomeli_angel:12345@cluster0.pktc1.mongodb.net/cusco';

mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('MongoDB Connected'))
.catch(err => console.log('Error: ' + err));

module.exports = mongoose;