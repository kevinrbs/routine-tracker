import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  fullHeight: {
    height: '100%',
  },
  fullWidth: {
    width: '100%',
  },
  fit: {
    height: '100%',
    width: '100%',
  },
  flexCenter: {
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    'align-content': 'center',
    'align-items': 'center',
  },
  hidden: {
    display: 'none',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  rowReverse: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  columnReverse: {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
});
