import { Platform } from 'react-native';

export const isAndroid = Platform.OS === 'android';
export const isAndroidLower21 = isAndroid && Platform.Version < 21;
export const isAndroid28 = isAndroid && Platform.Version === 28;
