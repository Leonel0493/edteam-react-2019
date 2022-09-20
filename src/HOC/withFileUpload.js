import React from "react";

const withFileUpload = (WrappedComponent) => {
  return class WithFileComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        files: [],
      };

      this.fileReader = new FileReader();

      this.addFile = this.addFile.bind(this);
      this.appendFile = this.appendFile.bind(this);
    }

    addFile(e) {
      const files = e.target.files;
      this.fileReader.readAsDataURL(files[0]);
    }

    appendFile() {
      this.setState({
        files: [...this.state.files, this.fileReader.result],
      });
    }

    componentDidMount() {
      this.fileReader.addEventListener("load", this.appendFile);
    }

    componentWillUnmount() {
      this.fileReader.removeEventListener("load", this.appendFile);
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          addFiles={this.addFile}
          files={this.state.files}
        />
      );
    }
  };
};

export default withFileUpload;
