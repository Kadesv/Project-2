import EditableTitle from "./EditableTitle";
import EditableText from "./EditableText";
import EditableButtons from "./EditableButtons";
import axios from "axios";
import { useState } from "react";
import Card from "react-bootstrap/Card";

export default function ForumTemplate({ initialData, initialIsEditing, onDeleteForum, onReadForum }) {


    const [isEditing, setIsEditing] = useState(initialIsEditing);
    const editMode = () => setIsEditing(true);

    const viewMode = async() => {
// make axios request to save

        const { data } = await axios.post(`/api/forums/save/${initialData.forumId}`, {
            title,
            context,
        });

        // if (!data.error) {
        //     setTitle(data.title);
        //     setImage(data.image);
        //     setcontext(data.context);
        // }

        setIsEditing(false);
    };
    const [title, setTitle] = useState(initialData.title);
    const [context, setcontext] = useState(initialData.context);


    return (
        <>
            <Card style={{ display: 'flex', width: '65rem' }} key={initialData.forumId} className="forumTemplate">
                <EditableTitle
                    value={title}
                    isEditing={isEditing}
                    onValueChange={setTitle}
                />

                <Card.Body>
                    <EditableText
                        value={context}
                        isEditing={isEditing}
                        onValueChange={setcontext}
                    />
                </Card.Body>

                <Card.Footer>
                    <EditableButtons
                        isEditing={isEditing}
                        onEditClick={editMode}
                        onSaveClick={viewMode}
                        onDeleteBlog={onDeleteForum}
                        onReadClick={onReadForum}
                    />
                </Card.Footer>
            </Card>
        </>
    )
}
