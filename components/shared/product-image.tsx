import {cn} from "@/lib/utils";
import React from "react";

interface Props {
    className?: string;
    imageUrl: string;
    size?: number;
}

export const ProductImage: React.FC<Props> = ({className, imageUrl, size}) => {
    return (
        <div className={cn(className)}>
            <img
                src={imageUrl}
                alt="Logo"
                className={cn('relative left-2 top-2 transition-all duration-300 z-10',{
                    'w-[300px] h-[300px]': size === 20,
                    'w-[400px] h-[400px]': size === 30,
                    'w-[500px] h-[500px]': size === 40,
                })}
            />

        </div>
    );
};