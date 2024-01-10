import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NewForumForm from '../Components/NewForumForm.jsx';
import axios from 'axios';

export default function BrowseForumsPage() {
  const navigate = useNavigate();
  const { forums } = useLoaderData();
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNewForum = async (event, formData) => {
    event.preventDefault();

    const res = await axios.post('/api/forums/new', formData);

    if (res.data.success) {
      handleClose();
      navigate('/');
    } else {
      setAlert(true)
    }
  };

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
    alert ?
      <Container fluid>
        <Alert variant="danger" onClose={() => setAlert(false)} dismissible>
          <Alert.Heading>Something didn't work. Try again!</Alert.Heading></Alert>
        <h1>Browse</h1>
        <Button onClick={handleShow}>Create New Forum</Button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Forum Creation</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <NewForumForm />
          </Offcanvas.Body>
        </Offcanvas>
        {forumListItems}
      </Container> 
      :

      <Container fluid>
        <h1>Browse</h1>
        <Button onClick={handleShow}>Create New Forum</Button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Forum Creation</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <NewForumForm handleFormCreation={handleNewForum}/>
          </Offcanvas.Body>
        </Offcanvas>
        {forumListItems}
      </Container>

  )
}