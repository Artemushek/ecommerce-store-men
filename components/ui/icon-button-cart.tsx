import { cn } from "@/lib/utils"
import { MouseEventHandler } from "react";

interface IconButtonCartProps {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    icon: React.ReactElement;
    className?: string;
}

const IconButtonCart: React.FC<IconButtonCartProps> = ({
    onClick,
    icon,
    className
}) => {
  return (
    <button
        onClick={onClick}
        className={cn(
            "rounded-full flex items-center justify-center shadow-md p-2 hover:scale-110 transition",
            className
        )}
    >
        {icon}
    </button>
  )
}

export default IconButtonCart;