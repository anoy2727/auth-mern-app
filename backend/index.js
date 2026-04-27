// require('dotenv').config();
// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const AuthRouter = require('./Routes/AuthRouter');
// const ProductRouter = require('./Routes/ProductRouter');




// require('./Models/db');

// const PORT = process.env.PORT || 8080;

// app.get('/ping', (req,res) => {
//     res.send('PONG');
// });

// app.use(bodyParser.json());
// app.use(cors());
// app.use('/auth', AuthRouter )
// app.use('/products', ProductRouter);

// app.listen(PORT, () => {
//     console.log(`Server is ruuning on ${PORT}`)
// })

require('dotenv').config();
const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');

require('./Models/db');

const PORT = process.env.PORT || 8080;


app.use(cors({                      // ✅ cors first
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/ping', (req, res) => res.send('PONG'));
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

