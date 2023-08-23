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
  PRODUCT: {
    path: "/product/:id",
    name: "Product",
    parameterize: (id: number) => routes.PRODUCT.path.replace(":id", `${id}`),
  },
};
