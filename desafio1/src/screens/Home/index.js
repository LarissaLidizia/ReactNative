import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Home = () => {
  const navigation = useNavigation();
  return (


    <LinearGradient colors={['#0095FF', '#01CFCD']} style={styles.container}>
      <View style={{ padding: 10 }}>
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 20, color: 'white', fontWeight: "bold" }}>Senha numérica</Text>
        </View>
        <Text style={{ fontSize: 15, color: 'white' }}> Larissa, digite sua senha:</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={styles.button2}>
          <Text style={{ color: 'white', fontSize: 40, fontWeight: "bold" }}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={{ color: 'white', fontSize: 40, fontWeight: "bold" }}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={{ color: 'white', fontSize: 40, fontWeight: "bold" }}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={{ color: 'white', fontSize: 40, fontWeight: "bold" }}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={{ color: 'white', fontSize: 40, fontWeight: "bold" }}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={{ color: 'white', fontSize: 40, fontWeight: "bold" }}></Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', paddingTop: 50 }}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white', fontSize: 40, fontWeight: "bold" }}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white', fontSize: 40, fontWeight: "bold" }}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white', fontSize: 40, fontWeight: "bold" }}>3</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white', fontSize: 40, fontWeight: "bold" }}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white', fontSize: 40, fontWeight: "bold" }}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white', fontSize: 40, fontWeight: "bold" }}>6</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white', fontSize: 40, fontWeight: "bold" }}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white', fontSize: 40, fontWeight: "bold" }}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white', fontSize: 40, fontWeight: "bold" }}>9</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white', fontSize: 25 }}>ajuda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white', fontSize: 40, fontWeight: "bold" }}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
          <Text style={{ color: 'white', fontSize: 25 }}>apagar</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', borderTopColor: '#6CF632', borderTopWidth:1 }}>
        <TouchableOpacity style={styles.buttonvalida}>
          <Image
            source={require('../../../assets/numerica.png')}
            style={{ width: 45, height: 45 }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonvalida} >
          <Image
            source={require('../../../assets/digital.png')}
            style={{ width: 45, height: 45 }}
          />
        </TouchableOpacity>
      </View>
      

      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: 'white', fontSize: 15, marginRight: 70 }}>numérica</Text>
        <Text style={{ color: 'white', fontSize: 15, marginLeft: 60 }}>digital</Text>
      </View>
    </LinearGradient>
    // </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0095FF',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'transparent',
    paddingTop: 0,
    borderRadius: 50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 90,
    display: 'flex',
    margin: 10,
    marginLeft: 10,
    borderColor: 'white',
    flexDirection: 'row',
  },
  button2: {
    backgroundColor: 'transparent',
    paddingTop: 0,
    borderRadius: 50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    display: 'flex',
    margin: 0,
    marginLeft: 7,
    borderColor: 'white',
    flexDirection: 'row',
  },
  buttonvalida: {
    backgroundColor: 'transparent',
    paddingTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    margin: 2,
    marginLeft: 70,
    marginRight: 70,
    borderColor: 'white',
    flexDirection: 'row',
  }
});