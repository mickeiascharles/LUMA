# Documentacao de Integracoes de IA e Engenharia de Prompt

## Contexto do projeto

O LUMA foi concebido como uma camada educacional para o ecossistema Ideia Space, conectando conceitos de engenharia espacial, satelites educacionais, sensores, telemetria e aprendizagem por missao. O MVP atual possui um frontend web e um backend basico em Node.js. O frontend apresenta o produto, a narrativa da experiencia e a exploracao visual dos componentes do satelite; o backend serve o site e expoe dados demonstrativos para a API.

## Papel da IA no desenvolvimento

A IA foi usada principalmente como ferramenta de apoio para acelerar a construcao do MVP e melhorar a qualidade da comunicacao do produto. Os usos principais foram:

- estruturacao da narrativa do produto e do pitch;
- organizacao de secoes da pagina e hierarquia de informacao;
- criacao e refinamento de textos institucionais e tecnicos;
- apoio na definicao de prompts para uma futura experiencia de assistente educacional;
- revisao de clareza, consistencia e aderencia ao contexto de engenharia espacial educacional.

## Backend implementado no MVP

Foi adicionado um backend basico sem dependencias externas, localizado em `backend/server.js`. Ele serve os arquivos da pasta `assets` e fornece rotas de API para demonstrar uma separacao minima entre frontend e servidor.

Rotas disponiveis:

- `GET /api/health`: status da API.
- `GET /api/luma`: informacoes gerais do LUMA.
- `GET /api/mission`: etapas da jornada educacional.
- `GET /api/components`: componentes demonstrativos.
- `GET /api/components/:id`: componente por identificador.
- `GET /api/telemetry`: telemetria simulada.
- `GET /api/ai/status`: status da futura camada de IA.

## Integracao de IA no MVP atual

A versao entregue nao possui chamada ativa a APIs de IA durante o uso. O backend inclui a rota `/api/ai/status` para documentar que a camada de IA em tempo real ainda esta planejada. Isso significa que nao ha consumo de tokens, custo por chamada ou dependencia de chave de API para demonstrar o prototipo.

## Integracao planejada para versao AI-powered

A evolucao natural do LUMA e transformar a experiencia em um assistente educacional capaz de responder duvidas sobre missoes, sensores, placas, telemetria e montagem do kit. A arquitetura sugerida e:

1. Usuario faz uma pergunta dentro da interface LUMA.
2. Backend recebe a pergunta, aplica validacao e recupera contexto do manual/kit.
3. Modelo de IA gera resposta com base no contexto permitido.
4. Sistema valida se a resposta esta dentro do escopo educacional.
5. Interface apresenta resposta, exemplos praticos e proximos passos.

## Prompt de sistema sugerido

```text
Voce e o LUMA, assistente educacional da Ideia Space. Responda como tutor tecnico para estudantes e professores que usam um satelite educacional em laboratorio. Use linguagem clara, objetiva e segura. Priorize explicacoes sobre sensores, telemetria, programacao embarcada, placas, energia, comunicacao e aprendizagem por missao. Se a pergunta pedir informacao fora do material fornecido ou envolver risco fisico/eletrico, avise a limitacao e recomende consulta ao instrutor ou manual oficial. Nao invente especificacoes tecnicas.
```

## Template de prompt para explicacao de componente

```text
Contexto do componente:
- Nome: {{nome_do_componente}}
- Subsistema: {{subsistema}}
- Funcao: {{funcao}}
- Dados disponiveis: {{dados}}

Tarefa:
Explique para um aluno do ensino tecnico/superior o que este componente faz, como ele participa da missao educacional e qual experimento simples pode ser realizado com ele. Responda em ate 180 palavras e inclua um cuidado de uso.
```

## Template de prompt para telemetria

```text
Voce recebera uma leitura de telemetria do satelite educacional.
Dados: {{telemetria_json}}
Objetivo didatico: {{objetivo}}

Analise os dados, destaque possiveis anomalias e sugira uma pergunta investigativa para os alunos. Se os dados forem insuficientes, diga exatamente o que falta.
```

## Processo de qualidade dos outputs

A validacao recomendada para respostas de IA no LUMA inclui:

- limitar o contexto a documentos e especificacoes aprovadas pela equipe;
- exigir que a IA indique quando nao possui dados suficientes;
- testar perguntas de alunos, professores e visitantes;
- revisar respostas tecnicas com responsavel de hardware/educacao;
- bloquear respostas que inventem tensoes, pinagens, limites eletricos ou procedimentos de risco;
- manter historico dos prompts e ajustes.

## Limites identificados

A equipe nao deve delegar integralmente a IA respostas sobre seguranca eletrica, pinagem, alimentacao, montagem fisica ou diagnostico de falhas de hardware sem validacao humana. Esses pontos precisam de manual oficial, testes e homologacao.
