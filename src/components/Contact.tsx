import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";

import "../assets/styles/Contact.scss";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [titleError, setTitleError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Validation
    const hasError = !name || !email || !message || !titleError;
    setNameError(!name);
    setEmailError(!email);
    setMessageError(!message);
    setTitleError(!titleError);

    if (hasError) return;

    // Prepare data for EmailJS
    const templateParams = {
      title: title,
      name,
      email: email, // allows you to reply directly
      message,
      time: new Date().toLocaleString(), // matches {{time}} in template
    };

    emailjs
      .send(
        "default_service",
        "template_ilf91wd",
        templateParams,
        "eKiXqijJAzyOcl806",
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
          setTitle("");
          setNameError(false);
          setEmailError(false);
          setMessageError(false);
          setTitleError(false);
        },
        (error) => {
          alert("❌ Failed to send message: " + JSON.stringify(error));
        },
      );
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Got a project waiting to be realized? Let's collaborate and make it
            happen!
          </p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form">
            <div className="form-flex">
              <TextField
                required
                id="title-input"
                label="Subject"
                placeholder="What’s this about?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                error={titleError}
                helperText={titleError ? "Please enter title" : ""}
              />
            </div>
            <div className="form-flex">
              <TextField
                required
                id="email-phone-input"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={
                  emailError ? "Please enter your email or phone number" : ""
                }
              />
            </div>
            <div className="form-flex">
              <TextField
                required
                id="name-input"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
            </div>
            <TextField
              required
              id="message-input"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={sendEmail}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
