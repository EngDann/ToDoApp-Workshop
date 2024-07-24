import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

interface Props {
  texto: string;
  onDelete: () => void;
}

const Tarefa: React.FC<Props> = ({ texto, onDelete }) => {
  return (
    <View style={estilos.item}>
      <View style={estilos.itemEsquerda}>
        <View style={estilos.quadrado}></View>
        <Text style={estilos.textoItem}>{texto}</Text>
      </View>
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
  },
  itemEsquerda: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  quadrado: {
    width: 24,
    height: 24,
    backgroundColor: '#039aff',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  textoItem: {
    maxWidth: '80%',
    color: '#000000',
  },
  iconeDeletar: {
    color: '#ff0303',
    fontSize: 24,
  },
});

export default Tarefa;
