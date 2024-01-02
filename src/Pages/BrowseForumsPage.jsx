import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function BrowseForumsPage() {
    return(
        <Container fluid>
        <Card style={{ width: '65rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button href="forums/:forumId"variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Container>
    )
}