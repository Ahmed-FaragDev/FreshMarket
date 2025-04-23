// prettier-ignore
export const API_ENDPOINTS = {
  //Auth
  LOGIN: `/auth/signin`,
  signup: `/auth/signup`,
  LOGOUT: `/logout`,
  Forgot_Password: `/auth/forgotPasswords`,
  Verify_Reset_Code: `/auth/verifyResetCode`,
  Update_Logged_user_password: `/users/changeMyPassword`,
  Reset_Password: `/auth/resetPassword`,
  Update_Logged_user_data: `/users/updateMe/`,
  Verify_Token: `/auth/verifyToken`,
  GET_PROFILE: `/getProfile`,
  //User
  GET_ALL_USERS: `/users`,
  //Wishlist
  Add_product_to_wishlist: `/wishlist`,
  Remove_product_from_wishlist: (id) => `/wishlist/${id}`,
  Get_logged_user_wishlist: `/wishlist`,
  //User Addresses
  Add_address: `/addresses`,
  Remove_address: (id) => `/addresses/${id}`,
  Get_specifi_caddress: (id) => `/addresses/${id}`,
  Get_logged_user_addresses: `/addresses`,
  // Cart
  Add_Product: `/cart`,
  Update_Quantity: (id) => `/cart/${id}`,
  Get_Logged_user_cart: `/cart`,
  Remove_specific_cart_Item: (id) => `/cart/${id}`,
  Clear_user_cart: `/cart`,
  //Orders
  Create_Cash_Order: (id) => `/orders/${id}`,
  get_All_Orders: `/orders/`,
  get_User_Orders: (id) => `/user/${id}`,
  Checkout_session: (id, url) => `/orders/checkout-session/${id}?${url}`,
  // Categories
  Get_All_Categories: `/categories`,
  Get_specific_Categorie: (id) => `/categories/${id}`,
  // SubCategories
  Get_All_SubCategories: `/subcategories`,
  Get_specific_SubCategory: (id) => `/subcategories/${id}`,
  Get_All_SubCategories_On_Category: (id) => `/categories/${id}/subcategories`,
  // Brands
  Get_All_brands: `/brands`,
  Get_specific_brand: (id) => `/brands/${id}`,
  // Products
  Get_All_Products: `/products`,
  Get_specific_Product: (id) => `/products/${id}`,
};
