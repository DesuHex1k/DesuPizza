import { hashSync } from "bcrypt";
import { prisma } from "./prisma-client";
import { Prisma } from "@prisma/client";

const randomDecimalNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
  };
  
  const generateProductItem = ({
    productId,
    pizzaType,
    size,
  }: {
    productId: number;
    pizzaType?: number;
    size?: number;
  }) => {
    return {
      productId,
      price: randomDecimalNumber(190, 600),
      pizzaType,
      size,
    } as Prisma.ProductItemUncheckedCreateInput;
  };

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: "Admin",
                email: "admin@example.com",
                password: hashSync("admin", 10),
                role: "ADMIN",
                verified: new Date(),
            },
            {
                fullName: "User",
                email: "user@example.com",
                password: hashSync("user", 10),
                role: "USER",
                verified: new Date(),
            }
        ]
    })

    await prisma.category.createMany({
        data: [
            {
                name: "Піцца",
            },
            {
                name: "Десерти",
            },
            {
                name: "Напої",
            },
            {
                name: "Комбо",
            },
            {
                name: "Сніданки",
            },
            {
                name: "Коктейлі",
            },
            {
                name: "Кофе",
            },
        ]
    })

    await prisma.ingredient.createMany({
        data: [
            {
                name: 'Сирний бортик',
                price: 90,
                imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop',
            },
            {
                name: 'Вершкова моцарела',
                price: 40,
                imageUrl: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop',
            },
            {
                name: 'Сир чеддер та пармезан',
                price: 40,
                imageUrl: 'https://images.unsplash.com/photo-1589881133595-a3b0853b099f?w=400&h=400&fit=crop',
            },
            {
                name: 'Гострий перець халапеньйо',
                price: 30,
                imageUrl: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=400&fit=crop',
            },
            {
                name: 'Ніжне курча',
                price: 40,
                imageUrl: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=400&fit=crop',
            },
            {
                name: 'Печериці',
                price: 30,
                imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=400&fit=crop',
            },
            {
                name: 'Шинка',
                price: 40,
                imageUrl: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=400&fit=crop',
            },
            {
                name: 'Пікантна пепероні',
                price: 40,
                imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop',
            },
            {
                name: 'Гостра чорізо',
                price: 40,
                imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop',
            },
            {
                name: 'Мариновані огірки',
                price: 30,
                imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
            },
            {
                name: 'Свіжі томати',
                price: 30,
                imageUrl: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=400&fit=crop',
            },
            {
                name: 'Червона цибуля',
                price: 30,
                imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=400&fit=crop',
            },
            {
                name: 'Соковиті ананаси',
                price: 30,
                imageUrl: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&h=400&fit=crop',
            },
            {
                name: 'Італійські трави',
                price: 20,
                imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=400&fit=crop',
            },
            {
                name: 'Солодкий перець',
                price: 30,
                imageUrl: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=400&fit=crop',
            },
            {
                name: 'Кубики бринзи',
                price: 40,
                imageUrl: 'https://images.unsplash.com/photo-1589881133595-a3b0853b099f?w=400&h=400&fit=crop',
            },
            {
                name: 'Мітболи',
                price: 40,
                imageUrl: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=400&fit=crop',
            },
        ]
    })

    await prisma.product.createMany({
        data: [
            {
                name: 'Омлет з шинкою та грибами',
                imageUrl: 'https://th.bing.com/th/id/R.b2c45112f710356546f4e8f290e9237a?rik=8HCcN1plgEJqyA&pid=ImgRaw&r=0',
                categoryId: 5,
            },
            {
                name: 'Омлет з пепероні',
                imageUrl: 'https://th.bing.com/th/id/R.b2c45112f710356546f4e8f290e9237a?rik=8HCcN1plgEJqyA&pid=ImgRaw&r=0',
                categoryId: 5,
            },
            {
                name: 'Сендвіч шинка та сир',
                imageUrl: 'https://unapinsa.com/wp-content/uploads/2023/11/baffalo-chiken-sajt.png',
                categoryId: 4,
            },
            {
                name: 'Курячі нагетси',
                imageUrl: 'https://mcdonalds.com.lb/storage/menu-products/April2020/GVZc5nHu4ToFungTVJZ3.png',
                categoryId: 4,
            },
            {
                name: 'Картопля з духовки з соусом',
                imageUrl: 'https://png.pngtree.com/png-clipart/20211017/original/pngtree-sweet-potato-corner-western-food-delicious-photography-picture-fragrance-png-image_6856201.png',
                categoryId: 4,
            },
            {
                name: 'Банановий молочний коктейль',
                imageUrl: 'https://static.vecteezy.com/system/resources/previews/041/918/172/large_2x/ai-generated-chocolate-milk-shake-isolated-on-transparent-background-free-png.png',
                categoryId: 6,
            },
            {
                name: 'Карамельне яблуко молочний коктейль',
                imageUrl: 'https://static.vecteezy.com/system/resources/previews/041/918/172/large_2x/ai-generated-chocolate-milk-shake-isolated-on-transparent-background-free-png.png',
                categoryId: 6,
            },
            {
                name: 'Молочний коктейль з печивом Орео',
                imageUrl: 'https://static.vecteezy.com/system/resources/previews/041/918/172/large_2x/ai-generated-chocolate-milk-shake-isolated-on-transparent-background-free-png.png',
                categoryId: 6,
            },
            {
                name: 'Класичний молочний коктейль',
                imageUrl: 'https://static.vecteezy.com/system/resources/previews/041/918/172/large_2x/ai-generated-chocolate-milk-shake-isolated-on-transparent-background-free-png.png',
                categoryId: 6,
            },
            {
                name: 'Ірландський Капучино',
                imageUrl: 'https://static.vecteezy.com/system/resources/previews/023/742/327/non_2x/latte-coffee-isolated-illustration-ai-generative-free-png.png',
                categoryId: 7,
            },
            {
                name: 'Кава Карамельний капучино',
                imageUrl: 'https://static.vecteezy.com/system/resources/previews/023/742/327/non_2x/latte-coffee-isolated-illustration-ai-generative-free-png.png',
                categoryId: 7,
            },
            {
                name: 'Кава Кокосовий латте',
                imageUrl: 'https://static.vecteezy.com/system/resources/previews/023/742/327/non_2x/latte-coffee-isolated-illustration-ai-generative-free-png.png',
                categoryId: 7,
            },
            {
                name: 'Кава Американо',
                imageUrl: 'https://static.vecteezy.com/system/resources/previews/023/742/327/non_2x/latte-coffee-isolated-illustration-ai-generative-free-png.png',
                categoryId: 7,
            },
            {
                name: 'Кава Латте',
                imageUrl: 'https://static.vecteezy.com/system/resources/previews/023/742/327/non_2x/latte-coffee-isolated-illustration-ai-generative-free-png.png',
                categoryId: 7,
            },
        ]
    })

    const allIngredients = await prisma.ingredient.findMany();

    // Піцца 1: Пепероні фреш
    const pizza1 = await prisma.product.create({
      data: {
        name: 'Пепероні фреш',
        imageUrl: 'https://th.bing.com/th/id/R.e9afc071c4bdaf52367c73fbd4f17739?rik=7k6z8dE5QI7QbQ&pid=ImgRaw&r=0',
        categoryId: 1,
        ingredients: {
          connect: allIngredients.slice(0, 5).map(i => ({ id: i.id })),
        },
      },
    });

    // Піцца 2: Сирна
    const pizza2 = await prisma.product.create({
      data: {
        name: 'Сирна',
        imageUrl: 'https://th.bing.com/th/id/R.e9afc071c4bdaf52367c73fbd4f17739?rik=7k6z8dE5QI7QbQ&pid=ImgRaw&r=0',
        categoryId: 1,
        ingredients: {
          connect: allIngredients.slice(5, 10).map(i => ({ id: i.id })),
        },
      },
    });

    // Піцца 3: Чорізо фреш
    const pizza3 = await prisma.product.create({
      data: {
        name: 'Чорізо фреш',
        imageUrl: 'https://th.bing.com/th/id/R.e9afc071c4bdaf52367c73fbd4f17739?rik=7k6z8dE5QI7QbQ&pid=ImgRaw&r=0',
        categoryId: 1,
        ingredients: {
          connect: allIngredients.slice(10, 15).map(i => ({ id: i.id })),
        },
      },
    });

    await prisma.productItem.createMany({
        data: [
          generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 20 }),
          generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 30 }),
          generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 40 }),
    
          generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 20 }),
          generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 30 }),
          generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 40 }),
          generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 20 }),
          generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 30 }),
          generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 40 }),
    
          generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 20 }),
          generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 30 }),
          generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 40 }),
    
          generateProductItem({ productId: 1 }),
          generateProductItem({ productId: 2 }),
          generateProductItem({ productId: 3 }),
          generateProductItem({ productId: 4 }),
          generateProductItem({ productId: 5 }),
          generateProductItem({ productId: 6 }),
          generateProductItem({ productId: 7 }),
          generateProductItem({ productId: 8 }),
          generateProductItem({ productId: 9 }),
          generateProductItem({ productId: 10 }),
          generateProductItem({ productId: 11 }),
          generateProductItem({ productId: 12 }),
          generateProductItem({ productId: 13 }),
          generateProductItem({ productId: 14 }),
          generateProductItem({ productId: 15 }),
          generateProductItem({ productId: 16 }),
          generateProductItem({ productId: 17 }),
        ],
      });

      await prisma.cart.createMany({
        data: [
          {
            userId: 1,
            token: "1234567890",
            totalAmount: 0,
          },
          {
            userId: 2,
            token: "1234567890",
            totalAmount: 0,
          },
        ],
      });
    
      await prisma.cartItem.create({
        data: {
          productItemId: 1,
          cartId: 1,
          quantity: 2,
          ingredients: {
            connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
          }
        },
      });
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`
}

async function main() {
    try {
        await down();
        await up();
    } catch (error) {
        console.error(error);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });