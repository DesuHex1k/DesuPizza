'use client'
import React, { useEffect, useMemo, useState } from 'react';
import { Title } from './title';
import { Input } from '../ui/input';
import { RangeSlider } from '../ui/range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';
import { useSet } from 'react-use';
import qs from 'qs';
import { useRouter, useSearchParams } from 'next/navigation';


interface Props {
 className?: string 
}

interface PriceProps{
  min?: number
  max?: number
}

interface QueryFilters extends PriceProps {
  types?: string
  sizes?: string
  ingredients?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
  const router = useRouter()
  const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>
  const { ingredients, selectedIngredients, onAddId } = useFilterIngredients(searchParams.get('ingredients')?.split(',') || [])

  const [sizes, {toggle: toggleSize}] = useSet(new Set<string>(searchParams.get('sizes')?.split(',') || []))
  const [types, {toggle: toggleType}] = useSet(new Set<string>(searchParams.get('types')?.split(',') || []))



  const [price, setPrice] = useState<PriceProps>({
    min: Number(searchParams.get('min')) || undefined,
    max: Number(searchParams.get('max')) || undefined,
  })

  const items = useMemo(() => ingredients.map((ingredient) => ({
    text: ingredient.name,
    value: ingredient.id.toString(),
  })), [ingredients])


  const handleChangePrice = (name: keyof PriceProps, value: number) => {
    setPrice({...price, [name]: value})
  }



  useEffect(() => {
    const filters = {
      ...price,
      types: Array.from(types),
      sizes: Array.from(sizes),
      ingredients: Array.from(selectedIngredients),
    }

    const query = qs.stringify(filters, { arrayFormat: 'comma' })

    router.push(`?${query}`, { scroll: false })
  }, [price, types, sizes, selectedIngredients])

  return (
    <div className={`${className} px-4 sm:px-0`}>
      <Title text="Фільтри" size="sm" className="mb-5 font-extrabold" />

      <CheckboxFiltersGroup
        title='Тип тіста'
        className='mt-5'
        items={[{text: 'Тонке', value: '1'}, {text: 'Традиційне', value: '2'}]}
        selected={types}
        name='type'
        onClickCheckbox={toggleType}
      />

      <CheckboxFiltersGroup
        title='Розмір'
        className='mt-5'
        items={[{text: 'Маленький', value: '20'}, {text: 'Середній', value: '30'}, {text: 'Великий', value: '40'}]}
        onClickCheckbox={toggleSize}
        selected={sizes}
        name='size'
      />

      <div className="mt-10 flex flex-col gap-4">
        <Title text="Ціна" size="sm" className="font-extrabold" />

        <div className="flex items-center gap-2">
          <Input type="number" placeholder="Від" className="text-sm" value={String(price.min || 0)} onChange={(e) => handleChangePrice('min', Number(e.target.value))} />
          <Input type="number" placeholder="До" className="text-sm" value={String(price.max || 1000)} onChange={(e) => handleChangePrice('max', Number(e.target.value))} />
        </div>

        <RangeSlider min={0} max={1000} step={10} value={[price.min || 0, price.max || 1000]} onValueChange={([min, max]) => {
          setPrice({min: min || 0, max: max || 1000})
        }}/>
      </div>

      <CheckboxFiltersGroup
        title='Інгредієнти'
        className='mt-5'
        items={items}
        defaultItems={items.slice(0, 6)}
        loading={ingredients.length === 0}  
        onClickCheckbox={onAddId}
        selected={selectedIngredients}
        name='ingredients'
      />
    </div>
  );
};