import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Tarefa from './components/Tarefa';
import { salvarTarefas, carregarTarefas } from './services/storageService';
import { adicionarOuEditarTarefa, deletarTarefa, iniciarEdicao } from './functions/taskFunctions';

export default function App() {
  const [tarefa, setTarefa] = useState<string | null>('');
  const [tarefas, setTarefas] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  useEffect(() => {
    carregarTarefas().then(setTarefas);
  }, []);

  useEffect(() => {
    salvarTarefas(tarefas);
  }, [tarefas]);

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
              <TouchableOpacity key={index} onPress={() => iniciarEdicao(index, tarefas, setTarefa, setEditIndex)}>
                <Tarefa
                  texto={item}
                  onDelete={() => deletarTarefa(index, tarefas, setTarefas)}
                />
              </TouchableOpacity>
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
          placeholder='Escreva uma tarefa'
          placeholderTextColor={'#000000'}
          value={tarefa || ''}
          onChangeText={setTarefa}
        />
        <TouchableOpacity onPress={() => adicionarOuEditarTarefa(tarefa, editIndex, setTarefas, setTarefa, tarefas, setEditIndex)}>
          <View style={estilos.addWrapper}>
            <Text style={estilos.addText}>{editIndex !== null ? '✓' : '+'}</Text>
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
