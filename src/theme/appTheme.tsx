import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#76D7C4',
};

export const styles = StyleSheet.create({
  globalMargin: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 25,
    marginBottom: 10,
    fontWeight: 'bold',
    marginTop: 15,
  },
  label: {
    marginTop: 25,
    fontWeight: 'bold'
  },
  inputField: {
    marginTop: 5,
    fontSize: 15,
  },
  inputFieldIOS: {
    borderBottomColor: '#76D7C4',
    borderBottomWidth: 2,
    paddingBottom: 4,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    height: 600,
    marginBottom: 50
  }
});
