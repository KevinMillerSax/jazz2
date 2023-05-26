import React, { useState } from "react";
import styled from 'styled-components';

const ScrollArea = styled.div`
  padding-top: 5vh;
`;

const FormContainer = styled.div`
  border: 1px solid grey;
  border-radius: 15px;
  box-shadow: grey 0px 7px 29px 0px;
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormHeader = styled.h2`
  padding-top: 20px;
  margin: 0 auto;
  font-family: ${props => props.theme.fonts.primary};
`;

const LabelInput = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 20px auto;
`;

const Label = styled.label`
  font-family: ${props => props.theme.fonts.primary};
  font-size: 18px;
`;

const TextArea = styled.textarea`
  border-radius: 5px;
  border: 1px solid grey;
  width: 75%;
  height: 75px;
  font-size: 15px;
  &:focus {
    outline: none;
  }
`;

const Input = styled.input`
  height: 25px;
  border-radius: 5px;
  border: 1px solid grey;
  width: 75%;
  font-size: 15px;
  &:focus {
    outline: none;
  }
  &:selected {
    background-color: white;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 60px;
  border-radius: 5px;
  background-color: white;
  border: 2px solid grey;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 20px;
  margin: 0 auto;
  margin-bottom: 20px;
  &:hover {
    box-shadow: grey 0px 7px 17px 0px;
  }
  &:focus {
    box-shadow: none;
  }
`;

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    console.log(result)
    alert(result.status);
  };
  return (
    <ScrollArea className="scroll-section" id="contact">
      <FormContainer>
        <FormHeader>
          Need some Jazz? Contact Kevin
        </FormHeader>
        <Form onSubmit={handleSubmit}>
          <LabelInput>
            <Label htmlFor="name">Name:</Label>
            <Input type="text" id="name" required />
          </LabelInput>
          <LabelInput>
            <Label htmlFor="email">Email:</Label>
            <Input type="email" id="email" required />
          </LabelInput>
          <LabelInput>
            <Label htmlFor="message">Message:</Label>
            <TextArea id="message" required />
          </LabelInput>
          <Button type="submit">{status}</Button>
        </Form>
      </FormContainer>
    </ScrollArea>
  );
};

export default ContactForm;
