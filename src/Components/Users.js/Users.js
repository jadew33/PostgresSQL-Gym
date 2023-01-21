// import { Link } from "react-router-dom";
import { Formik, useFormik, Field, Form } from "formik";
import axios from "axios";

export default function AdminUsers(props) {
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          password: "",
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          console.log(values);
          resetForm({ values: "" });
          //   axios
          //     .post("http://localhost:4000/login", {
          //       firstName: "Fred",
          //       lastName: "Flintstone",
          //     })
          //   axios({
          //     method: "post",
          //     url: "http://localhost:4000/login",
          //     // withCredentials: false,
          //     // params: {
          //     //   access_token: SECRET_TOKEN,
          //     // },
          //   })
          // .then(function (response) {
          //   console.log("hh");
          // })
          // .catch(function (error) {
          //   console.log(error);
          // });
          fetch(`http://localhost:4000/login`, {
            method: "POST",
            // credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          })
            .catch((err) => {
              console.log(err);
              return;
            })
            .then((res) => {
              if (!res || !res.ok || res.status >= 400) {
                return;
              }
              return res.json();
            })
            .then((data) => {
              if (!data) return;
              //   setUser({ ...data });
              if (data.status) {
                // setError(data.status);
              } else if (data.loggedIn) {
                localStorage.setItem("token", data.token);
                // navigate("/home");
              }
            });
        }}
      >
        <Form>
          <label htmlFor="email">Email Address</label>
          <Field
            id="email"
            name="email"
            type="email"
            // onChange={formik.handleChange}
            // value={formik.values.email}
          />

          <label htmlFor="firstName">First Name</label>
          <Field
            id="firstName"
            name="firstName"
            type="firstName"
            // onChange={formik.handleChange}
            // value={formik.values.firstName}
          />

          <label htmlFor="lastName">Last Name</label>
          <Field
            id="lastName"
            name="lastName"
            type="lastName"
            // onChange={formik.handleChange}
            // value={formik.values.lastName}
          />

          <label htmlFor="lastName">Username</label>
          <Field
            id="username"
            name="username"
            type="username"
            // onChange={formik.handleChange}
            // value={formik.values.username}
          />

          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            type="password"
            // onChange={formik.handleChange}
            // value={formik.values.password}
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}
