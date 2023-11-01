const criar_item = `
Comando **\`/criar_item\`**:

Através desse comando é possível adicionar um novo item.

O comando contém as seguintes opções:

- **\`nome_do_item\`**
    - **Campo obrigatório;**
    - Pode ser qualquer palavra.

- **\`quantidade_inicial\`**
    - **Campo opcional**: caso não seja informado o valor padrão será **zero**;
    - Pode ser qualquer número.
    - Exemplo de formatos: **1000** ou **1000,00** ou **1000.00**;
    :warning: Para selecionar um campo de informação opcional utilize o **tab**.


:no_entry: Não é possível criar mais de um item com o mesmo nome.

Um item criado conterá as seguintes informações:
- Nome do item;
- Quantidade atual em estoque;
- Usuário criou esse item;
- Data da criação do item;
- Último usuário a atualizar algum dado;
- Data da última atualização;
- Lista de registros contendo: ação, usuário, data e quantidade(se couber);
`;

const adicionar = `
Comando **\`/adicionar\`**:

Através desse comando é possível adicionar quantidades de um determinado item no estoque.

O comando contém as seguintes opções:

- **\`quantidade\`**
    - **Campo obrigatório;**
    - Pode ser qualquer número.
    - Exemplo de formatos: **1000** ou **1000,00** ou **1000.00**.

- **\`nome_do_item\`**
    - **Campo obrigatório;**
    - Deve ser o nome de um item cadastrado no estoque.
`;

const remover = `
Comando **\`/remover\`**:

Através desse comando é possível remover uma quantidade de um determinado item no estoque.

O comando contém as seguintes opções:

- **\`quantidade\`**
    - **Campo obrigatório;**
    - Pode ser qualquer número.
    - Exemplo de formatos: **1000** ou **1000,00** ou **1000.00**;
    :warning: Não é possível remover uma quantidade maior do que está registrado no estoque.

- **\`nome_do_item\`**
    - **Campo obrigatório;**
    - Deve ser o nome de um item cadastrado no estoque.
`;

const trocar_nome = `
Comando **\`/trocar_nome\`**:

Através desse comando é possível alterar o nome de um item.

O comando contém as seguintes opções:

- **\`item_antigo\`**
    - **Campo obrigatório;**
    - Deve ser o nome de um item cadastrado no estoque.

- **\`novo_nome\`**
    - **Campo obrigatório;**
    - Novo nome que será dado ao item.
    :warning: Não é possível utilizar o mesmo nome de um item já cadastrado.
`;

const deletar_item = `
Comando **\`/deletar_item\`**:

Através desse comando é possível deletar um item.

:no_entry: **ATENÇÃO: Essa ação não pode ser desfeita!** :no_entry: 

O comando contém as seguintes opções:

- **\`nome_do_item\`**
    - **Campo obrigatório;**
    - Deve ser o nome de um item cadastrado no estoque.
`;

const consultar_item = `
Comando **\`/consultar_item\`**:

Através desse comando é possível ter um resumo ou informações detalhadas de um determinado item.

O comando contém as seguintes opções:

- **\`nome_do_item\`**
    - **Campo obrigatório;**
    - Deve ser o nome de um item cadastrado no estoque.

- **\`detalhes\`**
    - **Campo obrigatório**:
    - É possível escolher entre **sim** ou **não**;
    - **Caso não**: será retornado apenas as informações **nome do item** e **quantidade**;
    - **Caso sim**: será retornado todas as informações completas dos intens.
    - Para mais detalhes olhe em \`/ajuda criar_item\`.

:warning: O Discord tem um limite de 2000 caracteres por mensagem. Portanto caso as informações ultrapassem esse limite, os dados serão enviados em um arquivo de texto.
`;

const consultar_estoque = `
Comando **\`/consultar_estoque\`**:

Através desse comando é possível ter um resumo de todos os itens cadastrados no estoque.

Serão retornados: **nome dos itens** e suas respectivas **quantidades**.

O comando não possui opções adicionais
`;

const relatorio = `
Comando **\`/relatorio\`**:

Através desse comando é possível ter um relatório completo dos seus itens em estoque.
Contento todas as informações de todos os itens.

:warning: O relatório será enviado em um arquivo de texto.

Para mais detalhes sobre quais informações serão retornadas olhe em \`/ajuda criar_item\`.

O comando não possui opções adicionais
`;

const helpMessages = {
  criar_item,
  adicionar,
  remover,
  trocar_nome,
  deletar_item,
  consultar_item,
  consultar_estoque,
  relatorio,
};

export default helpMessages;
