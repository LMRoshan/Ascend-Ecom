import express from 'express';
import Product from '../models/Product.js';
import fetchUser from '../middleware/Fetchuser.js';
import expressValidator from 'express-validator';

const { body, validationResult } = expressValidator;
const router = express.Router();

// create
router.post('/createProduct', fetchUser, [
    body('title').isLength({ min: 2 }),
    body('description').isLength({ min: 2 }),
    body('price').isNumeric(),
    body('stock').isNumeric(),
    body('category').isLength({ min: 2 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { title, description, price, category, stock } = req.body;

         let img = req.files.map(e => {
            return e.filename
        })

        const prod = await Product.create({
            user: req.user.id,
            title,
            description,
            price,
            category,
            stock,
            img
        })

        res.json({ success: true, prod })
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
    }
})

// read
router.get('/getProducts', async (req, res) => {
    try {
        const products = await Product.find()
        res.json({ success: true, products })
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
    }
})

// update 
router.put('/updateProduct/:id', fetchUser, [
    body('title').isLength({ min: 2 }),
    body('description').isLength({ min: 2 }),
    body('price').isNumeric(),
    body('stock').isNumeric(),
    body('category').isLength({ min: 2 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { title, description, price, category, stock } = req.body;

        const newProd = {}
        if (title) newProd.title = title;
        if (description) newProd.description = description;
        if (price) newProd.price = price;
        if (category) newProd.category = category;
        if (stock) newProd.stock = stock;

        let prod = await Product.findById(req.params.id)
        if (!prod) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        if (prod.user.toString() !== req.user.id) {
            return res.status(401).json({ success: false, message: 'Unauthorized' });
        }

        prod = await Product.findByIdAndUpdate(req.params.id, { $set: newProd }, { new: true })
        res.json({ success: true, prod })
    } catch (error) {
        return res.status(500).send("Server Error")
    }
})


// delete
router.delete('/deleteProduct/:id', fetchUser, async (req, res) => {
    try {
        let product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        if (product.user.toString() !== req.user.id) {
            return res.status(401).json({ success: false, message: 'Unauthorized' });
        }

        product = await Product.findByIdAndDelete(req.params.id)
        res.json({ success: true, message: "Product has been deleted", product })
    } catch (error) {
        return res.status(500).send("Server Error")
    }
})


// getbyCategory
router.get("/category/:category", async (req, res) => {
  const category = req.params.category;

  try {
    const products = await Product.find({ category: category });
    if (!products.length) {
      return res.status(404).json({ success: false, message: "No products found in this category" });
    }
    res.json({ success: true, products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;