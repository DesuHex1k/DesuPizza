import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui/input';
import { RangeSlider } from '../ui/range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';


interface Props {
 className?: string 
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className} px-4 sm:px-0`}>
      <Title text="Фільтри" size="sm" className="mb-5 font-extrabold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox
          text="Можна зібрати"
          value="1"
        />
        <FilterCheckbox
          text="Нові"
          value="2"
        />
      </div>

      <div className="mt-10 flex flex-col gap-4">
        <Title text="Ціна" size="sm" className="font-extrabold" />

        <div className="flex items-center gap-2">
          <Input type="number" placeholder="Від" className="text-sm" />
          <Input type="number" placeholder="До" className="text-sm" />
        </div>

        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]}/>
      </div>

      <CheckboxFiltersGroup
        title="Інгредієнти"
        className='mt-5'
        items={[
          {
            text: 'Сир',
            value: 'cheese',
          },
          {
            text: 'Ковбаса',
            value: 'sausage',
          },
          {
            text: 'Помідори',
            value: 'tomatoes',
          },
          {
            text: 'Оливки',
            value: 'olives',
          },
          {
            text: 'Базилік',
            value: 'basil',
          },
          {
            text: 'Перець',
            value: 'pepper',
          },
          {
            text: 'Моцарела',
            value: 'mozzarella',
          },
          {
            text: 'Пармезан',
            value: 'parmesan',
          },
          {
            text: 'Гриби',
            value: 'mushrooms',
          },
          {
            text: 'Ананас',
            value: 'pineapple',
          },
          {
            text: 'Бекон',
            value: 'bacon',
          },
          {
            text: 'Курка',
            value: 'chicken',
          },
        ]}
        defaultItems={[
          {
            text: 'Сир',
            value: 'cheese',
          },
          {
            text: 'Ковбаса',
            value: 'sausage',
          },
          {
            text: 'Помідори',
            value: 'tomatoes',
          },
          {
            text: 'Оливки',
            value: 'olives',
          },
          {
            text: 'Базилік',
            value: 'basil',
          },
        ]}
      />
    </div>
  );
};