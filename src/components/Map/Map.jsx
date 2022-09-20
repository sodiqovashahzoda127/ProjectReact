import React from "react";

function Map(props) {
  console.log(props.value);
  const { values } = props;
  console.log(values);
  return (
    <div>
      {values.map((val, index) => (
          <div key={val.id}>
            <ul>
              <li>
                {val.id}
                {"  "}
                {val.names}
                {"  "}
                {val.title}
              </li>
            </ul>
          </div>
      ))}
    </div>
  );
}

export default Map;
