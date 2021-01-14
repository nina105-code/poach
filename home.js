import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  TouchableHighlight
} from 'react-native';

export default class Home extends Component {
    constructor(props) {
      super(props);
    };
    pressLogin = () => {
      this.props.navigation.navigate('Login')
    }
    pressSignup = () => {
      this.props.navigation.navigate('Signup')
    }
    render () {
      return (
        <View style={styles.container}>
          <Image 
            style={styles.imageLogo}
            source={require('../assets/poachlogo.png')} 
          />
          <TouchableHighlight onPress={this.pressLogin} underlayColor={'#00263b'} style={[styles.btnContainer, styles.btnLogin]}>
              <Text style={styles.textWhite}>Login</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.pressSignup} underlayColor={'#fb7813'} style={[styles.btnContainer, styles.btnSignup]}>
              <Text style={styles.textWhite}>Signup</Text>
          </TouchableHighlight>
        </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageLogo: {
    height: 100,
    width: 400,
    marginVertical: 15,
  },
  btnContainer: {
    width: 250,
    paddingVertical: 7,
    marginVertical: 3,
    alignItems: 'center',
    borderRadius: 20,
  },
  btnLogin: {
    backgroundColor: "#fb7813",
  },
  btnSignup: {
    backgroundColor: "#00263b",
  },
  textWhite: {
    color: 'white',
    fontSize: 13,
  },
  textBlack: {
    color: '#00263b',
    fontSize: 13,
  },
})