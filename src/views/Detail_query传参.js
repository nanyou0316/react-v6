import React from 'react'
import { useSearchParams } from 'react-router-dom'
export default function Detail() {
  const [searchParams,setSearchParams]=useSearchParams()
  console.log("searchParams:",searchParams.get('id'));
  return (
    <div>Detail
      <button onClick={()=>{
        setSearchParams({id:123456})
      }}>猜你喜欢</button>
    </div>
  )
}
