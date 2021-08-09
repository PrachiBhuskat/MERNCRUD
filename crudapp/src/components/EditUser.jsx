import React,{useEffect, useState} from 'react'
import {getUsers,editUser} from '../services/api';
import {useHistory,useParams} from 'react-router-dom';

const initialUser = {
    name:"",
    email:"",
    phone:""
}

const EditUser = () => {
    const history = useHistory();
    const {id} = useParams();
    const [user,setUser] = useState(initialUser);

    const {name,email,phone} = user;
     useEffect(()=>{
        const loadUserdata = async ()=>{
            const response = await getUsers(id);
            setUser(response.data);
         }
    
    loadUserdata();
    },[id]);

   
    const editUserDetails = async()=>{
    
       const res = await editUser(id,user);
        console.log(res);
        history.push('/all');
        
    }
    const inputChangeHandler=(e)=>
{
    setUser({...user,[e.target.name]:e.target.value})
}



    return (
<div className="container w-50">

    <h4 className="mt-5 mb-3">Edit User</h4>
<div className="mb-3 mt-5">
  <label htmlFor="name" className="form-label">Name</label>

  <input type="text" className="form-control" id="name" 
  placeholder="Name" 
  name="name" 
  onChange={inputChangeHandler} 
  value={name} />
</div>

<div className="mb-3">
  <label htmlFor="email" className="form-label">Email</label>
  <input type="email" className="form-control" id="email" 
  placeholder="Email" 
  name="email" 
  onChange={inputChangeHandler}
   value={email} />
</div>

<div className="mb-3">
  <label htmlFor="phone" className="form-label">Phone</label>
  <input type="text" className="form-control" id="phone" 
  placeholder="Phone" 
  name="phone" 
  onChange={inputChangeHandler} 
  value={phone} />
</div>

<div className="mb-3">
<button  onClick={editUserDetails} className = "btn btn-primary" 
 >Edit User</button>
</div>

</div>
)
}

export default EditUser