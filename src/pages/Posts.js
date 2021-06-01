
import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'fetch';
import { useState,useEffect } from 'react';
import Navbar from '../components/Navbar';

function Posts(){
    let [users,accessUsers]=useState([])
    useEffect(()=>{
      console.log("Hello");
      fetch.fetchUrl("https://jsonplaceholder.typicode.com/posts", (err,meta, data)=>{
          accessUsers(JSON.parse(data));      
      })
    },[])
      return <div className="dashboard">
        <Navbar/>
              <h1>Posts</h1>
              
      
              <ul>
                {users.map(val =>
                   <li key={ val.id }>
                       {val.userId} <br/>
                       {val.id} <br/>
                       {val.title} <br/>
                       {val.body} <br/>
                       </li>
                       ) }
              </ul>
            </div>
    }

export default Posts
