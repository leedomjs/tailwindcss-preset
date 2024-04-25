const {
  ElColors,
  NaiveColors,
  VanColors,
  VanBackground,
} = require('./colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        ...ElColors,
        ...NaiveColors,
        ...VanColors,
      },
      backgroundImage: {
        ...VanBackground,
      },
    },
  },
}
