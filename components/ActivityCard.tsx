import React from 'react';
import { View, Text } from 'react-native';
import {ActivityCardProps} from "@/types/home-types";

const ActivityCard = ({ title, icon }:ActivityCardProps) => {
  return (
      <View className="w-[48%] bg-[#EFFFF6] border border-[#B8F0C9] rounded-[22px] p-5 mb-4 shadow-sm">
          <View className="w-12 h-12 rounded-2xl bg-brand-accent items-center justify-center mb-4">
              {icon}
          </View>
          <Text className="text-[#14532D] text-xl font-semibold leading-8">
              {title}
          </Text>
      </View>
  );
};

export default ActivityCard;