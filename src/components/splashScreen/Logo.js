import { View, Text } from 'react-native';
import React from 'react';
import { globalStyles } from '../../../utils/styles/globalStyles';
import { adjustableSize } from '../../../utils/uiHandler.js/Handlers';

const Logo = () => {
  return (
    <View>
      <Text style={[globalStyles.logo, { fontSize: adjustableSize(30) }]}>
        TASK-WAN
      </Text>
    </View>
  );
};

export default Logo;
