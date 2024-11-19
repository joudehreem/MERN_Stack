const express = require('express');
const cors = require('cors')
const app = express();

require('dotenv').config();
require('./config/mongoose.config.js')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/product.routes.js')(app);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
