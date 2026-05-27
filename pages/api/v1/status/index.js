function status(request, response) {
  response.status(200).json({ Chave: "Hello World" });
}

export default status;
