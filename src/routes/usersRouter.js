var express = require('express');
var router = express.Router();
const updateMidd=require("../middlewares/updateMidd.js")
const {check} =require("express-validator");
const usersControllers = require("../controllers/usersControllers.js");


const validaciones=[
    check("nombre").notEmpty().withMessage("Debes completar con tu nombre"),
    check("colores").notEmpty().withMessage("Debes elegir un color"),
    check("email").isEmail().withMessage("Tienes que completar con un Email"),
    check("edad").isInt({min:1}).withMessage("Tienes que completar tu edad")
]


/* GET users listing. */
router.get("/create", usersControllers.create);
router.post("/update", validaciones, usersControllers.update);




module.exports = router;
