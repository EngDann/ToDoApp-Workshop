import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Task from './components/Task';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Tarefas de Hoje */}
      <View style={styles.taskWrapper}>    
        <Text style={styles.sectionTitle}>Tarefas de Hoje</Text>
        <View style={styles.items}>
          <Task text={'Olá'}/>         
          <Task />
          <Task />
          <Task />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E8EAED',
  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  items:{
    marginTop:20,
  },
});

export default App;
