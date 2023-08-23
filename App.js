import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function App() {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [media, setMedia] = useState(0);
  const [mensagem, setMensagem] = useState('');

  const calcularMedia = () => {
    const num1 = parseFloat(nota1);
    const num2 = parseFloat(nota2);
    const num3 = parseFloat(nota3);
    const novaMedia = (num1 + num2 + num3) / 3;
    setMedia(novaMedia);

    if (novaMedia >= 6) {
      setMensagem('Aprovado');
    } else {
      setMensagem('Reprovado');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Calcular Média</Text>
      <TextInput
        placeholder="Nota 1"
        value={nota1}
        onChangeText={(text) => setNota1(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Nota 2"
        value={nota2}
        onChangeText={(text) => setNota2(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Nota 3"
        value={nota3}
        onChangeText={(text) => setNota3(text)}
        style={styles.input}
      />
      <Button title="Calcular Média" onPress={calcularMedia} style={styles.button}/>
      <Text style={styles.resultText}>Média: {media.toFixed(2)}</Text>
      <Text style={styles.resultText}>Status: {mensagem}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  titulo: {
    fontSize: 30,
    marginBottom: 50,
    fontFamily: "Verdana"
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
  },
  button: {
   width: 100
  }
});
