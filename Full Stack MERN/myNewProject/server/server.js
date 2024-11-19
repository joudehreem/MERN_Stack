const express = require('express');
const cors = require('cors');
const app = express();

require('./config/mongoose.config');
app.use(cors());
app.use(express.json()); // Parse JSON payloads
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded payloads

require('./routes/person.routes')(app); // Include routes

app.listen(8000, () => {
    console.log("Listening at Port 8000");
});
