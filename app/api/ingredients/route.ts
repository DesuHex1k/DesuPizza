import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const ingredient = await prisma.ingredient.findMany();
    return NextResponse.json(ingredient);
}