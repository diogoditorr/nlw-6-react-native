import Constants from 'expo-constants';

export const REDIRECT_URI: string | undefined = Constants.manifest.extra.REDIRECT_URI;
export const SCOPE: string | undefined = Constants.manifest.extra.SCOPE;
export const RESPONSE_TYPE: string | undefined = Constants.manifest.extra.RESPONSE_TYPE;
export const CLIENT_ID: string | undefined = Constants.manifest.extra.CLIENT_ID;
export const CDN_IMAGE: string | undefined = Constants.manifest.extra.CDN_IMAGE;
