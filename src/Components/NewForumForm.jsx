import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function NewForumForm({handleFormCreation}) {
    const [titleValue, setTitleValue] = useState('');
    const [contextValue, setContextValue] = useState('');

    return (

        <Form className="newForumForm"onSubmit={(e) => {
            handleFormCreation(e, {
                title: titleValue,
                context: contextValue,
            })
        }}>
            <FloatingLabel
                controlId="floatingInput"
                label="Title"
                className="mb-3"
            >
                <Form.Control type="text"
                    placeholder="Title"
                    value={titleValue}
                    onChange={(e) => setTitleValue(e.target.value)}
                />
            </FloatingLabel>

            <FloatingLabel
                controlId="floatingContext"
                label="Context"
            >
                <Form.Control 
                className="newForumContext"
                as="textarea" rows={15}
                    type="text"
                    placeholder="Context"
                    value={contextValue}
                    onChange={(e) => setContextValue(e.target.value)}
                />
            </FloatingLabel>
            <Button
                className='mb-3'
                type='submit'>Submit</Button>

        </Form>
    )
}