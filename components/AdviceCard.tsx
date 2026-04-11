import React from 'react';
import { View, Text } from 'react-native';
import {AdviceCardProps} from "@/types/home-types";

const AdviceCard = ({ title, description, icon, containerClass, titleClass, textClass,}:AdviceCardProps) => {
  return (
      <View className={`rounded-[24px] p-5 border ${containerClass}`}>
          <View className="flex-row items-center mb-4">
              <View className="w-12 h-12 rounded-2xl items-center justify-center bg-white/70">
                  {icon}
              </View>
              <Text className={`ml-4 text-2xl font-bold ${titleClass}`}>{title}</Text>
          </View>
          <Text className={`text-lg leading-8 font-medium ${textClass}`}>
              {description}
          </Text>
      </View>
  );
};

export default AdviceCard;