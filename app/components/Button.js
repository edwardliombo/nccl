
const Button=({buttonName, onClick})=>{
    return(
        <button onClick={onClick} className="bg-sky-600 p-1 w-36 rounded-3xl cursor-pointer text-white font-medium">{buttonName}</button>
    )
}
export default Button;