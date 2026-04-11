import React from "react";

export interface StatCardProps {
    title: string;
    value: string;
    subtitle: string;
    icon: React.ReactNode;
    bgClass: string;
};

export interface AdviceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    containerClass: string;
    titleClass: string;
    textClass: string;
};

export interface ActivityCardProps{
    title: string;
    icon: React.ReactNode;
}