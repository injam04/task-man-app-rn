import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import AppSafeArea from '../components/warper/AppSafeArea';
import { Octicons } from '@expo/vector-icons';
import { globalStyles } from '../../utils/styles/globalStyles';
import FullButton from '../components/common/FullButton';

const SplashScreenTwo = (props) => {
  const { navigation } = props;

  const goToThird = () => {
    navigation.navigate('SplashScreenThree');
  };

  return (
    <AppSafeArea style={styles.safeAreaStyle}>
      <View style={styles.container}>
        <View style={styles.skipSec}>
          <View style={styles.dotStyle}>
            <Octicons
              name='primitive-dot'
              size={20}
              color='#EEF5FD'
              onPress={() => navigation.navigate('SplashScreenOne')}
            />
            <View style={{ marginHorizontal: 6 }}>
              <Octicons name='primitive-dot' size={20} color='#006EE9' />
            </View>
            <Octicons
              name='primitive-dot'
              size={20}
              color='#EEF5FD'
              onPress={() => navigation.navigate('SplashScreenThree')}
            />
          </View>
          <Pressable>
            <Text style={[globalStyles.fs12, globalStyles.primaryColor]}>
              skip
            </Text>
          </Pressable>
        </View>
        <View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}
          >
            <Image source={require('../../assets/splashScreen/two.png')} />
          </View>
          <Text style={[globalStyles.fs16, styles.titleText]}>
            Increase Work Effectiveness
          </Text>
          <Text style={[globalStyles.fs14, styles.paraText]}>
            Time management and the determination of more important tasks will
            give your job statistics better and always improve
          </Text>
        </View>
        <View>
          <FullButton name='Get Started' handlePress={goToThird} />
        </View>
      </View>
    </AppSafeArea>
  );
};

export default SplashScreenTwo;

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  skipSec: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dotStyle: {
    display: 'flex',
    flexDirection: 'row',
  },
  titleText: {
    textAlign: 'center',
    marginVertical: 20,
  },
  paraText: {
    textAlign: 'center',
    color: '#4A4646',
  },
});
