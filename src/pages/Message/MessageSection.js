import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import expand from "./img/expand.svg";

import "./MessageSection.css";

import NewMessage from "./NewMessage";
import ExtraMessages from "./ExtraMessages";

export default function MessageSection({ entry }) {
  const [sender, messages] = entry;
  const [open, setOpen] = useState(false);
  const [first, ...rest] = messages;

  function toggleCollapse() {
    console.log("This is open?", open);
    setOpen(!open);
  }

  return (
    <React.Fragment key={sender}>
      <tr>
        <td> {sender} </td>
        <td> {first.subject} </td>
        <td> {first.text} </td>
        <td>
          <NewMessage sender={sender} receiver={"2"} />
          <Button
            className="button-dashboard"
            size="sm"
            variant={"primary"}
            onClick={toggleCollapse}
          >
            <img className="buttonimg" src={expand} alt="Dashboard Button" />
          </Button>
        </td>
      </tr>

      <ExtraMessages rest={rest} open={open} />
    </React.Fragment>
  );
}
