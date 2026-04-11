import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View } from "react-native";
import StatCard from "@/components/StatCard";
import AdviceCard from "@/components/AdviceCard";
import ActivityCard from "@/components/ActivityCard";
import {
    AlertCircle,
    Heart,
    ShieldAlert,
    CheckCircle2,
    Activity,
    Wind,
    Footprints,
    Dumbbell,
    Trees,
    Bike,
} from "lucide-react-native";

export default function Index() {
    const aqi = 78;
    const pm25 = 28;
    const status = "Moderate";
    const updatedTime = "2:30 PM";

    return (
        <SafeAreaView className="flex-1 bg-brand-soft">
            <ScrollView
                className="flex-1"
                contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Top Main AQI Card */}
                <View className="rounded-[30px] bg-brand-primary px-6 pt-6 pb-7 overflow-hidden shadow-lg">

                    <View className="absolute -top-10 -right-8 w-32 h-32 rounded-full border-[10px] border-white/20" />
                    <View className="absolute -bottom-10 -left-8 w-28 h-28 rounded-full border-[10px] border-white/15" />

                    <View className="flex-row justify-between items-start">
                        <View className="flex-1">
                            <Text className="text-white text-5xl font-extrabold">{aqi}</Text>

                            <Text className="text-white text-2xl font-bold mt-4">
                                Air Quality Index
                            </Text>

                            <View className="self-start mt-4 px-5 py-3 rounded-2xl border border-white/60 bg-white/10">
                                <Text className="text-white text-xl font-bold">{status}</Text>
                            </View>
                        </View>

                        <View className="w-36 h-36 rounded-full bg-white/25 border-[5px] border-white/40 items-center justify-center mt-6">
                            <View className="w-16 h-16 rounded-full bg-white items-center justify-center">
                                <AlertCircle size={34} color="#31CDB6" />
                            </View>
                        </View>
                    </View>

                    <View className="h-[1px] bg-white/35 my-6" />

                    <View className="flex-row items-center justify-between">
                        <View className="bg-white/20 rounded-[22px] px-5 py-4 min-w-[130px]">
                            <Text className="text-white text-4xl font-extrabold">{pm25}</Text>
                            <Text className="text-white text-base font-semibold mt-1">
                                PM2.5 µg/m³
                            </Text>
                        </View>

                        <View className="flex-row items-center">
                            <View className="w-8 h-8 rounded-full border border-white/70 items-center justify-center mr-3">
                                <Text className="text-white text-sm font-bold">⏰</Text>
                            </View>
                            <Text className="text-white text-2xl font-medium">{updatedTime}</Text>
                        </View>
                    </View>
                </View>

                {/* Small Stat Cards */}
                <View className="flex-row justify-between mt-7 ">

                    <StatCard
                        title="AQI Level"
                        value="78"
                        subtitle="Current AQI"
                        bgClass="bg-brand-primary"
                        icon={<Wind size={34} color="white" />}
                    />

                    <View className="w-4" />

                    <StatCard
                        title="PM2.5"
                        value="28"
                        subtitle="Fine particles"
                        bgClass="bg-brand-secondary"
                        icon={<Activity size={34} color="white" />}
                    />

                </View>

                <View className="flex-row justify-between mt-7">

                    <StatCard
                        title="Temperature"
                        value="32C"
                        subtitle="Air condition"
                        bgClass="bg-brand-accent"
                        icon={<ShieldAlert size={34} color="white" />}
                    />

                    <View className="w-4" />

                    <StatCard
                        title="Humidity"
                        value="68%"
                        subtitle="Air condition"
                        bgClass="bg-brand-accent"
                        icon={<ShieldAlert size={34} color="white" />}
                    />

                </View>

                <View className="flex-row justify-between mt-7">

                    <StatCard
                        title="PM10"
                        value="26"
                        subtitle="Air condition"
                        bgClass="bg-brand-secondary"
                        icon={<Wind size={34} color="white" />}
                    />

                    <View className="w-4" />

                    <StatCard
                        title="PM1.0"
                        value="18%"
                        subtitle="Air condition"
                        bgClass="bg-brand-secondary"
                        icon={<Wind size={34} color="white" />}
                    />

                </View>

                {/* Health Advice */}
                <View className="mt-8 bg-brand-card rounded-[30px] p-5 shadow-md">
                    <View className="flex-row items-center mb-6">
                        <View className="w-12 h-12 rounded-2xl bg-[#8B5CF6] items-center justify-center">
                            <AlertCircle size={26} color="white" />
                        </View>
                        <Text className="text-[#0F2D57] text-[32px] font-extrabold ml-4">
                            Health Advice
                        </Text>
                    </View>

                    <AdviceCard
                        title="General Public"
                        description="Air quality is acceptable. However, there may be a risk for some people."
                        icon={<Heart size={24} color="#31CDB6" />}
                        containerClass="bg-[#E8FFFB] border-[#31CDB6]"
                        titleClass="text-brand-primary"
                        textClass="text-brand-text"
                    />

                    <View className="h-5" />

                    <AdviceCard
                        title="Sensitive Groups"
                        description="Reduce prolonged outdoor exertion if you feel discomfort."
                        icon={<ShieldAlert size={24} color="#58C760" />}
                        containerClass="bg-[#ECFFF2] border-[#58C760]"
                        titleClass="text-brand-accent"
                        textClass="text-brand-text"
                    />
                </View>

                {/* Recommended Activities */}
                <View className="mt-8 bg-brand-card rounded-[30px] p-5 shadow-md">

                    <View className="flex-row items-center mb-6">
                        <View className="w-12 h-12 rounded-2xl bg-brand-accent items-center justify-center">
                            <CheckCircle2 size={26} color="white" />
                        </View>

                        <Text className="text-brand-dark text-[28px] font-extrabold ml-4">
                            Recommended Activities
                        </Text>
                    </View>

                    <View className="flex-row flex-wrap justify-between">

                        <ActivityCard title="Outdoor Running" icon={<Activity size={24} color="white" />} />
                        <ActivityCard title="Cycling" icon={<Bike size={24} color="white" />} />
                        <ActivityCard title="Walking" icon={<Footprints size={24} color="white" />} />
                        <ActivityCard title="Indoor Exercise" icon={<Dumbbell size={24} color="white" />} />
                        <ActivityCard title="Park Activities" icon={<Trees size={24} color="white" />} />
                        <ActivityCard title="Window Ventilation" icon={<Wind size={24} color="white" />} />

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}