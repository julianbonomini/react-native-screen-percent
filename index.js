const Dimensions = require('react-native')

const wp = percent => {
  const { width } = Dimensions.get('window')
  return (percent * width) / 100
}

const hp = percent => {
  const { height } = Dimensions.get('window')
  return (percent * height) / 100
}

module.exports = {
  wp,
  hp
}