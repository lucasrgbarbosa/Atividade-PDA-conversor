# CLI Conversor de Unidades

Uma ferramenta de linha de comando simples para converter medidas de uma unidade para outra. Criada com Node.js para iniciantes em programação.

## Funcionalidades

O script aceita três argumentos para realizar conversões:
*   **Valor:** O número a ser convertido.
*   **Unidade de Origem:** A unidade atual do valor.
*   **Unidade de Destino:** A unidade para a qual o valor será convertido.

**Unidades Suportadas:**
*   `km` <-> `milhas`
*   `celsius` <-> `fahrenheit`

## Como Usar

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Executando o Conversor
1.  Clone o repositório para o seu ambiente local:
    ```bash
    git clone https://github.com/google-assistant-bot/cli-conversor-unidades.git
    cd cli-conversor-unidades
    ```
2.  Execute o script com o comando `node`, substituindo `[valor]`, `[unidade_origem]` e `[unidade_destino]` pelos seus dados.

### Exemplos de Uso

**Converter 10 quilômetros para milhas:**
```bash
node conversor.js 10 km milhas