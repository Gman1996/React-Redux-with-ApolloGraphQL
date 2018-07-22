const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema.js');
const mongoose = require('mongoose');

// DB Config
const db = require('./config/keys').mongoURI;

const app = express();

const cors = require('cors');
app.use(cors());

app.use('/graphql', expressGraphQL({
    schema:schema,
    graphiql:true
}));

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Hello World'));

app.listen(port, () => console.log(`Server is running on port ${port}`));
