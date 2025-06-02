"use client"

import picture3 from "@/public/Picture3.jpg"
import picture4 from "@/public/Picture4.jpg"


import Inforcard from "./Inforcard";
import { useEffect, useState } from "react";

const array = [
<Inforcard scale={{opacity:0.6}} anim={{opacity:1}} 
key={1} 
tarehe="15-19" 
month="October" 
year="2024" 
title="Agri-connect leaders with trainers and trainees (horticulture value chain entrepreneurs) during the opening event of the 5 days (October 15-19, 2024) training in Mbeya Food Park Hall. The second (right) is Mr. Nzenga Edwin Simbeye (one of the Trainer)." 
img={picture3} />, 

<Inforcard scale={{opacity:0.6}} anim={{opacity:1}}   key={3} 
tarehe="01-02" 
month="November" 
year="2025" 
title="Group photo on training to beneficiaries lead farmers, project staff and village agricultural extension officers who are working in the project intervention villages and wards of the inclusive rice value chain project. NCCL managed to train 157 stakeholders including 15 youth." 
img={`https://images.pexels.com/photos/2818573/pexels-photo-2818573.jpeg?auto=compress&cs=tinysrgb&w=800`} />, 

<Inforcard scale={{opacity:0.6}} anim={{opacity:1}}   key={4} 
tarehe="08-24" 
month="April" 
year="2024" 
title="Nafaka Kilimo hired NCCL to deliver the aforementioned training to the Malinyi and Mlimba DCs in Morogoro and the Mbarali district in Mbeya between April 8 and April 24, 2024 for phase one. NCCL completed the first phase of the assigned consulting project successfully." 
img={`https://www.croptrust.org/fileadmin/uploads/croptrust/Photos/Crops/Maize.jpeg`} />, 

<Inforcard scale={{opacity:0.6}} anim={{opacity:1}}   key={5} 
tarehe="10-19" 
month="January" 
year="2025" 
title="Participants listening to facilitator during the training session " 
img={`https://img-cdn.inc.com/image/upload/f_webp,q_auto,c_fit/vip/2025/03/indonesian-farmers-inc-GettyImages-1247520251.jpg`} />, 

<Inforcard scale={{opacity:0.6}} anim={{opacity:1}}  key={6} 
tarehe="01-05" 
month="December" 
year="2023" 
title="Group Photo: Youth Group representatives from Malinyi district council  a total of 46 youth was trained including 29 female" 
img={picture4} />


];

const Variousinformation = () =>{
    const [index, setIndex] = useState(0);
    useEffect(()=>{
        setInterval(()=>{
            setIndex(prev =>(
                prev === array.length-1?0: prev+1
            ))
            
        }, 10000)
        
    }, [])

    return(
        <h1>{array[index]} </h1>
    )
}


export default Variousinformation;