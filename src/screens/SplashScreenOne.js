import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import AppSafeArea from '../components/warper/AppSafeArea';
import Logo from '../components/splashScreen/Logo';
import FullButton from '../components/common/FullButton';
import { globalStyles } from '../../utils/styles/globalStyles';
import { Octicons } from '@expo/vector-icons';

const SplashScreenOne = (props) => {
  const { navigation } = props;

  const [showLogo, setShowLogo] = useState('true');

  useEffect(() => {
    setTimeout(() => {
      setShowLogo(false);
    }, 2000);
  }, []);

  const goToSecond = () => {
    navigation.navigate('SplashScreenTwo');
  };

  return (
    <AppSafeArea style={styles.safeAreaStyle}>
      {showLogo ? (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Logo />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}
          >
            <Image
              source={require('../../assets/splashScreen/under-logo.png')}
              style={styles.underLogo}
            />
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.skipSec}>
            <View style={styles.dotStyle}>
              <Octicons name='primitive-dot' size={20} color='#006EE9' />
              <View style={{ marginHorizontal: 6 }}>
                <Octicons
                  name='primitive-dot'
                  size={20}
                  color='#EEF5FD'
                  onPress={() => navigation.navigate('SplashScreenTwo')}
                />
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
              <Image source={require('../../assets/splashScreen/one.png')} />
            </View>
            <Text style={[globalStyles.fs16, styles.titleText]}>
              Easy Time Management
            </Text>
            <Text style={[globalStyles.fs14, styles.paraText]}>
              With management based on priority and daily tasks, it will give
              you convenience in managing and determining the tasks that must be
              done first
            </Text>
          </View>
          <View>
            <FullButton name='Get Started' handlePress={goToSecond} />
          </View>
        </View>
      )}
    </AppSafeArea>
  );
};

export default SplashScreenOne;

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
  underLogo: {
    width: 93,
    height: 30,
    resizeMode: 'stretch',
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
