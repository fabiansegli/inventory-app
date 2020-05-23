const mysql = require('mysql');
const pool = require('../mysql/connection');
const { handleSQLError } = require('../mysql/error');

//select product
const getProducts = (req, res) => {
  let sql = "SELECT * FROM ?? LIMIT ?";
  sql = mysql.format(sql, ["products", 50]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};
//Select product by 
const getProductsById = (req, res) => {
  let sql = "SELECT * FROM ?? WHERE id = ?";
  sql = mysql.format(sql, ["products", req.params.id]);
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};
//Select product by name
const getProductsByName = (req, res) => {
  let sql = "SELECT * FROM ?? WHERE prod_name = ?";
  sql = mysql.format(sql, ["products", req.params.prod_name]);
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = {
  getProducts,
  getProductsById,
  getProductsByName
};
