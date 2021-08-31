const { validationResult } = require("express-validator");
const validaciones=require("express-validator");
const usersControllers={

    create: function(req, res){
        res.render("form")
    },

    update:function(req, res){
        let errors=validationResult(req);
        if (!errors.isEmpty()){

        }
        else{
            return res.render("form", {errors:errors})

        }
       // res.redirect("form", {})
    }
}

module.exports=usersControllers