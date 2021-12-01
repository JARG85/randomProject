import {useState} from 'react';
import { Modal, Form, Button} from "react-bootstrap";
import {toast} from 'react-toastify'
//import useAuth from '../../../Auth/useAuth'

export default function ProfilePicModal({isOpen, close}) {

    //const {logout} = useAuth();
    const onSubmit = () => {

    }
    const handleSubmit = () => {
        //peticion http
        
    }

    const [selectFile, setSelectFile] = useState(null);

    const handleFile = (e) => {
        const [file] = e.target.files;
        const isValidSize = file.size < 200 *1024

        if (!isValidSize) return toast.error("Imagen no valida");

        setSelectFile(file);

        const reader = new FileReader();

        reader.onloadend = () => {
            setSelectFile(reader.result);
        }
        reader.readAsDataURL(file);

        //console.log(reader);

       // console.log(e.target.files[0]);
    }


    return (
        <Modal show={isOpen} onHide={close}>

            <Modal.Header closeButton>
                <Modal.Title> Cambiar foto de perfil</Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.File
                        onChange={handleFile}
                        accept='.jpg, .jpeg, .png, .gif'/>
                </Form>

                <h3>Previsualizacion de la imagen</h3>

                <img 
                    className="img-fluid"
                    src={selectFile}
                    alt="profile-preview"/>
                
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondaty" onClick={close}>
                    cancelar
                </Button>
                <Button variant="primary" >
                    Cambiar foto
                </Button>
            </Modal.Footer>

        </Modal>
    )
}
