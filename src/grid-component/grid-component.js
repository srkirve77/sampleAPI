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
    const [pageNo, setPageNo] = useState(1)

    useEffect(() => {
        const getUsers = async () => {

            const users = await fetchUsers()
            setUsers(users)
        }
            
        getUsers()
    })

    const fetchUsers = async () => {
        const res = await 
            fetch('https://gorest.co.in/public-api/users?page='+pageNo,{              
            })
        const data = await res.json()
        return data.data
    }

    //Deleting user
    const deleteUser = async (id) => {
        const res = await
            fetch('https://gorest.co.in/public-api/users/'+id,
            {
                method:'DELETE',
                headers : {
                'Content-Type': 'application/json' ,
                'Authorization':'Bearer 9d8224224d0da981dc6768d900f96f7e7f5987d55971546ca180338c227e6c95'    
                }
            })
        const data = await res.json()
        console.log(data)
    }


    //Creating User
    const addUser = async (user) => {
        const res = await
            fetch('https://gorest.co.in/public-api/users',
            {
                method:'POST',
                headers : {
                'Content-Type': 'application/json' ,
                'Authorization':'Bearer 9d8224224d0da981dc6768d900f96f7e7f5987d55971546ca180338c227e6c95'    
                },
                body: JSON.stringify(user),
            })
        const data = await res.json()
        console.log(data)
        console.log(JSON.stringify(user))
        if(data.code/100!==2) {
            var i;
            var msg = ""
            for(i = 0 ; i < data.data.length ; i++) {
                msg = msg + data.data[i].field +" "+data.data[i].message +","
            }
            alert(msg)
        }
    }

    const onClickAddUser = () => {
        setShowAddUser(!showAddUser)
    }

    return (
        <Paper>
            <label className='pagelabel'>Page</label>
            <input className='pageinput' type="text" placeholder='1' onChange = { (e) => setPageNo(e.target.value)}/>
            { showAddUser && <AddUser style={{marginLeft:1000}} onAdd={addUser}/>}
            { !showAddUser ? 
            <Button style ={{backgroundColor:'#4856fd',marginLeft:1290, marginTop:-40}} onClick={onClickAddUser}> Add User </Button> : 
            <Button style ={{backgroundColor:'red',marginLeft:1320}} onClick={onClickAddUser}> Cancel </Button> 
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
