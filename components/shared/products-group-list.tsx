"use client"
import React from 'react';
import { Title } from './title';
import { ProductCart } from './product-cart';
import { cn } from '@/lib/utils';
import { useIntersection } from 'react-use';
import { useCategory } from '@/store/category';

interface Props {
    className?: string
    title: string
    // items: {
    //     id: number;
    //     name: string;
    //     ingredients: string[];
    //     imageUrl: string;
    //     items: { price: number }[];
    // }[]
    items: any[]
    categoryId: number
    listClassName?: string
}

export const ProductsGroupList: React.FC<Props> = ({ className, title, items, categoryId, listClassName }) => {
    const intersectionRef = React.useRef<HTMLDivElement>(null);
    const intersection = useIntersection(intersectionRef as React.RefObject<HTMLElement>, {
        threshold: 0.6,
    })
    const setActiveId = useCategory(state => state.setActiveId);

    React.useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveId(categoryId);
        }
    }, [intersection?.isIntersecting, title, categoryId]);


    return (
        <div className={className} ref={intersectionRef} id={`${title}`}>
            <Title text={title} size="lg" className="font-extrabold" />

            <div className={cn('grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5', listClassName)}>
                {items.map((item) => (
                    <ProductCart key={item.id} id={item.id} price={item.items[0].price} name={item.name} ingredients={item.ingredients} imageUrl={item.imageUrl} />
                ))}
            </div>
        </div>
    );
};