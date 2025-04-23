import { useQuery } from '@tanstack/react-query';
import client from '../client';
import { API_ENDPOINTS } from '../client/endpoints';
export const useUsers = () => {
  const { isPending, data, error, isError } = useQuery({
    queryKey: [API_ENDPOINTS.GET_ALL_USERS],
    queryFn: client.Users.get_all,
    staleTime: 0,
  });    

  return {
    isPending,
    isError,
    error,
    data: data?.data??[],
  };
};
export const useWishlist = () => {
    const { isPending, data, error, isError } = useQuery({
      queryKey: [API_ENDPOINTS.Get_logged_user_wishlist],
      queryFn: client.Wishlist.get_all, 
      staleTime: 0,
    });    
  
    return {
      isPending,
      isError,
      error,
      data: data?.data ?? [],
    };
  };
export const useAdvertisement = () => {
  const { isPending, data, error, isError } = useQuery({
    queryKey: [API_ENDPOINTS.GET_ALL_ADVERTISEMENTS],
    queryFn: client.Advertisement.get_all,
    staleTime: 0,
  });    

  return {
    isPending,
    isError,
    error,
    data: data?.data??[],
  };
};


