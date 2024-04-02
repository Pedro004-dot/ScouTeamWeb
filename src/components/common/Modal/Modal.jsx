import { Modal, Button} from 'antd';
import "./Modal.scss"

import PropTypes from 'prop-types';

ModalComponent.propTypes = {
    modalOpen: PropTypes.bool,
    setModalOpen: PropTypes.func,
    setStatus: PropTypes.func,
    status : PropTypes.string,
    sendStatus:PropTypes.func,
    isEdit : PropTypes.bool,
    updateStatus:PropTypes.func,
};

export default function ModalComponent({
  modalOpen,
  setModalOpen,
  setStatus,
  status,
  sendStatus,
  isEdit,
  updateStatus
}){
    
  return (
    <>
      <Modal
     
        centered
        open={modalOpen}
        onOk={() => {
          setStatus("");
          setModalOpen(false)
          }}
        onCancel={() => {
          setStatus("");
          setModalOpen(false)
          }}
        footer={[
          <Button 
           key="submit"
           onClick={ isEdit? updateStatus : sendStatus}
           type="primary"  
           disabled={status.length > 5 ? false : true} >
            {isEdit? "Editar" : "Postar"}
          </Button>,
          
        ]}
      >
        <input
            className='modal-input'
            placeholder='Sobre o que você quer falar?'
            onChange={(event)=>setStatus(event.target.value)}
            value={status}
        />
      </Modal>
    </>
  );
}
