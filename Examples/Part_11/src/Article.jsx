import React from "react";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      stock: this.props.instock,
    };
  }

  incrementCounter = () => {
    if (this.state.stock === "true" && this.state.counter < 9)
      this.setState({ counter: this.state.counter + 1 });
    if (this.state.counter >= 9)
      this.setState({ stock: (this.state.stock = "false") });
  };

  decrementCounter = () => {
    if (this.state.counter && this.state.counter <= 9) {
      this.setState({ counter: this.state.counter - 1 });
      this.setState({ stock: (this.state.stock = "true") });
    }
  };

  render() {
    return (
      <div>
        {this.props.children}
        <label>{this.props.name}</label>
        <span> : {this.state.counter} </span>
        <button onClick={this.incrementCounter}>+</button>
        <button onClick={this.decrementCounter}>-</button>
        <span>
          {this.state.stock === "false" 
             ? " (Not in stock)" : " (Available)"}
        </span>
      </div>
    );
  }
}

export default Article;
