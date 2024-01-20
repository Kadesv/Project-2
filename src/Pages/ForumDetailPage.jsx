import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from "react-bootstrap/InputGroup";
import Badge from "react-bootstrap/Badge";
import axios from "axios";
import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';


export default function ForumDetailPage() {
  const { forum, comments } = useLoaderData();
  const { title, context } = forum;
  const navigate = useNavigate();
  const handleNewComment = async (event, formData) => {
    event.preventDefault();
    // console.log('hit', formData);
    const res = await axios.post('/api/comments/new', formData);
    setCommentValue('');
    if (res.data.success) {
     navigate(`/forums/${forum.forumId}`);      
    } else {
      console.log('fail');
    }
  };


  const [commentValue, setCommentValue] = useState('');

  const commentListItems = comments.map(({ user, commentText, commentId, subComments }) => (
    <ListGroup.Item
      className="d-flex justify-content-between align-items-start"
      key={commentId}
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{user.username}</div>
        {commentText}
      </div>
      <Button as={Badge} bg="primary" pill>
        reply
      </Button >
      
      
    </ListGroup.Item>
  ));

  return (
    <Container >
      <Card style={{ height: 'fit-content', minHeight: '25vh' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {context}
          </Card.Text>
        </Card.Body>
      </Card>

      <Form onSubmit={(e) => {
        handleNewComment(e, {
          commentText: commentValue,
          forumId: forum.forumId

        })
      }} >
        <InputGroup className="mb-3">
          <Form.Floating >
            <Form.Control
              placeholder=""
              id="commentInput"
              value={commentValue}
              onChange={(e) => setCommentValue(e.target.value)}
            />
            <label htmlFor="commentInput">What would you like to say?</label>
          </Form.Floating>
          <Button variant="outline-primary" id="button-addon2" type="submit">Send</Button>
        </InputGroup>
      </Form>

      <ListGroup>
        {commentListItems}
      </ListGroup>

    </Container>
  )
}