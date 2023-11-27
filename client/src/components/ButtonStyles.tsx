import {StyleSheet} from 'react-native';

export const buttonStyles = StyleSheet.create({
  button: {
    width: 117,
    height: 56,
    borderRadius: 20,
    marginTop: 31,
    marginLeft: 15,
    padding: {
      paddingTop: 14,
      paddingLeft: 16,
      paddingRight: 16,
      paddingEnd: 14,
    },
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },

  primary: {
    backgroundColor: '#76D7C4',
    color: 'white',
  },

  primary_outline: {
    borderWidth: 2,
    borderColor: '#76D7C4',
    backgroundColor: '#FFFFFF',
    color: '#76D7C4',
  },

  secondary: {
    backgroundColor: '#0000003D',
    color: 'white',
  },

  secondary_outline: {
    borderWidth: 2,
    borderColor: '#0000003D',
    backgroundColor: '#FFFFFF',
    color: '#0000003D',
  },

  success: {
    backgroundColor: '#86BC25',
    color: 'white',
  },
  success_outline: {
    borderWidth: 2,
    borderColor: '#86BC25',
    backgroundColor: '#FFFFFF',
    color: '#86BC25',
  },

  info: {
    backgroundColor: '#0097A9',
    color: 'white',
  },

  info_outline: {
    borderWidth: 2,
    borderColor: '#0097A9',
    backgroundColor: '#FFFFFF',
    color: '#0097A9',
  },

  lg: {
    width: 327,
    height: 56,
    borderRadius: 12,
    marginTop: 38,
    marginLeft: 38,
    padding: {
      paddingTop: 14,
      paddingLeft: 10,
      paddingRight: 10,
      paddingEnd: 14,
    },
  },

  md: {
    width: 105,
    height: 44,
    borderRadius: 12,
    marginTop: 38,
    marginLeft: 20,
    padding: {
      paddingTop: 14,
      paddingLeft: 10,
      paddingRight: 10,
      paddingEnd: 14,
    },
  },
  sm: {
    width: 89,
    height: 32,
    borderRadius: 12,
    marginTop: 45,
    marginLeft: 20,
    padding: {
      paddingTop: 14,
      paddingLeft: 6,
      paddingRight: 6,
      paddingEnd: 14,
    },
  },
});

export type ButtonStyles = typeof buttonStyles;
