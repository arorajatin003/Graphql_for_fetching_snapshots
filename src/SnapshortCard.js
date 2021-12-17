import React, { useState, useEffect } from "react";
import Snapshort from "./Snapshort";

const SnapshortCard = (props) => {
  //get snapshots data from SnapshortAPI
  const snapshort = SnapshortAPI({ name: props.props });
  console.log(snapshort);
  return (
    <div>
      {snapshort.map((data) => (
        <Snapshort key={data.id} data={data} id={props.props} />
      ))}
    </div>
  );
};

const SnapshortAPI = (props) => {
  console.log(props);
  const Query = `
  query getProposels($name:String){
    proposals (
      first: 10,
      skip: 0,
      where: {
        space_in: [$name],
        state: "active"
      },
      orderBy: "created",
      orderDirection: desc
    ) {
      id
      title
      body
      end
      author
    }
   
  }
`;
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://hub.snapshot.org/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: Query,
        variables: props
      })
    })
      .then((responce) => responce.json())
      .then((data) => setData(data.data.proposals));
  }, []);

  return data;
};

export default SnapshortCard;
