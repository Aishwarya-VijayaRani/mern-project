import api from './axios';

export const itemApi = {
  getItems: () => api.get('/items'),
  getItem: (id) => api.get(`/items/${id}`),
  createItem: (item) => api.post('/items', item),
  updateItem: (id, item) => api.put(`/items/${id}`, item),
  deleteItem: (id) => api.delete(`/items/${id}`),
  getStats: () => api.get('/items/stats'),
};