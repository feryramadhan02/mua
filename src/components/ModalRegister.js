import { Form, Input, Button } from "antd";
import Swal from "sweetalert2";

import 'assets/style/ModalRegister.scss';

const ModalRegister = (props) => {

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 25,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 0,
            span: 0,
        },
    };

    const onFinish = async (values) => {
        if (values.password.length <= 7) {
            Swal.fire({
                icon: 'error',
                text: 'Password minimal 8 character'
            })
        } else {
            await props.change(true)
            await Swal.fire({
                icon: 'success',
                text: 'Berhasil Register'
            })
            props.close(false)
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };


    return (
        <>
            <Form
                {...layout}
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="nama"
                    rules={[
                        {
                            required: true,
                            message: "Masukkan nama anda!",
                        },
                    ]}
                >
                    <Input placeholder="Nama" />
                </Form.Item>

                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Masukkan email anda!",
                        },
                    ]}
                >
                    <Input type="email" placeholder="Email" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Masukkan password anda!",
                        },
                    ]}
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button
                        style={{ width: "100%", marginBottom: "10px" }}
                        className="btn-register"
                        type="primary"
                        htmlType="submit"
                    >
                        Register
                    </Button>
                    <Button
                        style={{ width: "100%" }}
                        className="btn-cancel-register"
                        type="secondary"
                        htmlType="button"
                    >
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default ModalRegister;