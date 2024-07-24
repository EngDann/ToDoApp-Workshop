export const adicionarTarefa = (itens: string[], tarefa: string | null): string[] => {
    if (tarefa) {
      return [...itens, tarefa];
    }
    return itens;
  }
  
  export const deletarTarefa = (itens: string[], index: number): string[] => {
    const itensCopia = [...itens];
    itensCopia.splice(index, 1);
    return itensCopia;
  }
  