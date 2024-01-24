import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from "react-bootstrap/InputGroup";
import Badge from "react-bootstrap/Badge";
import Collapse from 'react-bootstrap/Collapse';
import axios from "axios";
import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';


export default function ForumDetailPage() {
  const { forum, comments } = useLoaderData();
  const { title, context } = forum;
  const navigate = useNavigate();


  const handleNewComment = async (event, formData) => {
    event.preventDefault();
    const res = await axios.post('/api/comments/new', formData);
    setCommentValue('');
    if (res.data.success) {
      navigate(`/forums/${forum.forumId}`);
    } else {
      //alert
    }
  };


  const [commentValue, setCommentValue] = useState('');
  const [open, setOpen] = useState(false);


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

      <Form >
        <InputGroup className="mb-3">
          <Form.Floating >
            <Form.Control
              onFocus={() => setOpen(true)}
              onBlur={() => setOpen(false)}

              placeholder=""
              id="commentInput"
              value={commentValue}
              onChange={(e) => setCommentValue(e.target.value)}
            />
            <label htmlFor="commentInput">What would you like to say?</label>
          </Form.Floating>
          <Button variant="" id="button-addon2" type="submit"
            onClick={(e) => {
              handleNewComment(e, {
                commentText: commentValue,
                forumId: forum.forumId

              })
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="24px" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="send-Button">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>

          </Button>

        </InputGroup>

      </Form>

      <ListGroup>
        {commentListItems}
      </ListGroup>

    </Container>
  )
}