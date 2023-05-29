import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal } from 'react-bootstrap';
import deleteImage from './img/excluir.png'
import editImage from './img/editar.png'

function MyModal() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex justify-content-center">
      <Button variant="primary" onClick={handleShow} className="modalButton">
        New contact
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new contact to the list</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <label htmlFor="name">Name:</label><br />
          <input type="text" id='name' pattern="^[a-zA-Z]+$" title="Por favor, insira apenas letras."/> <br />
          <label htmlFor="phoneNumber">Phone number:</label> <br />
          <input type="tel" id="phoneNumber" /> <br />
          <label htmlFor="profession">Profession</label> <br />
          <input type="text" id="profession" pattern="^[a-zA-Z]+$" title="Por favor, insira apenas letras."/> <br />
          <label htmlFor="birthday">Birthday:</label> <br />
          <input type="date" id="birthday" /> <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>

      <Button variant="primary" className="btn btn-danger" id='secondButton'> 
        Delete all
      </Button>
    </div>

  );
}

function App() {
  return (
    <div id="container">
      <h1>Contacts Crud</h1>
      <MyModal/>

      <table className="table table-striped">
      <thead className="thead-dark">
          <tr>
          <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Cellphone number</th>
            <th scope="col">birthday</th>
            <th scope="col">Profession</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td> Chris Bumstead </td>
            <td> (99)9999-9999 </td>
            <td> 22/07/1993 </td>
            <td> Bodybuilder </td>   
            <td> <img src={editImage} style={{height:"40px"}} alt="Edit Icon " /></td>
            <td> <img src={deleteImage} style={{height:"40px"}} alt="Delete icon" /> </td> 
          </tr>
          <tr>
            <th scope="row">2</th>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> <img src={editImage} style={{height:"40px"}} alt="Edit Icon " /></td>
            <td> <img src={deleteImage} style={{height:"40px"}} alt="Delete icon" /> </td> 
          </tr>
          <tr>
            <th scope="row">3</th>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> <img src={editImage} style={{height:"40px"}} alt="Edit Icon " /></td>
            <td> <img src={deleteImage} style={{height:"40px"}} alt="Delete icon" /> </td> 
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
