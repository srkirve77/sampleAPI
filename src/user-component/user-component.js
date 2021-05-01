import React from 'react'
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {FaTimes} from 'react-icons/fa';
import EditIcon from '@material-ui/icons/Edit';

const User = ({users, onDelete, onUpdate}) =>  {
    return (
        <>
        {
            users.map( (user) => 
                (
                    <TableRow>
                        <TableCell align="center" >{user.id}</TableCell>
                        <TableCell align="center" >{user.name}</TableCell>
                        <TableCell align="center" >{user.email}</TableCell>
                        <TableCell align="center">{user.gender}</TableCell>
                        <TableCell align="center">{user.status}</TableCell>
                        <TableCell align="center"><EditIcon style = {{ color:'#4856fd',
                        cursor:'pointer'}} onClick = {() => onUpdate(user.id)}/>
                        </TableCell>
                        <TableCell align="center"><FaTimes style = {{ color:'#4856fd',
                        cursor:'pointer'}} onClick = {() => onDelete(user.id)}/>
                        </TableCell>
                    </TableRow>
                )
            )
        }
        </>
    )
}

export default User
