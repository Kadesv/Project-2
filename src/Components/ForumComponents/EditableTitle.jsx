import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export default function EditableTitle({ isEditing, value, onValueChange }) {
    return (
        !isEditing ?

            <>
                <Card.Title>
                    {value}
                </Card.Title>
            </>

            :

            <Card.Title>
            <Form.Control 
                value={value}
                onChange={(e) => onValueChange(e.target.value)}
            />
            </Card.Title>
    )
}