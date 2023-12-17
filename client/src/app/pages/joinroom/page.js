"use client"
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation';
import socket from '@/app/connection/page';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function page() {
    const searchParams = useSearchParams();
    const email = searchParams.get('name');
    const [roomId,setroomId] = useState("");
    const router = useRouter();

    function handleSubmitForm(event){
        console.log("-->",roomId,email);    
        socket.emit("room:join",{email,roomId});
        event.preventDefault();
      }
      const handleJoinRoom = (data)=>{
        const {email,roomId} = data;
        console.log("-->",email,roomId);
        router.push("/pages/videocall");   
      }
    
      useEffect(()=>{
        socket.on("room:join",handleJoinRoom);
        return ()=>{
          socket.off("room:join")
        }
      },[socket,handleJoinRoom]);

  return (
    <div className='container'>
      <div>
        <form className='form' >
          <h1>Enter Meeting Link</h1>
          <input className='attrAlignment' placeholder='Enter Meeting Link' required type='text' onChange={(event)=>{setroomId(event.target.value)}}></input>
          <button className='attrAlignment btn join' type='submit' onClick={handleSubmitForm}>Join</button>
        </form>
      </div>
    </div>
  )
}
