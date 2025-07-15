import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
    const data = await request.json();
    const user = await prisma.user.create({
        data,
    });
    return NextResponse.json(user);
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
        return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }
    const user = await prisma.user.delete({
        where: { id: parseInt(id) },
    });
    return NextResponse.json(user);
}