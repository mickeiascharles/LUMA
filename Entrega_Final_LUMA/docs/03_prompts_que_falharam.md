# Exemplos de Prompts que Falharam e Ajustes

## Falha 1 - Prompt muito aberto

**Prompt inicial:**

```text
Explique o satelite educacional da Ideia Space para alunos.
```

**Problema observado:**
A resposta ficou generica, com pouca conexao com sensores, telemetria, placas e aprendizagem por missao. Tambem abriu espaco para a IA inventar caracteristicas nao confirmadas.

**Ajuste feito:**

```text
Explique o satelite educacional da Ideia Space para alunos usando apenas estes elementos: placas modulares, sensores, programacao embarcada, telemetria Wi-Fi/USB-C e aprendizagem por missao. Nao invente especificacoes tecnicas. Termine com uma atividade pratica de laboratorio.
```

**Como a equipe validou:**
A resposta foi comparada com o conteudo do MVP e aprovada quando citou apenas elementos presentes no projeto, manteve linguagem didatica e incluiu uma atividade coerente.

## Falha 2 - Prompt de telemetria sem restricao

**Prompt inicial:**

```text
Analise estes dados do satelite e diga o que esta errado.
```

**Problema observado:**
A IA poderia diagnosticar falhas sem dados suficientes, criando alucinacoes tecnicas ou recomendacoes inseguras.

**Ajuste feito:**

```text
Analise estes dados de telemetria do satelite educacional. Separe a resposta em: leituras observadas, hipoteses possiveis, dados faltantes e pergunta investigativa para alunos. Se nao houver dados suficientes para diagnostico, diga que nao e possivel concluir.
```

**Como a equipe validou:**
Foram testados exemplos com dados incompletos. A resposta passou quando evitou conclusoes definitivas, informou dados faltantes e transformou a incerteza em atividade investigativa.

## Aprendizado geral

Prompts educacionais para o LUMA precisam de contexto fechado, limites explicitos e criterio de validacao. A IA melhora a experiencia quando atua como tutora guiada; ela se torna arriscada quando recebe pedidos abertos de diagnostico ou especificacao tecnica sem base documental.

Na versao atual, o backend deixa a futura integracao preparada por meio da rota `/api/ai/status`, mas ainda nao executa chamadas reais para modelos de IA. Isso foi mantido de forma proposital para evitar declarar uma capacidade que ainda nao foi homologada.
