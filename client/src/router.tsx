import { createBrowserRouter, Outlet } from "react-router-dom";
import { AuthProvider } from "./context/auth-context";
import { NewChannel } from "./pages/channel/new";
import { Home } from "./pages/home";
import { AuthLayout } from "./pages/layouts/auth-layout";
import { RootLayout } from "./pages/layouts/root-layout";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";

export const router = createBrowserRouter([
  {
    element: <ContextWrapper />,
    children: [
      {
        path: "/",
        element: <RootLayout />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "/channel",
            children: [{ path: "new", element: <NewChannel /> }],
          },
        ],
      },
      {
        element: <AuthLayout />,
        children: [
          { path: "login", element: <Login /> },
          { path: "signup", element: <Signup /> },
        ],
      },
    ],
  },
]);

function ContextWrapper() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}
