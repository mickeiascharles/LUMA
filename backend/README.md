# Backend LUMA

Backend basico em Node.js, sem dependencias externas, criado para apoiar a entrega do MVP LUMA.

## Como rodar

Na raiz do projeto:

```bash
npm start
```

Depois acesse:

- Site: http://localhost:3000
- Saude da API: http://localhost:3000/api/health
- Dados do projeto: http://localhost:3000/api/luma
- Componentes: http://localhost:3000/api/components
- Telemetria demonstrativa: http://localhost:3000/api/telemetry
- Status de IA: http://localhost:3000/api/ai/status

## Observacao sobre IA

A rota `/api/ai/status` deixa documentado que a IA em tempo real ainda nao esta ativa nesta versao. Isso evita declarar uma integracao inexistente e mostra claramente onde uma evolucao futura pode ser conectada.
