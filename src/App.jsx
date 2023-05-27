import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div id="container">
      <h1> Contacts Crud </h1>
      

    <table class="table table-striped">
        <thead class="thead-dark">
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
