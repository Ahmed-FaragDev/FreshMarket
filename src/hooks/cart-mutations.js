import { toast } from 'react-toastify';
import { API_ENDPOINTS } from '../client/endpoints';
import { useCustomMutation } from './use-custom-mutation';

export const useCartMutation = (type) => {
  const isAdd = type === 'add';
  const isUpdate = type === 'update';
  const isRemove = type === 'remove';
  const isClear = type === 'clear';

  return useCustomMutation({
    mutationFn: (payload) => {
      if (isAdd) return client.cart.addProduct(payload);
      if (isUpdate) return client.cart.updateQuantity(payload.id, payload.quantity);
      if (isRemove) return client.cart.removeProduct(payload.id);
      if (isClear) return client.cart.clearCart();
    },

    queryToInvalidate: {
      queryKey: [API_ENDPOINTS.Get_Logged_user_cart],
    },

    onSuccess: () => {
      toast.success(
        isAdd
          ? 'Added to cart'
          : isUpdate
          ? 'Quantity updated'
          : isRemove
          ? 'Removed from cart'
          : 'Cart cleared'
      );
    },

    onError: (error) => {
      toast.error(error?.message || 'Cart error');
    },
  });
};
