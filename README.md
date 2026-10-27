# Receitas-Aleatórias
Site para você poder escolher uma receita nova e aleatória para fazer em casa.

Link: https://hugo-sa.github.io/Comida-do-Dia/


Fiz esse site no começo da faculdade, e voltei a ele apenas para relembrar alguns conceitos e porque senti a necessidade de melhorá-lo. Este projeto foi feito levando como referência uma das etapas do desafio proposto por FlorinPop17 (100-days-100-projects) desenvolvido com o objetivo de praticar o consumo de APIs REST utilizando JavaScript puro, além de reforçar conceitos de manipulação do DOM, requisições assíncronas e organização de uma aplicação web simples.

A aplicação utiliza a API pública TheMealDB para buscar receitas aleatórias e apresentá-las de forma dinâmica ao usuário. Ao clicar no botão, uma requisição é enviada para a API e, após receber a resposta, todas as informações da receita são renderizadas automaticamente na página, incluindo imagem, categoria, origem, ingredientes, modo de preparo e, quando disponível, um vídeo da receita no YouTube.

Embora seja um projeto relativamente pequeno, ele envolveu alguns desafios interessantes durante o desenvolvimento. O principal deles foi lidar com a estrutura da resposta da API. Os ingredientes e suas respectivas medidas não são retornados em um único array, mas distribuídos em até vinte pares de propriedades (strIngredient1, strMeasure1, strIngredient2, strMeasure2, etc.). Para resolver isso, foi necessário percorrer dinamicamente essas propriedades utilizando um laço de repetição e construir uma lista de ingredientes de forma automática, interrompendo o processo quando não houvesse mais dados disponíveis.

Outro ponto importante foi a criação do conteúdo da página. Em vez de deixar o HTML estático, toda a estrutura da receita é gerada em tempo de execução por meio do JavaScript, permitindo que diferentes receitas sejam exibidas sem necessidade de recarregar a página. Essa abordagem exigiu um cuidado maior na organização do código para manter a renderização clara e facilitar futuras modificações.

Também foi implementado o carregamento condicional do vídeo da receita. Nem todas as refeições possuem um link para o YouTube, portanto a aplicação verifica se essa informação está disponível antes de inserir o player na interface, evitando espaços vazios ou elementos desnecessários.

Durante a evolução do projeto, houve uma preocupação em melhorar tanto a organização do código quanto a experiência do usuário. Foi adicionado tratamento de erros com try/catch, garantindo que a aplicação responda de forma adequada caso a API esteja indisponível ou ocorra algum problema durante a requisição.

A interface também recebeu algumas melhorias. O layout foi reorganizado para destacar melhor as informações da receita, utilizando um cabeçalho mais chamativo, um card para agrupar todo o conteúdo da refeição, cores mais suaves inspiradas em aplicativos de culinária, bordas arredondadas e sombras discretas para proporcionar uma aparência mais moderna e agradável. Pequenos ajustes de alinhamento e espaçamento também contribuíram para melhorar a legibilidade dos ingredientes e do modo de preparo.

Além dos aspectos técnicos, este projeto serviu como um exercício de boas práticas de desenvolvimento, mantendo a separação entre estrutura (HTML), apresentação (CSS) e lógica (JavaScript), tornando o código mais organizado, reutilizável e fácil de manter.

Ao final do desenvolvimento, o projeto consolidou conhecimentos importantes sobre consumo de APIs, manipulação dinâmica do DOM, programação assíncrona, organização de código front-end e construção de interfaces web utilizando apenas tecnologias nativas, sem a utilização de frameworks.

## Como executar localmente

1. Clone o repositório: `git clone <url-do-repositório>`
2. Entre na pasta do projeto.
3. Abra o arquivo `index.html` no navegador (não é necessário instalar nada).
4. Clique em **Receita Nova!!** para sortear uma receita.
