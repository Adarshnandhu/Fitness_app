import fit from "@/assets/images/img7.jpg";
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import "react-native-gesture-handler";

const Bmi = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
       <ImageBackground
              source={fit}
              resizeMode="cover"
              style={styles.image}
            >
      <Text style={styles.title}>BMI</Text>
     
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('height')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 100,
  },
  input: {
    width: '100%',
    height: 50,
    fontSize: 25,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: 'white',
  },
  image:{
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  button: {
    position: 'absolute',
    bottom :20,
    right :20,
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    width: '25%',
    alignItems: 'center',
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Bmi ;
