// src/controllers/userController.js
import Modeluser from '../models/user.js';  // Ajuste o caminho conforme necessário
import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import Athlete from '../models/atleta.js';
const router = express.Router();

let authConfig = "hpadosh2308234bp0fg8yt23p45038y342lrf8y2134rtp4;grp093743g047dfg";

const generateToken = ( user = {})=>{
    return jwt.sign({
        id : user.id,
        name : user.name
    },authConfig, {
        expiresIn: 86400
    });
}
const saltRounds = 10;
router.post('/registrarUsuario',  async (req, res) => {
    
    try {
        const { user, profile } = req.body;

        const emailExist = await Modeluser.findOne({ email: user.email });
        if (emailExist) {
            return res.status(409).json({
                message: "Email já está sendo usado por outro usuário.",
            });
        }
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        user.password = hashedPassword;

        const createdUser = await Modeluser.create(user);

        profile.idUser = createdUser.idUser;

        let createdProfile;

        switch (profile.perfil) {
            case 'Atleta':
             createdProfile = await Athlete.create(profile);
              break;
            case 'Clube':
             createdProfile = await Athlete.create(profile);
              break;
            case 'Treinador':
                createdProfile = await Athlete.create(profile);
              break;
            case 'Organizador de campeonato':
                createdProfile = await Athlete.create(profile);
              break;
            case 'Agente':
                createdProfile = await Athlete.create(profile);
              break;
            default:
              // Retorna null se o perfil não for válido
              createdProfile = await Athlete.create(profile);
          }

        res.status(201).json({
            user: createdUser,
            profile: createdProfile,
            token : generateToken(user),
            message: "Usuário criado com sucesso.",
        });
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar usuário", error: error.message });
   }
});

router.post("/authenticate", async(req,res)=>{
    const {email,password} = req.body;

    const user =  await Modeluser.findOne({email}).select("+password")
    //Confere email
    if(!user){
        return res.status(400).json({
            message: 'Usuario nao encontrado'
        })
    }else(
        console.log("Usuario encontrado")
    )
    //Confrere senha
    if (!(await bcrypt.compare(password, user.password))) {
        return res.status(400).send({
            message: "Senha Inválida"
        });
    }
    user.password = undefined
    //Gerar Token
    return res.json({
        user,
        token : generateToken(user)
    })}    
)

router.get('/:id', async (req, res) => {
    try {
        const user = await Modeluser.findById(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).send({ message: "Usuário não encontrado" });
        }
    } catch (error) {
        res.status(500).send({ message: "Erro ao buscar usuário", error: error.message });
    }
});
// No seu arquivo de rotas

router.get('/', async (req, res) => {
    try {
        const users = await Modeluser.find();
        if(users.lenght === 0){
            return res.status(400).json({
                message:"Não tem usuario cadastrado"
            })
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send({ message: "Erro ao buscar usuários", error: error.message });
    }
});


export default router