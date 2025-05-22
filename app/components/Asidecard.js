
import Asidearticle from "./Asidearticle";
import Asidetitle from "./Asidetitle";

const Asidecard =()=>{
    return(
        <section className="flex flex-col gap-8 border-b-2 border-red-800 pb-8">
            <Asidetitle title="Events:" />
            <Asidearticle 
            img="https://media.istockphoto.com/id/1392285553/photo/half-cacao-pods-with-cacao-fruit-and-brown-cocoa-powder.jpg?b=1&s=612x612&w=0&k=20&c=ZQH9fAxypI4_nk5VJN3XgJ-5xHslA0lzxOXs6NxYh0w=" 
            
            content="Near Consult and Company Limited (NCCL) is an established Research, "
            time="COCOA"
            ago="2 hours ago"
            />
            <Asidearticle 
            className=""
            img="https://images.pexels.com/photos/1509607/pexels-photo-1509607.jpeg?auto=compress&cs=tinysrgb&w=800" 
            
            content="Near Consult and Company Limited (NCCL) is an established Research, "
            time="RICE"
            ago="2 hours ago"
            />
            <Asidearticle 
            img="https://images.pexels.com/photos/4090605/pexels-photo-4090605.jpeg?auto=compress&cs=tinysrgb&w=800" 
            
            content="Near Consult and Company Limited (NCCL) is an established Research, "
            time="COFFEE"
            ago="2 hours ago"
            />

        </section>
        
    )
}

export default Asidecard;