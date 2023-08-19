const User = require("../../models/User")

const userCreate = async () => {

  const user = {
    firstName: "Leonardo",
    lastName: "Diaz Castillon",
    "email": "ceise@live.com",
    "password": "Ledica1234",
    phone: "+4312"
  }

  await User.create(user)

}

module.exports = userCreate