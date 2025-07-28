import { Container } from "@/components/shared/container";
import { Filters } from "@/components/shared/filters";
import { TopBar } from "@/components/shared/top-bar";
import { Title } from "@/components/shared/title";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { cn } from "@/lib/utils";
import { Suspense } from "react";

export default function Home() {
  const pizzas = [
    {
      id: 1,
      items: [{price: 100}],
      name: "Піца",
      ingredients: ['Крука', 'Моцарелла', 'Сир чеддер', 'Пармезан', 'Сырный соус', 'Томаты', 'Соус альфредо', 'Чеснок'],
      imageUrl: "https://th.bing.com/th/id/R.e9afc071c4bdaf52367c73fbd4f17739?rik=7k6z8dE5QI7QbQ&pid=ImgRaw&r=0"
    }, {
      id: 2,
      items: [{price: 100}],
      name: "Піца",
      ingredients: ['Крука', 'Моцарелла', 'Сир чеддер', 'Пармезан', 'Сырный соус', 'Томаты', 'Соус альфредо', 'Чеснок'],
      imageUrl: "https://th.bing.com/th/id/R.e9afc071c4bdaf52367c73fbd4f17739?rik=7k6z8dE5QI7QbQ&pid=ImgRaw&r=0"
    },
    {
      id: 3,
      items: [{price: 100}],
      name: "Піца",
      ingredients: ['Крука', 'Моцарелла', 'Сир чеддер', 'Пармезан', 'Сырный соус', 'Томаты', 'Соус альфредо', 'Чеснок'],
      imageUrl: "https://th.bing.com/th/id/R.e9afc071c4bdaf52367c73fbd4f17739?rik=7k6z8dE5QI7QbQ&pid=ImgRaw&r=0"
    },

    {
      id: 4,
      items: [{price: 100}],
      name: "Піца",
      ingredients: ['Крука', 'Моцарелла', 'Сир чеддер', 'Пармезан', 'Сырный соус', 'Томаты', 'Соус альфредо', 'Чеснок'],
      imageUrl: "https://th.bing.com/th/id/R.e9afc071c4bdaf52367c73fbd4f17739?rik=7k6z8dE5QI7QbQ&pid=ImgRaw&r=0"
    },
    {
      id: 5,
      items: [{price: 100}],
      name: "Піца",
      ingredients: ['Крука', 'Моцарелла', 'Сир чеддер', 'Пармезан', 'Сырный соус', 'Томаты', 'Соус альфредо', 'Чеснок'],
      imageUrl: "https://th.bing.com/th/id/R.e9afc071c4bdaf52367c73fbd4f17739?rik=7k6z8dE5QI7QbQ&pid=ImgRaw&r=0"
    }, {
      id: 6,
      items: [{price: 100}],
      name: "Піца",
      ingredients: ['Крука', 'Моцарелла', 'Сир чеддер', 'Пармезан', 'Сырный соус', 'Томаты', 'Соус альфредо', 'Чеснок'],
      imageUrl: "https://th.bing.com/th/id/R.e9afc071c4bdaf52367c73fbd4f17739?rik=7k6z8dE5QI7QbQ&pid=ImgRaw&r=0"
    }
  ]

  const drinks = [
      {
        id: 1,
        items: [{price: 100}],
        name: "Напій",
        ingredients: ['Кока-кола', 'Півонія', 'Спрайт', 'Фанта', 'Газована вода'],
        imageUrl: "https://th.bing.com/th/id/R.bc8db0a99c65f3c9c43b44130f7edc8a?rik=OayUoPKXQ98F1A&pid=ImgRaw&r=0"
      },
      {
        id: 2,
        items: [{price: 100}],
        name: "Напій",
        ingredients: ['Кока-кола', 'Півонія', 'Спрайт', 'Фанта', 'Газована вода'],
        imageUrl: "https://th.bing.com/th/id/R.bc8db0a99c65f3c9c43b44130f7edc8a?rik=OayUoPKXQ98F1A&pid=ImgRaw&r=0"
      },
      {
        id: 3,
        items: [{price: 100}],
        name: "Напій",
        ingredients: ['Кока-кола', 'Півонія', 'Спрайт', 'Фанта', 'Газована вода'],
        imageUrl: "https://th.bing.com/th/id/R.bc8db0a99c65f3c9c43b44130f7edc8a?rik=OayUoPKXQ98F1A&pid=ImgRaw&r=0"
      },
      {
        id: 4,
        items: [{price: 100}],
        name: "Напій",
        ingredients: ['Кока-кола', 'Півонія', 'Спрайт', 'Фанта', 'Газована вода'],
        imageUrl: "https://th.bing.com/th/id/R.bc8db0a99c65f3c9c43b44130f7edc8a?rik=OayUoPKXQ98F1A&pid=ImgRaw&r=0"
      },
      {
        id: 5,
        items: [{price: 100}] ,
        name: "Напій",
        ingredients: ['Кока-кола', 'Півонія', 'Спрайт', 'Фанта', 'Газована вода'],
        imageUrl: "https://th.bing.com/th/id/R.bc8db0a99c65f3c9c43b44130f7edc8a?rik=OayUoPKXQ98F1A&pid=ImgRaw&r=0"
      },
      {
        id: 6,
        items: [{price: 100}],
        name: "Напій",
        ingredients: ['Кока-кола', 'Півонія', 'Спрайт', 'Фанта', 'Газована вода'],
        imageUrl: "https://th.bing.com/th/id/R.bc8db0a99c65f3c9c43b44130f7edc8a?rik=OayUoPKXQ98F1A&pid=ImgRaw&r=0"
      },
  ]

  const desserts = [
    {
      id: 1,
      items: [{price: 100}],
      name: "Десерт",
      ingredients: ['Шоколад', 'Вершковий сир', 'Ягоди', 'Банани'],
      imageUrl: "https://png.pngtree.com/png-clipart/20231002/original/pngtree-colorful-birthday-cake-decorated-with-melted-strawberries-png-image_13063823.png"
    },
    {
      id: 2,
      items: [{price: 100}],
      name: "Десерт",
      ingredients: ['Шоколад', 'Вершковий сир', 'Ягоди', 'Банани'],
      imageUrl: "https://png.pngtree.com/png-clipart/20231002/original/pngtree-colorful-birthday-cake-decorated-with-melted-strawberries-png-image_13063823.png"
    },
    {
      id: 3,
      items: [{price: 100}],
      name: "Десерт",
      ingredients: ['Шоколад', 'Вершковий сир', 'Ягоди', 'Банани'],
      imageUrl: "https://png.pngtree.com/png-clipart/20231002/original/pngtree-colorful-birthday-cake-decorated-with-melted-strawberries-png-image_13063823.png"
    },
    {
      id: 4,
      items: [{price: 100}],
      name: "Десерт",
      ingredients: ['Шоколад', 'Вершковий сир', 'Ягоди', 'Банани'],
      imageUrl: "https://png.pngtree.com/png-clipart/20231002/original/pngtree-colorful-birthday-cake-decorated-with-melted-strawberries-png-image_13063823.png"
    },
    {
      id: 5,
      items: [{price: 100}],
      name: "Десерт",
      ingredients: ['Шоколад', 'Вершковий сир', 'Ягоди', 'Банани'],
      imageUrl: "https://png.pngtree.com/png-clipart/20231002/original/pngtree-colorful-birthday-cake-decorated-with-melted-strawberries-png-image_13063823.png"
    },
    {
      id: 6,
      items: [{price: 100}],
      name: "Десерт",
      ingredients: ['Шоколад', 'Вершковий сир', 'Ягоди', 'Банани'],
      imageUrl: "https://png.pngtree.com/png-clipart/20231002/original/pngtree-colorful-birthday-cake-decorated-with-melted-strawberries-png-image_13063823.png"
    },
  ]
  return (
    <>
      <Container className="mt-5 md:mt-5 sm:mt-4">
        <Title text="Всі піци" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="pb-14 md:pb-14 sm:pb-8 mt-5 md:mt-5 sm:mt-4">
        <div className={cn(
          'gap-[60px] md:gap-[60px] sm:gap-8',
          'flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col'
        )}>
          <div className="w-[280px] lg:w-[280px] md:w-full sm:w-full xs:w-full flex-shrink-0">
            <Suspense fallback={<div>Loading filters...</div>}>
              <Filters />
            </Suspense>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-col gap-16 md:gap-16 sm:gap-12">
              <ProductsGroupList title="Піци" items={pizzas} categoryId={0} />
              <ProductsGroupList title="Десерти" items={desserts} categoryId={1} />
              <ProductsGroupList title="Напої" items={drinks} categoryId={2} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
