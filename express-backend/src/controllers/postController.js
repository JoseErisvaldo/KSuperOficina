const postService = require('../services/postService');

exports.getPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.json({ data: posts });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching posts', error: err.message });
  }
};

// Adicione outras ações de controle conforme necessário (create, update, delete)
