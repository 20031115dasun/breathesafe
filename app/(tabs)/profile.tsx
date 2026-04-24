import React from 'react';
import { View, Text } from 'react-native';

const Profile = () => {
  return (
      <View className="flex-1 bg-brand-soft px-4 pt-12">

          {/* Profile Card */}
          <View className="bg-white rounded-2xl p-5 items-center shadow-soft">

              <View className="w-20 h-20 rounded-full bg-brand-primary justify-center items-center">
                  <Text className="text-white text-xl font-bold">C</Text>
              </View>

              <Text className="text-lg font-semibold text-brand-text mt-3">
                  Chethaka
              </Text>

              <Text className="text-brand-muted text-sm">
                  chethaka@email.com
              </Text>

          </View>

          {/* Settings */}
          <View className="mt-6">

              <View className="bg-white p-4 rounded-xl mb-3 shadow-soft">
                  <Text className="text-brand-text">Account Settings</Text>
              </View>

              <View className="bg-white p-4 rounded-xl mb-3 shadow-soft">
                  <Text className="text-brand-text">Notifications</Text>
              </View>

              <View className="bg-white p-4 rounded-xl shadow-soft">
                  <Text className="text-red-500 font-semibold">Logout</Text>
              </View>

          </View>

      </View>
  );
};

export default Profile;