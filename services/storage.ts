import AsyncStorage from '@react-native-async-storage/async-storage';

export const setRegistered = async () => {
  await AsyncStorage.setItem('@isRegistered', 'true');
};

export const isRegistered = async () => {
  return (await AsyncStorage.getItem('@isRegistered')) === 'true';
};

export const saveUserData = async (name: string, imageUri: string) => {
  await AsyncStorage.setItem('@userName', name);
  await AsyncStorage.setItem('@userIcon', imageUri);
};