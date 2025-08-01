import {useEffect, useState} from "react";
import {Ingredient} from "@prisma/client";
import {Api} from "@/services/api-client";

export  const useIngredients = () => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([])

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


    return {
        ingredients,
    }
}