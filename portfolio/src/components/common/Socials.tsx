import Link from 'next/link'
import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'

const socials = [
    {
        icon:<FaGithub/>,
        path:'/'
    },
    {
        icon:<FaLinkedin/>,
        path:'/'
    },
]

const Social = ({containerStyles,iconStyles}:{containerStyles:string,iconStyles:string}) => {
  return (
    <div className={containerStyles}>
        {
            socials.map((item,index)=>{
                return <Link href={item.path} key={index} className={iconStyles}>{item.icon}</Link>
            })
        }
    </div>
  )
}

export default Social