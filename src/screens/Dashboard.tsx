import {Image, SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';
import colors from '../theme/colors';
import Ilusstrasion from '../assets/images/illustration.png';
import Gap from '../components/Gap';
import {wp} from '../utils';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Gap size={150} />
      <Image source={Ilusstrasion} style={styles.illustration} />
      <Gap size={24} />
      <Text style={styles.screenTitle}>{'Hello Invester !'}</Text>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  screenTitle: {
    color: colors.neutral,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  illustration: {
    width: wp(50),
    height: wp(50),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
