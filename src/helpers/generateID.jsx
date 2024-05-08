
  import uuid from 'react-uuid';
export default function generateID(profile){
   let idUser =`user${uuid()}`
   let idProfile = '';
  switch (profile) {
    case 'Atleta':
      idProfile = `AT${uuid()}`;
      break;
    case 'Clube':
      idProfile = `CL${uuid()}`;
      break;
    case 'Treinador':
      idProfile = `TR${uuid()}`;
      break;
    case 'Organizador de campeonato':
      idProfile = `OC${uuid()}`;
      break;
    case 'Agente':
      idProfile = `AG${uuid()}`;
      break;
    default:
      // Retorna null se o perfil não for válido
      idProfile = null;
  }

    return {idUser,idProfile}
}

