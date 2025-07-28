'use client'
import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Search} from 'lucide-react';
import { Input } from '../ui/input';
import { useClickAway } from 'react-use';
import Link from 'next/link';
import { Product } from '@prisma/client';
import { Api } from '@/services/api-client';
import { useDebounce } from 'react-use';

interface Props {
    className?: string
}

export const SearchInput: React.FC<Props> = ({ className }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [focus, setFocus] = useState(false)
    const [products, setProducts] = useState<Product[]>([])

    useDebounce( async () => {
        try {
            const products = await Api.products.search(searchQuery)
            setProducts(products)
        } catch (error) {
            console.error(error)
        }
    }, 150, [searchQuery])

    const ref = useRef<HTMLInputElement>(null)

    useClickAway(ref, () => {
        setFocus(false)
    })

    const onClickItem = () => {
        setSearchQuery('')
    }

    return (
        <>
            {focus && (
                <div className="fixed inset-0 bg-black/50 z-50" />
            )}
            <div ref={ref} className={cn(className, "flex rounded-full flex-1 justify-between items-center relative h-11 z-50")}>
                <Search className="absolute left-3 top-1/2 translate-y-[-50%] text-gray-400 h-5" />
                <Input
                    type="text"
                    placeholder="Пошук"
                    className='pl-11 rounded-full w-full outline-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-gray-50'
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div
                    className={cn('absolute top-14 w-full rounded-2xl p-2 shadow-md transition-all duration-300 invisible opacity-0 bg-white z-50',
                        focus && 'visible opacity-100 top-12')}>

                    {products.length > 0 ? products.map((product) => (
                        <Link onClick={onClickItem} key={product.id} href={`/product/${product.id}`}>
                            <div className='px-3 py-2 hover:bg-gray-100 rounded-xl flex items-center gap-3'>
                                <img className='rounded-sm h-8 w-8' src={product.imageUrl} width={32} height={32} />
                                <span className='text-sm font-bold'>{product.name}</span>
                            </div>
                        </Link>
                    )) : (
                        <div className='px-3 py-2 hover:bg-gray-100 rounded-xl flex items-center gap-3'>
                            <span className='text-sm font-bold'>Нічого не знайдено</span>
                        </div>
                    )}
                </div>
            </div>


        </>
    );
};