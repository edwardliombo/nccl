import Image from "next/image";
import Link from "next/link";
const Asidearticle = ({img, content, time, ago})=>{
    return(
        <div className="flex gap-4 w-fit">
            <div className="relative w-full min-sm:basis-1/3 max-sm:basis-1/3">
                <Image className="rounded-md" src={img} fill objectFit="cover" alt="picture" />
            </div>                
            <article className="min-sm:basis-3/3 max-sm:3/3 h-20">
                {content}
                <div className="flex gap-3 pt-2">
                    <Link href="#">{time} </Link>
                    <Link className="text-slate-400" href="#">{ago} </Link>
                </div>
            </article>
        </div>
    )
}
export default Asidearticle;