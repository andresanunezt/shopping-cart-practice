import { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <div className="card" key={item.id}>
          <div className="card-image">
            <img src={item.img} alt={item.title} width="250" />
            <br></br>
            <br></br>
          </div>
          <span className="blue-text text-darken-2">{item.title}</span>
          <div className="card-content">
            <p>{item.desc}</p>
            <p>
              <b>Price: {item.price}$</b>
            </p>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <h3 className="center">Products</h3>
        <div className="box">{itemList}</div>
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
