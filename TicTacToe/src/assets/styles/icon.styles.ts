import {StyleSheet} from 'react-native';

const iconStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    backgroundColor: '#12110d',
    justifyContent: 'center',
  },
  topHalf: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  bottomHalf: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: '#FFFFFF',
  },
  xIconWrapper: {
    position: 'relative',
    backgroundColor: 'red',
  },
  xIconBefore: {
    content: '',
    height: 40,
    borderLeftWidth: 4,
    borderColor: '#FFFFFF',
    position: 'absolute',
    transform: [{rotate: '-45deg'}],
    left: 20,
    top: 3,
  },
  xIconAfter: {
    content: '',
    height: 40,
    borderLeftWidth: 4,
    borderColor: '#FFFFFF',
    position: 'absolute',
    transform: [{rotate: '45deg'}],
    left: 20,
    top: 3,
  },
});

export default iconStyles;
