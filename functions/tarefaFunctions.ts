export const adicionarTarefa = () => {
  if (tarefa && tarefa.trim() !== '') { // Verifica se a tarefa não é apenas espaços em branco
    setTarefas([...tarefas, tarefa.trim()]); // Remove espaços em branco ao redor
    setTarefa('');
    Keyboard.dismiss();
  }
};
  
  export const deletarTarefa = (itens: string[], index: number): string[] => {
    const itensCopia = [...itens];
    itensCopia.splice(index, 1);
    return itensCopia;
  }
  