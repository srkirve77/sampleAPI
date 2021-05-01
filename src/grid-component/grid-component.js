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
import { useState, useEffect } from 'react';
import AddUser from '../adduser-component/adduser-component'
import './grid-component.css';

const GridComponent= () => {
    const [showAddUser, setShowAddUser] = useState(false)
    const [showUpdateUser, setShowUpdateUser] = useState(false)
    const [Users, setUsers]= useState([])
    
    useEffect(() => {
        const getUsers = async () => {
            const users = await fetchUsers()
            setUsers(users)
        }
            
        getUsers()
    })

    const fetchUsers = async () => {
        const res = await 
            fetch('https://gorest.co.in/public-api/users')
        const data = await res.json()
        return data.data
    }

    //Deleting user
    const deleteUser = (id) => {
        setUsers(Users.filter((user) => user.id !== id))
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
            { !showAddUser ? 
            <Button style ={{backgroundColor:'#4856fd',marginLeft:1250}} onClick={onClickAddUser}> Add User </Button> : 
            <Button style ={{backgroundColor:'red',marginLeft:1319}} onClick={onClickAddUser}> Cancel </Button> 
            }
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
                    <User users={Users} onDelete={deleteUser}></User>
                </TableBody>
            </Table>
        </Paper>
    )
}

export default GridComponent
