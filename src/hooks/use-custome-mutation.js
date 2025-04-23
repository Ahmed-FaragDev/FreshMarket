import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

export const useCustomMutation = ({
  mutationFn,
  queryToInvalidate,
  onSuccess,
  onError,
}) => {
  const queryClient = useQueryClient();

  const newSupplierMutation = useMutation({
    mutationFn: mutationFn,
    onSuccess(data) {
      if (queryToInvalidate) {
        const { queryKey } = queryToInvalidate;
        queryClient.invalidateQueries(queryKey);
      }
      onSuccess?.(data);
    },
    onError(error) {
      onError?.(error);
    },
  });

  return newSupplierMutation;
};