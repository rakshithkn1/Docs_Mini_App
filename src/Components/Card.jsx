import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion"


function Card({data,reference}) {
  return (

                <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.1} className='relative px-5 flex-shrink-0 py-10 w-60 h-72 bg-zinc-900/90 rounded-[50px] text-white overflow-hidden'>
                    <FaRegFileAlt/>
                <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
                <div className='footer absolute bottom-0 w-full  left-0 '>
                    <div className='flex items-center justify-between py-3 px-5 mb-5 '><h5>{data.filesixe}</h5>
<span className=' rounded-full flex items-center justify-center'>
    {data. closeAvialbele ? <IoCloseOutline/> :    <HiOutlineDocumentDownload size='1em' color='#fffff'/> }
</span></div>     
                </div>
                {
                    data.tag.isOpen &&            <div className={`tag flex justify-center absolute bottom-0 left-0 px-16 py-1 w-full h-8 ${data.tag.tagColor==='blue' ? ' bg-blue-600 ': 'bg-green-600' }`}>
                    <h3 className='text-md flex justify-center'>{data.tag.title}</h3></div> 
                }

</motion.div>
    
  )
}

export default Card