import {useState} from 'react'
import React from 'react'
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import TableCell from "@material-ui/core/TableCell";

const UpdateUser = ({user}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [status, setStatus] = useState('')

    const onSubmit = (e) => {


        e.preventDefault()

        //onAdd({ name, email, gender, status })
        setName('')
        setEmail('')
        setGender('none')
        setStatus('inactive')
    }

    const onClickUpdateButton = () => {
        console.log(user)
    }

    return (
       
        <TableCell align="center"><EditIcon style = {{ color:'#4856fd',
                        cursor:'pointer'}} onClick = {onClickUpdateButton}/>
                        </TableCell>
        
    )
}

export default UpdateUser