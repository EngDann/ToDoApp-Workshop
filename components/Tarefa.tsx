import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  texto: string;
}

const Tarefa: React.FC<Props> = ({ texto }) => {
  return (
    <View style={estilos.item}>
      <View style={estilos.itemEsquerda}>
        <View style={estilos.quadrado}></View>
        <Text style={estilos.textoItem}>{texto}</Text>
      </View>
      <View style={estilos.circular}></View>
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
    backgroundColor: '#8d55f6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  textoItem: {
    maxWidth: '80%',
    color: '#000000',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#8d55f6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Tarefa;
