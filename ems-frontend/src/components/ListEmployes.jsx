import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployess } from '../EmployeService';
import {useNavigate} from 'react-router-dom';

const ListEmployesComponent = () => {

    const [Employees,setEmployess]= useState([]);
    const navaigate =useNavigate();
    useEffect(()=>{
       getAllEmployess();
    },[]);
    function getAllEmployess(){
      listEmployess().then((response)=>{
        setEmployess(response.data);

    }).catch(error=>{
        console.log(error);
    })
    }

    // const dummyData=[
    //     {
    //         "id": 1,
    //         "firstname": "John",
    //         "lastname": "Doe",
    //         "email": "john.doe@example.com"
    //       },
    //       {
    //         "id": 2,
    //         "firstname": "Jane",
    //         "lastname": "Smith",
    //         "email": "jane.smith@example.com"
    //       },
    //       {
    //         "id": 3,
    //         "firstname": "Michael",
    //         "lastname": "Johnson",
    //         "email": "michael.johnson@example.com"
    //       },
    //       {
    //         "id": 4,
    //         "firstname": "Emily",
    //         "lastname": "Davis",
    //         "email": "emily.davis@example.com"
    //       },
    //       {
    //         "id": 5,
    //         "firstname": "William",
    //         "lastname": "Brown",
    //         "email": "william.brown@example.com"
    //       }
    // ]

    function addEmployee(){
      navaigate('/add-employee')

    }
    function updateEmplyee(id){
      navaigate(`/edit-employee/${id}`)
    }
    function removeEmplyee(id){
      console.log(id);
      deleteEmployee(id).then((response)=>{
        alert("Sucessfuly Delted"+id);
        getAllEmployess();
      }).catch(error=>{
        console.error(error);
      })
    }
  return (
    <div className="container">
  <h1 className="text-center mt-4">List of Employees</h1>
  <button className='btn btn-primary ' onClick={addEmployee}>AddEmployee</button>
  <table className="table table-striped table-bordered text-center">
    <thead className="thead-dark">
      <tr>
        <th>Employee ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {Employees.map((employee) => (
        <tr key={employee.id}>
          <td>{employee.id}</td>
          <td>{employee.firstName}</td>
          <td>{employee.lastName}</td>
          <td>{employee.email}</td>
          <td >
            <button className='btn btn-info'  onClick={()=>updateEmplyee(employee.id)}>Update</button>
            <button className='btn btn-danger'  onClick={()=>removeEmplyee(employee.id)}>Delete</button>

          </td>
          
        </tr>
      ))}
    </tbody>
  </table>
</div>

  )
}

export default ListEmployesComponent;