import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View } from "react-native";
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

type StatCardProps = {
    title: string;
    value: string;
    subtitle: string;
    icon: React.ReactNode;
    bgClass: string;
};

type AdviceCardProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
    containerClass: string;
    titleClass: string;
    textClass: string;
};

type ActivityCardProps = {
    title: string;
    icon: React.ReactNode;
};

const StatCard = ({ title, value, subtitle, icon, bgClass }: StatCardProps) => (
    <View className={`flex-1 rounded-[26px] p-5 ${bgClass}`}>
        <View className="mb-6">{icon}</View>
        <Text className="text-white text-4xl font-extrabold">{value}</Text>
        <Text className="text-white text-xl font-bold mt-2">{title}</Text>
        <Text className="text-white/90 text-base mt-1">{subtitle}</Text>
    </View>
);

const AdviceCard = ({
                        title,
                        description,
                        icon,
                        containerClass,
                        titleClass,
                        textClass,
                    }: AdviceCardProps) => (
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

const ActivityCard = ({ title, icon }: ActivityCardProps) => (
    <View className="w-[48%] bg-[#EFFFF6] border border-[#B8F0C9] rounded-[22px] p-5 mb-4 shadow-sm">
        <View className="w-12 h-12 rounded-2xl bg-brand-accent items-center justify-center mb-4">
            {icon}
        </View>
        <Text className="text-[#14532D] text-xl font-semibold leading-8">
            {title}
        </Text>
    </View>
);

export default function Index() {
    const aqi = 78;
    const pm25 = 28;
    const status = "Moderate";
    const updatedTime = "2:30 PM";

    return (
        <SafeAreaView className="flex-1 bg-[#F4F7FB]">
            <ScrollView
                className="flex-1"
                contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Top Main AQI Card */}
                <View className="rounded-[30px] bg-[#F7B126] px-6 pt-6 pb-7 overflow-hidden shadow-lg">
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
                                <AlertCircle size={34} color="#F7B126" />
                            </View>
                        </View>
                    </View>

                    <View className="h-[1px] bg-white/35 my-6" />

                    <View className="flex-row items-center justify-between">
                        <View className="bg-white/18 rounded-[22px] px-5 py-4 min-w-[130px]">
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
                <View className="flex-row justify-between mt-7">
                    <StatCard
                        title="AQI Level"
                        value="78"
                        subtitle="Current AQI"
                        bgClass="bg-[#2F80ED]"
                        icon={<Wind size={34} color="white" />}
                    />
                    <View className="w-4" />
                    <StatCard
                        title="PM2.5"
                        value="28"
                        subtitle="Fine particles"
                        bgClass="bg-[#9B31F2]"
                        icon={<Activity size={34} color="white" />}
                    />
                    <View className="w-4" />
                    <StatCard
                        title="Status"
                        value="Moderate"
                        subtitle="Air condition"
                        bgClass="bg-[#FF0F7B]"
                        icon={<ShieldAlert size={34} color="white" />}
                    />
                </View>

                {/* Health Advice */}
                <View className="mt-8 bg-white rounded-[30px] p-5 shadow-md">
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
                        description="Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution."
                        icon={<Heart size={24} color="#2563EB" />}
                        containerClass="bg-[#EAF3FF] border-[#B9D5FF]"
                        titleClass="text-[#1E40AF]"
                        textClass="text-[#1D4ED8]"
                    />

                    <View className="h-5" />

                    <AdviceCard
                        title="Sensitive Groups"
                        description="Reduce prolonged outdoor exertion if you feel discomfort. Keep monitoring the air quality before going outside for long periods."
                        icon={<ShieldAlert size={24} color="#E11D48" />}
                        containerClass="bg-[#FFECEF] border-[#FFC4CE]"
                        titleClass="text-[#9F1239]"
                        textClass="text-[#BE123C]"
                    />
                </View>

                {/* Recommended Activities */}
                <View className="mt-8 bg-white rounded-[30px] p-5 shadow-md">
                    <View className="flex-row items-center mb-6">
                        <View className="w-12 h-12 rounded-2xl bg-brand-accent items-center justify-center">
                            <CheckCircle2 size={26} color="white" />
                        </View>
                        <Text className="text-[#0F2D57] text-[32px] font-extrabold ml-4">
                            Recommended Activities
                        </Text>
                    </View>

                    <View className="flex-row flex-wrap justify-between">
                        <ActivityCard
                            title="Outdoor Running"
                            icon={<Activity size={24} color="white" />}
                        />
                        <ActivityCard
                            title="Cycling"
                            icon={<Bike size={24} color="white" />}
                        />
                        <ActivityCard
                            title="Walking"
                            icon={<Footprints size={24} color="white" />}
                        />
                        <ActivityCard
                            title="Indoor Exercise"
                            icon={<Dumbbell size={24} color="white" />}
                        />
                        <ActivityCard
                            title="Park Activities"
                            icon={<Trees size={24} color="white" />}
                        />
                        <ActivityCard
                            title="Window Ventilation"
                            icon={<Wind size={24} color="white" />}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}