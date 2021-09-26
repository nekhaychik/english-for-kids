const base = 'http://localhost:3000';

const categories = `${base}/api/categories`;
const cards = `${base}/api/cards`;

export const getCategories = () => async () => {
  const response = await fetch(`${categories}`, {
    method: 'GET',
  });
  return await response.json();
};

export const getCategory = async (id: number) => (await fetch(`${categories}/${id}`)).json();

export const createCategory = async (body: { name: string; amount: 0; }) => (await fetch(categories, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
})).json();

export const deleteCar = async (id: number) => (await fetch(`${categories}/${id}`, { method: 'DELETE' })).json();

export const updateCar = async (id: number, body: { name: string; amount: 0; }) => (await fetch(`${categories}/${id}`, {
  method: 'PUT',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
})).json();
