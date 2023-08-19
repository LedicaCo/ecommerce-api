const Cart = require("./Cart");
const Category = require("./Category");
const Product = require("./Product");
const Purchase = require("./Purchase");
const User = require("./User");

//Product -> categoryId
Product.belongsTo(Category)
Category.hasMany(Product)

// Cart --> UserId
Cart.belongsTo(User)
User.hasMany(Cart)

// Cart --> UserId
Cart.belongsTo(Product)
Product.hasMany(Cart)

//Purchase -> userId
Purchase.belongsTo(User)
User.hasMany(Purchase)