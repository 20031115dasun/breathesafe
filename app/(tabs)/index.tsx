import React, {useEffect} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {ActivityIndicator, ScrollView, Text, View} from "react-native";
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
    Bike, MoveRight, Clock,
} from "lucide-react-native";
import {getPredictionData, getSensorData} from "@/services/iot-api";
import {PredictionData, SensorData} from "@/types/api-types";

export default function Index() {
    const [sensorData, setSensorData] = React.useState<SensorData | null>(null)
    const [predData, setPredData] = React.useState<PredictionData | null>(null)

    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        const loadData = async () => {
            try {
                const sensorResponse = await getSensorData();
                const predResponse = await getPredictionData();

                // Access the .data property from your FastAPI response
                if (sensorResponse && sensorResponse.status === "Success") {
                    setSensorData(sensorResponse.data);
                    setLoading(false);
                }

                if (predResponse && predResponse.status === "Success") {
                    setPredData(predResponse.data);
                }
            } catch (error) {
                console.error("Error fetching sensor data:", error);
            } finally {
                // We only set loading to false after the FIRST load,
                // so the screen doesn't constantly flash a loading spinner.
            }
        };

        // 1. Fetch data immediately when the screen loads
        loadData();

        // 2. Set up a timer to run `loadData` again every 5000 milliseconds (5 seconds)
        const intervalId = setInterval(() => {
            loadData();
        }, 5000);

        // 3. Cleanup function: This is very important!
        // It destroys the timer if the user navigates away from the screen, preventing memory leaks.
        return () => clearInterval(intervalId);
    }, []);

    if (loading) {
        return (
            <SafeAreaView className="flex-1 bg-brand-soft items-center justify-center">
                <ActivityIndicator size="large" color="#31CDB6" />
                <Text className="mt-4 text-brand-dark">Loading latest readings...</Text>
            </SafeAreaView>
        );
    }

    // 4. Map the fetched data to your variables, providing safe fallbacks (??)
    // Make sure the property names (like .aqi, .pm25, .temperature) match your database columns!
    const aqi = sensorData?.saqi ?? 0;
    const pm25 = sensorData?.pm2_5 ?? "--";
    const temperature = sensorData?.temp ?? "--";
    const humidity = sensorData?.humidity ?? "--";
    const pm10 = sensorData?.pm10 ?? "--";
    const pm1 = sensorData?.pm1 ?? "--";

    const trend = predData?.trend ?? "--";
    const pred_saqi = predData?.pred_saqi ?? 0;
    const pred_class = predData?.pred_class ?? "--";
    const current_class = predData?.current_class ?? "--";


    // You can format this dynamically later based on sensorData.dateTime
    const updatedTime = "Just now";

    // You can write a helper function later to determine "Good", "Moderate", "Unhealthy" dynamically based on the 'aqi' number.
    const status = aqi > 50 ? "Moderate" : "Good"

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

                <View className="mt-6 bg-white rounded-[25px] p-5 shadow-sm border border-brand-soft">
                    <View className="flex-row items-center justify-between mb-4">
                        <View className="flex-row items-center">
                            <Clock size={22} color="#0F2D57" />
                            <Text className="text-brand-dark text-xl font-bold ml-2">10-Min Forecast</Text>
                        </View>
                        <View className="bg-brand-soft px-3 py-1 rounded-lg">
                            <Text className="text-brand-primary font-bold text-xs">AI PREDICTION</Text>
                        </View>
                    </View>

                    <View className="flex-row items-center justify-around bg-brand-soft/30 rounded-2xl p-4">
                        <View className="items-center">
                            <Text className="text-gray-500 text-xs font-bold uppercase">Current</Text>
                            <Text className="text-brand-dark text-lg font-extrabold">{current_class}</Text>
                        </View>

                        <MoveRight size={24} color="#31CDB6" />

                        <View className="items-center">
                            <Text className="text-gray-500 text-xs font-bold uppercase">In 10 Mins</Text>
                            <Text className="text-brand-primary text-2xl font-black">{Math.round(pred_saqi)}</Text>
                            <Text className="text-brand-primary font-bold">{pred_class}</Text>
                        </View>
                    </View>

                    <Text className="text-gray-500 text-xs italic mt-3 text-center">
                        The air quality is expected to be {pred_class.toLowerCase()} in the next 10 minutes.
                    </Text>
                </View>

                {/* 3. Small Stat Cards */}
                <View className="flex-row justify-between mt-7">
                    <StatCard
                        title="Prediction"
                        value={Math.round(pred_saqi).toString()}
                        subtitle="Next 10m"
                        bgClass="bg-brand-accent"
                        icon={<Activity size={34} color="white" />}
                    />
                    <View className="w-4" />
                    <StatCard
                        title="Trend"
                        value={trend === "Increasing" ? "Up" : "Down"}
                        subtitle={trend}
                        bgClass={trend === "Increasing" ? "bg-orange-400" : "bg-emerald-400"}
                        icon={<ShieldAlert size={34} color="white" />}
                    />
                </View>

                {/* Small Stat Cards */}
                <View className="flex-row justify-between mt-7 ">
                    <StatCard
                        title="AQI Level"
                        value={aqi.toString()}
                        subtitle="Current AQI"
                        bgClass="bg-brand-primary"
                        icon={<Wind size={34} color="white" />}
                    />
                    <View className="w-4" />
                    <StatCard
                        title="PM2.5"
                        value={pm25.toString()}
                        subtitle="Fine particles"
                        bgClass="bg-brand-secondary"
                        icon={<Activity size={34} color="white" />}
                    />
                </View>

                <View className="flex-row justify-between mt-7">
                    <StatCard
                        title="Temperature"
                        value={`${temperature}C`}
                        subtitle="Air condition"
                        bgClass="bg-brand-accent"
                        icon={<ShieldAlert size={34} color="white" />}
                    />
                    <View className="w-4" />
                    <StatCard
                        title="Humidity"
                        value={`${humidity}%`}
                        subtitle="Air condition"
                        bgClass="bg-brand-accent"
                        icon={<ShieldAlert size={34} color="white" />}
                    />
                </View>

                <View className="flex-row justify-between mt-7">
                    <StatCard
                        title="PM10"
                        value={pm10.toString()}
                        subtitle="Air condition"
                        bgClass="bg-brand-secondary"
                        icon={<Wind size={34} color="white" />}
                    />
                    <View className="w-4" />
                    <StatCard
                        title="PM1.0"
                        value={pm1.toString()}
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