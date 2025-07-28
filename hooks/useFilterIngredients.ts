'use client'
import { useEffect, useState } from "react";
import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import { useSet } from "react-use";

interface Props {
    ingredients: Ingredient[]
    selectedIngredients: Set<string>
    onAddId: (id: string) => void
    setSelectedngredients: (ids: string[]) => void
}

export const useFilterIngredients = (values: string[] = []): Props => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([])

    const [selectedIngredients, {toggle}] = useSet(new Set<string>(values))

    useEffect(() => {
        const fetchIngredients = async () => {
            try {
                const ingredients = await Api.ingredients.getAll()
                setIngredients(ingredients)
            } catch (error) {
                console.error('Error fetching ingredients:', error)
            }
        }
        fetchIngredients()
    }, [])

    const setSelectedngredients = (ids: string[]): void => {
       ids.forEach(selectedIngredients.add) 
    }

    return {
        ingredients,
        selectedIngredients,
        onAddId: toggle,
        setSelectedngredients
    }
}