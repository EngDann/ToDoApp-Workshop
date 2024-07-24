# 🇧🇷

# Aplicativo de Tarefas

Um simples aplicativo de gerenciamento de tarefas desenvolvido em React Native. Este aplicativo permite que você adicione, edite e marque tarefas como concluídas, além de salvar e carregar suas tarefas localmente.

## Funcionalidades

- Adicionar novas tarefas.
- Editar tarefas existentes.
- Marcar tarefas como concluídas.
- Armazenar tarefas localmente usando `AsyncStorage`.
- Interface amigável com suporte para rolagem e ajuste de teclado.

## Tecnologias

- **React Native**: Framework para construção de aplicativos móveis.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **React Hooks**: Para gerenciamento de estado e efeitos colaterais.
- **AsyncStorage**: Para armazenamento local de dados.
- **FontAwesome**: Para ícones de interface.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js** (versão recomendada: 14.x ou superior)
- **npm** (gerenciador de pacotes do Node.js) ou **Yarn**
- **Watchman** (para sistemas macOS, pode ser instalado via Homebrew)
- **React Native CLI** (Ferramenta de linha de comando do React Native)
- **Emulador Android** ou **Xcode** (para desenvolvimento iOS)
- **Android Studio** (para desenvolvimento Android)

### Passos para instalação

### 1. Instale Node.js e npm

Se você ainda não tem o Node.js instalado, baixe e instale a versão recomendada do Node.js do [site oficial](https://nodejs.org/).

### 2. Instale Yarn (opcional, mas recomendado)

Yarn é uma alternativa ao npm e pode ser instalado globalmente usando npm:

```bash
npm install -g yarn
```

### 3. Instale Watchman (apenas para macOS)

Se você estiver usando macOS, instale o Watchman usando Homebrew:

```bash
brew install watchman
```

### 4. Instale a React Native CLI

Instale a ferramenta de linha de comando do React Native globalmente:

```bash
npm install -g react-native-cli
```

ou

```bash
yarn global add react-native-cli
```

### 5. Configure o Android Studio

1. Baixe e instale o [Android Studio](https://developer.android.com/studio).
2. Durante a instalação, certifique-se de incluir as seguintes opções no instalador do Android Studio:

   - Android SDK
   - Android SDK Platform
   - Android Virtual Device

3. Abra o Android Studio, vá para `Configurações` > `Appearance & Behavior` > `System Settings` > `Android SDK`.
4. Em `SDK Platforms`, selecione a versão mais recente do Android (recomendo Android 10.0).
5. Em `SDK Tools`, certifique-se de que as seguintes opções estão marcadas:

   - Android SDK Build-Tools
   - Android Emulator
   - Android SDK Platform-Tools
   - Android SDK Tools

6. Configure um dispositivo virtual (AVD) em `Configurações` > `System Settings` > `Android SDK` > `SDK Tools` > `Android Virtual Device`.

### 6. Configure o ambiente de desenvolvimento

Siga as instruções do [guia de configuração do ambiente React Native](https://reactnative.dev/docs/environment-setup) para configurar seu ambiente para desenvolvimento iOS ou Android.

### 7. Clone o repositório

Clone o repositório do projeto para sua máquina local:

```bash
git clone https://github.com/usuario/nome-do-repositorio.git
```

### 8. Navegue até o diretório do projeto

Acesse o diretório onde o projeto foi clonado:

```bash
cd nome-do-repositorio
```

### 9. Instale as dependências do projeto

Instale todas as dependências necessárias para o projeto. Você pode usar npm ou Yarn:

```bash
npm install
```

ou

```bash
yarn install
```

depois:

```bash
npm install @react-native-async-storage/async-storage
```

```bash
npm install @fortawesome/react-native-fontawesome @fortawesome/fontawesome-svg-core react-native-svg
```

```bash
npm install @fortawesome/free-solid-svg-icons
```

### 10. Execute o aplicativo

#### Para iOS (emulador)

Certifique-se de ter o Xcode instalado e configurado corretamente.

1. Navegue até o diretório `ios`:

   ```bash
   cd ios
   ```

2. Instale as dependências do CocoaPods:

   ```bash
   pod install
   ```

3. Volte para o diretório principal:

   ```bash
   cd ..
   ```

4. Execute o aplicativo no simulador iOS:

   ```bash
   npx react-native run-ios
   ```

#### Para iOS (Físico)

1. **Conecte o dispositivo iOS ao computador com um cabo USB.**

2. **Abra o Xcode e abra o projeto iOS:**

   - Navegue até o diretório `ios` do projeto e abra o arquivo `.xcworkspace` no Xcode.

3. **Selecione o dispositivo na lista de dispositivos no Xcode:**

   - No Xcode, selecione o dispositivo físico conectado na lista de dispositivos na parte superior da tela.

4. **Certifique-se de que o aplicativo esteja configurado para execução no dispositivo:**

   - Em `Signing & Capabilities`, configure a assinatura do código se necessário.

5. **Execute o aplicativo no dispositivo:**

   - Clique no botão `Run` (ícone de play) no Xcode para compilar e instalar o aplicativo no dispositivo físico.

#### Para Android (emulador)

Certifique-se de ter um emulador Android configurado ou um dispositivo físico conectado.

1. Execute o aplicativo no emulador Android ou dispositivo físico:

   ```bash
   npx react-native run-android
   ```

#### Para Android (Físico)

1. **Ative o modo de desenvolvedor e a depuração USB no seu dispositivo Android:**

   - Vá para `Configurações` > `Sobre o telefone`.
   - Toque em `Número da versão` várias vezes até ver uma mensagem informando que você agora é um desenvolvedor.
   - Volte para `Configurações` e acesse `Opções do desenvolvedor`.
   - Ative a `Depuração USB`.

2. **Conecte o dispositivo ao computador com um cabo USB.**

3. **Certifique-se de que o dispositivo esteja visível para o Android Debug Bridge (ADB):**

   - Execute o seguinte comando no terminal para verificar se o dispositivo está listado:

     ```bash
     adb devices
     ```

   - Se o dispositivo estiver listado, você está pronto para continuar. Caso contrário, verifique a conexão USB e as permissões de depuração.

4. **Execute o aplicativo no dispositivo:**

   - No diretório do projeto, execute o seguinte comando:

     ```bash
     npx react-native start
     ```

   - Em outro terminal, execute o seguinte comando:

     ```bash
     npx react-native run-android
     ```

---

Esses passos garantirão que você possa testar e executar o aplicativo diretamente em seu dispositivo físico.

### 11. Uso do aplicativo

- Para adicionar uma nova tarefa, digite o texto na caixa de entrada e pressione o botão "+".
- Para editar uma tarefa existente, toque na tarefa na lista e faça as alterações desejadas.
- Para marcar uma tarefa como concluída, toque na tarefa na lista.
- As tarefas são salvas localmente e persistem mesmo após o fechamento do aplicativo.

## Estrutura do Projeto

- `App.tsx`: Componente principal do aplicativo.
- `components/Tarefa.tsx`: Componente para exibição de uma tarefa.
- `functions/taskFunctions.ts`: Funções utilitárias para adicionar, editar e completar tarefas.
- `services/storageService.ts`: Funções para salvar e carregar tarefas usando `AsyncStorage`.

## Contribuindo

Se você deseja contribuir para o projeto, sinta-se à vontade para enviar um Pull Request. Certifique-se de seguir as diretrizes de estilo e manter o código limpo e bem documentado.

1. **Faça um fork do repositório**.
2. **Crie uma branch para sua feature**:

   ```bash
   git checkout -b minha-feature
   ```

3. **Faça as mudanças desejadas e commit**:

   ```bash
   git commit -am 'Adiciona nova feature'
   ```

4. **Envie a branch para o repositório remoto**:

   ```bash
   git push origin minha-feature
   ```

5. **Abra um Pull Request**.

---
