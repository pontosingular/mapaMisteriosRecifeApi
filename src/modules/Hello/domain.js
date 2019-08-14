// domain implements the domain rules and processing. No Network or db calls here.
const say = (name) => `Hello ${name}`
const defaultRes = () => `Hello World`

module.exports = {say, defaultRes}