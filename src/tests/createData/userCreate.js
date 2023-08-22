const User = require("../../models/User")

const userCreate = async () => {

  const user = {
    firstName: "Leonardo",
    lastName: "Diaz Castrillon",
    email: "ceise@live.com",
    password: "Ledica1234",
    phone: "3215555555"
  }

  await User.create(user)

}

module.exports = userCreate