import React from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import User from '../user-component/user-component'
import { useState } from 'react';
import AddUser from '../adduser-component/adduser-component'
import './grid-component.css';

const GridComponent= () => {
    const [showAddUser, setShowAddUser] = useState(true)
    const [Users, setUsers]= useState([
        {
            id: 24,
            name: "Shanti Malik DC vertigo",
            email: "shanti_dc_malik123456789@ankunding-herzog.com",
            gender: "Male",
            status: "Active"
        },
        {
            id: 26,
            name: "Washington Luis Cabral da Silva",
            email: "wluissilva@live.com",
            gender: "Male",
            status: "Active"
        },
        {
            id: 27,
            name: "Balagovind Mahajan CPA",
            email: "balagovind_mahajan_cpa@casper-hane.net",
            gender: "Female",
            status: "Inactive"
        }    
    ])
    
    //Deleting user
    const deleteUser = (id) => {
        setUsers(Users.filter((user) => user.id !== id))
    }

    const updateUser = (id) => {
        
    }

    //Creating User
    const addUser = (user) => {
        const id = '23'
        const newUser = { id, ...user }
        setUsers([...Users, newUser])
    }

    const onClickAddUser = (onClick) => {
        setShowAddUser(!showAddUser)
    }

    return (
        <Paper>
            { showAddUser && <AddUser style={{marginLeft:1000}} onAdd={addUser}/>}
            { !showAddUser ? <Button style ={{backgroundColor:'#4856fd',marginLeft:1319}} onClick={onClickAddUser}> Add User </Button> : <Button style ={{backgroundColor:'red',marginLeft:1319}} onClick={onClickAddUser}> Cancel </Button> }
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">ID</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Gender</TableCell>
                        <TableCell align="center">Status</TableCell>
                        <TableCell align="center">Edit</TableCell>
                        <TableCell align="center">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <User users={Users} onDelete={deleteUser} onUpdate={updateUser}></User>
                </TableBody>
            </Table>
        </Paper>
    )
}

export default GridComponent
