import Link from 'next/link';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui/button';
import { PlusIcon } from 'lucide-react';


interface Props {
    className?: string
    imageUrl: string
    id: number
    price: number
    name: string
    ingredients: string[]
}

export const ProductCart: React.FC<Props> = ({ className, imageUrl, price, name, ingredients }) => {
    return (
        <div className={className}>
            <Link href={`/product/1`}>
                <div className="flex justify-center p-6 sm:p-4 bg-secondary rounded-lg">
                    <img className="w-full h-auto object-contain max-h-32 sm:max-h-40" src={imageUrl} alt="Logo" />
                </div>

                <Title text={name} size="sm" className="font-bold mb-1 mt-3 text-sm sm:text-base" />

                <p className="text-xs sm:text-sm text-gray-500 mb-3 line-clamp-2">
                    {ingredients.join(', ')}
                </p>

                <div className="flex items-center justify-between mt-4 gap-2">
                    <span className="text-xs sm:text-sm text-primary font-bold">
                        від {price} грн
                    </span>

                    <Button variant="outline" size="sm" className="bg-primary text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2">
                        <PlusIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">Додати</span>
                    </Button>
                </div>
            </Link>
        </div>
    );
};