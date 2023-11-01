import views from "../views/index.js";

const getHelp = (command) => {
  switch (command) {
    case "criar_item":
      return views.helpMessages.criar_item;
    case "adicionar":
      return views.helpMessages.adicionar;
    case "remover":
      return views.helpMessages.remover;
    case "trocar_nome":
      return views.helpMessages.trocar_nome;
    case "deletar_item":
      return views.helpMessages.deletar_item;
    case "consultar_item":
      return views.helpMessages.consultar_item;
    case "consultar_estoque":
      return views.helpMessages.consultar_estoque;
    case "relatorio":
      return views.helpMessages.relatorio;

    default:
      break;
  }
};

const helpServices = {
  getHelp,
};

export default helpServices;
