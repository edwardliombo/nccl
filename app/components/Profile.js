import Image from "next/image";
import * as motion from "motion/react-client"
const Profile = ()=>{
    return(
        <section  className="grid grid-cols-3 max-sm:grid-cols-1 p-4 gap-8">
            <motion.div initial={{scale:0}} 
            whileInView={{
                scale:1,
                

            }} transition={{duration:0.3, delay:0.2}} className="relative h-96">
                <Image src="https://t4.ftcdn.net/jpg/01/24/84/83/360_F_124848388_cjx0VIF3BdR6yveB7ZguDSlEpM91tbrM.jpg" className="w-full" fill  alt="profile" />
                <article>

                </article>
            </motion.div>

            <motion.div initial={{scale:0}}  whileInView={{scale:1}}  transition={{duration:0.3, delay:0.5}} className="#">

                <article className="text-justify">
                It is my great pleasure and gratitude to welcome you to our website. At the National Council for Technical and Vocational Education and Training (NACTVET), we believe that you will find this website informative, educative, and appealing to the growing demand for knowledge about Technical and Vocational Education and Training in Tanzania and abroad.
 
                As we execute our mandate and core functions as provided for under NACTVET Act, Cap. 129, we are determined and remain committed to ensuring that our esteemed stakeholders and the general public are constantly and timely provided with quality information that is accurate, relevant, and up to date. Through this website, we are also set to demonstrate to all customers our  conviction to realize our Vision, Mission, and Core Functions.
                </article>
            </motion.div>
            <motion.div initial={{scale:0}} 
            whileInView={{
                scale:1,
            }} 
            transition={{duration:0.3, delay:0.8}} className="grid grid-cols-2 gap-4">
                <div className="relative h-28">
                    <Image src="https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/1260/live/ddbcd600-1ad2-11f0-8a1e-3ff815141b98.jpg" className="w-full p-4" fill  alt="profile" />
                </div>
                <article className="h-20">
                quality information that is accurate, relevant, and up to date. Through this 
                </article>
                <div className="relative h-28">
                    <Image src="https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/1260/live/ddbcd600-1ad2-11f0-8a1e-3ff815141b98.jpg" className="w-full p-4" fill  alt="profile" />
                </div>
                <article className="h-20">
                quality information that is accurate, relevant, and up to date. Through this 
                </article>
                <div className="relative h-28">
                    <Image src="https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/1260/live/ddbcd600-1ad2-11f0-8a1e-3ff815141b98.jpg" className="w-full p-4" fill  alt="profile" />
                </div>
                <article className="h-20">
                quality information that is accurate, relevant, and up to date. Through this 
                </article>
            
            </motion.div>
            
        </section>
        
    )
}

export default Profile;