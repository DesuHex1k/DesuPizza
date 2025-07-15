"use client";
import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

type SortPopupProps = {
    className?: string;
};

export const SortPopup: React.FC<SortPopupProps> = ({ className }) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <div
                    className={cn(
                        'inline-flex items-center gap-1 bg-gray-100 px-5 h-[52px] rounded-full cursor-pointer',
                        className,
                    )}>
                    <ArrowUpDown className="w-4 h-4" />
                    <b>Сортувати:</b>

                    <b className="text-primary">популярне</b>
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-[240px] rounded-2xl">
                <ul>
                    <li className="hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-2xl">
                        Сначала популярне
                    </li>
                    <li className="hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-2xl">
                        Сначала дешеві
                    </li>
                    <li className="hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-2xl">
                        Сначала дорогі
                    </li>
                    <li className="hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-2xl">
                        С найкращою оцінкою
                    </li>
                </ul>
            </PopoverContent>
        </Popover>
    );
};
