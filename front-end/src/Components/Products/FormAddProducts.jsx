import React, { useState } from 'react';
import { useCategoriesGet } from '../../Endpoints/Single/Categories/useCategoriesGet';
import { useSellersGet } from '../../Endpoints/Single/Sellers/useSellersGet';
import api from '../../Server/api';
import Loading from '../ui/loading';
import { Button } from '../ui/button';
import Alert from '../ui/alert';


export default function FormAddProduct() {
  const {categories, loading: loadingCategories} = useCategoriesGet();
  const {sellers, loading: loadingSellers} = useSellersGet();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category_id: '',
    ean: '',
    seller: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const formattedData = {
      name: formData.name,
      description: formData.description || null,
      category_id: formData.category ? parseInt(formData.category, 10) : null,
      price: formData.price ? parseFloat(formData.price) : null,
      ean: formData.ean || null, // Set null if not provided
      seller: formData.seller ? parseInt(formData.seller, 10) : null
    };
    if(formData.name.length < 1 || formData.description.length < 1 || formData.category.length < 1 || formData.price.length < 1 || formData.ean.length < 1 || formData.seller.length < 1) {
      console.log(formattedData)
      setLoading(true)
      setShowAlert(true);
      setAlertMessage({
        type: 'error',
        message: 'Preencha todos os campos obrigatórios.'
      });
      setTimeout(() => {
        setLoading(false)
        setShowAlert(false);
        setAlertMessage({
          type: '',
          message: ''
        });
      }, 3000);
      return;
    }

    try {
      const response = await api.post('/products', formattedData);
      if(response.status === 201) {
        setLoading(true)
        setShowAlert(true);
        setAlertMessage({
          type: 'success',
          message: 'Produto adicionado com sucesso.'
        });
        setTimeout(() => {
          setLoading(false)
          setShowAlert(false);
          setAlertMessage({
            type: '',
            message: ''
          });
          setFormData({
            name: '',
            description: '',
            price: '',
            category: '',
            ean: '',
            seller: ''
          });
        }, 3000);
      }
      
    } catch (error) {
      setLoading(true)
      setShowAlert(true);
      setAlertMessage({
        type: 'warning',
        message:`Erro ao adicionar produto. ${error.response.data.message}`
      });
      setTimeout(() => {
        setLoading(false)
        setShowAlert(false);
        setAlertMessage({
          type: '',
          message: ''
        });
      }, 3000);
      console.error('Error submitting form data:', error);
    }
  }
  return (
    <>
    {showAlert && (
      <Alert type={alertMessage.type} message={alertMessage.message} />
    )}
    
      <form onSubmit={handleSubmit} className="p-4 border rounded-lg bg-white shadow-md space-y-4">
         <div>
          <label htmlFor="ean" className="block text-sm font-medium text-gray-700">
            EAN
          </label>
          <input
            type="text"
            id="ean"
            name="ean"
            value={formData.ean}
            onChange={handleChange}
            placeholder="EAN do Produto"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nome do Produto
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nome do Produto"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Descrição
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Descrição do Produto"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Preço
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Preço do Produto"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Categoria
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Selecionar categoria</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="seller" className="block text-sm font-medium text-gray-700">
            Seller
          </label>
          <select
            id="seller"
            name="seller"
            value={formData.seller}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Selecionar seller</option>
            {sellers.map((seller) => (
              <option key={seller.id} value={seller.id}>
                {seller.name}
              </option>
            ))}
          </select>
        </div>
          
          <Button>
            {loading && <Loading /> }
            Adicionar Produto
          </Button>
            
      </form>
    </>
  );
}
