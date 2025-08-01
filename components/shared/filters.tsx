'use client'
import React, {useMemo} from 'react';
import { Title } from './title';
import { Input } from '../ui/input';
import { RangeSlider } from '../ui/range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import {useIngredients} from "@/hooks/useIngredients";
import {useFilters} from "@/hooks/useFilters";
import {useQueryFilters} from "@/hooks/useQueryFilters";


interface Props {
 className?: string 
}

export const Filters: React.FC<Props> = ({ className }) => {
  const {ingredients} = useIngredients()
  const filters = useFilters()

  useQueryFilters(filters)

  const updatePrices = (prices: number[])=> {
    filters.setPrices('min', prices[0])
    filters.setPrices('max', prices[1])
  }

  const items = useMemo(() => ingredients.map((ingredient) => ({
    text: ingredient.name,
    value: ingredient.id.toString(),
  })), [ingredients])



  return (
    <div className={`${className} px-4 sm:px-0`}>
      <Title text="Фільтри" size="sm" className="mb-5 font-extrabold" />

      <CheckboxFiltersGroup
        title='Тип тіста'
        className='mt-5'
        items={[{text: 'Тонке', value: '1'}, {text: 'Традиційне', value: '2'}]}
        selected={filters.types}
        name='type'
        onClickCheckbox={filters.setTypes}
      />

      <CheckboxFiltersGroup
        title='Розмір'
        className='mt-5'
        items={[{text: 'Маленький', value: '20'}, {text: 'Середній', value: '30'}, {text: 'Великий', value: '40'}]}
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
        name='size'
      />

      <div className="mt-10 flex flex-col gap-4">
        <Title text="Ціна" size="sm" className="font-extrabold" />

        <div className="flex items-center gap-2">
          <Input type="number" placeholder="Від" className="text-sm" value={String(filters.price.min || 0)} onChange={(e) => filters.setPrices('min', Number(e.target.value))} />
          <Input type="number" placeholder="До" className="text-sm" value={String(filters.price.max || 1000)} onChange={(e) => filters.setPrices('max', Number(e.target.value))} />
        </div>

        <RangeSlider min={0} max={1000} step={10} value={[filters.price.min || 0, filters.price.max || 1000]} onValueChange={updatePrices}/>
      </div>

      <CheckboxFiltersGroup
        title='Інгредієнти'
        className='mt-5'
        items={items}
        defaultItems={items.slice(0, 6)}
        loading={ingredients.length === 0}  
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
        name='ingredients'
      />
    </div>
  );
};