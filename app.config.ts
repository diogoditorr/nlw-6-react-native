import { ConfigContext, ExpoConfig } from "@expo/config";
import "dotenv/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
    ...config,
    name: "GamePlay",
    version: "1.0.0",
    slug: "gameplay",
    android: {
        package: "com.gameplay",
    },
    extra: {
        CDN_IMAGE: process.env.CDN_IMAGE,
        CLIENT_ID: process.env.CLIENT_ID,
        REDIRECT_URI: process.env.REDIRECT_URI,
        RESPONSE_TYPE: process.env.RESPONSE_TYPE,
        SCOPE: process.env.SCOPE,
    },
});
