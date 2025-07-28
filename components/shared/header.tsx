"use client"
import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import Image from "next/image";
import { ArrowRight, ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Title } from "./title";
import { SearchInput } from "./search-input";

type Props = {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn(className, '')}>
            <Container className="flex items-center justify-between py-6 md:py-8 sm:py-4 xs:py-3">
                <Link href="/">
                    <div className="flex items-center gap-4 md:gap-4 sm:gap-2 xs:gap-2">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={52}
                            height={52}
                            className="md:w-[52px] md:h-[52px] sm:w-[40px] sm:h-[40px] xs:w-[32px] xs:h-[32px]"
                        />

                        <div className="hidden sm:block">
                            <Title text="DesuPizza" size="lg" className="font-extrabold md:text-xl sm:text-lg xs:text-base" />
                            <p className="text-md text-gray-400 leading-3 md:text-sm sm:text-xs ">Натхненно Японією – створено з душею</p>
                        </div>

                        <div className="sm:hidden">
                            <Title text="DesuPizza" size="lg" className="font-extrabold text-lg" />
                        </div>
                    </div>
                </Link>

                <div className="mx-10 flex-1">
                    <SearchInput />
                </div>


                <div className="flex items-center gap-4 md:gap-4 sm:gap-2 xs:gap-2">
                    {/* Desktop buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button variant="outline" className="rounded-full cursor-pointer transition-all duration-300">
                            <UserIcon className="w-4 h-4" />
                            <span>Вхід</span>
                        </Button>

                        <div className="flex items-center gap-2">
                            <Button className={cn('group relative rounded-full cursor-pointer', className)}>
                                <b>52UAH</b>
                                <span className="h-full w-[1px] bg-white/30 mx-3" />
                                <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                                    <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
                                    <b>1</b>
                                </div>
                                <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                            </Button>
                        </div>
                    </div>

                    {/* Mobile buttons */}
                    <div className="md:hidden flex items-center gap-2">
                        <Button variant="outline" size="sm" className="rounded-full h-10 px-3">
                            <UserIcon className="w-4 h-4" />
                        </Button>

                        <Button className="rounded-full h-10 px-3">
                            <ShoppingCart className="h-4 w-4" />
                            <span className="ml-1 font-bold">1</span>
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    )
}