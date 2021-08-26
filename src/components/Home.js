import { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h3>Home</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps)(Home);
