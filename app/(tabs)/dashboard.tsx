import React from 'react';
import { View, Text } from 'react-native';

const Dashboard = () => {
  return (
      <View className="flex-1 bg-brand-soft px-4 pt-12">

          {/* Header */}
          <Text className="text-xl font-bold text-brand-text">
              Dashboard
          </Text>
          <Text className="text-brand-muted mt-1">
              Overview of your system
          </Text>

          {/* Stats */}
          <View className="flex-row justify-between mt-6">

              <View className="bg-white p-4 rounded-xl w-[48%] shadow-soft">
                  <Text className="text-brand-muted text-sm">Active Devices</Text>
                  <Text className="text-xl font-bold text-brand-primary mt-1">12</Text>
              </View>

              <View className="bg-white p-4 rounded-xl w-[48%] shadow-soft">
                  <Text className="text-brand-muted text-sm">Offline</Text>
                  <Text className="text-xl font-bold text-red-400 mt-1">3</Text>
              </View>

          </View>

          {/* Activity */}
          <View className="bg-white rounded-xl p-4 mt-6 shadow-soft">
              <Text className="text-brand-text font-semibold mb-2">
                  Recent Activity
              </Text>

              <Text className="text-brand-muted text-sm">
                  • Light turned on
              </Text>
              <Text className="text-brand-muted text-sm">
                  • Device disconnected
              </Text>
          </View>

      </View>
  );
};

export default Dashboard;