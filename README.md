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

[United Nations - World Economic Situation and Prospects (WESP)](https://www.un.org/development/desa/dpad/publication/world-economic-situation-and-prospects-2024/)

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

## Script de Coleta de Dados

O script `fetchWorldBankData()` foi desenvolvido para coletar dados do Banco Mundial para os países e indicadores selecionados. O script processa os dados país por país e ano por ano, armazenando-os em uma planilha do Google Sheets.
