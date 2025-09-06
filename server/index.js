import express from'express'
import connectDB from './db.js'
import Authroutes from './routes/Auth.js'
import MessageRoutes from './routes/Message.js'
import ProductRoutes from './routes/Product.js'
import cors from 'cors';
import path from 'path'
import multer from 'multer';
import fs from 'fs';
import { fileURLToPath } from 'url'; 
const app = express()
const port = 3005


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectDB()
app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const ensureUploadsDirectoryExists = () => {
  const dir = path.join(__dirname, "uploads");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Call this to create the directory if it doesn't exist
ensureUploadsDirectoryExists();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    ensureUploadsDirectoryExists(); // Ensure the directory exists before saving the file
    cb(null, path.join(__dirname, "uploads")); // Use absolute path
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    const uniqueSuffix =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + ext;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Route to handle file uploads
app.post("/upload", upload.single("file"), (req, res) => {
  res.send({ filePath: `/uploads/${req.file.filename}` });
});

app.use('/api/auth', Authroutes);
app.use('/api/messages', MessageRoutes);
app.use('/api/products', upload.array('images'), ProductRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
