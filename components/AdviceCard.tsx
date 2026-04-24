import { AdviceCardProps } from "@/types/home-types";
import { Text, View } from 'react-native';

const AdviceCard = ({ title, description, icon, containerClass, titleClass, textClass, }: AdviceCardProps) => {
  return (
    /* Flexible container using template literals to merge base styles with dynamic color themes */
    <View className={`rounded-[24px] p-5 border ${containerClass}`}>
      
      {/* Header Row: Contains the icon and title aligned horizontally */}
      <View className="flex-row items-center mb-4">
        {/* Semi-transparent icon background to contrast against the card theme */}
        <View className="w-12 h-12 rounded-2xl items-center justify-center bg-white/70">
          {icon}
        </View>
        {/* Dynamic title styling (e.g., text color) passed via props */}
        <Text className={`ml-4 text-2xl font-bold ${titleClass}`}>{title}</Text>
      </View>

      {/* Description area: Uses medium font weight and generous line spacing for readability */}
      <Text className={`text-lg leading-8 font-medium ${textClass}`}>
        {description}
      </Text>
    </View>
  );
};

export default AdviceCard;