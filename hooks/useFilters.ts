import {useSearchParams} from "next/navigation";
import {useSet} from "react-use";
import {useState} from "react";

interface PriceProps{
    min?: number
    max?: number
}

interface QueryFilters extends PriceProps {
    types?: string
    sizes?: string
    ingredients?: string
}

export interface Filters {
    sizes: Set<string>
    types: Set<string>
    selectedIngredients: Set<string>
    price: PriceProps
}

interface  ReturnProps extends Filters {
    setPrices: (name: keyof PriceProps, value: number) => void
    setTypes: (value: string) => void
    setSizes: (value: string) => void
    setSelectedIngredients: (value: string) => void
}

export const useFilters = (): ReturnProps => {
    const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>

    const [selectedIngredients, {toggle: toggleIngredients}] = useSet(new Set<string>(searchParams.get('ingredients')?.split(',') || []))


    const [sizes, {toggle: toggleSize}] = useSet(new Set<string>(searchParams.get('sizes')?.split(',') || []))
    const [types, {toggle: toggleType}] = useSet(new Set<string>(searchParams.get('types')?.split(',') || []))

    const [price, setPrice] = useState<PriceProps>({
        min: Number(searchParams.get('min')) || undefined,
        max: Number(searchParams.get('max')) || undefined,
    })

    const handleChangePrice = (name: keyof PriceProps, value: number) => {
        setPrice(prev => ({...prev, [name]: value}))
    }

    return {
        sizes,
        types,
        price,
        selectedIngredients,
        setPrices: handleChangePrice,
        setTypes: toggleType,
        setSelectedIngredients: toggleIngredients,
        setSizes: toggleSize,
    }
}