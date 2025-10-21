export const handler = async (event) => {
  console.log("Lambda ejecutada correctamente");
  return {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda! 🚀'),
  };
};

