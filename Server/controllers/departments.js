const mysql = require('mysql');
const pool = require('../mysql/connection');
const { handleSQLError } = require('../mysql/error');

//select department
const getDepartments = (req, res) => {
  let sql = "SELECT * FROM ?? LIMIT ?";
  sql = mysql.format(sql, ["departments", 50]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};
//Select department by department id
const getDepartmentsById = (req, res) => {
  let sql = "SELECT * FROM ?? WHERE id = ?";
  sql = mysql.format(sql, ["departments", req.params.id]);
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};
//Select department by department name
const getDepartmentsByName = (req, res) => {
  let sql = "SELECT * FROM ?? WHERE dept_name = ?";
  sql = mysql.format(sql, ["departments", req.params.dept_name]);
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = {
  getDepartments,
  getDepartmentsById,
  getDepartmentsByName
};
