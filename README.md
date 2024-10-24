# Análise de Acesso à Internet Global com Google Data Studio

Este projeto realiza uma análise comparativa do acesso à internet em países desenvolvidos, em desenvolvimento e menos desenvolvidos, utilizando o Google Data Studio (Looker Studio) como ferramenta de BI.

## Base de Dados

Este projeto utiliza dados do Banco Mundial, uma fonte confiável e pública de indicadores de desenvolvimento global. Especificamente, estamos usando os seguintes indicadores:

- Indivíduos usando a Internet (% da população)
- Assinaturas de banda larga fixa (por 100 pessoas)
- Assinaturas de celular (por 100 pessoas)
- PIB per capita (USD constante de 2015)

## Classificação dos Países

A classificação dos países é baseada no relatório "World Economic Situation and Prospects" das Nações Unidas. Esta classificação é atualizada anualmente e pode ser encontrada em:

[United Nations - World Economic Situation and Prospects (WESP)](https://www.un.org/development/desa/dpad/wp-content/uploads/sites/45/WESP_2024_Web.pdf)

Para os propósitos deste estudo:
- Países desenvolvidos correspondem às economias desenvolvidas conforme classificação da ONU.
- Países em desenvolvimento incluem as economias em transição e em desenvolvimento, excluindo os países menos desenvolvidos.
- Países menos desenvolvidos correspondem à categoria de Least Developed Countries (LDCs) da ONU.

## Países Selecionados e Justificativas

Nossa análise inclui 15 países, divididos em três categorias:

### 1. Países Desenvolvidos
- Estados Unidos (USA), Japão (JPN), Alemanha (DEU), Reino Unido (GBR), Canadá (CAN)

**Justificativa:** Representam economias avançadas com alta aplicação de internet e infraestrutura tecnológica bem estabelecida.

### 2. Países em Desenvolvimento
- China (CHN), Índia (IND), Brasil (BRA), México (MEX), Indonésia (IDN)

**Justificativa:** Grandes economias emergentes com populações significativas, passando por rápidas transformações digitais.

### 3. Países Menos Desenvolvidos
- Bangladesh (BGD), Etiópia (ETH), Tanzânia (TZA), Uganda (UGA), Nepal (NPL)

**Justificativa:** Seguem a classificação da ONU como "Least Developed Countries" (LDCs), enfrentando desafios significativos em termos de infraestrutura e desenvolvimento econômico.

## Instruções de utilização

Este repositório contém scripts para coletar e analisar dados.

### Passo 1: Configuração Inicial
1. Crie uma nova planilha no Google Sheets
2. Acesse o editor de scripts:
   - Clique em "Extensões" no menu superior
   - Selecione "Apps Script"

### Passo 2: Configuração dos Scripts
1. No editor de Apps Script, você precisará criar dois arquivos:
   - `WorldBankDataFetcher.gs`: Para coletar dados do Banco Mundial
   - `calculateMetrics.gs`: Para calcular as métricas de análise

2. Copie o código do `fetchWorldBankData()` para o arquivo `WorldBankDataFetcher.gs`
3. Copie o código do `calculateMetrics()` e funções relacionadas para o arquivo `calculateMetrics.gs`

### Passo 3: Coleta de Dados
1. No editor de Apps Script:
   - Selecione a função `fetchWorldBankData`
   - Clique no botão "Executar"
2. Na primeira execução:
   - Autorize o script a acessar sua planilha
   - Aceite as permissões solicitadas
3. Aguarde a conclusão da coleta de dados
   - Uma nova aba chamada "Internet Access Data" será criada
   - Os dados serão preenchidos automaticamente

### Passo 4: Cálculo das Métricas
1. Após a coleta dos dados:
   - Selecione a função `calculateMetrics`
   - Clique no botão "Executar"
2. Aguarde o processamento
   - Uma nova aba chamada "Metrics Results" será criada
   - As métricas calculadas serão preenchidas automaticamente
