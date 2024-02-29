import { useState } from "react";
import "./profileEdit.scss"
import { editProdile } from "../../../api/FirestoreAPI";
export default function P0rofileEdit({onEdit,currentUser}) {
  const [editInputs,setEditInputs] = useState({})
  const getInput = (event)=>{
    let {name,value} = event.target;
    let input = {[name]:value }
    setEditInputs({...editInputs,...input})
  }
  const updateProdile = async ()=>{
   await editProdile(currentUser?.userID,editInputs);
   await onEdit();
  }


 return (
   <div className="profile-card" >
   <h3>Profile edit </h3>
   <div className="edit-btn">
     <button  onClick={onEdit}>Voltar</button>
   </div>
    <div className="profile-edit-inputs" >
     <input
      className="commom-input" 
      placeholder="Nome"
      name = "name"
       onChange={getInput}

       />
     <input
      className="commom-input" 
      placeholder="Posição"
      name = "posicao"
      onChange={getInput}

      />
     <input
      className="commom-input" 
      placeholder="Descrição"
      name = "descricao"
      onChange={getInput}

      />
     <input
      className="commom-input" 
      placeholder="Cidade"
      name = "cidade"
      onChange={getInput}

      />
    </div>
   <div className="save-container" >
    <button 
    onClick={updateProdile}
    className="botao">
    Salvar alterações
    </button>
   </div>
    
   </div>
 );
}