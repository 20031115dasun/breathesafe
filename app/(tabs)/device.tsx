import React from 'react';
import { View, Text } from 'react-native';

const Device = () => {
  return (
      <View className="flex-1 bg-brand-soft px-4 pt-12">

          {/* Header */}
          <Text className="text-xl font-bold text-brand-text">
              My Devices
          </Text>
          <Text className="text-brand-muted mt-1">
              Manage your connected devices
          </Text>

          {/* Featured Device */}
          <View className="bg-white rounded-2xl p-5 mt-6 shadow-soft">
              <Text className="text-lg font-semibold text-brand-text">
                  Living Room Light
              </Text>

              <Text className="text-brand-muted mt-1">
                  Status: Online
              </Text>

              <View className="mt-4 bg-brand-primary rounded-full py-2 px-4 self-start">
                  <Text className="text-white font-semibold">
                      Turn Off
                  </Text>
              </View>
          </View>

          {/* Device List */}
          <View className="mt-6">
              <View className="bg-white rounded-xl p-4 mb-3 shadow-soft">
                  <Text className="text-brand-text font-medium">Fan</Text>
                  <Text className="text-brand-muted text-sm">Offline</Text>
              </View>

              <View className="bg-white rounded-xl p-4 shadow-soft">
                  <Text className="text-brand-text font-medium">Heater</Text>
                  <Text className="text-brand-muted text-sm">Online</Text>
              </View>
          </View>

      </View>
  );
};

export default Device;