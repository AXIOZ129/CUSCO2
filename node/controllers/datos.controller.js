const datosModel = require ('../models/datos.model');
const datosController = {};

datosController.getDatos = async(req, res) => {
     const datos = await datosModel.find();
     res.json(datos);
};

datosController.addDatos = async(req, res) => {
     const datos = new datosModel(req.body);
     await datos.save();
     res.json({
         'status': 'User Saved'
     });
};

datosController.updateDatos = async(req, res) => {
     const { limite } = req.params;
     const datos = {
          limite: limite,
     };
     await datosModel.findByIdAndUpdate("611732a7abf72b0016595a5b",{$set: datos}, {new: true});
 res.json({status: 'Limite actualizado'});
};


datosController.deleteDatos = async (req, res) => {
     await datosModel.findByIdAndDelete(req.params.id);
     res.json({status: 'User Deleted'});
};

module.exports = datosController;
