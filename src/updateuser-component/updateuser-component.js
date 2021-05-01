import {useState} from 'react'
import React from 'react'
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import TableCell from "@material-ui/core/TableCell";
import './updateuser-component.css';

const UpdateUser = ({user, ToUpdate}) => {
    const [id, setId] = useState(user.id)
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [gender, setGender] = useState(user.gender)
    const [status, setStatus] = useState(user.status)

    const onSubmit = (e) => {

        ToUpdate({id, name, email, gender, status})
        e.preventDefault()
    }

    return (    
        <form className='update-form' onSubmit={onSubmit}>
            
        <div className='update-form-control'>    
            <label>Id</label>
            <input
                type = 'text'
                placeholder='enter Name'
                value={user.id}
            />
            </div>
        <div className='update-form-control'>    
            <label>Name</label>
            <input
                type = 'text'
                placeholder='enter Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className='update-form-control'>    
            <label>Email</label>
            <input
                type = 'text'
                placeholder='enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className='update-form-control'>    
            <label>Gender</label>
            <select 
                value={gender} 
                onChange={(e) => setGender(e.target.value)} 
            >
                <option value="none">None</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
        </div>
        <div className='update-form-control'>    
            <label>Status</label>
            <select 
                value={status} 
                onChange={(e) => setStatus(e.target.value)}
            >
                <option value="Inactive">Inactive</option>
                <option value="Active">Active</option>
            </select>
        </div>
            <Button style={{ backgroundColor:'#4856fd',marginLeft:10,marginBottom:-10,width:40}} onClick={onSubmit}>Save</Button>
    </form>
    )
}

export default UpdateUser