import axios from 'axios';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Root from './Pages/Root.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import IndexPage from './Pages/IndexPage.js';
import LoginPage from './Pages/LoginPage.jsx';
import YourCommentPage from './Pages/YourCommentPage.jsx';
import YourForumsPage from './Pages/YourForumPages.jsx';
import BrowseForumsPage from './pages/BrowseForumsPage.jsx';
import HomeNav from './Pages/HomeNav.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      {/* Homepage */}
      <Route index element={<HomeNav />} />

      {/* Browse Forums */}
      <Route
        path="browse"
        element={<BrowseForumsPage />}
        loader={async () => {
          const res = await axios.get('/api/browse');
          return { forums: res.data };
        }}
      />

      {/* Forum detail pages */}
      <Route
        path="Forums/:forumId"
        element={<ForumDetailPage />}
        loader={async ({ params }) => {
          const res = await axios.get(`/api/Forums/${params.ForumId}`);
          return { Forum: res.data };
        }}
      />

      {/* Login */}
      <Route path="login" element={<LoginPage />} />

      {/* Your recent activity */}
      <Route
        path="mycomments"
        element={<YourCommentPage />}
        loader={async () => {
          const res = await axios.get('/api/comments');
          return { comments: res.data };
        }}
      />
    </Route>,
  ),
);

export default function App() {
  return <RouterProvider router={router} />;
}

