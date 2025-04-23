import { toast } from 'react-toastify';
import client from '../client';
import { API_ENDPOINTS } from '../client/endpoints';
import { useCustomMutation } from './use-custom-mutation';

export const useAddressMutation = (type) => {
  const isAdd = type === 'add';
  const isRemove = type === 'remove';

  return useCustomMutation({
    mutationFn: (payload) => {
      if (isAdd) return client.addresses.addAddress(payload);
      if (isRemove) return client.addresses.removeAddress(payload.id);
    },

    queryToInvalidate: {
      queryKey: [API_ENDPOINTS.Get_logged_user_addresses],
    },

    onSuccess: () => {
      toast.success(isAdd ? 'Address added' : 'Address removed');
    },

    onError: (error) => {
      toast.error(error?.message || 'Address error');
    },
  });
};
