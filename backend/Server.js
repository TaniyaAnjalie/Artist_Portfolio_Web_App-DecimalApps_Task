// const express = require('express');
// const mongoose = require('mongoose');

// require('dotenv').config();

// const app = express();

// const ArtRoute = require('./Routes/ArtRoute')

// app.use(express.json());

// app.use('/art', ArtRoute)

// const MONGO_URL = process.env.MONGO_URL;
// const PORT = process.env.PORT || 3000;

// // Connect to MongoDB
// mongoose.connect('MONGO_URL', { useNewUrlParser: true, useUnifiedTopology: true })

//   .then(() => {
//     console.log('Connected to MongoDB!');

//     // Start the Express server
//     const PORT = process.env.PORT || 3000;
//     app.listen(PORT, () => {
//       console.log(`Node API is running on port ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });

// // app.post('/art', (req, res) => {
// //   console.log(req.body);
// //   res.json({ message: 'Data received successfully' });
// // });

// app.get('/', (req, res) => {
//   res.send('Hello');
// });




const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:artworkAdmin@artwork.f0skof2.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
const eventRoutes = require('./Routes/eventRoutes');
app.use('/events', eventRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
