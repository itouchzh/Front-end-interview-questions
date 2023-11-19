"use client"
import React from 'react'
import Image from 'next/image'
import me from '../../../public/me.jpg'
import { usePathname } from 'next/navigation'
const profilePage = ({ params }: any) => {
    const pathname = usePathname()
    console.log(pathname)

    return (
        <div>
            <div className=" w-[400px]">
                Hello This is me
                {/* <Image src={me} alt="this is me"></Image> */}
            </div>
        </div>
    )
}

export default profilePage
