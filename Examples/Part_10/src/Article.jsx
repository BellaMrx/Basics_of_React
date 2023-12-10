import React from "react";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div>
        <label>{this.props.name}</label>
        <span> : {this.state.counter} </span>
        <button>+</button>
        <button>-</button>
        <span>
          {this.props.instock === "false"
            ? " (Not in stock)"
            : " (Available)"}
        </span>
      </div>
    );
  }
}
export default Article;