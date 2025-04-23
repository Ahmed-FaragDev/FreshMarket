import { toast } from 'react-toastify';
import client from '../client';
import { API_ENDPOINTS } from '../client/endpoints';
import { useCustomMutation } from './use-custom-mutation';

export const useOrderMutation = (type) => {
  const isCreateCashOrder = type === 'create';
  const isCheckout = type === 'checkout';

  return useCustomMutation({
    mutationFn: (payload) => {
      if (isCreateCashOrder) return client.orders.createCashOrder(payload.cartId);
      if (isCheckout) return client.orders.checkoutSession(payload.cartId, payload.url);
    },

    queryToInvalidate: {
      queryKey: [API_ENDPOINTS.get_All_Orders],
    },

    onSuccess: () => {
      toast.success(isCreateCashOrder ? 'Order created successfully' : 'Checkout session started');
    },

    onError: (error) => {
      toast.error(error?.message || 'Order error');
    },
  });
};
