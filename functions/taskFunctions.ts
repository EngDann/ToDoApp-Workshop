import { Keyboard } from 'react-native';

export const adicionarOuEditarTarefa = (
  tarefa: string | null,
  editIndex: number | null,
  setTarefas: React.Dispatch<React.SetStateAction<string[]>>,
  setTarefa: React.Dispatch<React.SetStateAction<string | null>>,
  tarefas: string[],
  setEditIndex: React.Dispatch<React.SetStateAction<number | null>>
) => {
  if (tarefa && tarefa.trim() !== '') {
    if (editIndex !== null) {
      // Editar tarefa
      const novasTarefas = [...tarefas];
      novasTarefas[editIndex] = tarefa.trim();
      setTarefas(novasTarefas);
      setEditIndex(null);
    } else {
      // Adicionar tarefa
      setTarefas([...tarefas, tarefa.trim()]);
    }
    setTarefa('');
    Keyboard.dismiss();
  }
};

export const deletarTarefa = (
  index: number,
  tarefas: string[],
  setTarefas: React.Dispatch<React.SetStateAction<string[]>>
) => {
  const novasTarefas = tarefas.filter((_, i) => i !== index);
  setTarefas(novasTarefas);
};

export const iniciarEdicao = (
  index: number,
  tarefas: string[],
  setTarefa: React.Dispatch<React.SetStateAction<string | null>>,
  setEditIndex: React.Dispatch<React.SetStateAction<number | null>>
) => {
  setTarefa(tarefas[index]);
  setEditIndex(index);
};
