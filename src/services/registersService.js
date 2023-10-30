import Register from "../models/registerSchema.js";

const create = (action, user, quantity = 0) => {
  const register = new Register({ action, quantity, user });

  return register;
};


const registerService = {
  create,
};

export default registerService;
