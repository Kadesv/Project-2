import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useLoaderData } from 'react-router-dom';


export default function ForumDetailPage() {


  const { 
    forum: { title, context }, 
  } = useLoaderData();


  return (
    <Container fluid>
      <Card style={{ width: '95vw', height: '50vh' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {context}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}