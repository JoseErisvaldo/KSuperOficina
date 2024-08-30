const postModel = require('../models/postModel');

const getAllPosts = async () => {
  return postModel.getAllPosts();
};

// Adicione outras funções de serviço conforme necessário

module.exports = {
  getAllPosts
};
