export const routes = {
  DASHBOARD: {
    path: "/",
    name: "Dashboard",
  },
  LOGIN: {
    path: "/login",
    name: "Login",
  },
  REGISTER: {
    path: "/register",
    name: "Register",
  },
  EDIT_PROFILE: {
    path: "/edit-profile",
    name: "Edit Profile",
  },
  PROFILE: {
    path: "/profile/:id",
    name: "Profile",
    parameterize: (id: number) => routes.PROFILE.path.replace(":id", `${id}`),    
  },
  PRODUCTS: {
    path: "/products",
    name: "Products",
  },
  PRODUCT: {
    path: "/product/:id",
    name: "Product",
    parameterize: (id: number) => routes.PRODUCT.path.replace(":id", `${id}`),
  },
  USER_PROFILE: {
    path: "/user/:id",
    name: "User Profile",
    parameterize: (id: number) => routes.USER_PROFILE.path.replace(":id", `${id}`),
  },
};
