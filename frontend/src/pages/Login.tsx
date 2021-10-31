import { PageHeader, Form, Input, Button, Alert } from "antd"
import React, { useContext, useState } from "react";
import Axios from 'axios';
import { AuthPayload } from "../store/actions";
import {Context} from '../store';
import {loginUser} from '../store/actions';
import { useHistory } from "react-router";


const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [, dispatch] = useContext(Context);
    const history = useHistory();

    const handleSubmit = async () => {
        const response = await Axios.post<AuthPayload>("http://localhost:8081/api/auth/login", {email, password})
        dispatch(loginUser(response.data));

        history.push('/');
    }

    return(
        <>
        <PageHeader title="Logi sisse"/>
        <Form name="basic" labelCol={{span: 4}} wrapperCol={{span: 16}} initialValues={{remember: true}} onFinish={handleSubmit}>
            <Form.Item label="Email" name="email" rules={[
                {
                    required: true,
                    message: 'Please input your email!'
                }
            ]}>
                <Input onChange={(e) => setEmail(e.target.value)}/>
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[
                {
                    required: true,
                    message: 'Please input your password!'
                }
            ]}>
                <Input.Password onChange={(e) => setPassword(e.target.value)}/>
            </Form.Item>
            <Form.Item
            wrapperCol={{
                offset: 4,
                span: 16
            }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
        </>
    );
}

export default Login;