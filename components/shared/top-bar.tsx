"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { SortPopup } from "./sort-popup";
import { Categories } from "./categories";
import { Container } from "./container";

type TopBarProps = {
  className?: string;
};

export const TopBar: React.FC<TopBarProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "md:sticky md:top-0 z-10 py-5 sm:py-3 xs:py-2 border-b border-gray-200 bg-gray-50",
        className
      )}
    >
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-3 xs:gap-2">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
