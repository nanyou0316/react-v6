import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
export default function Detail() {
  const params=useParams()
  const navigate=useNavigate()
  console.log("params:",params);
  let id=params.id
  console.log("id:",id);
  return (
    <div>Detail
      <button onClick={()=>{
       navigate('/detail/123456')
      }}>猜你喜欢</button>
    </div>
  )
}
