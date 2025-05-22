import Link from "next/link"
const Menu = ()=>{
    return(
        <ul className="flex max-sm:flex-col min-sm:gap-12 min-sm:items-center min-sm:justify-center min-sm:basis-3/3 ">
            <Link href="#">Home</Link>
            <Link href="#">Services</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>            
        </ul>
    )
}

export default Menu;