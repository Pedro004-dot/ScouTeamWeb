import express from 'express';
import AtletaModel from '../models/atleta.js'
import ModelUser from '../models/user.js'
const router = express.Router();

router.post('/registrarAtleta',  async (req, res) => {
    console.log(req.body)
    try {
        console.log(req.body)
        const {idUser} = req.body;
        const idUserExist = await await  ModelUser.findById(idUser);
       

        if (!idUserExist) {
            return res.status(409).json({
                message: "Usuario não identificado",
            });
        }

        const atleta = await AtletaModel.create(req.body) 

        res.status(201).json({
            atleta,
            message: "Atleta criado com sucesso.",
        });
        
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar Atleta", error: error.message });
   }
});
export default router