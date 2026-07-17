const NotFoundPage = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
      <a
        href="/"
        className="px-6 py-3 bg-royalpurple text-white rounded-sm hover:bg-purple-700 transition-colors"
      >
        Go Home
      </a>
    </div>
  </div>
);

export default NotFoundPage;