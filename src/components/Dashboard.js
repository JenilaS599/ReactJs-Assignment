import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'fetch';
import { useState,useEffect } from 'react';

function DashboardApp(){
  let [users,accessUsers]=useState([])
  useEffect(()=>{
    console.log("Hello");
    fetch.fetchUrl("https://jsonplaceholder.typicode.com/users", (err,meta, data)=>{
        accessUsers(JSON.parse(data));      
    })
  },[])
    return <div>
            <h2>Dashboard Component</h2>
            <ul>
              {users.map(val =>
                 <li key={ val.id }>
                     {val.id} <br/>
                     {val.name} <br/>
                     {val.username} <br/>
                     {val.email} <br/>
                     {val.website} <br/>
                     <div className="space"></div>
                     </li>
                     ) }
            </ul>
          </div>
  }
  export default DashboardApp;
