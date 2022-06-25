import {wp} from '../utils';

export const fontSize = (size: number) => {
  switch (size) {
    case 4:
      return wp(1.2);
    case 5:
      return wp(1.45);
    case 6:
      return wp(1.7);
    case 7:
      return wp(1.95);
    case 8:
      return wp(2.2);
    case 9:
      return wp(2.45);
    case 10:
      return wp(2.7);
    case 11:
      return wp(2.95);
    case 12:
      return wp(3.2);
    case 13:
      return wp(3.45) - 1;
    case 14:
      return wp(3.7) - 1.5;
    case 15:
      return wp(3.95) - 1.5;
    case 16:
      return wp(4.2) - 1.5;
    case 17:
      return wp(4.4) - 1.5;
    case 18:
      return wp(4.7) - 1.5;
    case 20:
      return wp(5.2);
    case 22:
      return wp(5.7);
    case 24:
      return wp(6.2);
    case 26:
      return wp(6.7);
    case 28:
      return wp(7.2);
    case 30:
      return wp(7.7);
    case 40:
      return wp(11.2);
    case 60:
      return wp(16.2);
  }
};

export default fontSize;
