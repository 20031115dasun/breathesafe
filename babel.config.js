module.exports = function (api) {
    // Caches the config for faster build performance
    api.cache(true);
    
    return {
        presets: [
            /* Configures Expo with NativeWind for tailwind-style styling */
            ["babel-preset-expo", { jsxImportSource: "nativewind" }],
            /* Transforms Tailwind classes into React Native compatible styles */
            "nativewind/babel",
        ],
    };
};