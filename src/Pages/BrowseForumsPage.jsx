import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useLoaderData } from 'react-router-dom';

export default function BrowseForumsPage() {
  const { forums } = useLoaderData();


  const forumListItems = forums.map(({ forumId, title, context }) => (
    <Card style={{ width: '65rem' }} key={forumId}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {context}
        </Card.Text>
        <Button href={`/forums/${forumId}`} variant='primary'>Read More</Button>
      </Card.Body>
    </Card>
  ));

  return (
    <Container fluid>
      <h1>Browse</h1>
      {forumListItems}
    </Container>
  )
}