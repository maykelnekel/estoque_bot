import helpServices from "../services/helpServices.js";

const getHelp = (itr) => {
  try {
    const data = itr.data;
    const dataValues = {};

    for (const opt of data.options) {
      dataValues[opt.name] = opt.value;
    }

    const command = dataValues.comando;

    const res = helpServices.getHelp(command);
    return res;
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
};

const helpControllers = {
  getHelp,
};

export default helpControllers;
