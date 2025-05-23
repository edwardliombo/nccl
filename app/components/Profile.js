import Image from "next/image";
import * as motion from "motion/react-client"
const Profile = ()=>{
    return(
        <section  className="grid grid-cols-3 max-sm:grid-cols-1 p-4 gap-8">
            <motion.div initial={{scale:0}} 
            whileInView={{
                scale:1,
                

            }} transition={{duration:0.3, delay:0.3}} className="relative h-96">
                <Image src="https://t4.ftcdn.net/jpg/01/24/84/83/360_F_124848388_cjx0VIF3BdR6yveB7ZguDSlEpM91tbrM.jpg" className="w-full" fill  alt="profile" />
                <article>
                </article>
            </motion.div>

            <motion.div initial={{scale:0}}  whileInView={{scale:1}}  transition={{duration:0.3, delay:0.5}} className="#">

                <article className="text-justify">
                Mr. Nzenga is a Business and Management Consultant and a Certified Accredited Assessor (Scope insight), he has been doing different business, agri-business and research consultancies, he conducted a capacity building on arbitration and market actors brokerages (March 2021), he supervised the Building Bridge Project - digital data collection for Mbeya Region (November - December 2020) a project financed by European Union through TRIAS/TCCIA, conducted an assessment of Producer Organisations (POs) in Songwe region (2018) for USAID-NAFAKA project, conducted a study on Cross Border Trade enabling business environment in Mbeya and Songwe region a case of Tunduma, Kasumulu and Isongole border for BEST-D/TCCIA Mbeya (2016), he conducted a study on Local Authority Communication and prepared a Communication Strategy and Action Plan For Association of Local Authorities of Tanzania (ALAT), he was contracted for three years (July, 2017- June, 2020) by USAID Feed The Future Tanzania Enabling Growth through Investment and Enterprise Program (Engine) as a Business Development Service Provider (BDSP) serving clients in Mbeya, Songwe, Iringa, Morogoro and Dar es Salaam and succeeded to train over 300 Micro, Small and Medium Enterprises. He holds (+10 years) experience in Conducting training and Training of Trainners (ToT) and B2B meeting. Currently he is a team member preparing Administrative Tools for The Joint Songwe River Basin (Malawi and Tanzania).
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
               
               
            
            </motion.div>
            
        </section>
        
    )
}

export default Profile;