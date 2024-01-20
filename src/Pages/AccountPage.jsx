import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { useLoaderData } from 'react-router-dom';

export default function AccountPage() {
  const { forums } = useLoaderData();


  const handleDeleteForum = () => {
    
  }

  const forumListItems = forums.map(({ forumId, title, context }) => (
    <Card style={{ display: 'flex', width: '65rem' }} key={forumId}>
      <Card.Title>{title}</Card.Title>
      <Card.Body>
        <Card.Text>
          {context}
        </Card.Text>
      </Card.Body>

      <Card.Footer>
        <Button href={`/forums/${forumId}`}
          variant='info'>Edit</Button>
        <Button href={`/forums/${forumId}`}
          variant='danger'>Delete</Button>
        <Button href={`/forums/${forumId}`}
          variant='primary'>Read More</Button>

      </Card.Footer>
    </Card>
  ));

  return (
    forumListItems.length > 0 ?
      <div>
        <h1>Your forums...</h1>
        {forumListItems}
      </div>
      :

      <>
        <h1>Looks like you don't have any forums yet.</h1>

      </>
  )
}