"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const random_hex_color_code = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "www.meeting.com/"+n.slice(0, 6);
};

export default function MainPage() {
      const router = useRouter();
      const [name,setName] = useState("");
      const name2 = document.getElementById('create');
      const meetingLink = random_hex_color_code();

    const handleClickCreate = (event)=>{
        event.preventDefault();
        if(name2==null){

        }else{
          router.push("/pages/meetinglink?name="+name+"&link="+meetingLink);
        }
    }
    const handleClickJoin = (event)=>{
        event.preventDefault();
        if(name2==null){

        }else{
        router.push("/pages/joinroom?name="+name);
        }
    }
  return (
    <div className='container'>
      <div>
        <form className='form' >
          <h1>Video Calling WebApp</h1>
          <input className='attrAlignment' placeholder='Enter your Name' required type='text' onChange={(event)=>{setName(event.target.value)}}></input>
          <button className='attrAlignment btn ' id='create' type='submit' onClick={handleClickCreate}>Create</button>
          <button className='attrAlignment btn join' type='submit' onClick={handleClickJoin}>Join</button>
        </form>
      </div>
    </div>
      )
}
