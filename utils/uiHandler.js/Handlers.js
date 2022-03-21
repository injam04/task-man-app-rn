import { Dimensions } from 'react-native';

export const getFontFamily = (weight) => {
  const lang_dict = {
    400: ['Poppins_400Regular'],
    500: ['Poppins_500Medium'],
  };

  if (weight) {
    return lang_dict[`${weight}`][0];
  } else {
    return lang_dict[`${400}`][0];
  }
};

export const adjustableSize = (mainsize, diff = 2) => {
  const { height, width } = Dimensions.get('window');

  //   console.log(height, ' -- ', width);
  //   console.log(mainsize, ' -- ', diff);

  if (height <= 685 || width <= 415) return mainsize - diff;
  else return mainsize;
};
