import { Modal, Text, TouchableOpacity, View } from "react-native";

export default function CustomAlert({ visible, type, message, onClose }: any) {
    // Check if the alert is a success or error type
    const isSuccess = type === "success";

    return (
        /* Overlay Modal: fade transition with transparent background */
        <Modal transparent animationType="fade" visible={visible}>
            {/* Centered container with semi-transparent backdrop */}
            <View className="flex-1 bg-black/40 justify-center items-center px-6">
                
                {/* Alert Box: white background with rounded corners */}
                <View className="w-full bg-white rounded-3xl p-6 items-center">

                    {/* Status Icon: green for success, red for error */}
                    <View
                        className={`w-16 h-16 rounded-full items-center justify-center mb-4 ${
                            isSuccess ? "bg-brand-accent" : "bg-red-500"
                        }`}
                    >
                        <Text className="text-white text-2xl font-bold">
                            {isSuccess ? "✓" : "✕"}
                        </Text>
                    </View>

                    {/* Header: displays Success or Error based on type */}
                    <Text className="text-xl font-bold text-brand-dark mb-2">
                        {isSuccess ? "Success" : "Error"}
                    </Text>

                    {/* Body: displays the dynamic message prop */}
                    <Text className="text-brand-muted text-center mb-6">
                        {message}
                    </Text>

                    {/* Close Action: full-width button to dismiss alert */}
                    <TouchableOpacity
                        onPress={onClose}
                        className="bg-brand-primary w-full py-3 rounded-xl items-center"
                    >
                        <Text className="text-white font-bold">OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}