import React,{useState} from 'react'
import {addUser} from '../services/api';
import {useHistory} from 'react-router-dom';

const initialUser = {
    name:"",
    email:"",
    phone:""
}

const Addusers = () => {
    const history = useHistory();
   
    const [user,setUser] = useState(initialUser);

    const {name,email,phone} = user;

    const addAllUsers = async()=>{
       
         await addUser(user);
        history.push('/all');
        
    }
    const inputChangeHandler=(e)=>
{
    setUser({...user,[e.target.name]:e.target.value})
}
    return (
        <div className="container w-50">

            <h4 className="mt-5">Add User</h4>
           {/* <form onSubmit={()=>addAllUsers()}  className="mt-3"> */}
               <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>

                <input type="text" className="form-control" id="name" 
                placeholder="Name" 
                name="name" 
                onChange={(e)=>inputChangeHandler(e)} 
                value={name} />
                </div>

                <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" 
                placeholder="Email" 
                name="email" 
                onChange={(e)=>inputChangeHandler(e)}
                value={email} />
                </div>

                <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="text" className="form-control" id="phone" 
                placeholder="Phone" 
                name="phone" 
                onChange={(e)=>inputChangeHandler(e)} 
                value={phone} />
                </div>
                <div className="mb-3">
                <button  className = "btn btn-primary" 
                onClick={addAllUsers} value="Add User">Add User</button>
                </div> 
                {/* </form>        */}
       </div>
    )
}

export default Addusers
