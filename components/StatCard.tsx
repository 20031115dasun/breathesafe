import type { StatCardProps } from "@/types/home-types";
import { Text, View } from "react-native";

const StatCard = ({ title, value, subtitle, icon, bgClass }: StatCardProps) => {
    return (
        /* Grid-friendly card with dynamic background color and fixed height */
        <View className={`w-[48%] h-[150px] rounded-2xl p-4 ${bgClass} mb-4`}>
            
            {/* Visual indicator/icon for the metric */}
            <View className="mb-3">{icon}</View>

            {/* Main numerical or text value; forced to single line */}
            <Text className="text-white text-2xl font-extrabold" numberOfLines={1}>
                {value}
            </Text>

            {/* Title of the statistic; forced to single line */}
            <Text className="text-white text-sm font-semibold mt-1" numberOfLines={1}>
                {title}
            </Text>

            {/* Supporting details with reduced opacity; allows wrapping up to 2 lines */}
            <Text className="text-white/80 text-xs mt-1" numberOfLines={2}>
                {subtitle}
            </Text>
        </View>
    );
};

export default StatCard;