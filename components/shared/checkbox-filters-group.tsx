'use client'
import React, { useState } from 'react';
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox';
import { Title } from './title';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

type Item = FilterCheckboxProps

interface Props {
    title: string
    items: Item[]
    defaultItems: Item[]
    limit?: number
    searchInputPlaceholder?: string
    onChange?: (values: string[]) => void
    defaultValue?: string[]
    className?: string
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder = 'Пошук...',
    className,
}) => {
    const [showAll, setShowAll] = useState(false)
    const [search, setSearch] = useState('')

    const list = showAll ? items : defaultItems.slice(0, limit)

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
                        checked={item.checked}
                        endAdornment={item.endAdornment}
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