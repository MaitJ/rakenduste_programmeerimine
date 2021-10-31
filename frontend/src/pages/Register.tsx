import { PageHeader, Form, Input, Button, Alert} from "antd"
import React, {useState } from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";

interface User {
    email: string,
    firstName: string,
    lastName: string,
    password: string
}

interface RegisterResponse {
    message: string
}

interface SuccessAlert {
    show: boolean,
    message: string | null
}

const Register: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [passwordAlert, setPasswordAlert] = useState<boolean>(false);
    const [successAlert, setSuccessAlert] = useState<SuccessAlert>({
        show: false,
        message: null
    });

    const handleSubmit = async () => {
        const passwordsMatch = confirmPassword === password ? true : false;
        if (passwordsMatch) {

            const newUser: User = {
                email,
                firstName,
                lastName,
                password
            };

            const response = await Axios.post<RegisterResponse>("http://localhost:8081/api/auth/signup", newUser);

            setSuccessAlert({
                show: true,
                message: response.data.message
            });

        } else {
            setPasswordAlert(true);
        }
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
            <Form.Item label="First name" name="firstname" rules={[
                {
                    required: true,
                    message: 'Please input your first name!'
                }
            ]}>
                <Input onChange={(e) => setFirstName(e.target.value)}/>
            </Form.Item>
            <Form.Item label="Last name" name="lastname" rules={[
                {
                    required: true,
                    message: 'Please input your last name!'
                }
            ]}>
                <Input onChange={(e) => setLastName(e.target.value)}/>
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[
                {
                    required: true,
                    message: 'Please input your password!'
                }
            ]}>
                <Input.Password onChange={(e) => setPassword(e.target.value)}/>
            </Form.Item>
            <Form.Item label="Confirm password" name="confirmpassword" rules={[
                {
                    required: true,
                    message: 'Please input your password again!'
                }
            ]}>
                <Input.Password onChange={(e) => setConfirmPassword(e.target.value)}/>
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
                { passwordAlert && <Alert message="Passwords do not match" type="error" closable></Alert>}
                { successAlert.show && <Alert message={successAlert.message} type="success" closable></Alert>}
            </Form.Item>
        </Form>
        </>
    );
}

export default Register;