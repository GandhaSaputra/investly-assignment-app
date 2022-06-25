import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import Modal from 'react-native-modal';
import colors from '../theme/colors';
import {hp, wp} from '../utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Gap from './Gap';
import fontSize from '../theme/fonts';

interface ModalDialogProps {
  visible: boolean;
  closeModal: () => void;
}

const ModalDialog: FC<ModalDialogProps> = ({visible, closeModal}) => {
  return (
    <Modal isVisible={visible} onBackdropPress={closeModal}>
      <View style={styles.modalContainer}>
        <AntDesign
          name="close"
          size={wp(6)}
          color={colors.neutral500}
          style={styles.closeButton}
          onPress={closeModal}
          suppressHighlighting
        />
        <AntDesign name={'closecircleo'} size={wp(15)} color={colors.red900} />
        <Gap size={hp(2)} />
        <Text style={styles.message}>{'Gagal login'}</Text>
      </View>
    </Modal>
  );
};

export default ModalDialog;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: colors.white,
    paddingVertical: hp(2),
    width: wp(90),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: fontSize(30),
    color: colors.red900,
    fontWeight: '600',
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 7,
  },
});
