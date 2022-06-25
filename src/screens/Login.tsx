import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../theme/colors';
import Gap from '../components/Gap';
import CustomTextInput from '../components/CustomTextInput';
import ActionButton from '../components/ActionButton';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigator';
import API from '../modules/API';
import ModalDialog from '../components/ModalDialog';
import fontSize from '../theme/fonts';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;
type LoginScreenNavigationProp = Props['navigation'];

const url = 'https://stg-api.investly.id/v2/auth/login';

const Login = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [inputForm, setInputForm] = useState({
    email: '',
    password: '',
    isEmailValid: '0',
    showPassword: false,
    isEmailEmpty: false,
  });
  const [loading, setLoading] = useState(false);
  const [modalDialog, setModalDialog] = useState({
    message: '',
    visible: false,
  });

  // FUNCTIONS

  const onChangeForm = (text: string, type: string) => {
    if (type === 'email') {
      setInputForm(currentState => {
        return {
          ...currentState,
          email: text,
          isEmailValid: onValidateEmail(text), // Valid email check
          isEmailEmpty: text.length === 0 ? true : false, // Empty email check
        };
      });
      return;
    }
    if (type === 'password') {
      setInputForm(currentState => {
        return {
          ...currentState,
          password: text,
        };
      });
      return;
    }
  };

  const onValidateEmail = (value: string): string => {
    // '0' === input empty
    // '1' === email valid
    // '-1' === email not valid

    if (value.length === 0) {
      return '0';
    }

    const re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    const result = re.test(value);

    if (result) {
      return '1';
    }
    return '-1';
  };

  const onShowPassword = () => {
    setInputForm(currentState => {
      return {
        ...currentState,
        showPassword: !currentState.showPassword,
      };
    });
  };

  const isButtonDisabled = () => {
    if (
      inputForm.isEmailEmpty ||
      inputForm.isEmailValid === '-1' ||
      inputForm.isEmailValid === '0' ||
      inputForm.password.length < 8
    ) {
      return true;
    }
    return false;
  };

  const doLogin = async () => {
    setLoading(true);
    try {
      const response = await API(inputForm, url);
      if (response.status === true) {
        setLoading(false);
        navigation.navigate('Dashboard');
        return;
      }
      setLoading(false);
      setModalDialog(currentState => {
        return {
          ...currentState,
          message: response?.messages,
          visible: true,
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onCloseModal = () => {
    setModalDialog(currentState => {
      return {
        ...currentState,
        message: '',
        visible: false,
      };
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView style={styles.containers}>
        <Text style={styles.screenTitle}>{'Masuk'}</Text>
        <Gap size={45} />
        <CustomTextInput
          title="Email"
          value={inputForm.email}
          onChangeText={onChangeForm}
          isEmailValid={inputForm.isEmailValid}
          isInputEmailEmpty={inputForm.isEmailEmpty}
          // onCheckIsInputEmailEmpty={onCheckIsInputEmailEmpty}
        />
        <Gap size={25} />
        <CustomTextInput
          title="Password"
          value={inputForm.password}
          onChangeText={onChangeForm}
          isPasswordInput
          showPassword={inputForm.showPassword}
          setShowPassword={onShowPassword}
        />
        <Gap size={220} />
        <ActionButton
          title={'Masuk'}
          onPress={doLogin}
          isButtonDisabled={isButtonDisabled}
          loading={loading}
        />
      </ScrollView>
      <ModalDialog visible={modalDialog.visible} closeModal={onCloseModal} />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
  },
  containers: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
    paddingHorizontal: 25,
  },
  screenTitle: {
    fontSize: fontSize(16),
    color: colors.neutral,
    fontWeight: '700',
  },
});
