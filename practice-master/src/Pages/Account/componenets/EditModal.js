import {useEffect} from 'react';
import { Modal, Form, Button, Alert } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import changePasswordResolver from "../../../validation/changePasswordResolver";

export default function EditModal({isOpen, close}) {
    const {handleSubmit, register, formState: {errors}, reset }=useForm({
        resolver:changePasswordResolver});

    const onSubmit = (formData) => {
        console.log(formData)
    }

    useEffect(() => {
        if(!isOpen){
            reset();
        }
    }, [isOpen, reset])

    return (
        <Modal show={isOpen} onHide={close}>

            <Modal.Header closeButton>
                <Modal.Title> cambiar clave</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>

                    <Form.Group>
                        <Form.Label> Nuevo nombre </Form.Label>
                            <Form.Control
                             type="text"
                             placeholder="Escribe un nuevo nombre"
                             {...register("password")}/>

                        <Form.Label> Nuevo correo </Form.Label>
                            <Form.Control
                             type="text"
                             placeholder="Escribe un nuevo correo"
                             {...register("password")}/>

                             {errors?.password &&(
                                <Form.Text>
                                    <Alert variant="danger">
                                        {errors.password.message}
                                    </Alert>
                                </Form.Text>
                             )}
                             
                    </Form.Group>
                     
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondaty" onClick={close}>
                    cancelar
                </Button>
                <Button variant="primary" onClick={handleSubmit(onSubmit)}>
                    Cambiar clave
                </Button>
            </Modal.Footer>

        </Modal>
    )
}
