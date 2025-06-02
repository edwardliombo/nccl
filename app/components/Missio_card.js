"use client"
import * as motion from "motion/react-client"
import { PiTargetBold } from "react-icons/pi";
import Button from "./Button";
import { useState } from "react";



const Mission_card = ({title, heading, description})=>{
    const[text, setText]=useState(true)
    const[read, setRead]=useState(true)
    const[singleItem, setSingleItem]=useState(true)

    const handleButton = (e)=>{
        e.preventDefault();
        setText(!text)
        setRead(!read)
        setSingleItem(!singleItem)
    }
    return(
        <section className="flex max-sm:flex-col min-sm:flex-col">
            <div className="flex flex-col gap-8 w-full p-10 border-l-4 border-sky-600 rounded-md text-justify bg-white text-[112D4E]">
                <div className="min-sm:flex gap-5 items-center border-b-[1px] border-sky-600 pb-5">
                    <PiTargetBold className="text-5xl text-center bg-sky-600 text-white p-2 rounded-4xl" />
                    <h1 className="text-3xl text-center text-sky-600 font-bold">{title}</h1>
                </div>
                
                <article>
                    {heading} {
                    read?"":<motion.div className="bg-sky-100 p-2 pl-8 pr-8 rounded-lg" initial={{scale:0.5}} animate={{scale:1}} transition={{duration:0.3}}>{description} </motion.div>}
                    {text}
                </article>
                <Button onClick={handleButton} buttonName={text?`Read More`:`Read Less`} />
            </div>
        </section>
    )

}
export default Mission_card;