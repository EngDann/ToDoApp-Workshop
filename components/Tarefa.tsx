import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTrash, faCheck} from '@fortawesome/free-solid-svg-icons';

interface Props {
  texto: string;
  onDelete: () => void;
}

const Tarefa: React.FC<Props> = ({texto, onDelete}) => {
  const [concluida, setConcluida] = useState<boolean>(false);

  const toggleConcluida = () => {
    setConcluida(!concluida);
  };

  return (
    <View style={[estilos.item, concluida && estilos.itemConcluido]}>
      {/* Linha horizontal para tarefas concluídas */}
      {concluida && <View style={estilos.linhaConcluida} />}
      <TouchableOpacity onPress={toggleConcluida} style={estilos.itemEsquerda}>
        <View
          style={[estilos.quadrado, concluida && estilos.quadradoConcluido]}>
          {concluida && (
            <FontAwesomeIcon icon={faCheck} style={estilos.checkIcon} />
          )}
        </View>
        <Text
          style={[estilos.textoItem, concluida && estilos.textoItemConcluido]}>
          {texto}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete}>
        <FontAwesomeIcon icon={faTrash} style={estilos.iconeDeletar} />
      </TouchableOpacity>
    </View>
  );
};

const estilos = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    position: 'relative', // Necessário para posicionar a linha horizontal corretamente
  },
  itemConcluido: {
    opacity: 0.5,
  },
  linhaConcluida: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#A0A0A0',
    zIndex: 1,
  },
  itemEsquerda: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    zIndex: 2, // Garante que o texto e o quadrado fiquem sobre a linha
  },
  quadrado: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quadradoConcluido: {
    backgroundColor: '#9ccfff',
    opacity: 0.4,
  },
  checkIcon: {
    color: '#039aff',
    fontSize: 16,
  },
  textoItem: {
    maxWidth: '80%',
    color: '#000000',
  },
  textoItemConcluido: {
    textDecorationLine: 'line-through',
    color: '#A0A0A0',
  },
  iconeDeletar: {
    color: '#ff0303',
    fontSize: 24,
  },
});

export default Tarefa;
