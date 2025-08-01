'use client'
import {cn} from "@/lib/utils";
import React from "react";

interface  Variant {
    name: string;
    value: string;
    desabled?: boolean;
}

interface Props {
    className?: string;
    items: Variant[];
    onClick?: (value: Variant['value']) => void;
    selectedValue?: Variant['value'];
}

export const GroupVariants: React.FC<Props> = ({className, items, onClick, selectedValue}) => {
    return (
        <div className={cn(className, 'flex justify-between items-center p-2 my-4 select-none')}>
            {
                items.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => onClick?.(item.value)}
                        className={cn('flex items-center bg-gray-100 justify-center cursor-pointer h-[30px] px-5 mx-2 flex-1 rounded-3xl transition-all duration-400 sm',
                                {
                                    'bg-[#645bd4] text-white p-4': item.value === selectedValue,
                                    'bg-gray-50 text-gray-400': item.desabled,
                                },
                        )}>
                        {item.name}
                    </button>
                ))
            }
        </div>
    );
};