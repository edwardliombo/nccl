"use client"
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.jpg"
import { MdMenu } from "react-icons/md";
import Menu from "@/app/components/Menu"
import { useState } from "react";

const Header = ()=>{
    const [menu, setMenu] = useState(true)
    const handleMenu =()=>{
        setMenu(!menu)
    }

    return(
        <section>
            <header className="flex max-sm:flex-col gap-10 max-sm:p-4 max-sm:text-amber-300 min-sm:p-2 max-sm:justify-around max-sm:bg-black">
                <ul className="flex items-center min-sm:gap-8 min-sm:basis-1/3">
                    <MdMenu className="text-6xl min-sm:invisible max-sm:visible text-amber-300" onClick={handleMenu}/>
                    <Image className="rounded-4xl max-sm:invisible" src={logo} height={70} width={60} alt="logo" />
                    <marquee direction="left"><h1 className="font-bold text-lg max-sm:text-amber-300 text-black">NEAR CONSULT & CO.LTD</h1></marquee>  
                </ul>
                {menu? <Menu /> :""} 
                <ul className="flex min-sm:items-center min-sm:justify-center min-sm:basis-1/3 min-sm:gap-8 max-sm:flex-col">
                    <Link className="min-sm:bg-black min-sm:border-2 w-24 min-sm:text-center min-sm:rounded-2xl min-sm:text-white min-sm:hover:bg-black  min-sm:hover:text-amber-300" href="#">Login</Link>
                    <Link className="min-sm:bg-black min-sm:text-white  max-sm:border-white 
                     min-sm:border-2 min-sm:w-24 min-sm:text-center min-sm:rounded-2xl min-sm:hover:bg-black  min-sm:hover:text-amber-300"href="#">Logout</Link>
                </ul>
                
               
            </header>
        </section>
    )
}

export default Header;