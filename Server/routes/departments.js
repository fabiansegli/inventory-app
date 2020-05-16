const express = require('express');
const departmentsController = require('../controllers/departments');
const router = express.Router();

router.get("/", departmentsController.getDepartments);

router.get("/:id", departmentsController.getDepartmentsById);

router.get("/deptname/:dept_name/", departmentsController.getDepartmentsByName);

module.exports = router;
