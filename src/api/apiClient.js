import { useAuth0 } from '@auth0/auth0-react';

export const useApiClient = () => {
  const { getAccessTokenSilently } = useAuth0();

  const callApi = async (endpoint, options = {}) => {
    try {
      const token = await getAccessTokenSilently();
      
      const response = await fetch(`http://localhost:5004${endpoint}`, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${token}`,
        },
      });
      
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  };

  return { callApi };
}; 