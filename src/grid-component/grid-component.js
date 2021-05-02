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
import UpdateUser from '../updateuser-component/updateuser-component';
import Checkbox from '@material-ui/core/Checkbox';

const GridComponent= () => {
    const [showAddUser, setShowAddUser] = useState(false)
    const [showUpdateUser, setShowUpdateUser] = useState(false)
    const [Users, setUsers]= useState([])
    const [pageNo, setPageNo] = useState(1)
    const [userToUpdate, setUserToUpdate] = useState('')
    const [maleFilter, setMaleFilter] = useState(false)
    const [femaleFilter, setFemaleFilter] = useState(false)
    const [activeFilter, setActiveFilter] = useState(false)
    const [inactiveFilter, setInactiveFilter] = useState(false)

    useEffect(() => {
        const getUsers = async () => {

            var users = await fetchUsers()
            if(maleFilter===true && femaleFilter===true) {
            }
            else if(maleFilter===true) {
                users = users.filter( user =>  user.gender === 'Male' )
            }
            else if(femaleFilter===true) {
                users = (users.filter( user =>  user.gender === 'Female' ) )
            }
            

            if(activeFilter===true && inactiveFilter===true) {
            }
            else if(activeFilter===true) {
                users = (users.filter( user =>  user.status === 'Active' ) )
            }
            else if(inactiveFilter===true) {
                users = (users.filter( user =>  user.status === 'Inactive' ) )
            }
            
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
    //set user to Update 
    const updateUser = (user) => {
        setShowUpdateUser(!showUpdateUser)
        console.log(user)
        setUserToUpdate(user)
    }

    //update user
    const updateServer = async (user) => {
        setShowUpdateUser(!showUpdateUser)
        console.log(user)
        const res = await
            fetch('https://gorest.co.in/public-api/users/'+user.id,
            {
                method:'PUT',
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
        if(parseInt(data.code/100)!==2) {
            var i;
            var msg = ""
            for(i = 0 ; i < data.data.length ; i++) {
                msg = msg + data.data[i].field +" "+data.data[i].message +","
            }
            alert(msg)
        }
    }

    const filterMale = () => {
        setMaleFilter(!maleFilter)
    }

    const filterFemale = () => {
        setFemaleFilter(!femaleFilter)
    }

    const filterActive = () => {
        setActiveFilter(!activeFilter)
    }

    const filterInactive = () => {
        setInactiveFilter(!inactiveFilter)
    }

    const onClickAddUser = () => {
        setShowAddUser(!showAddUser)
    }

    return (
        <Paper>
            <div className="genderfilter">
            <label className = "genderlabel">Gender</label>
            <ul>
                <li className="gender_option_label">
                    <label>Male</label>
                        <Checkbox color="primary" onClick = {filterMale} inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                </li>
                <li className = "gender_option_label">
                    <label>Female</label>
                        <Checkbox color="primary" onClick = {filterFemale} inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                </li>
            </ul>
            </div>
            <div className="statusfilter">
            <label className = "statuslabel">Status</label>
            <ul>
                <li className="status_option_label">
                    <label>Active</label>
                        <Checkbox color="primary" onClick={filterActive} inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                </li>
                <li className = "status_option_label">
                    <label>Inactive</label>
                        <Checkbox color="primary" onClick = {filterInactive} inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                </li>
            </ul>
            </div>
            <label className='pagelabel'>Page</label>
            <input className='pageinput' type="text" placeholder='1' onChange = { (e) => setPageNo(e.target.value)}/>
            { showUpdateUser && <UpdateUser style={{marginLeft:1000}} user = {userToUpdate} ToUpdate={updateServer}/>}
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
                    <User users={Users} onDelete={deleteUser} onUpdate = {updateUser}></User>
                </TableBody>
            </Table>
           
        </Paper>
    )
}

export default GridComponent
