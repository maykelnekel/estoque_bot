import interactions from "./interactions/index.js";

const app = async () => {
  try {
    await interactions();
  } catch (error) {
    console.error(error);
  }
};

export default app;
