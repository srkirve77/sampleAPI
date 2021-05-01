import React from 'react'
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {FaTimes} from 'react-icons/fa';
import UpdateUser from '../updateuser-component/updateuser-component'

const User = ({users, onDelete}) =>  {
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
                        <UpdateUser user={user}/>
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
