import axios from 'axios';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Root from './Pages/Root.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import SignPage from './SignFolder/SignPage.jsx';
import YourCommentPage from './Pages/AccountPages/YourCommentPage.jsx';
import YourForumsPage from './Pages/AccountPages/YourForumsPages.jsx';
import BrowseForumsPage from './pages/BrowseForumsPage.jsx';
import ForumDetailPage from './Pages/ForumDetailPage.jsx';
import AccountPage from './Pages/AccountPages/AccountPage.jsx';


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

