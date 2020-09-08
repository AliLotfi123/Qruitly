import React from "react";
import Collapse from "react-bootstrap/esm/Collapse";

export default function ExtraMessages({ rest, open }) {
  return (
    <>
      {rest.map((message) => {
        return (
          <Collapse in={open} key={message.id}>
            <tr>
              <td></td>
              <td>{message.subject}</td>
              <td>{message.text}</td>
              <td></td>
            </tr>
          </Collapse>
        );
      })}
    </>
  );
}
