import React from "react";
import * as styled from "./Style";
const Snapshort = (props) => {
  let body = props.data.body;
  let discription = body.replace(/#/g, "").slice(0, 200).concat("...");
  let link = `https://snapshot.org/#/${props.id}/proposal/${props.data.id}/`;
  return (
    <styled.Card>
      {/* <styled.Top>
      <styled.Logo>

      </styled.Logo>
      <styled.Header>

      </styled.Header>
    </styled.Top> */}
      <styled.Body href={link}>
        <styled.Title>{props.data.title}</styled.Title>
        <styled.Discription>{discription}</styled.Discription>
      </styled.Body>
      <styled.Bottom>{props.end}</styled.Bottom>
    </styled.Card>
  );
};

export default Snapshort;
