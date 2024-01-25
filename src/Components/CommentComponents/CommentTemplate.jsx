import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState } from 'react';

export default function CommentTemplate(props,{ initialData }) {
    const [open, setOpen] = useState(false);

    
    return (
        open ?
        <>
            <ListGroup.Item
                className="d-flex justify-content-between align-items-center"
                key={initialData.commentId}
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{initialData.username}</div>
                    {initialData.commentText}
                </div>
            </ListGroup.Item>
            <ListGroup.Item>
            <FloatingLabel
                    controlId="floatingInput"
                    label="Type here..."
                    className="mb-3"
                >
                    <Form.Control type="text"
                        placeholder="Type here..."
                        value={subCommentValue}
                        onChange={(e) => setSubCommentValue(e.target.value)}
                    />
                </FloatingLabel>
            </ListGroup.Item>

        </>
            :

            <ListGroup.Item
                className="d-flex justify-content-between align-items-center"
                key={initialData.commentId}
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{initialData.username}</div>
                    {initialData.commentText}
                </div>
                <Button onClick={props.onReplyClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="24px"
                        viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 
                    0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 
                    2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 
                    2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 
                    2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>

                </Button >

            </ListGroup.Item>

    )
}