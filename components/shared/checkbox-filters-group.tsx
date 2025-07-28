'use client'
import React, { useState } from 'react';
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox';
import { Title } from './title';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Skeleton } from '../ui/skeleton';

type Item = FilterCheckboxProps

interface Props {
    title: string
    items: Item[]
    defaultItems?: Item[]
    limit?: number
    searchInputPlaceholder?: string
    onClickCheckbox?: (id: string) => void
    defaultValue?: string[]
    className?: string
    loading?: boolean
    selected: Set<string>
    name?: string
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder = 'Пошук...',
    onClickCheckbox,
    className,
    loading,
    selected,
    name,
}) => {
    const [showAll, setShowAll] = useState(false)
    const [search, setSearch] = useState('')

    if (loading) {
        return <div className={className}>
            <Title text={title} size="sm" className="font-extrabold" />
            <div className='mt-5 flex flex-col gap-3 sm:gap-4 max-h-64 sm:max-h-96 overflow-auto scrollbar pr-2'>
                {Array.from({ length: limit }).map((_, index) => (
                    <Skeleton key={index} className='h-5 w-full rounded-full bg-gray-200' />
                ))}
                <Skeleton className='h-5 w-24 rounded-full bg-gray-200' />
            </div>
        </div>
    }

    const list = showAll ? items : (defaultItems || items).slice(0, limit)

    const handleShowAll = () => {
        setShowAll(!showAll)
        setSearch('')
    }

    return (
        <div className={className}>
            <Title text={title} size="sm" className="font-extrabold" />

            {showAll && (
                <div className="mt-5">
                    <Input
                        type="text"
                        placeholder={searchInputPlaceholder}
                        className="bg-gray-50 border-none text-sm"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            )}

            <div className='mt-5 flex flex-col gap-3 sm:gap-4 max-h-64 sm:max-h-96 overflow-auto scrollbar pr-2'>
                {list.filter((item) => item.text.toLowerCase().includes(search.toLowerCase())).map((item, index) => (
                    <FilterCheckbox
                        key={index}
                        text={item.text}
                        value={item.value}
                        checked={selected?.has(item.value)}
                        endAdornment={item.endAdornment}
                        onCheckedChange={() => onClickCheckbox?.(item.value)}
                        name={name}
                    />
                ))}
            </div>

            {
                 items.length > limit && (
                    <Button variant="outline" size="sm" onClick={handleShowAll} className='mt-5 w-full sm:w-auto'>
                       {!showAll ? 'Показати всі' : 'Сховати'}
                    </Button>
                )
            }
        </div>
    );
};