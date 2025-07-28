import React from 'react';

interface Props {
  params: Promise<{
    id: string
  }>
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  
  return (
    <div>
      Product: {id}
    </div>
  );
};