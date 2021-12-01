import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import useAuth from '../../Auth/useAuth'
import DeleteModal from './componenets/DeleteModal';
import ChangePasswordModal from './componenets/ChangePasswordModal';
import useModal from '../../hooks/useModal';
import ProfilePicModal from './componenets/ProfilePicModal';
import EditModal from './componenets/EditModal';

export const Account = () => {
    const {user}= useAuth();
    const [isOpenDeleteModal, openDeleteModal, closeDeleteModal] = useModal();
    const [isOpenChangePasswordModal, openChangePasswordModal, closeChangePasswordModal] = useModal();
    const [isOpenEditModal, openEditModal, closeEditModal] = useModal();
    const [isOpenProfilePicModal, openProfilePicModal, closeProfilePicModal] = useModal();

    return (
        <>
            <Container>
                <Row className='mt-4'>
                    <Col xs={12} className='text-center'>
                        <img 
                            src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fphotos%2F20200000%2Fjohan-johan-liebert-20223809-420-314.jpg&f=1&nofb=1' 
                            alt='profile' 
                            onClick={openProfilePicModal}
                            style={{
                                width:'200px',
                                height:'200px',
                                borderRadius:'50%',// vovler imgane circular
                                objectFit:'cover', //respetar proporcion
                                cursor:'pointer'
                            }}/>
                    </Col>
                    <Col className='mt-4'>
                        <Card style={{maxWidth:'360px'}} className="mx-auto">
                            <p className="text-center"><b>nombre:</b>{user.name}</p>
                            <p className="text-center"><b>correo:</b>{user.email}</p>
                            <p className="text-center"><b>rol:</b>{user.rol}</p>

                            <Button variant='warning'
                                className='mt-1'
                                onClick={openEditModal}
                            > editar cuenta</Button>   

                            <Button variant='link' 
                             className='mt-1'
                             onClick={openChangePasswordModal}
                             >Cambiar clave</Button>

                            <Button variant='link' className='mt-3 text-danger'
                             onClick={openDeleteModal}>
                                Eliminar cuenta</Button> 

                        </Card>
                        
                    </Col>
                </Row>
            </Container>
            <DeleteModal
                isOpen={isOpenDeleteModal}
                close={closeDeleteModal}/>
            <ChangePasswordModal
                 isOpen={isOpenChangePasswordModal}
                 close={closeChangePasswordModal}/>
            <EditModal
                isOpen={isOpenEditModal}
                close={closeEditModal}/>
            <ProfilePicModal
                isOpen={isOpenProfilePicModal}
                close={closeProfilePicModal}/>
        </>
        
    )
}
