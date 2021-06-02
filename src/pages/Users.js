
import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'fetch';
import { useState,useEffect } from 'react';
import Navbar from '../components/Navbar';

function Users(){
    let [users,accessUsers]=useState([])
    useEffect(()=>{
      console.log("Hello");
      fetch.fetchUrl("https://jsonplaceholder.typicode.com/users", (err,meta, data)=>{
          accessUsers(JSON.parse(data));      
      })
    },[])
      return <div className="dashboard">
        
      <Navbar/>
              <h1>Users</h1>
              <ul >
                {users.map(val =>
                   <li className="userList" key={ val.id }>
                       {val.id} <br/>
                       {val.name} <br/>
                       {val.username} <br/>
                       {val.email} <br/>
                       {val.website} <br/>
                       </li>
                       ) }
              </ul>
            </div>
            
    }
export default Users


