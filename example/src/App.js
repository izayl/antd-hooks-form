import React, { useRef, useEffect } from "react";
import { Form, Button, Input } from "antd";
import { useForm } from "antd-hooks-form";
import "antd/dist/antd.css";
import "./index.css";

const FormItem = Form.Item;

export default () => {
  const validation = {
    username: RegExp("a")
  };
  const { errors, formState, setFormItem } = useForm(validation);

  const onSubmit = e => {
    e.preventDefault();
    console.log("submit", formState);
  };

  const inputRef = useRef(null);

  useEffect(() => {
    console.log("input", inputRef);
  }, [formState.username]);

  return (
    <div className="App">
      <Form onSubmit={onSubmit}>
        {JSON.stringify(errors)}
        {JSON.stringify(formState)}
        <FormItem validateStatus={errors.username ? "error" : null}>
          <Input
            name="username"
            ref={inputRef}
            placeholder="username"
            value={formState.username}
            onChange={setFormItem}
          />
        </FormItem>
        <FormItem>
          <Input
            type="password"
            name="password"
            placeholder="password"
            value={formState.password}
            onChange={setFormItem}
          />
        </FormItem>
        <FormItem>
          <Button htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
    </div>
  );
};
