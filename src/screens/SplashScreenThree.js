import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import AppSafeArea from '../components/warper/AppSafeArea';
import { Octicons } from '@expo/vector-icons';
import { globalStyles } from '../../utils/styles/globalStyles';
import FullButton from '../components/common/FullButton';

const SplashScreenThree = (props) => {
  const { navigation } = props;

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
              <Octicons
                name='primitive-dot'
                size={20}
                color='#EEF5FD'
                onPress={() => navigation.navigate('SplashScreenTwo')}
              />
            </View>
            <Octicons name='primitive-dot' size={20} color='#006EE9' />
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
            <Image source={require('../../assets/splashScreen/three.png')} />
          </View>
          <Text style={[globalStyles.fs16, styles.titleText]}>
            Reminder Notification
          </Text>
          <Text style={[globalStyles.fs14, styles.paraText]}>
            The advantage of this application is that it also provides reminders
            for you so you don't forget to keep doing your assignments well and
            according to the time you have set
          </Text>
        </View>
        <View>
          <FullButton name='Get Started' />
        </View>
      </View>
    </AppSafeArea>
  );
};

export default SplashScreenThree;

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
