import { ActivityCardProps } from "@/types/home-types";
import { Text, View } from 'react-native';

const ActivityCard = ({ title, icon }: ActivityCardProps) => {
  return (
    /* Card container: uses 48% width for a two-column grid layout with custom brand colors */
    <View className="w-[48%] bg-[#EFFFF6] border border-[#B8F0C9] rounded-[22px] p-5 mb-4 shadow-sm">
      
      {/* Icon Wrapper: centered within a rounded square with a primary brand background */}
      <View className="w-12 h-12 rounded-2xl bg-brand-accent items-center justify-center mb-4">
        {icon}
      </View>

      {/* Card Title: Styled with dark green text and high line-height for readability */}
      <Text className="text-[#14532D] text-xl font-semibold leading-8">
        {title}
      </Text>
    </View>
  );
};

export default ActivityCard;