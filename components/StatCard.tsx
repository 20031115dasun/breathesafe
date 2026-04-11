import React from 'react';
import { View, Text } from "react-native";
import type { StatCardProps } from "@/types/home-types";

const StatCard = ({ title, value, subtitle, icon, bgClass }: StatCardProps) => {
    return (
        <View className={`w-[48%] h-[150px] rounded-2xl p-4 ${bgClass} mb-4`}>
            <View className="mb-3">{icon}</View>

            <Text className="text-white text-2xl font-extrabold" numberOfLines={1}>
                {value}
            </Text>

            <Text className="text-white text-sm font-semibold mt-1" numberOfLines={1}>
                {title}
            </Text>

            <Text className="text-white/80 text-xs mt-1" numberOfLines={2}>
                {subtitle}
            </Text>
        </View>
    );
};

export default StatCard;