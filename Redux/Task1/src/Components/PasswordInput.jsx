import react from "react";
import useToggle from "../Hooks/useToggles";

function PasswordInput(){
    const [showPassword ,togglePassword]=useToggle(false);
    return(
        <div>
            <input 
                type={showPassword, =
            />
        </div>
    )
}