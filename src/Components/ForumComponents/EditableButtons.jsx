import Button from "react-bootstrap/Button";

export default function EditableButtons(props) {
    return (
       !props.isEditing ?
            <>
                <Button onClick={props.onEditClick}
                    variant='info'>Edit</Button>
                <Button onClick={props.onReadClick}
                    variant='primary'>Read More</Button>
            </>

            :

            <>
                <Button onClick={props.onSaveClick}
                    variant='info'>Save</Button>
                <Button onClick={props.onDeleteClick}
                    variant='danger'>Delete</Button>
                <Button onClick={props.onReadClick}
                    variant='primary'>Read More</Button>
            </>

    )
}