
import { Modal, Button} from 'antd';
import "./Modal.scss"



export default function ModalComponent({modalOpen,setModalOpen,setStatus,status,sendStatus}){
    
  return (
    <>
      <Modal
        title="Create a post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button 
           key="submit"
           onClick={sendStatus}
           type="primary"  
           disabled={status.length > 5 ? false : true} >
            Post
          </Button>,
          
        ]}
      >
        <input
            className='modal-input'
            placeholder='What do you want to talk about'
            onChange={(event)=>setStatus(event.target.value)}
            value={status}
        />
      </Modal>
    </>
  );
}
