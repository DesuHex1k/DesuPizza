import {useEffect} from "react";
import qs from "qs";
import {Filters} from "@/hooks/useFilters";
import {useRouter} from "next/navigation";

export const useQueryFilters = (filters: Filters) => {
    const router = useRouter();
    useEffect(() => {
        const params = {
            ...filters.price,
            types: Array.from(filters.types),
            sizes: Array.from(filters.sizes),
            ingredients: Array.from(filters.selectedIngredients),
        }

        const query = qs.stringify(params, { arrayFormat: 'comma' })

        router.push(`?${query}`, { scroll: false })
    }, [filters.price, filters.sizes, filters.selectedIngredients, filters.types, router])
}