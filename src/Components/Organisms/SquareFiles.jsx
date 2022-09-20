import React from "react";
import withFileUpload from "../../HOC/withFileUpload";

function SquareFiles(props) {
  return (
    <div>
      <form>
        <input type="file" onChange={props.addFiles} />
      </form>
      <div className="ed-grid s-grid-2">
        {props.files.map((file, index) => (
          <img
            key={index}
            style={{ width: "150px", height: "150px" }}
            src={file}
            alt="profile"
          />
        ))}
      </div>
    </div>
  );
}

export default withFileUpload(SquareFiles);
