import "./FileUploadModal.scss"
import { Button, Modal,Progress } from 'antd';
import PropTypes from 'prop-types';
FileUploadModal.propTypes = {
    modalOpen: PropTypes.bool,
    setModalOpen: PropTypes.func,
    uploadImage: PropTypes.func,
    getImage: PropTypes.func,
    currentImage: PropTypes.object,
    progress : PropTypes.number,
    
};
export default function FileUploadModal({
    modalOpen,
    setModalOpen,
    uploadImage,
    getImage,
    currentImage,
    progress
}) {
 return (
   <div>
    <Modal
          title="Alterar foto de perfil" 
          wrapClassName="vertical-center-modal"
          open={modalOpen}
          onOk={() => setModalOpen(false)}
          onCancel={() => setModalOpen(false)}
          footer={[
            <Button 
            key="back" 
            size="large" 
            onClick={()=> setModalOpen(false)}          
           >
            Voltar
            </Button>,
            <Button
             disabled={!currentImage.name}
             key="submit" 
             type="primary"
             size="large" 
             onClick={ uploadImage }
             
             >
              Salvar
            </Button>,
          ]}
        >
        <div className="image-container" >
        <p>{currentImage.name}</p>
       <label htmlFor="image-input" >
       Adicionar Imagem
       </label>
         <input  
         hidden
         id="image-input"
         style={{color:"black"}} 
         type="file" 
         onChange={getImage}/>
         <div className="progress-bar" >
             { progress === 0 
        ? (<> </> )
        : (<Progress type="circle" percent={progress} size={50} />)}
         </div>
       
          
        </div>
        
        
        </Modal>
   </div>
 );
}