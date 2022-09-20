import React from "react";
import withFileUpload from "../../HOC/withFileUpload";

function CircleFiles(props) {
  return (
    <div>
      <form>
        <input type="file" onChange={props.addFiles} />
      </form>
      <div className="ed-grid s-grid-2">
        {props.files.map((file, index) => (
          <img
            key={index}
            style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            src={file}
            alt="profile"
          />
        ))}
      </div>
    </div>
  );
}

export default withFileUpload(CircleFiles);
