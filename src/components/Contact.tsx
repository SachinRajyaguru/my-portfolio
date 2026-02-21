import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";

import "../assets/styles/Contact.scss";

interface ContactProps {
  mode: string;
}

function Contact({ mode }: ContactProps) {
  void mode;
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [titleError, setTitleError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);

  // Dynamic styles for TextField based on theme
  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#ffffff",
      "& fieldset": {
        borderColor: "#cbd5e1", // default border (neutral gray)
        borderWidth: "1px",
      },

      "&:hover fieldset": {
        borderColor: "#6366f1", // hover border
      },
    },
    "& .MuiInputBase-input": {
      color: "#000000",
    },
    // Default label (inside input)
    "& .MuiInputLabel-root": {
      color: "#475569",
      transition: "all 0.2s ease",
    },
    // Focused label
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#000000",
    },
    // Shrunk (floating) label
    "& .MuiInputLabel-shrink": {
      color: "#000000",
      fontWeight: 600,
      backgroundColor: "#ffffff",
      padding: "0 8px",
      borderRadius: "4px",
    },
    // Error state
    "& .MuiInputLabel-root.Mui-error": {
      color: "#d32f2f",
    },
    "& .MuiFormHelperText-root": {
      color: "#64748b",
    },
    "& .MuiFormHelperText-root.Mui-error": {
      color: "#d32f2f",
    },
  };

  const sendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const hasNameError = !name.trim();
    const hasEmailError = !email.trim();
    const hasMessageError = !message.trim();
    const hasTitleError = !title.trim();

    setNameError(hasNameError);
    setEmailError(hasEmailError);
    setMessageError(hasMessageError);
    setTitleError(hasTitleError);

    if (hasNameError || hasEmailError || hasMessageError || hasTitleError) {
      return;
    }

    const templateParams = {
      title,
      name,
      email,
      message,
      time: new Date().toLocaleString(),
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
            className="contact-form"
          >
            <TextField
              fullWidth
              required
              id="title-input"
              label="Subject"
              placeholder="What's this about?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              error={titleError}
              helperText={titleError ? "Please enter a subject" : ""}
              margin="normal"
              sx={textFieldStyles}
            />
            <TextField
              fullWidth
              required
              id="email-phone-input"
              label="Email / Phone"
              placeholder="How can I reach you?"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
              helperText={
                emailError ? "Please enter your email or phone number" : ""
              }
              margin="normal"
              sx={textFieldStyles}
            />
            <TextField
              fullWidth
              required
              id="name-input"
              label="Your Name"
              placeholder="What's your name?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={nameError}
              helperText={nameError ? "Please enter your name" : ""}
              margin="normal"
              sx={textFieldStyles}
            />
            <TextField
              fullWidth
              required
              id="message-input"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter a message" : ""}
              margin="normal"
              sx={textFieldStyles}
            />
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={sendEmail}
                // sx={{
                //   backgroundColor: isDarkMode ? "#fff" : "#0d1116",
                //   color: isDarkMode ? "#0d1116" : "#fff",
                //   "&:hover": {
                //     backgroundColor: "#5000ca",
                //     color: "#fff",
                //   },
                // }}
              >
                Send
              </Button>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
