const { validationResult } = require("express-validator");
//const validaciones=require("express-validator");
const usersControllers={

    create: function(req, res){
        res.render("form")
    },

    update:function(req, res){
      let resultValidation=validationResult(req);
     if (resultValidation.errors.length>0){
         return res.render("form",{
         errors:resultValidation.mapped(),
         oldData:req.body
    });


     }
     //else{return res.render("form", {errors:errors}) }

     //res.redirect("form", {})
       
    }
}

module.exports=usersControllers