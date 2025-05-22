import { CiShare2 } from "react-icons/ci";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Share = ()=>{
    return(
        <div className="flex min-sm:p-8 min-sm:gap-2 min-sm:justify-end max-sm:p-4">
            <h1 className="text-2xl text-red-800">Contact:</h1>
           <CiShare2 className="text-3xl hover:cursor-pointer text-red-800" />
           <FaWhatsappSquare className="text-3xl hover:cursor-pointer text-red-800" />
           <FaFacebookSquare className="text-3xl hover:cursor-pointer text-red-800"/>
           <FaSquareInstagram className="text-3xl hover:cursor-pointer text-red-800"/>
           <FaSquareXTwitter className="text-3xl hover:cursor-pointer text-red-800"/>
        </div>
    )
}

export default Share;