import { Container } from "@/components/shared/container";
import { Filters } from "@/components/shared/filters";
import { TopBar } from "@/components/shared/top-bar";
import { Title } from "@/components/shared/title";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import {prisma} from "@/prisma/prisma-client";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true,
        }
      }
    }
  });

  return (
    <>
      <Container className="mt-5 md:mt-5 sm:mt-4">
        <Title text="Всі піци" size="lg" className="font-extrabold" />
      </Container>

      <TopBar categories={categories.filter((category) => (category.products.length > 0))}/>

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
              {
                categories.map((category) => (
                    category.products.length > 0 && (
                        <ProductsGroupList
                            key={category.id}
                            title={category.name}
                            items={category.products}
                            categoryId={category.id}
                        />
                    )
                ))
              }
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
