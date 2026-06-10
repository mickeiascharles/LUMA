# LUMA - Entrega Final | Residencia em Software & IA

Projeto desenvolvido para a empresa **Ideia Space**.

## 1. Link dos arquivos do MVP AI-Powered

- Repositorio do codigo-fonte: **[preencher com o link do GitHub/Drive]**
- Repositorio de prompts com rastreabilidade: **[preencher com o link do GitHub/Drive]**
- Versao local do MVP: `assets/index.html`
- Backend basico: pasta `backend/`, executado com `npm start`

## 2. O que e o LUMA

O LUMA e uma experiencia educacional digital para apresentar o ecossistema de satelite educacional da Ideia Space. O prototipo mostra a proposta de aprendizagem por missao, inspecao de componentes do nanossatelite, fluxo de telemetria, placas, sensores e aplicacoes em laboratorio. A versao atual tambem possui um backend basico em Node.js para servir o site e expor dados demonstrativos do produto.

## 3. Como executar localmente

1. Baixe ou clone o repositorio.
2. Rode `npm start` na raiz do projeto.
3. Acesse `http://localhost:3000`.
4. Garanta que as pastas `assets/images` e `assets/plates` fiquem preservadas.

Opcionalmente, sem backend, ainda e possivel abrir o arquivo estatico:

```bash
cd assets
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## 4. Rotas do backend

- `GET /api/health`: verifica se a API esta ativa.
- `GET /api/luma`: retorna dados gerais do projeto.
- `GET /api/mission`: retorna etapas da jornada educacional.
- `GET /api/components`: lista componentes demonstrativos do satelite educacional.
- `GET /api/components/:id`: consulta um componente especifico.
- `GET /api/telemetry`: retorna telemetria simulada para demonstracao.
- `GET /api/ai/status`: informa que a IA em tempo real esta planejada, mas ainda nao ativa.

## 5. Variaveis de ambiente e chaves de IA

A versao atual do MVP possui backend, mas **nao consome API de IA em tempo de execucao**. Portanto, nao ha variaveis obrigatorias como `OPENAI_API_KEY` ou chaves de provedores externos para rodar a entrega atual.

Variavel opcional do backend:

```env
PORT=3000
```

Para uma evolucao futura com assistente LUMA dinamico, recomenda-se criar um arquivo `.env` com:

```env
OPENAI_API_KEY=coloque_sua_chave_aqui
AI_MODEL=gpt-4.1-mini
AI_TEMPERATURE=0.2
```

## 6. Documentos incluidos nesta entrega

- `docs/01_documentacao_ia_e_prompts.md`
- `docs/02_repositorio_prompts_rastreabilidade.md`
- `docs/03_prompts_que_falharam.md`
- `docs/Entrega_Final_LUMA_Documentacao_Atualizada.docx`
- `apresentacao/LUMA_Pitch_Final_Atualizado.pptx`

## 7. Observacao sobre escopo

Como o prototipo atual possui backend basico, mas nao possui chamada real para modelos de IA, a IA foi tratada como apoio de desenvolvimento, engenharia de prompt, estruturacao de conteudo e proposta de evolucao do produto. A rota `/api/ai/status` explicita esse limite e mostra o ponto preparado para uma versao AI-powered completa.
