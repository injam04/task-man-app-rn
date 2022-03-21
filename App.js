import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Righteous_400Regular } from '@expo-google-fonts/righteous';
import {
  Poppins_400Regular,
  Poppins_500Medium,
} from '@expo-google-fonts/poppins';
import Logo from './src/components/splashScreen/Logo';

export default function App() {
  let [fontsLoaded] = useFonts({
    Righteous_400Regular,
    Poppins_400Regular,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Logo />
      {/* <Text style={{ fontFamily: 'Righteous_400Regular', fontSize: 30 }}>
        TASK-WAN
      </Text> */}
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
