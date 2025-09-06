```
# Ascend Clothing E-Commerce (MERN)

A **full-stack mini e-commerce web app** built for **Ascend Company** using the **MERN stack**.  
It provides a product catalog for shoppers while giving admins secure tools to manage inventory.

---

## 🚀 Features

### User-Facing
- Browse all products by **category** in a clean, responsive grid
- View **detailed product pages** (name, price, description, category, stock, image)
- Mobile-friendly **swiper/slideshow** for featured products
- Send **messages / queries** to the admin

### Admin
- **Create, Update, Delete (CRUD)** products
- **Upload product images** (stored on server or cloud)
- View & **delete user messages**
- Dashboard secured with **JWT authentication** (passwords stored as hashes)

---

## 🛠 Tech Stack

| Layer    | Technology                            |
|----------|----------------------------------------|
| Frontend | React, Context API (state), Swiper, Axios |
| Backend  | Node.js, Express.js                    |
| Database | MongoDB Atlas (Cluster) + Mongoose     |
| Auth     | JWT, bcrypt (hashed passwords)         |
| UI / UX  | Custom CSS, Responsive Layout          |

---

## 📂 Project Structure

```

ascend-ecom/
│
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── admin/          # Admin dashboard & CRUD
│       ├── components/     # Reusable UI components
│       ├── context/        # React Context for state
│       ├── pages/          # Product listing & detail
│       └── App.jsx
│
├── server/                 # Node + Express backend
│   ├── models/             # Mongoose schemas (Product, Message, User)
│   ├── routes/             # Product, Auth & Message routes
│   ├── middleware/         # Auth checks, validation
│   ├── db.js               # MongoDB connection
│   └── index.js            # Entry point
│
└── README.md

````

---

## ⚙️ API Endpoints

| Method | Endpoint            | Description         | Auth  |
|--------|---------------------|---------------------|-------|
| POST   | `/api/products`     | Add new product     | Admin |
| GET    | `/api/products`     | Get all products    | Public|
| GET    | `/api/products/:id` | Get a single product| Public|
| PUT    | `/api/products/:id` | Update product      | Admin |
| DELETE | `/api/products/:id` | Delete product      | Admin |
| POST   | `/api/auth/login`   | Login admin/user    | Public|
| POST   | `/api/messages`     | Send message        | Public|
| GET    | `/api/messages`     | View all messages   | Admin |
| DELETE | `/api/messages/:id` | Delete message      | Admin |

---

## 🔑 Authentication & Security

- **JWT** for stateless sessions  
- **Role-based access control**: only Admins can add/edit/delete products or view messages  
- **Passwords hashed** with bcrypt  

---

## 🗃 Database Schema

**Product**
```
{
  _id: ObjectId,
  name: String,
  price: Number,
  description: String,
  category: String,
  stock: Number,
  imageUrl: String
}
````

**Message**

```
{
  _id: ObjectId,
  name: String,
  email: String,
  message: String
}
```

**User**

```
{
  _id: ObjectId,
  username: String,
  email: String,
  password: String // hashed
}
```

---

## 📦 Installation

```bash
# Clone repo
git clone https://github.com/LMRoshan/Ascend-Ecom
cd ascend-ecom
```

### Backend

```bash
cd server
npm install
npm install bcrypt cors dotenv express express-validator jsonwebtoken mongoose multer nodemon
```

### Frontend

```
cd ../client
npm install
npm install bootstrap formik framer-motion react react-dom react-icons react-router-dom swiper yup
```

---

### Environment Variables

Create a `.env` inside `server/`:

```
dbURL= mongodb+srv://roshan:roshan497@acsend.tw7etwf.mongodb.net/?retryWrites=true&w=majority&appName=acsend
JWT_SECRET=Ascend
```

---

### Run Locally

```
# Run backend
cd server
nodemon ./index.js

# Run frontend
cd ../client
npm run dev
```

---

## 🌐 Deployment

* **Frontend:** Vercel
* **Backend:** Render
* **Database:** MongoDB Atlas

Live App → [https://ascend-kappa-one.vercel.app/]

---

## 📈 Possible Future Enhancements

* Full **shopping cart** & checkout flow
* **Order history** & email notifications
* Advanced **search** & filters
* Product **reviews** & ratings

---

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

```
