const contadorModel = require ('../models/contador.model');
const contadorController = {};

contadorController.getContador = async(req, res) => {
     const contador = await contadorModel.find();
     res.json(contador);
};

contadorController.addContador = async(req, res) => {
     const contador = new contadorModel(req.body);
     await contador.save();
     res.json({
         'status': 'User Saved'
     });
};

contadorController.updateContador = async(req, res) => {
     const { id } = req.params;
     const contador = {
          contador: req.body.contador

     };
     await contadorModel.findByIdAndUpdate(id,{$set: contador}, {new: true});
 res.json({status: 'User Updated'});
};



contadorController.deleteContador = async (req, res) => {
     await contadorModel.findByIdAndDelete(req.params.id);
     res.json({status: 'User Deleted'});
}



module.exports = contadorController;