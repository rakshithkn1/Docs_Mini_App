import React, { useRef, useState } from 'react'
import Card from './Card'

function Foreground() {

const ref=useRef(null)
   const data=[
 {
    desc:'Good things are there in the world',
    filesixe:'.9mb',
    closeAvialbele:true,
    tag:{
        isOpen:1,title:'Download later',tagColor:'green'
    }
 },
 {
    desc:'lorem gok dls  mnsd   nnsldnn  dnssdn',
    filesixe:'.9mb',
    closeAvialbele:true,
    tag:{
        isOpen:1,title:'Download Now',tagColor:'blue'
    }
 },
 {
    desc:'lorem gok dls  mnsd   nnsldnn  dnssdn',
    filesixe:'.9mb',
    closeAvialbele:false,
    tag:{
        isOpen:0,title:'Upload',tagColor:'green'
    }
 },
   ]
  return (
    <div>      <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex flex-wrap gap-10 p-5'>
{data.map((item,index)=>{
    return <Card data={item} reference={ref}/>

})}
{/* <Card/> */}

    </div>
    </div>
  )
}

export default Foreground