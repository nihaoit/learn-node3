module.exports.absolute = function (number) {

  return (number >= 0) ? number : -number
  /* if (number > 0) {

    return number
  }
  if (number < 0) {

    return -number
  }

  return 0 */
}

module.exports.greet = function (name) {
  return 'Hello ' + name + '!'
}

module.exports.getPay = function () {
  return ["RMB", 'USD', 'EUR']
}

module.exports.getProduct = function (productId) {
  return {
    id: productId,
    price: 10,
    category: 'a'
  }
}

module.exports.registerUser = function (username) {
  if (!username) {
    throw new Error('username is not valid!')
  }

  return {
    id: new Date().getTime(),
    username: username
  }

}