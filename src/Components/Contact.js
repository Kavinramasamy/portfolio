import { Email, LinkedIn, WhatsApp } from "@mui/icons-material";
import React, { useContext } from "react";
import { AppContext } from "../App";

const Contact = () => {
  const { textMode } = useContext(AppContext)
  return (
    <div className="pb-5">
      <div className="heading pt-5 text-start" style={{ marginLeft: "7%" }}>
        Contact
      </div>
      <div className="contact pt-3">
        <LinkedIn /> <a className={"text-decoration-none text-" + textMode} href="https://www.linkedin.com/in/kavin-ramasamy-55909822a/" target="_blank" rel="noreferrer">LinkedIn</a><br /><br />
        <Email /> <email>kavinramasamymech@gmail.com</email><br /><br />
        <WhatsApp /> <a className={"text-decoration-none text-" + textMode} href="https://wa.me/6379233604" target="_blank" rel="noreferrer">+91-637-923-3604</a>
      </div>
    </div>
  );
};

export default Contact;
