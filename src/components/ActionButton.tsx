import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
import colors from '../theme/colors';
import fontSize from '../theme/fonts';
import {hp} from '../utils';

interface ActionButtonProps {
  title: string;
  onPress: () => void;
  isButtonDisabled?: () => boolean;
  loading?: boolean;
}

const ActionButton: FC<ActionButtonProps> = ({
  title,
  onPress,
  isButtonDisabled,
  loading,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={(isButtonDisabled && isButtonDisabled()) || loading}
      style={[
        styles.wrapperButton,
        isButtonDisabled &&
          isButtonDisabled() && {
            backgroundColor: colors.neutral400,
          },
      ]}>
      {loading ? (
        <ActivityIndicator size={'small'} color={colors.white} />
      ) : (
        <Text style={styles.titleButton}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  wrapperButton: {
    backgroundColor: colors.primaryPurple,
    paddingVertical: hp(1.7),
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleButton: {
    color: colors.white,
    fontWeight: '700',
    fontSize: fontSize(16),
  },
});
