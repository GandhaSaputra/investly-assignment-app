import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {FC} from 'react';
import colors from '../theme/colors';
import Gap from './Gap';
import Entypo from 'react-native-vector-icons/Entypo';
import fontSize from '../theme/fonts';
import {hp} from '../utils';

interface CustomTextInputProps {
  title: string;
  value: string;
  onChangeText: (text: string, type: string) => void;
  isPasswordInput?: boolean;
  showPassword?: boolean;
  setShowPassword?: (prevState: boolean) => void;
  isEmailValid?: string;
  isInputEmailEmpty?: boolean;
}

const CustomTextInput: FC<CustomTextInputProps> = ({
  title,
  value,
  onChangeText,
  isPasswordInput,
  showPassword,
  setShowPassword,
  isEmailValid,
  isInputEmailEmpty,
}) => {
  if (isPasswordInput) {
    return (
      <View>
        <Text style={styles.inptuTitle}>{title}</Text>
        <Gap size={10} />
        <View
          style={[
            styles.wrapperInput,
            value.length === 0
              ? styles.emptyInput
              : value.length >= 8
              ? styles.validInput
              : styles.notValidInput,
          ]}>
          <TextInput
            value={value}
            onChangeText={text => onChangeText(text, 'password')}
            placeholder={'Masukan Password'}
            placeholderTextColor={colors.neutral500}
            style={[styles.passwordInput]}
            secureTextEntry={!showPassword}
          />
          <Entypo
            name={showPassword ? 'eye-with-line' : 'eye'}
            size={25}
            color={colors.neutral500}
            onPress={() => setShowPassword && setShowPassword(!showPassword)}
            suppressHighlighting
          />
        </View>
        {value.length > 0 && value.length < 8 && (
          <Text style={styles.warningText}>
            {'Password harus terdiri dari minimal 8 karakter'}
          </Text>
        )}
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.inptuTitle}>{title}</Text>
      <Gap size={10} />
      <TextInput
        value={value}
        onChangeText={text => onChangeText(text, 'email')}
        placeholder={'Misal: nama@mail.com'}
        placeholderTextColor={colors.neutral500}
        style={[
          styles.emailInput,
          isInputEmailEmpty
            ? styles.notValidInput
            : isEmailValid === '1'
            ? styles.validInput
            : isEmailValid === '0'
            ? styles.emptyInput
            : styles.notValidInput,
        ]}
      />
      {isEmailValid === '-1' && value.length > 0 && (
        <Text style={styles.warningText}>{'Format email tidak sesuai'}</Text>
      )}
      {isInputEmailEmpty && (
        <Text style={styles.warningText}>{'Email tidak boleh kosong'} </Text>
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inptuTitle: {
    fontSize: fontSize(16),
    color: colors.neutral,
    fontWeight: '700',
  },
  wrapperInput: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.neutral200,
    borderWidth: 1,
    borderColor: colors.neutral300,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 32,
    alignItems: 'center',
  },
  emailInput: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 32,
    fontSize: fontSize(16),
    fontWeight: '400',
    color: colors.neutral,
  },
  passwordInput: {
    flex: 1,
    fontSize: fontSize(16),
    fontWeight: '400',
    color: colors.neutral,
  },
  validInput: {
    backgroundColor: colors.green100,
    borderColor: colors.green500,
    borderWidth: 1,
  },
  notValidInput: {
    backgroundColor: colors.red100,
    borderColor: colors.red500,
    borderWidth: 1,
  },
  emptyInput: {
    backgroundColor: colors.neutral200,
    borderWidth: 1,
    borderColor: colors.neutral300,
  },
  warningText: {
    fontSize: fontSize(12),
    fontWeight: '400',
    color: colors.red500,
    marginTop: hp(1.2),
  },
});
