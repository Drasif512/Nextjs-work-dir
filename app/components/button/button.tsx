import { ButtonPropes } from "@/app/types/componentsTypes";

function Button(props:ButtonPropes){
    return(
        <button>{props.title}</button>
    )
} 
export default Button;