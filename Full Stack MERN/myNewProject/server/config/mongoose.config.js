// const mongoose = require('mongoose');

// // Load environment variables
// const dbName = process.env.DB;
// const username = process.env.ATLAS_USERNAME;
// const password = process.env.ATLAS_PASSWORD;

// //  MongoDB URI
// const uri = `mongodb+srv://${username}:${password}@cluster0.add8y.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// // Connect to MongoDB
// mongoose.connect(uri)
//     .then(() => console.log("Established a connection to the database"))
//     .catch(err => console.log("Something went wrong when connecting to the database", err));

// Connect to MongoDB
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));
