import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import { useNavigate, useLoaderData, useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NewForumForm from '../Components/NewForumForm.jsx';
import axios from 'axios';

export default function BrowseForumsPage() {
  const navigate = useNavigate();
  const { forums } = useLoaderData();
  const signStatus = useOutletContext();

  //state
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);
  const setAlertFalse = () => setAlert(false);
  //functions to change state
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //creating new forum
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


  const forumListItems = forums.map(({ user, forumId, title, context }) => (
    <Card style={{ display: 'flex', width: '65rem' }} key={forumId}>
      <Card.Title>{title}</Card.Title>
      <Card.Body>
        <Card.Text>
          {context}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Subtitle>{user.username}</Card.Subtitle>
        <Button href={`/forums/${forumId}`}
          variant='primary'>Read More</Button>
      </Card.Footer>
    </Card>
  ));

  return (
    alert ?
      <Container >
        <h1>Browse</h1>
        <Button onClick={handleShow}>Create New Forum</Button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Forum Creation</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Alert variant="warning" onClose={() => setAlert(false)} dismissible>
              <Alert.Heading>Please fill in all sections.</Alert.Heading></Alert>
            <NewForumForm signStatus={signStatus} setAlertFalse={setAlertFalse}/>
          </Offcanvas.Body>
        </Offcanvas>
        {forumListItems}
      </Container>

      :

      <Container >
        <h1>Browse</h1>
        <Button onClick={handleShow}>Create New Forum</Button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Forum Creation</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <NewForumForm handleFormCreation={handleNewForum} />
          </Offcanvas.Body>
        </Offcanvas>
        {forumListItems}
      </Container>

  )
}