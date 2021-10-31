import { Input, Button, Alert} from 'antd';
import axios from 'axios';
import {useContext, useState} from 'react';
import { Context } from '../store';

const AddPost: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);

    const [state, , fetchPosts] = useContext(Context);

    const handleSubmit = async (e: React.SyntheticEvent)=> {
        e.preventDefault();
        if (state.auth.user) {
            const newPost = {
                firstName: state.auth.user.firstName,
                lastName: state.auth.user.lastName,
                data: title
            };
            const response = await axios.post<boolean>("http://localhost:8081/api/post/add", newPost);
            if (response) {
                await fetchPosts();
                setShowSuccessAlert(true);
            }
        }
    };

    return(
        <>
        <h1>Postituste lisamine</h1>
            <form onSubmit={handleSubmit}>
                <Input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                <Button type="primary" htmlType="submit">Lisa post</Button>
                {showSuccessAlert && <Alert message="Postitus edukalt lisatud" closable type="success"></Alert>}
            </form>
        </>
    );
};

export default AddPost;