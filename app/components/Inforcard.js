import Image from "next/image";
import * as motion from "motion/react-client"
const Inforcard = ({title, img, scale, anim})=>{
    return(
         <motion.section className="" initial={scale} animate={anim} transition={{ duration:2}}>
            <div className="grid grid-cols-1 h-[520px] relative">
                <Image className="" src={img} fill objectFit="cover" alt="picture" />
            <div className="flex max-sm:flex-col-reverse self-end items-center absolute text-yellow w-full">
                    <div className="bg-linear-to-t from-black to-[rgba(7,7,7,0.1)] text-white min-sm:h-48 max-sm:w-full basis-6/6 p-16 max-sm:p-12 max-sm:h-64 h-fit text-justify text-lg  w-56">
                         {title}
                    </div>
                </div>
                    
            </div>
                    
         </motion.section>
    )
}

export default Inforcard;