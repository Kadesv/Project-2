import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';

import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';


export default function ForumDetailPage() {
  const [open, setOpen] = useState(false);

  const [commentValue, setCommentValue] = useState('')
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
        <Button
          variant="info"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Comment      </Button>
        <Collapse in={open}>
          <form id="example-collapse-text">
            <FloatingLabel
              controlId="floatingInput"
              label="What would you like to say?"
              className="mb-3"
            >
              <Form.Control type="text"
                placeholder="comment"
                value={commentValue}
                onChange={(e) => setCommentValue(e.target.value)}
              />
            </FloatingLabel>
          </form>
        </Collapse>
      </Card>
      <ListGroup>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>

    </Container>
  )
}