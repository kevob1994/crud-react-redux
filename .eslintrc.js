module.exports = {
  "extends": [
    "react-app",
    "standard",
    "standard-react",
    "plugin:prettier/recommended"
  ],
  "plugins": [
    "react-hooks"
  ],
  "rules": {
    "prettier/prettier": "off",
    "no-param-reassign": "off",
    "valid-jsdoc": "off",
    "jsx-quotes": "off",
    "semi": "off",
    "default-case": "off",
    "react-hooks/rules-of-hooks": "error"
  }
};
