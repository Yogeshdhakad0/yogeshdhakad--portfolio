// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// // import dotenv from 'dotenv';
// import { fileURLToPath } from 'url';
// import { dirname, join } from 'path';
// import contactRoutes from './routes/contactRoutes.js';
// import projectRoutes from './routes/projectRoutes.js';

// // Configuration
// import dotenv from 'dotenv';
// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // MongoDB Connection
// const connectDB = async () => {
//  try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log('MongoDB connected successfully');
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//     process.exit(1);
//   }
// };

// // Routes
// app.use('/api/contact', contactRoutes);
// app.use('/api/projects', projectRoutes);

// // Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(join(__dirname, '../dist')));
//   app.get('*', (req, res) => {
//     res.sendFile(join(__dirname, '../dist/index.html'));
//   });
// }

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
//   connectDB();
// });


// server/index.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Import routes
import contactRoutes from './routes/contactRoutes.js';
import projectRoutes from './routes/projectRoutes.js';

// Load env variables
dotenv.config();

// App setup
const app = express();
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

// API Routes
app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);

// Static Files (Production Only)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '../dist')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../dist/index.html'));
  });
}

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  connectDB();
});
