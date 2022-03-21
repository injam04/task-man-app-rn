import AppLoading from 'expo-app-loading';
import { useFonts, Righteous_400Regular } from '@expo-google-fonts/righteous';
import {
  Poppins_400Regular,
  Poppins_500Medium,
} from '@expo-google-fonts/poppins';
import SplashStack from './src/navigation/SplashStack';

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
    <>
      <SplashStack />
    </>
  );
}
