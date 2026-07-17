import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MainLayout from "./components/website/universalFiles/MainLayout";
import { websiteRoutes } from "./routes/websiteRoutes.jsx";

// ── 404 ──
const NotFoundPage = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
      <a
        href="/"
        className="px-6 py-3 bg-navy text-white rounded-sm hover:bg-navy/90 transition-colors"
      >
        Go Home
      </a>
    </div>
  </div>
);

// ── Router defined OUTSIDE the component so it's never recreated ──
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Website */}
      <Route path="/" element={<MainLayout />}>
        {websiteRoutes.map(({ path, element, index }) =>
          index ? (
            <Route key="index" index element={element} />
          ) : (
            <Route key={path} path={path} element={element} />
          )
        )}
      </Route>

      {/* Fallback */}
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

// ── App — no branding context, no loading gate, renders straight away ──
function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <RouterProvider router={router} />
    </>
  );
}

// ── Root wrapper — kept in case you add providers later (e.g. auth, cart) ──
export default function AppWrapper() {
  return <App />;
}