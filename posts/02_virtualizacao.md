---
icon: edit
date: 2023-04-14 20:40:00.00 -3
tag:
  - vituralizacao
category:
  - aula
order: 1
---

# Vituralizacao

## Execução de Aplicativos em um Sistema Operacional

Para entender como um aplicativo é executado em um sistema operacional, primeiro é necessário entender como um sistema operacional funciona. Um sistema operacional é responsável por gerenciar os recursos de um computador, como memória, processador e dispositivos de entrada e saída. Ele é o intermediário entre o hardware do computador e os programas que são executados nele.

Quando um aplicativo é executado em um sistema operacional, ele é carregado na memória do computador. O sistema operacional aloca um espaço de memória para o aplicativo e carrega o código executável do aplicativo naquele espaço de memória. Em seguida, o sistema operacional executa o código do aplicativo, instrução por instrução, até que o aplicativo seja concluído ou o usuário o encerre.

Durante a execução do aplicativo, ele pode precisar acessar outros recursos do computador, como arquivos em disco ou dispositivos de rede. O sistema operacional fornece uma interface para o aplicativo acessar esses recursos de forma segura e controlada.

## Execução de Aplicativos em um Ambiente Virtualizado

Em um ambiente virtualizado, um aplicativo é executado em um ambiente isolado que é separado do sistema operacional hospedeiro. Isso permite que o aplicativo seja executado em um ambiente que é configurado de maneira específica para o aplicativo, sem afetar o sistema operacional hospedeiro ou outros aplicativos que estão sendo executados nele.

Um ambiente virtualizado é criado usando um software de virtualização, que é instalado no sistema operacional hospedeiro. O software de virtualização cria um ambiente virtualizado que inclui seu próprio sistema operacional, que é instalado em uma imagem de disco virtual. Essa imagem de disco virtual contém todos os arquivos necessários para o sistema operacional, bem como para o aplicativo que será executado nele.

O aplicativo é instalado dentro do ambiente virtualizado e é executado dentro desse ambiente. O aplicativo só tem acesso aos recursos que foram alocados para ele dentro do ambiente virtualizado. Isso inclui recursos como memória, processador e dispositivos de entrada e saída. Qualquer tentativa do aplicativo de acessar recursos fora do ambiente virtualizado é bloqueada pelo software de virtualização.

## Tipos de Virtualização

Existem vários tipos de virtualização, cada um projetado para um conjunto específico de casos de uso. Os três principais tipos de virtualização são:

### Virtualização de Servidor
A virtualização de servidor é usada para criar vários servidores virtuais em um único servidor físico. Cada servidor virtual é isolado dos outros servidores virtuais e pode ter seu próprio sistema operacional, aplicativos e recursos de hardware. Isso permite que várias instâncias de um aplicativo sejam executadas em um único servidor, o que pode ajudar a reduzir os custos de hardware e melhorar a utilização dos recursos do servidor.

### Virtualização de Desktop
A virtualização de desktop é usada para criar desktops virtuais que podem ser acessados ​​por usuários de qualquer lugar. Cada desktop virtual é um ambiente virtualizado que inclui um sistema operacional e os aplicativos necessários para o usuário. Os usuários podem acessar seus desktops virtuais usando um cliente remoto, como um navegador da web ou um aplicativo de desktop remoto.

### Virtualização de Aplicativo

A virtualização de aplicativo é usada para criar um ambiente isolado para a execução de um único aplicativo. O aplicativo é executado em um ambiente virtualizado, separado do sistema operacional hospedeiro, o que garante que o aplicativo não afete outros aplicativos ou o sistema operacional. Isso pode ser útil para testar aplicativos ou para executar aplicativos que têm requisitos de sistema específicos.

Além desses três tipos principais de virtualização, existem outras formas de virtualização, incluindo a virtualização de armazenamento, a virtualização de rede e a virtualização de recursos. Cada uma dessas formas de virtualização é projetada para um conjunto específico de casos de uso e pode ajudar a melhorar a eficiência e a flexibilidade de um sistema de computador.
