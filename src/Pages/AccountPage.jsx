import { useLoaderData } from 'react-router-dom';
import ForumTemplate from '../Components/ForumComponents/ForumTemplate.jsx';
export default function AccountPage() {
  const { forums } = useLoaderData();
  
  const forumListItems = forums.map(({ forumId, title, context }) => {
    return(
      <ForumTemplate
      key={forumId}
      initialData={{ forumId, title, context }}
      initialIsEditing={false}

  />
    )
  });

  return (
    <>
      {forumListItems}
    </>
  )
}