import React, { useState } from 'react'
import { Alert, Button, Modal } from 'react-bootstrap';
import {RiEmotionSadLine} from 'react-icons/ri'
import { AiFillInstagram } from 'react-icons/ai'

const InfoInstagram = () => {
    
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>

      <Button className="btn btn-color-#DD2A7B" onClick={handleShow}><AiFillInstagram/></Button>

  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>404 bad request!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center"><Alert variant="success">Ops! Ainda não temos essa informação <RiEmotionSadLine/> </Alert></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default InfoInstagram;