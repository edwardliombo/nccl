import Mission_card from "./Missio_card";
import data from "../db/data";
const Mission = ()=>{
    return(
        <div>
            {data.map((item)=>(
                <Mission_card key={item.id} title={item.title} heading={item.subtitle} description={item.desciption} />
            ))}
        </div>
    )
}

export default Mission;