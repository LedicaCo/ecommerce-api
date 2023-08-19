const request = require("supertest")
const app = require("../app")
const Product = require("../models/Product")
const Cart = require("../models/Cart")

const URL_BASE_USERS = "/api/v1/users"
const URL_BASE = "/api/v1/purchase"

let TOKEN
let userId
let productBody
let product

beforeAll(async () => {

  //Inicio de sesion
  const user = {
    "email": "ceise@live.com",
    "password": "Ledica1234"
  }
  const res = await request(app)
    .post(`${URL_BASE_USERS}/login`)
    .send(user)

  TOKEN = res.body.token
  userId = res.body.user.id


  //PRODUCT
  productBody = {
    title: "productTest",
    description: "lorem20",
    price: 23
  }
  product = await Product.create(productBody)

  //CART
  const bodyCart = {
    quantity: 1,
    productId: product.id
  }

  await Cart.create(bodyCart)

})