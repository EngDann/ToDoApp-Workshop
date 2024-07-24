import AsyncStorage from '@react-native-async-storage/async-storage';

export const salvarTarefas = async (novasTarefas: string[]) => {
  try {
    await AsyncStorage.setItem('tarefas', JSON.stringify(novasTarefas));
  } catch (error) {
    console.error('Erro ao salvar tarefas', error);
  }
};

export const carregarTarefas = async () => {
  try {
    const tarefasSalvas = await AsyncStorage.getItem('tarefas');
    return tarefasSalvas !== null ? JSON.parse(tarefasSalvas) : [];
  } catch (error) {
    console.error('Erro ao carregar tarefas', error);
    return [];
  }
};
