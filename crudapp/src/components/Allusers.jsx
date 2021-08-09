import React,{useEffect,useState} from 'react'
import  {getUsers,deleteUser}  from '../services/api';
import {Link} from 'react-router-dom';



const Allusers = () => {
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        getAllUsers();
    },[]);

    const getAllUsers = async ()=>{
        let res = await getUsers();
        
        setUsers(res.data);
    }

    const deleteUserData = async(id)=>{
        
       await deleteUser(id);
        getAllUsers();

    }
    return (
        <div className = "container-fluid d-flex flex-column justify-content-center align-items-center">
            <h4 className="mt-5 mb-5">All Users</h4>
                    <table className="table table-striped w-50 align-center">
                    <thead>
                        <tr>
                        
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th></th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user) =>(
                        <tr key={user._id} >
                        
                     
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>

                        <td><Link className="btn btn-info" to={`edit/${user._id}`}><i class="fas fa-user-edit" style={{color:'#fff'}}></i></Link></td>
                       
                        <td><button onClick={()=>deleteUserData(user._id)} className="btn btn-danger"><i class="fas fa-trash-alt" style={{color:'#fff',backgroundColor:'#ec071d'}}></i></button></td>
                        </tr>
                        )
                      )
                    }
                    </tbody>
                    </table>
                    </div>
              
    )
}

export default Allusers
