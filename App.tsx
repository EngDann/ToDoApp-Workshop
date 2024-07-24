import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Platform,
} from 'react-native';
import Tarefa from './components/Tarefa';
import {adicionarTarefa, completarTarefa} from './functions/tarefaFunctions';

export default function App() {
  const [tarefa, setTarefa] = useState<string | null>(null);
  const [itensTarefa, setItensTarefa] = useState<string[]>([]);

  const adicionarTarefaHandler = () => {
    Keyboard.dismiss();
    setItensTarefa(adicionarTarefa(itensTarefa, tarefa));
    setTarefa(null);
  };

  const completarTarefaHandler = (index: number) => {
    setItensTarefa(completarTarefa(itensTarefa, index));
  };

  return (
    <View style={estilos.container}>
      {/* Adicionado este ScrollView para permitir rolagem quando a lista ficar maior que a tela */}
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps='handled'
      >
        {/* Tarefas de Hoje */}
        <View style={estilos.taskWrapper}>
          <Text style={estilos.sectionTitle}>Tarefas de Hoje</Text>
          <View style={estilos.itens}>
            {/* As tarefas serão exibidas aqui! */}
            {itensTarefa.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => completarTarefaHandler(index)}>
                <Tarefa texto={item} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Adicionar uma tarefa */}
      {/* Usa um KeyboardAvoidingView para garantir que o teclado não cubra os itens na tela */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={estilos.writeTaskWrapper}
      >
        <TextInput 
          style={estilos.input} 
          placeholder={'Escreva uma tarefa'} 
          value={tarefa || ''} 
          onChangeText={texto => setTarefa(texto)} 
          placeholderTextColor="#000000" // Cor preta para o texto do placeholder
        />
        <TouchableOpacity onPress={adicionarTarefaHandler}>
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
  itens: {
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
