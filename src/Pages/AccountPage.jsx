import { useLoaderData } from 'react-router-dom';
import ForumTemplate from '../Components/ForumComponents/ForumTemplate.jsx';
export default function AccountPage() {
  const { forums } = useLoaderData();
  

const handleOnReadForum = () => {};
  const handleDeleteForum = () => {};

  const forumListItems = forums.map(({ forumId, title, context }) => {
    return(
      <ForumTemplate
      key={forumId}
      initialData={{ forumId, title, context }}
      initialIsEditing={false}
      onDeleteForum={() => handleDeleteForum(forumId)}
      onReadForum={() => handleOnReadForum(forumId)}

  />
    )
  });

  return (
    <>
      {forumListItems}
    </>

  )
}