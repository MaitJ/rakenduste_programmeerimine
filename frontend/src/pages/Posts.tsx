import {Button, Space, Table, Modal, Input, Alert } from 'antd';
import axios from 'axios';
import React, { useContext, useEffect, useState} from 'react';
import {Context} from '../store'
import { removePost } from '../store/actions';
import {Post} from '../store/reducer';

const { confirm } = Modal;

const Posts: React.FC = () => {
    const [isEditModalVisible, setIsEditModalVisible] = useState<boolean>();
    const [editablePostId, setEditablePostId] = useState<string>("");
    const [editedText, setEditedText] = useState<string>("");
    const [deleteAlert, setDeletedAlert] = useState<boolean>(false);
    const [editAlert, setEditAlert] = useState<boolean>();
    const [, dispatch, fetchPosts] = useContext(Context);

    const deletePost = async (postId: string) => {
        const response = await axios.delete(`http://localhost:8081/api/post/delete/${postId}`);
        if (response.data){
            dispatch(removePost(postId));
            setDeletedAlert(true);
        }
    }

    const editPost = async () => {
        if (state.auth.user) {
            const editedPost = {
                firstName: state.auth.user.firstName,
                lastName: state.auth.user.lastName,
                data: editedText
            }
            const response = await axios.put<boolean>(`http://localhost:8081/api/post/update/${editablePostId}`, editedPost);
            if (response.data) {
                fetchPosts();
                setEditAlert(true);
            }
        }
    }

    const showDeleteConfirm = (postId: string) => {
        confirm({
            title: "Are you sure you want to delete this post?",
            onOk() {
                deletePost(postId);
            }
        })
    }

    const showEditModal = (post: Post) => {
        setEditablePostId(post._id);
        setEditedText(post.data);
        setIsEditModalVisible(true);
    }

    const handleEditOk = () => {
        editPost();
        setIsEditModalVisible(false);
        setEditablePostId("");
        setEditedText("");
    }

    const handleEditCancel = () => {
        setIsEditModalVisible(false);
        setEditablePostId("");
        setEditedText("");
    }

    const columns = [
        {
            title: 'Post',
            dataIndex: 'data',
            key: 'post'
        },
        {
            title: 'Created by',
            key: 'created',
            render: (record: Post) => {
                return(record.firstName + " " + record.lastName)
            }
        },
        {
            title: 'When',
            dataIndex: 'createdAt',
            key: 'when'
        },
        {
            title: 'Action',
            key: 'action',
            render: (record: Post) => {
                return(
                <Space size="middle">
                    <Button type="default" onClick={() => showEditModal(record)}>Edit</Button>
                    <Button type="default" onClick={() => showDeleteConfirm(record._id)}>Delete</Button>
                </Space>
                )
            }
        }
    ];

    const [state] = useContext(Context);

    useEffect(() => {
    }, [state.posts])

    return(
        <>
            {editAlert && <Alert message="Successfully edited the post" type="success" closable onClose={() => setEditAlert(false)}></Alert>}
            {deleteAlert && <Alert message="Deleted the post" type="warning" closable onClose={() => setDeletedAlert(false)}></Alert>}
            <h1>Postitused</h1>
            <Table columns={columns} dataSource={state.posts.data}/>
            <Modal title="Edit post" visible={isEditModalVisible} onOk={handleEditOk} onCancel={handleEditCancel}>
                <label>Post text:</label>
                <Input title="post-text" onChange={(e) => setEditedText(e.target.value)} value={editedText}/>
            </Modal>
        </>
    );
}

export default Posts;