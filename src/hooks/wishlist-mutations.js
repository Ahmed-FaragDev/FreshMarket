import { toast } from 'react-toastify';
import { API_ENDPOINTS } from '../client/endpoints';
import { useCustomMutation } from './use-custom-mutation';

export const useWishlistMutation = (type) => {
  const isAdd = type === 'add';

  return useCustomMutation({
    mutationFn: isAdd
      ? (product) => client.wishlist.addProduct(product)
      : (id) => client.wishlist.removeProduct(id),

    queryToInvalidate: {
      queryKey: [API_ENDPOINTS.Get_logged_user_wishlist],
    },

    onSuccess: () =>
      toast.success(isAdd ? 'Added' : 'Removed'),

    onError: (err) =>
      toast.error(err?.message || 'Error'),
  });
};
