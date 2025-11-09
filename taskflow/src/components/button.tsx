import type React from "react";
import type { FC } from "react";

interface ButtonProps {
    textButton:string,
    handleClick: (event :React.MouseEvent<HTMLButtonElement>) => void
}

export const PrimaryButton : FC<ButtonProps> = ({ textButton, handleClick}) => {
    return (
        <button 
            className="px-4 py-1 rounded-md text-white  bg-blue-500 hover:bg-blue-700 hover:cursor-pointer"
            type="button"
            onClick={handleClick}
        >
            {textButton}
        </button>
    );
};