import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from "react-bootstrap/InputGroup";
import SubmitButton from "../Components/SubmitButton";
import axios from "axios";
import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey
  );

  return (
    <Button
      variant="outline"
      onClick={decoratedOnClick}
    >
      {children}
    </Button>
  );
}

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

  const handleNewSubComment = async (event, formData) => {
    event.preventDefault();
    const res = await axios.post('/api/comments/newsub', formData);
    setSubCommentValue('');
    if (res.data.success) {
      navigate(`/forums/${forum.forumId}`);
    } else {
      //alert
    }
  };

  const [commentValue, setCommentValue] = useState('');
  const [subCommentValue, setSubCommentValue] = useState('');

  const [open, setOpen] = useState(false);
  const [subCommentOpen, setsubCommentOpen] = useState(false);

  const subCommentList = (subComment, user) => {
    return (
      subComment.map((props) => {
        const { username } = user;
        return (

          <ListGroup.Item
            key={props.subCommentId}
          >
            <div className="ms-5 me-auto">
              <div className="fw-bold">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="20px" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

                {username}</div>
              {props.subCommentText}
            </div>
          </ListGroup.Item>

        )
      }))
  };


  const commentListItems = comments.map(({ user, commentText, commentId, subComments }) => (
    <Accordion.Item
      className="list-group"
      eventKey={`${commentId}`}
      key={commentId}
    >
      <ListGroup
      >
        <ListGroup.Item
          variant="info"
          className="d-flex">
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="20px" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>

              {user.username}</div>
            {commentText}
          </div>
          <CustomToggle eventKey={`${commentId}`}
            data-id={commentId} variant="outline-info">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </CustomToggle >
        </ListGroup.Item>
        {/* accordion on each comment */}
        <Accordion.Collapse eventKey={`${commentId}`}>
          <div>
            {/* subComment form */}
            <Form >
              <InputGroup className="mb-3">
                <Form.Floating >
                  <Form.Control
                    onFocus={() => setsubCommentOpen(true)}
                    onBlur={() => setsubCommentOpen(false)}

                    placeholder=""
                    id="subCommentInput"
                    value={subCommentValue}
                    onChange={(e) => setSubCommentValue(e.target.value)}
                  />
                  <label htmlFor="subCommentInput">What would you like to say?</label>
                </Form.Floating>
                <SubmitButton
                  open={subCommentOpen}
                  handleNewComment={(e) => {
                    handleNewSubComment(e, {
                      subCommentText: subCommentValue,
                      commentId: commentId
                    })
                  }}
                />
              </InputGroup>
            </Form>
            {subCommentList(subComments, user)}

          </div>
        </Accordion.Collapse>
      </ListGroup>
    </Accordion.Item>
  ));


  return (
    <Container >
      <Card
        style={{ height: 'fit-content', minHeight: '25vh' }}>
        <Card.Body>
          <Card.Title variant="info">{title}</Card.Title>
          <Card.Text>
            {context}
          </Card.Text>
        </Card.Body>
      </Card>
      {/*comment form */}
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
      <Accordion>
        {commentListItems}
      </Accordion>
    </Container>
  )
}