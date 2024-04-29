import React, { useEffect, useState } from 'react'
import { UpdateEmployee, createEmployee, getEmployee } from '../EmployeService';
import {useNavigate,useParams} from 'react-router-dom';



const EmployeeComponent = () => {
  const navaigate=useNavigate();


 const [errors,setErrors] = useState({
    firstName:'',
    lastName:'',
    email:''
  })

    const {id} = useParams();
   
    

    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    // const [id,setId]=useState(1);


    // const handleFirstName=(e)=setFirstName(e.target.value);

    useEffect(()=>{
      if(id){
        getEmployee(id).then((response)=>{
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);

        }).catch(error=>{
          console.error(error);
        })
      }
    },[id])

  function  handleFirstName(e){
    setFirstName(e.target.value);

  }
  function  handleLastName(e){
    setLastName(e.target.value);

  }
  function  handleEmail(e){
    setEmail(e.target.value);

  }
  
  function saveOrUpdateEmployee(e){
    e.preventDefault();
    
   if(validateForm()){
    const employee ={firstName,lastName,email}
    console.log(employee);

    if(id){
      UpdateEmployee(id,employee).then((response)=>{
        console.log(response.data);
        navaigate('/employee');

      }).catch(error=>{
        console.error(error);
      })
    }else{
      createEmployee(employee).then((response)=>{
        console.log(response.data);
        navaigate('/employee');
  
      }).catch(error=>{
        console.error(error);
      }) 
    }
    
   }
  }
  function validateForm(){
    let valid=true;
    const errorCopy={... errors}
    if(firstName.trim()){
      errorCopy.firstName='';
    }else{
      errorCopy.firstName='FirstName is required';
      valid=false;
    }
    if(lastName.trim()){
      errorCopy.lastName='';
    }else{
      errorCopy.lastName='LastName is required';
      valid=false;
    }
    if(email.trim()){
      errorCopy.email='';
    }else{
      errorCopy.email='Email is required';
      valid=false;
    }
    setErrors(errorCopy);

    return valid;
  }

  function pageTittle(){
    if(id){
      return <h2 className='text-center'>Update Employee</h2>
    }else{
      <h2 className='text-center'>AddEmployee</h2>
    }

  }

  return (
    <div className='container'>
        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
                {
                  pageTittle()
                }
                <div className="card-body">
                    <form >
                        <div className='form-group mb-2'>
                            <label className='form-label'>FirstName</label>
                            <input type="text"
                            placeholder='Enter the employee name'
                            name='firstName'
                            value={firstName}
                            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                            onChange={handleFirstName} />

                          {errors.firstName && (
                          <div className="invalid-feedback">{errors.firstName}
                          </div>)}
                            {/* onChange=((e)=setFirstName(e.target.value)) */}

                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>LastName</label>
                            <input type="text"
                            placeholder='Enter the employee lastname'
                            name='lastName'
                            value={lastName}
                            className={`form-control ${errors.lastName ? 'is-invliad':''}`}
                            onChange={handleLastName} />
                            {errors.lastName && (
                            <div className="invalid-feedback">{errors.lastName}</div>
                            )}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Email</label>
                            <input type="text"
                            placeholder='Enter the employee email'
                            name='email'
                            value={email}
                            className={`form-control ${errors.email ? 'is-invliad':''}`}
                            onChange={handleEmail} />
                            {errors.email && (
                           <div className="invalid-feedback">{errors.email}</div>
                            )}
                        </div>
                        <div>
                            <button className='btn btn-primary' onClick={saveOrUpdateEmployee}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
  )
}

export default EmployeeComponent