import PostPicture from "./PostPicture";
import PostText from "./PostText";
import PostTitle from "./PostTitle";
import PostUser from "./PostUser";

export default function PostTemplate() {
    return (
    <>
    <PostUser/>
    <PostTitle/>
    <PostPicture/>
    <PostText/>
    </>
    )
}