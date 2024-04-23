import { Modal, Button, Progress} from 'antd';
import "./Modal.scss"
import { GoFileMedia } from "react-icons/go";
import PropTypes from 'prop-types';
import { useState } from 'react';
ModalComponent.propTypes = {
    modalOpen: PropTypes.bool,
    setModalOpen: PropTypes.func,
    setStatus: PropTypes.func,
    status : PropTypes.string,
    sendStatus:PropTypes.func,
    isEdit : PropTypes.bool,
    updateStatus:PropTypes.func,
    uploadPostImage:PropTypes.func,
    setPostImage:PropTypes.func,
    postImage:PropTypes.object,
    currentPost: PropTypes.object,
    setCurrentPost:PropTypes.object

};

export default function ModalComponent({
  modalOpen,
  setModalOpen,
  setStatus,
  status,
  sendStatus,
  isEdit,
  updateStatus,
  uploadPostImage,
  setPostImage,
  postImage,
  currentPost,
  setCurrentPost
}){
    const [progress,setProgress] = useState(0)

  return (
    <>
      <Modal

        centered
        open={modalOpen}
        onOk={() => {
          setStatus("");
          setModalOpen(false)
          setPostImage('')
          setCurrentPost({})
          }}
        onCancel={() => {
          setStatus("");
          setModalOpen(false)
          setPostImage('')
          setCurrentPost({})
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
      <div className='posts-body' >
         <textarea
            className='modal-input'
            rows={5}
            cols={3}
            placeholder='Sobre o que você quer falar?'
            onChange={(event)=>setStatus(event.target.value)}
            value={status}
        />
      

        <div className="progress-bar" >
             { progress === 0 || progress === 100
        ? (<> </> )
        : (<Progress type="circle" percent={progress} size={50} />)}
         </div>
        {postImage?.length > 0 || currentPost?.postImage?.length ?
         (<img 
         className="post-image-upload"
         src={ postImage || currentPost?.postImage}
         alt='post-image'/> )
          : <></> }
      </div>
       
        <label htmlFor="pic-upload"> <GoFileMedia size={26} className='picture-icon'/></label>
        <input 
        id='pic-upload'
        type='file'
        hidden 
        onChange={(event)=>uploadPostImage(event.target.files[0],setPostImage,setProgress)} />
       
      </Modal>
    </>
  );
}
