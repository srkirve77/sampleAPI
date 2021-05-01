import {useState} from 'react'
import React from 'react'
import './adduser-component.css'
import Button from '@material-ui/core/Button';

const AddUser = ({ onAdd}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [status, setStatus] = useState('')

    const onSubmit = (e) => {


        e.preventDefault()

        onAdd({ name, email, gender, status })
        setName('')
        setEmail('')
        setGender('none')
        setStatus('inactive')
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
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div className='form-control'>    
                <label>Status</label>
                <select 
                    value='inactive' 
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="inactive">Inactive</option>
                    <option value="active">Active</option>
                </select>
            </div>
                <Button style={{ backgroundColor:'#4856fd',marginLeft:10,marginBottom:-50,width:40}} onClick={onSubmit}>Submit</Button>
        </form>
    )
}

export default AddUser