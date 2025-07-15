"use client";
import { cn } from "@/lib/utils";
import { useCategory } from "@/store/category";
import React from "react";

type CategoriesProps = {
    className?: string;
};

const categories = [
    {
        id: 0,
        name: 'Піци',
    },
    {
        id: 1,
        name: 'Десерти',
    },
    {
        id: 2,
        name: 'Напої',
    },
    {
        id: 3,
        name: 'Комбо',
    },
    {
        id: 4,
        name: 'Сніданки',
    },
    {
        id: 5,
        name: 'Коктейлі',
    },
    {
        id: 6,
        name: 'Кофе',
    }
]


export const Categories: React.FC<CategoriesProps> = ({ className }) => {
    const activeId = useCategory(state => state.activeId);
    
    return (
        <div className={cn('w-full', className)}>
            {/* Desktop version */}
            <div className="hidden md:inline-flex gap-1 bg-gray-100 p-1 rounded-full">
                {
                    categories.map((category) => (
                        <a href={`#${category.name}`}
                            key={category.id}
                            className={cn('rounded-full flex items-center font-bold h-11 px-5 hover:bg-white transition-all duration-300',
                                activeId === category.id && 'bg-white shadow-md shadow-gray-200 text-primary')}>
                            <span>
                                {category.name}
                            </span>
                        </a>
                    ))
                }
            </div>

            {/* Mobile version */}
            <div className="md:hidden">
                <div className="grid grid-cols-2 gap-2">
                    {
                        categories.map((category) => (
                            <a href={`#${category.name}`}
                                key={category.id}
                                className={cn(
                                    'block p-4 rounded-lg text-center font-bold transition-all duration-300',
                                    'bg-gray-100 hover:bg-gray-200',
                                    activeId === category.id && 'bg-primary text-white shadow-lg'
                                )}>
                                <span className="text-sm">
                                    {category.name}
                                </span>
                            </a>
                        ))
                }
                </div>
            </div>
        </div>
    );
};




