const passwordModel = require ('../models/password.model');
const passwordController = {};
const jsonwebtoken = require('jsonwebtoken');

passwordController.getPassword = async(req, res) => {
     const password = await passwordModel.find();
     res.json(password);
};

passwordController.addPassword = async(req, res) => {
     const password = new passwordModel(req.body);
     await password.save();
     res.json({
         'status': 'User Saved'
     });
};

passwordController.updatePassword = async(req, res) => {
     const { id } = req.params;
     const password = {
          password: req.body.password,

     };
     await passwordModel.findByIdAndUpdate(id,{$set: password}, {new: true});
 res.json({status: 'User Updated'});
};


passwordController.deletePassword = async (req, res) => {
     await passwordModel.findByIdAndDelete(req.params.id);
     res.json({status: 'User Deleted'});
};

//funcion para el login
passwordController.signIn = async (req, res) => {
    const {password} = req.body;
    const user = await passwordModel.findOne({password});
    if (!user) return res.status(401).send("La contraseña no existe");
    if (user.password != password) return res.status(401).send("La contraseña es incorrecta");

    const token = jsonwebtoken.sign({_id: user._id}, 'cuscosecret');//Nombramos el token
    return res.status(200).send({token});//regresamos el token
};




module.exports = passwordController;