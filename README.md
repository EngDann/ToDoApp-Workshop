# 🇧🇷

# Aplicativo de Tarefas

Este é um elegante e funcional aplicativo de gerenciamento de tarefas, desenvolvido com React Native. Através deste aplicativo intuitivo, você pode facilmente adicionar novas tarefas, editar as existentes e marcar aquelas que foram concluídas. Além disso, o aplicativo garante que suas tarefas sejam salvas e carregadas localmente, oferecendo uma experiência contínua e eficiente.

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

## Bônus (como gerar o arquivo .apk)

Para gerar um arquivo .apk executável, você precisa assinar seu APK com uma chave de upload e configurar algumas opções no Gradle:

### Passo 1: Gerar uma Chave de Upload

1. **No Windows e Linux:**

   Na pasta raiz execute o comando:

   ```bash
   keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
   ```

   Isso gerará um arquivo `my-upload-key.keystore`.

2. **No macOS:**

   Primeiro, encontre o diretório do JDK com:

   ```bash
   /usr/libexec/java_home
   ```

   Navegue até o diretório e execute:

   ```bash
   sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
   ```

   Isso gerará o arquivo `my-upload-key.keystore`.

   **Importante:** Mantenha sua chave privada segura. Se perder a chave ou ela for comprometida, siga as instruções da [documentação do Android](https://developer.android.com/studio/publish/app-signing#lost-key) para recuperação.

### Passo 2: Configurar Variáveis do Gradle

1. **Coloque o arquivo `my-upload-key.keystore` na pasta `android/app` do seu projeto.**

2. **Adicione as variáveis de configuração ao arquivo `gradle.properties`:**

   - **No Linux/macOS:** Adicione no arquivo `~/.gradle/gradle.properties`.
   - **No Windows:** Adicione no arquivo `android/gradle.properties` ou crie um arquivo `~/.gradle/gradle.properties`.

   Adicione o seguinte conteúdo, substituindo as variáveis com suas informações:

   ```properties
   MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
   MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
   MYAPP_UPLOAD_STORE_PASSWORD=*****
   MYAPP_UPLOAD_KEY_PASSWORD=*****
   ```

### Passo 3: Configurar o Gradle para Assinatura

1. **Edite o arquivo `android/app/build.gradle`:**

   Adicione a configuração de assinatura no bloco `android`:

   ```gradle
   android {
       ...
       signingConfigs {
           release {
               if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                   storeFile file(MYAPP_UPLOAD_STORE_FILE)
                   storePassword MYAPP_UPLOAD_STORE_PASSWORD
                   keyAlias MYAPP_UPLOAD_KEY_ALIAS
                   keyPassword MYAPP_UPLOAD_KEY_PASSWORD
               }
           }
       }
       buildTypes {
           release {
               signingConfig signingConfigs.release
               minifyEnabled false
               proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
           }
       }
   }
   ```

### Passo 4: Gerar o APK

```gradle
cd android
./gradlew assembleRelease
```

Este comando cria um APK de release, que pode ser encontrado em `android/app/build/outputs/apk/release/`.

### Passo 5: Localizar a pasta e enviar para o celular

**1. Este comando cria um APK de release, que pode ser encontrado em `android/app/build/outputs/apk/release/`.**

**2. Envie o arquivo para o celular via google Drive ou da forma que preferir**

# 🇬🇧

# Task App

This is a sleek and functional task management application, developed with React Native. Through this intuitive app, you can effortlessly add new tasks, edit existing ones, and mark tasks as completed. Additionally, the app ensures that your tasks are saved and loaded locally, providing a seamless and efficient experience.

## Features

- Add new tasks.
- Edit existing tasks.
- Mark tasks as completed.
- Store tasks locally using `AsyncStorage`.
- User-friendly interface with scroll support and keyboard adjustment.

## Technologies

- **React Native**: Framework for building mobile apps.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **React Hooks**: For state management and side effects.
- **AsyncStorage**: For local data storage.
- **FontAwesome**: For interface icons.

## Prerequisites

Before you start, ensure you have the following installed on your machine:

- **Node.js** (recommended version: 14.x or later)
- **npm** (Node.js package manager) or **Yarn**
- **Watchman** (for macOS, can be installed via Homebrew)
- **React Native CLI** (React Native command-line tool)
- **Android Emulator** or **Xcode** (for iOS development)
- **Android Studio** (for Android development)

### Installation Steps

### 1. Install Node.js and npm

If you do not have Node.js installed, download and install the recommended version from the [official site](https://nodejs.org/).

### 2. Install Yarn (optional but recommended)

Yarn is an alternative to npm and can be installed globally using npm:

```bash
npm install -g yarn
```

### 3. Install Watchman (macOS only)

If you are using macOS, install Watchman using Homebrew:

```bash
brew install watchman
```

### 4. Install React Native CLI

Install the React Native command-line tool globally:

```bash
npm install -g react-native-cli
```

or

```bash
yarn global add react-native-cli
```

### 5. Set Up Android Studio

1. Download and install [Android Studio](https://developer.android.com/studio).
2. During installation, make sure to include the following options in the Android Studio installer:

   - Android SDK
   - Android SDK Platform
   - Android Virtual Device

3. Open Android Studio, go to `Settings` > `Appearance & Behavior` > `System Settings` > `Android SDK`.
4. In `SDK Platforms`, select the latest version of Android (recommended: Android 10.0).
5. In `SDK Tools`, ensure the following options are checked:

   - Android SDK Build-Tools
   - Android Emulator
   - Android SDK Platform-Tools
   - Android SDK Tools

6. Set up an Android Virtual Device (AVD) in `Settings` > `System Settings` > `Android SDK` > `SDK Tools` > `Android Virtual Device`.

### 6. Set Up Development Environment

Follow the instructions in the [React Native environment setup guide](https://reactnative.dev/docs/environment-setup) to set up your environment for iOS or Android development.

### 7. Clone the Repository

Clone the project repository to your local machine:

```bash
git clone https://github.com/user/repository-name.git
```

### 8. Navigate to the Project Directory

Access the directory where the project was cloned:

```bash
cd repository-name
```

### 9. Install Project Dependencies

Install all the necessary dependencies for the project. You can use npm or Yarn:

```bash
npm install
```

or

```bash
yarn install
```

Then:

```bash
npm install @react-native-async-storage/async-storage
```

```bash
npm install @fortawesome/react-native-fontawesome @fortawesome/fontawesome-svg-core react-native-svg
```

```bash
npm install @fortawesome/free-solid-svg-icons
```

### 10. Run the App

#### For iOS (Simulator)

Make sure you have Xcode installed and configured properly.

1. Navigate to the `ios` directory:

   ```bash
   cd ios
   ```

2. Install CocoaPods dependencies:

   ```bash
   pod install
   ```

3. Go back to the main directory:

   ```bash
   cd ..
   ```

4. Run the app on the iOS simulator:

   ```bash
   npx react-native run-ios
   ```

#### For iOS (Physical Device)

1. **Connect the iOS device to your computer with a USB cable.**

2. **Open Xcode and open the iOS project:**

   - Navigate to the `ios` directory of the project and open the `.xcworkspace` file in Xcode.

3. **Select the device in the list of devices in Xcode:**

   - In Xcode, select the connected physical device from the device list at the top of the screen.

4. **Ensure the app is set up for device deployment:**

   - In `Signing & Capabilities`, configure code signing if needed.

5. **Run the app on the device:**

   - Click the `Run` button (play icon) in Xcode to build and install the app on the physical device.

#### For Android (Emulator)

Ensure you have an Android emulator set up or a physical device connected.

1. Run the app on the Android emulator or physical device:

   ```bash
   npx react-native run-android
   ```

#### For Android (Physical Device)

1. **Enable developer mode and USB debugging on your Android device:**

   - Go to `Settings` > `About phone`.
   - Tap `Build number` several times until you see a message indicating that you are now a developer.
   - Go back to `Settings` and access `Developer options`.
   - Enable `USB debugging`.

2. **Connect the device to your computer with a USB cable.**

3. **Ensure the device is visible to Android Debug Bridge (ADB):**

   - Run the following command in the terminal to check if the device is listed:

     ```bash
     adb devices
     ```

   - If the device is listed, you are ready to proceed. If not, check the USB connection and debugging permissions.

4. **Run the app on the device:**

   - In the project directory, run the following command:

     ```bash
     npx react-native start
     ```

   - In another terminal, run:

     ```bash
     npx react-native run-android
     ```

---

These steps will ensure you can test and run the app directly on your physical device.

### 11. Using the App

- To add a new task, type the text in the input box and press the "+" button.
- To edit an existing task, tap on the task in the list and make the desired changes.
- To mark a task as complete, tap on the task in the list.
- Tasks are saved locally and persist even after the app is closed.

## Project Structure

- `App.tsx`: Main component of the app.
- `components/Task.tsx`: Component for displaying a task.
- `functions/taskFunctions.ts`: Utility functions for adding, editing, and completing tasks.
- `services/storageService.ts`: Functions for saving and loading tasks using `AsyncStorage`.

## Contributing

If you would like to contribute to the project, feel free to submit a Pull Request. Be sure to follow style guidelines and keep the code clean and well-documented.

1. **Fork the repository**.
2. **Create a branch for your feature**:

   ```bash
   git checkout -b my-feature
   ```

3. **Make your changes and commit**:

   ```bash
   git commit -am 'Add new feature'
   ```

4. **Push the branch to the remote repository**:

   ```bash
   git push origin my-feature
   ```

5. **Open a Pull Request**.

## Bonus (How to Generate the .apk File)

To generate an executable .apk file, you need to sign your APK with an upload key and configure some options in Gradle:

### Step 1: Generate an Upload Key

1. **On Windows and Linux:**

   In the root folder, run:

   ```bash
   keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
   ```

   This will generate a `my-upload-key.keystore` file.

2. **On macOS:**

   First, locate the JDK directory with:

   ```bash
   /usr/libexec/java_home
   ```

   Navigate to the directory and run:

   ```bash
   sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
   ```

   This will generate the `my-upload-key.keystore` file.

   **Important:** Keep your private key secure. If you lose the key or it is compromised, follow the [Android documentation](https://developer.android.com/studio/publish/app-signing#lost-key) for recovery.

### Step 2: Configure Gradle Variables

1. **Place the `my-upload-key.keystore` file in the `android/app` folder of your project.**

2. **Add the Gradle configuration variables to the `gradle.properties` file:**

   - **On Linux/macOS:** Add to `~/.gradle/gradle.properties`.
   - **On Windows:** Add to `android/gradle.properties` or create a `~/.gradle/gradle.properties` file.
     Add the following content, replacing the placeholders with your information:

   ```properties
   MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
   MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
   MYAPP_UPLOAD_STORE_PASSWORD=*****
   MYAPP_UPLOAD_KEY_PASSWORD=*****
   ```

### Step 3: Configure Gradle for Signing

1. **Edit the `android/app/build.gradle` file:**

   Add the signing configuration to the `android` block:

   ```gradle
   android {
       ...
       signingConfigs {
           release {
               if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                   storeFile file(MYAPP_UPLOAD_STORE_FILE)
                   storePassword MYAPP_UPLOAD_STORE_PASSWORD
                   keyAlias MYAPP_UPLOAD_KEY_ALIAS
                   keyPassword MYAPP_UPLOAD_KEY_PASSWORD
               }
           }
       }
       buildTypes {
           release {
               signingConfig signingConfigs.release
               minifyEnabled false
               proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
           }
       }
   }
   ```

### Step 4: Generate the APK

To generate the APK file, run the following commands in the terminal:

```bash
cd android
./gradlew assembleRelease
```

This command creates a release APK, which can be found in `android/app/build/outputs/apk/release/`.

### Step 5: Locate the APK and Transfer to Device

1. **The APK file will be located in `android/app/build/outputs/apk/release/`.**
2. **Transfer the APK file to your device via Google Drive or any other preferred method.**
