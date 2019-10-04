require("dotenv").config();

const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const db_name = process.env.DB_NAME;
const host = process.env.DB_HOST;

module.exports = {
  link: `mongodb+srv://${user}:${password}@${host}/${db_name}?retryWrites=true&w=majority`
};
