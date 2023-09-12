import { routes } from "../constants/routes";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  DashboardPage,
  EditProfilePage,
  LoginPage,
  ProductPage,
  UserPage,
} from "../pages";
import { NotFoundPage } from "../pages/NotFoundPage";
import { HeaderLayout } from "../layouts/HeaderLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<HeaderLayout/>}>
        <Route path={routes.DASHBOARD.path} element={<DashboardPage />} />
        <Route
          path={routes.LOGIN.path || routes.REGISTER.path}
          element={<LoginPage />}
        />
        <Route path={routes.EDIT_PROFILE.path} element={<EditProfilePage />} />
        <Route path={routes.PROFILE.path} element={<UserPage />} />
        <Route path={routes.PRODUCT.path} element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </>
  )
);

function Router() {
  return <RouterProvider router={router} />;
}

export { Router };
