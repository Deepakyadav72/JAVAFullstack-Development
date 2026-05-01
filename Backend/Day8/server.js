const mongoose = require('mongoose');

const main = async () => {
    try {
        const connect = await mongoose.connect('mongodb://127.0.0.1:27017/deepak_db');
        console.log('DB is connected');

        let userData = new mainModel({
            name: 'Deepak',
            age: 200,
            married: false,
        });

        await userData.save();
        console.log('data has been successfully added');

        await mongoose.disconnect();
        console.log('DB is disconnected');

    } catch (error) {
        console.log('DB connection failed');
        console.log(error);
    }
};

const mainModel = new mongoose.model(
    'data',
    new mongoose.Schema(
        {
            name: String,
            age: Number,
            married: Boolean,
        },
        {
            versionKey: false,
        },
    ),
);

main();