import axios from 'axios';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
//Pages imports
import Root from './Pages/Root.jsx';
//AppPages imports
import ErrorPage from './Pages/AppPages/ErrorPage.jsx';
import SignPage from './Pages/AppPages/SignPage.jsx';
import BrowseForumsPage from './pages/AppPages/BrowseForumsPage.jsx';
import ForumDetailPage from './Pages/AppPages/ForumDetailPage.jsx';
//AccountPage imports
import YourCommentPage from './Pages/AccountPages/YourCommentPage.jsx';
import YourForumsPage from './Pages/AccountPages/YourForumsPages.jsx';
import AccountPage from './Pages/AccountPages/AccountPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      {/* Homepage */}
      <Route index element={<BrowseForumsPage />} />

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
        path="forums/:forumId"
        element={<ForumDetailPage />}
        loader={async ({ params }) => {
          const res = await axios.get(`/api/Forums/${params.ForumId}`);
          return { Forum: res.data };
        }}
      />

      <Route path='/account' element={<AccountPage />} />

      {/* Login */}
      <Route path="/sign" element={<SignPage />} />

      <Route path="yourforums" element={<YourForumsPage />} />

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

