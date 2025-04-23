import { useQuery } from '@tanstack/react-query';
import client from '../client';
import { useAuth } from '../Components/auth/context';
import { API_ENDPOINTS } from '../client/endpoints';

export const useMe = () => {
  const { isAuthorized } = useAuth();

  const { isPending, data, isError, error } = useQuery({
    queryKey: [API_ENDPOINTS.GET_PROFILE],
    queryFn: client.auth.getProfile,
    gcTime: 0,
  });

  return {
    isPending,
    isError,
    error,
    isAuthorized,
    me: data?.user,
  };
};
