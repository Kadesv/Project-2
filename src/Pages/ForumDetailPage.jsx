import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from "react-bootstrap/InputGroup";
import Badge from "react-bootstrap/Badge";
import SubmitButton from "../Components/SubmitButton";
import axios from "axios";
import CommentTemplate from "../Components/CommentComponents/CommentTemplate.jsx";
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
      className="d-flex justify-content-between align-items-center"
      key={commentId}
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="20px" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>

          {user.username}</div>
        {commentText}
      </div>
      <Button variant="outline-info">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="20px"
          viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 
          1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 
          0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5
           3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 
           1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 
           2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 
           0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
        </svg>

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
          <SubmitButton
            open={open}
            handleNewComment={(e) => {
              handleNewComment(e, {
                commentText: commentValue,
                forumId: forum.forumId

              })
            }}
          />

        </InputGroup>

      </Form>

      <ListGroup>
        {commentListItems}
      </ListGroup>

    </Container>
  )
}