import React from 'react';
import {prisma} from "@/prisma/prisma-client";
import {notFound} from "next/navigation";
import {Container} from "@/components/shared/container";
import {ProductImage} from "@/components/shared/product-image";
import {Title} from "@/components/shared/title";
import {GroupVariants} from "@/components/shared/group-variants";

interface Props {
    params: Promise<{
        id: string
    }>
}

export default async function ProductModalPage({ params }: Props) {
    const { id } = await params;

    const product = await prisma.product.findFirst({
        where: {
            id: Number(id)
        }
    })

    if(!product) return notFound()

    return (
        <Container className='flex flex-col my-10'>
            <div className='flex justify-evenly'>
                <ProductImage imageUrl={product.imageUrl} size={30}/>

                <div className='w-[40%] bg-gray-200 p-8 rounded-2xl'>
                    <Title text={product.name} size={'lg'} className='font-bold mb-3' />

                    <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                    <GroupVariants
                        selectedValue='2'
                        items={[
                            {
                                name: 'Маленька',
                                value: '1'
                            },
                            {
                                name: 'Середня',
                                value: '2'
                            },
                            {
                                name: 'Велика',
                                value: '3',
                            }
                        ]}


                    />
                </div>
            </div>

        </Container>
    );
};