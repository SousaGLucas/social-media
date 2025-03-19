# Arquitetura em camadas

Organiza aplicativos em três camadas de computação física e lógica:

![](D:\learning-logs\pattens\architecture\diagrams\layers.png)

- **Camada de apresentação:** é a interface com o usuário e a camada de comunicação do aplicativo, na qual o usuário final interage com o aplicativo. Sua principal finalidade é exibir e coletar informações do usuário.


- **Camada do aplicativo:** também conhecida como a camada lógica ou a camada do meio, é a parte central do aplicativo. Nessa camada, as informações coletadas na camada de apresentação são processadas, algumas vezes em relação a outras informações da camada de dados, usando a lógica de negócios que é um conjunto específico de regras de negócios. A camada do aplicativo pode também incluir, excluir ou modificar os dados da camada de dados.


- **Camada de dados:** por vezes chamada de camada de banco de dado, é na qual as informações processadas pelo aplicativo são armazenadas e gerenciadas.


Em um aplicativo de três camadas, toda a comunicação passa pela camada do aplicativo. A camada de apresentação e a camada de dados não podem se comunicar diretamente entre si.

Referência: https://www.ibm.com/br-pt/topics/three-tier-architecture

A mesma abordagem pode ser aplicada na camada da aplicação. A fim de organizar o código de forma modular, escalável e de fácil manutenção, camadas também podem ser aplicadas:

![](D:\learning-logs\pattens\architecture\diagrams\layers-application.png)

- **Controller:** É responsável pela interação com o cliente, como receber requisições HTTP, processar entradas e retorná-las ao cliente. Lida com a comunicação com o exterior, como APIs ou interfaces de usuário, mas não contém lógica de negócios complexa.


- **Service:** Contém a lógica de negócios da aplicação. É responsável por orquestrar as operações entre o controller e o repositório, encapsulando a lógica de processamento de dados e a implementação dos requisitos da aplicação.


- **Repository:** Lida com a persistência de dados, ou seja, acessa o banco de dados ou qualquer outro sistema de armazenamento. Ela é responsável por realizar as operações de leitura e escrita nos dados, abstraindo o acesso ao armazenamento de dados do restante da aplicação.


Essa arquitetura é uma forma de separação de responsabilidades (SRP – Single Responsibility Principle), facilitando o desenvolvimento e a manutenção, pois cada camada tem uma função bem definida.
