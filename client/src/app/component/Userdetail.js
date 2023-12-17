// "use client"
// import socket from '@/app/connection/page';
// import { useRouter, useSearchParams } from 'next/navigation';
// import React, { useEffect } from 'react';


// export default function Userdetail() {
//   const searchParams = useSearchParams();
//   const roomId = searchParams.get('link');
//   const email = searchParams.get('name');
//   const router = useRouter();

//   function handleSubmitForm(event){
//     console.log("-->",roomId,email);    
//     socket.emit("room:join",{email,roomId});
//     event.preventDefault();
//   }
  
//   const handleJoinRoom = (data)=>{
//     const {email,roomId} = data;
//     console.log("-->",email,roomId);
//     router.push("/pages/videocall");   
//   }

//   useEffect(()=>{
//     socket.on("room:join",handleJoinRoom);
//     return ()=>{
//       socket.off("room:join")
//     }
//   },[socket,handleJoinRoom]);

//   return (
//     <div className='container'>
//       <div>
//         <form className='form' >
//           <h1>Meeting Link</h1>
//           <div className='meetingLink'>{link}</div>
//           <button className='attrAlignment btn join' type='submit' onClick={handleSubmitForm}>Join</button>
//         </form>
//       </div>
//     </div>
//   )
// }
