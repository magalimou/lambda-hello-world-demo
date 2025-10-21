exports.handler = async (event) => {
  console.log("Lambda ejecutada correctamente=?=))");
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda! 🚀'),
  };
  return response;
};
