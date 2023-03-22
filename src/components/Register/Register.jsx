import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../features/auth/authSlice";
import { notification } from "antd";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const dispatch = useDispatch();

  const { isSuccess, isError, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: "Success", 
        description: message,
      });
    }
    if (isError) {
      notification.error({ message: "Error", description: message });
      }
    dispatch(reset())
  }, [isSuccess, isError, message]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,

      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(register(formData));
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="name"
        onChange={onChange}
      />

      <input
        type="email"
        name="email"
        value={email}
        placeholder="email"
        onChange={onChange}
      />

      <input
        type="password"
        name="password"
        value={password}
        placeholder="password"
        onChange={onChange}
      />

      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
