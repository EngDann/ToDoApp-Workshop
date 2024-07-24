import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Tarefa from './components/Tarefa';

export default function App() {
  const [tarefa, setTarefa] = useState<string | null>(null);
  const [tarefas, setTarefas] = useState<string[]>([]);

  const adicionarTarefa = () => {
    if (tarefa) {
      setTarefas([...tarefas, tarefa]);
      setTarefa(null);
      Keyboard.dismiss();
    }
  };

  const deletarTarefa = (index: number) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  };

  return (
    <View style={estilos.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps='handled'
      >
        <View style={estilos.taskWrapper}>
          <Text style={estilos.sectionTitle}>Tarefas de Hoje</Text>
          <View style={estilos.items}>
            {tarefas.map((item, index) => (
              <Tarefa
                key={index}
                texto={item}
                onDelete={() => deletarTarefa(index)}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={estilos.writeTaskWrapper}
      >
        <TextInput
          style={estilos.input}
          placeholder='Escreva uma tarefa' placeholderTextColor={'#000000'}
          value={tarefa || ''}
          onChangeText={setTarefa}
        />
        <TouchableOpacity onPress={adicionarTarefa}>
          <View style={estilos.addWrapper}>
            <Text style={estilos.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  items: {
    marginTop: 20,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    color: '#000000',
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    color: '#000000',
    fontSize: 20,
  },
});
