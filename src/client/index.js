import { API_ENDPOINTS } from './endpoints';
import { HttpClient } from './http-client';

class Client {
  auth = {
    login: (input) => HttpClient.post(API_ENDPOINTS.LOGIN, input),
    signup: (input) => HttpClient.post(API_ENDPOINTS.signup, input),
    logout: () => HttpClient.get(API_ENDPOINTS.LOGOUT),
    forgotPassword: (input) => HttpClient.post(API_ENDPOINTS.Forgot_Password, input),
    verifyResetCode: (input) => HttpClient.post(API_ENDPOINTS.Verify_Reset_Code, input),
    resetPassword: (input) => HttpClient.put(API_ENDPOINTS.Reset_Password, input),
    verifyToken: (token) => HttpClient.post(API_ENDPOINTS.Verify_Token, { token }),
    getProfile: () => HttpClient.get(API_ENDPOINTS.GET_PROFILE),
    updatePassword: (input) => HttpClient.put(API_ENDPOINTS.Update_Logged_user_password, input),
    updateProfile: (data) => HttpClient.put(API_ENDPOINTS.Update_Logged_user_data, data),
  };

  users = {
    getAll: () => HttpClient.get(API_ENDPOINTS.GET_ALL_USERS),
  };

  wishlist = {
    addProduct: (product) => HttpClient.post(API_ENDPOINTS.Add_product_to_wishlist, product),
    removeProduct: (id) => HttpClient.delete(API_ENDPOINTS.Remove_product_from_wishlist(id)),
    getAll: () => HttpClient.get(API_ENDPOINTS.Get_logged_user_wishlist),
  };

  addresses = {
    add: (address) => HttpClient.post(API_ENDPOINTS.Add_address, address),
    remove: (id) => HttpClient.delete(API_ENDPOINTS.Remove_address(id)),
    getOne: (id) => HttpClient.get(API_ENDPOINTS.Get_specifi_caddress(id)),
    getAll: () => HttpClient.get(API_ENDPOINTS.Get_logged_user_addresses),
  };

  cart = {
    addProduct: (product) => HttpClient.post(API_ENDPOINTS.Add_Product, product),
    updateQuantity: (id, data) => HttpClient.put(API_ENDPOINTS.Update_Quantity(id), data),
    getCart: () => HttpClient.get(API_ENDPOINTS.Get_Logged_user_cart),
    removeItem: (id) => HttpClient.delete(API_ENDPOINTS.Remove_specific_cart_Item(id)),
    clearCart: () => HttpClient.delete(API_ENDPOINTS.Clear_user_cart),
  };

  orders = {
    createCashOrder: (id) => HttpClient.post(API_ENDPOINTS.Create_Cash_Order(id)),
    getAll: () => HttpClient.get(API_ENDPOINTS.get_All_Orders),
    getUserOrders: (id) => HttpClient.get(API_ENDPOINTS.get_User_Orders(id)),
    checkoutSession: (id, url) => HttpClient.get(API_ENDPOINTS.Checkout_session(id, url)),
  };

  categories = {
    getAll: () => HttpClient.get(API_ENDPOINTS.Get_All_Categories),
    getOne: (id) => HttpClient.get(API_ENDPOINTS.Get_specific_Categorie(id)),
  };

  subCategories = {
    getAll: () => HttpClient.get(API_ENDPOINTS.Get_All_SubCategories),
    getOne: (id) => HttpClient.get(API_ENDPOINTS.Get_specific_SubCategory(id)),
    getByCategory: (id) => HttpClient.get(API_ENDPOINTS.Get_All_SubCategories_On_Category(id)),
  };

  brands = {
    getAll: () => HttpClient.get(API_ENDPOINTS.Get_All_brands),
    getOne: (id) => HttpClient.get(API_ENDPOINTS.Get_specific_brand(id)),
  };

  products = {
    getAll: () => HttpClient.get(API_ENDPOINTS.Get_All_Products),
    getOne: (id) => HttpClient.get(API_ENDPOINTS.Get_specific_Product(id)),
  };
}


export default new Client();
