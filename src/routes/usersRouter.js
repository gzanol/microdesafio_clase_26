var express = require('express');
var router = express.Router();
const updateMidd=require("../middlewares/updateMidd.js")
const {check} =require("express-validator");
const usersControllers = require("../controllers/usersControllers.js");
const multer=require("multer");
const path=require("path"); //modulo nativo de node es para darle destino a los archivos

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./public/images/perfil");

    },

    filename: (req,file,cb)=>{
        let fotoName="${Date.now()}_img${path.extname(file.originalname)}";
    cb (null,fotoName) 
    }
})

const uploadFile=multer({storage});


const validaciones=[
    check("nombre").notEmpty().withMessage("Debes completar con tu nombre"),
    check("colores").notEmpty().withMessage("Debes elegir un color"),
    check("email")
    .notEmpty().withMessage("Tienes que escribir un Email").bail()//bail corta la validacion si es que la condicion se cumple (el error)
    .isEmail().withMessage("Tienes que completar con un Email valido"),
    check("edad").isInt({min:1}).withMessage("Tienes que completar tu edad"),
    check("perfil").custom((value,{req})=>{
        let file=req.file;
        if(!file){
            throw new Error("Tenes que subir una imagen");
        }
        return true;
    }
)
]


/* GET users listing. */
router.get("/create", usersControllers.create);
router.post("/update", uploadFile.single("perfil"), validaciones, usersControllers.update);




module.exports = router;
