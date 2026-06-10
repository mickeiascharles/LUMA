# Repositorio de Prompts com Rastreabilidade

## Objetivo

Este documento organiza a rastreabilidade dos prompts usados ou planejados para o LUMA. A recomendacao e manter estes registros em uma pasta `prompts/` no GitHub ou Drive, com versoes datadas e justificativa de alteracao.

## Estrutura recomendada

```text
prompts/
  001-system-luma.md
  002-explicacao-componente.md
  003-analise-telemetria.md
  004-validacao-output.md
  changelog-prompts.md
```

## Registro de versoes

| ID | Prompt | Versao | Status | Motivo da alteracao | Validacao |
|---|---|---:|---|---|---|
| P-001 | Sistema do assistente LUMA | 1.0 | Proposto | Definir personalidade, escopo e limites de seguranca | Revisao humana |
| P-002 | Explicacao de componente | 1.0 | Proposto | Padronizar resposta educacional curta | Teste com componentes do kit |
| P-003 | Analise de telemetria | 1.0 | Proposto | Evitar analise vaga e exigir dados faltantes | Teste com exemplos JSON |
| P-004 | Validador de output | 1.0 | Proposto | Detectar alucinacao tecnica e respostas fora do escopo | Revisao por checklist |
| P-005 | Status de IA no backend | 1.0 | Implementado | Explicitar que a IA real ainda nao esta ativa no MVP | Teste da rota `/api/ai/status` |

## Changelog sugerido

### 2026-06-10 - Versao 1.0

- Criado prompt de sistema do LUMA.
- Criados templates para explicacao de componentes e analise de telemetria.
- Definidas regras para nao inventar especificacoes tecnicas.
- Registrado que a versao atual do MVP possui backend basico, mas nao faz chamadas reais a APIs de IA.
- Adicionada rota `/api/ai/status` para dar transparencia sobre o estado da camada AI-powered.

## Criterios de aceite dos prompts

- A resposta precisa citar limites quando faltar contexto.
- A resposta precisa manter linguagem educacional.
- A resposta nao pode inventar valores eletricos, sensores, pinagens ou procedimentos.
- A resposta deve gerar acao didatica: explicacao, experimento, pergunta investigativa ou proximo passo.
- A resposta deve ser revisavel por professor, mentor ou responsavel tecnico.
