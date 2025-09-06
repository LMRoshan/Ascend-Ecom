Ascend Clothing E-Commerce (MERN)
A full-stack mini e-commerce web app built for Ascend Company using the MERN stack. It provides a product catalog for shoppers while giving admins secure tools to manage inventory.

🚀 Features

User-Facing
Browse all products by category in a clean, responsive grid.
View detailed product pages (name, price, description, category, stock, image).
Mobile-friendly swiper/slideshow for featured products.
Send messages/queries to the admin.

Admin

Create, Update, Delete (CRUD) products.
Upload product images (stored on the server / cloud).
View & delete user messages.
Dashboard secured by JWT authentication (passwords stored as hashes).

🛠 Tech Stack
Layer	Tech
Frontend	React, Context API (state), Swiper, Axios
Backend	Node.js, Express.js
Database	MongoDB Atlas (Cluster) with Mongoose
Auth	JWT, bcrypt (hashed passwords)
UI / UX	Custom CSS & responsive layout
📂 Project Structure
ascend-ecom/
│
├── client/               # React frontend
│   ├── public/
│   └── src/
├──     ├── admin/        #admin dashboard, admin CRUD operation
│       ├── components/   # Reusable UI components
│       ├── context/      # React Context for state
│       ├── pages/        # Product listing, detail, 
│       └── App.jsx
│
├── server/               # Node + Express backend
│   ├── models/           # Mongoose schemas (Product, Message, User)
│   ├── routes/           # Product & Auth & Message routes
│   ├── middleware/       # Auth checks, validation
│   └── index.js
│   └── db.js
│
└── README.md

⚙️ API Endpoints
Method	Endpoint	Description	Auth
POST	/api/products	Add new product	Admin
GET	/api/products	Get all products	Public
GET	/api/products/:id	Get a single product	Public
PUT	/api/products/:id	Update product	Admin
DELETE	/api/products/:id	Delete product	Admin
POST	/api/auth/login	Login admin / user	Public
POST	/api/messages	Send message to admin	Public
GET	/api/messages	View all user messages	Admin
DELETE	/api/messages/:id	Delete message	Admin

🔑 Authentication & Security

JWT for stateless sessions.
Role-based access control: only Admins can add/edit/delete products or view messages.
Passwords hashed with bcrypt.

🗃 Database Schema

Product
  {
    _id: ObjectId,
    name: String,
    price: Number,
    description: String,
    category: String,
    stock: Number,
    imageUrl: String
  }


Message
  {
    _id: ObjectId,
    name: String,
    email: String,
    message: String,
  }


User
  {
    _id: ObjectId,
    username: String,
    email: String, 
    password: String (hashed),
  }

📦 Installation
# Clone repo
  git clone https://github.com/LMRoshan/Ascend-Ecom
  cd ascend-ecom

# Install backend deps
  cd server
  npm install
  npm install bcrypt
  npm install cors
  npm install dotenv
  npm install express
  npm install express-validator
  npm install jsonwebtoken
  npm install mongoose
  npm install multer
  npm install nodemon

# Install frontend deps
  cd ../client
  npm install
  npm install bootstrap
  npm install formik
  npm install motion
  npm install react
  npm install react-dom
  npm install react-icons
  npm install react-router-dom
  npm install swiper
  npm install yup

Environment Variables
  Create a .env in server/:
  dbURL = your-mongodb-cluster-uri
  JWT_SECRET=your-secret-key

Run Locally
# Run backend
  cd server
  nodemon ./index.js

# Run frontend
  cd ../client
  npm run dev

🌐 Deployment

Frontend: Deployed on Vercel
Backend: Deployed on Render
Database: MongoDB Atlas Cluster
Deployed App → https://ascend-kappa-one.vercel.app/

📈 Possible Future Enhancements

Full shopping cart & checkout flow
Order history & email notifications
Advanced search & filters
Product reviews and ratings

🤝 Contributing

Fork the project
Create your feature branch (git checkout -b feature/new-feature)
Commit changes (git commit -m 'Add new feature')
Push to the branch (git push origin feature/new-feature)
Open a Pull Request
