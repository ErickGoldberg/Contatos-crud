import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal } from 'react-bootstrap';

function MyModal() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        New contact
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Meu Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Conteúdo do modal.</p>
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
    </>
  );
}

function App() {
  return (
    <div id="container">
      <h1>Contacts Crud</h1>
      <MyModal />

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
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>   
            <td> </td>
            <td> </td> 
          </tr>
          <tr>
            <th scope="row">2</th>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td> 
          </tr>
          <tr>
            <th scope="row">3</th>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td> 
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
