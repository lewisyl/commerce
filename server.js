const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
var autoIncrement = require("mongoose-auto-increment");
app.use(express.json());
app.listen(8000, () => console.log("listening on port 8000"));
app.use(express.static(__dirname + "/public/dist/public"));
mongoose.set("useFindAndModify", false);
app.use(express.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost/commerce", { useNewUrlParser: true });

var connection = mongoose.createConnection("mongodb://localhost/commerce");
autoIncrement.initialize(connection);

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Product name is required!"],
            minlength: [3, "Product name must have at least 3 characters!"]
        },
        quantity: {
            type: Number,
            required: [true, "Product quantity is required!"],
            min: [0, "Product quantity can't be less than 0."]
        },
        price: {
            type: Number,
            required: [true, "Product price is required!"],
            min: [0, "Product price can't be lower than $0."]
        }
    },
    { timestamps: true }
);
ProductSchema.plugin(autoIncrement.plugin, "Product");
const Product = mongoose.model("Product", ProductSchema);

//ALL PRODUCTS
app.get("/exp-products", (req, res) => {
    Product.find()
        .then(products => {
            res.json({
                message: "success",
                result: products
            });
        })
        .catch(err => res.json({ message: "error", result: err }));
});

//NEW PRODUCT
app.post("/exp-products/new", (req, res) => {
    const newProduct = new Product(req.body);
    newProduct
        .save()
        .then(newProduct => {
            res.json({
                message: "success",
                result: newProduct
            });
        })
        .catch(err => res.json({ message: "error", result: err }));
});

//DETAILS
app.get("/exp-products/:id", (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(product => {
            res.json({
                message: "success",
                result: product
            });
        })
        .catch(err => res.json({ message: "error", result: err }));
});

//UPDATE
app.put("/exp-products/edit/:id", (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        {
            name: req.body.name,
            quantity: req.body.quantity,
            price: req.body.price
        },
        { runValidators: true }
    )
        .then(updatedProduct => {
            res.json({
                message: "success",
                result: updatedProduct
            });
        })
        .catch(err => res.json({ message: "error", result: err }));
});

//DELETE
app.delete("/exp-products/:id", (req, res) => {
    Product.findOneAndDelete({ _id: req.params.id })
        .then(removedProduct => {
            res.json({
                message: "success",
                result: removedProduct
            });
        })
        .catch(err => res.json({ message: "error", result: err }));
});

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
});
