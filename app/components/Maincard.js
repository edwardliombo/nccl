"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const photos = [
    'https://images.pexels.com/photos/7709140/pexels-photo-7709140.jpeg?auto=compress&cs=tinysrgb&w=800','https://images.pexels.com/photos/6585012/pexels-photo-6585012.jpeg?auto=compress&cs=tinysrgb&w=800','https://images.pexels.com/photos/7518952/pexels-photo-7518952.jpeg?auto=compress&cs=tinysrgb&w=800'];

const bgcolor = ['bg-[rgba(0,0,0,0.2)]','bg-[rgba(51,0,25,0.2)]','bg-[rgba(0,51,51,0.2)]']

const infoArray = [
    {
        title:"Functions/Business Overview of the Near Consult & Co. Ltd",
        description:"Our key team of consultants has many years of experience in Capacity Building, Research and other activities including Planning, Finance, Business Management, Agri-business, Marketing, Public Relations, Sales and Business Development, ICT/IT and Corporate Restructuring."
    },
    
    {
        title:"We are able to provide the following services",
        description:"To provide corporate restructuring, strategic planning, strategic management, culture transformation and change management consulting services, To provide training in culture transformation sales, customer service, team building, leadership and planning"
    }
   
]

const Maincard =()=>{
  const [imageNumber, setImageNumber] = useState(0);
  const [imagecolor, setImagecolor] = useState(0);
  const [text, setText] = useState(0);
    useEffect(()=>{
        setInterval(()=>{
            setImageNumber(prev =>(
                prev === photos.length-1?0: prev+1
            ))

            setImagecolor(cl =>(
                cl === bgcolor.length-1?0:cl+1
            ))
            setText(txt =>(
                txt === infoArray.length-1?0:txt+1
            ))
        }, 15000)
    }, [])
    return(
        <section>
            <div className="relative h-2/3">
                <Image className="relative brightness-100" src={photos[imageNumber]} fill objectFit="cover" alt="pic11" />
                <article className={`min-sm:flex ${bgcolor[imagecolor]} max-sm:flex-col min-sm:items-center min-sm:gap-8 text  min-sm:p-18 h-full absolute`}>
                    <h1 className="min-sm:text-4xl max-sm:text-3xl min-sm:basis-2/3 
                    min-sm:text-white max-sm:text-white max-sm:pl-14 max-sm:pr-14 max-sm:pt-10
                    ">{infoArray[text].title}</h1>
                    <article className="min-sm:text-2xl min-sm:basis-3/3 min-sm:text-justify min-sm:text-black min-sm:leading-9 max-sm:text-black max-sm:text-justify  max-sm:pl-14 max-sm:pr-4 h-full min-sm:pl-24 min-sm:pr-24">
                    <div className="bg-sky-100 min-sm:p-16 max-sm:p-12 rounded-lg min-sm:mt-20">
                        <p className="max-sm:h-36 min-sm:h-64">{infoArray[text].description}</p>
                        <button className="flex bg-sky-600 max-sm:mt-24 min-sm:mt-4 text-lg items-center gap-3 p-1 pr-3 pl-3 text-white rounded-2xl">
                            <Link href="#"> Read More </Link>
                            <FaLongArrowAltRight />
                        </button>
                    </div> 
                    </article>
                </article>
            </div>
        </section>
    )

}

export default Maincard;