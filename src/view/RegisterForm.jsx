import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, Button, Col } from "react-bootstrap";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { RegisterAction } from "../store/action/userAction";
import { useNavigate, useLocation } from "react-router-dom";

const RegisterForm = () => {
  const { userData } = useSelector((state) => ({ userData: state.user.data }));
  const param = useLocation().search;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const defaultValues = {
    fullName: param === "?edit" ? userData.fullName : "",
    phoneNumber: param === "?edit" ? userData.phoneNumber : "",
    age: param === "?edit" ? userData.age : "",
    email: param === "?edit" ? userData.email : "",
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const schema = yup.object().shape({
    fullName: yup.string().required().min(3),
    phoneNumber: yup
      .string()
      .required()
      .matches(phoneRegExp, "شماره همراه وارد شده صحیح نمی باشد"),
    age: yup.number(),
    email: yup
      .string()
      .required("پر کردن این فیلد الزامیست")
      .email("ایمیل خود را به درستی وارد نکرده اید."),
  });

  const method = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const { handleSubmit } = method;

  const submitHandler = (data) => {
    let current_datetime = new Date();
    let createdDate =
      current_datetime.getDate() +
      "-" +
      (current_datetime.getMonth() + 1) +
      "-" +
      current_datetime.getFullYear();

    dispatch(RegisterAction({ ...data, createdDate }));
    navigate("/info");
  };

  return (
    <Col xs={10} md={4} className="register-container">
      <h2 className="form-title">فرم زیر را پر کنید</h2>
      <FormProvider {...method}>
        <Form
          id="register"
          name="register-Form"
          data-name="Register Form"
          method="post"
          ms-login="true"
          onSubmit={handleSubmit(submitHandler)}
        >
          <Form.Group className="mb-3">
            <CustomInput
              type="text"
              name="fullName"
              value={defaultValues.fullName}
              id="fullName"
              labelText="نام و نام خانوادگی"
              inputClassName={null}
              placeholder="نام و نام خانوادگی شما"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <CustomInput
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              labelText="شماره موبایل"
              inputClassName={null}
              placeholder="شماره موبایل شما"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <CustomInput
              type="text"
              name="age"
              id="age"
              labelText="سن"
              inputClassName={null}
              placeholder="سن شما"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <CustomInput
              type="email"
              name="email"
              id="email"
              labelText="ایمیل"
              inputClassName={null}
              placeholder="ایمیل شما"
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="danger" size="lg" type="submit">
              {param === "?edit" ? "اعمال تغییرات" : "ساخت اکانت"}
            </Button>
          </div>
        </Form>
      </FormProvider>
    </Col>
  );
};

export default RegisterForm;
