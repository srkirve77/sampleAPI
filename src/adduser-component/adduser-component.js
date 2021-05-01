import {useState} from 'react'
import React from 'react'
import './adduser-component.css'
import Button from '@material-ui/core/Button';

const AddUser = ({ onAdd}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [status, setStatus] = useState('Inactive')

    const onSubmit = (e) => {


        e.preventDefault()

        onAdd({name,email ,gender, status })
        
        setName('')
        setEmail('')
        setGender('none')
        setStatus('Inactive')


    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            
            <div className='form-control'>    
                <label>Name</label>
                <input
                    type = 'text'
                    placeholder='enter Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='form-control'>    
                <label>Email</label>
                <input
                    type = 'text'
                    placeholder='enter email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='form-control'>                
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
            <div className='form-control'>    
                <label>Status</label>
                <select 
                    value={status} 
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="Inactive">Inactive</option>
                    <option value="Active">Active</option>
                </select>
            </div>
                <Button style={{ backgroundColor:'#4856fd',marginLeft:10,marginBottom:-50,width:40}} onClick={onSubmit}>Save</Button>
        </form>
    )
}

export default AddUser