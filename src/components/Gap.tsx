import {View} from 'react-native';
import React, {FC} from 'react';

const Gap: FC<{size: number}> = ({size}) => {
  return (
    <View
      style={{
        height: size,
      }}
    />
  );
};

export default Gap;
