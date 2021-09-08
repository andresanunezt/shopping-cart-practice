import { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <div className="card blue-grey lighten-3" key={item.id}>
          <div className="card-image">
            <img src={item.img} alt={item.title} width="250" />
            <br></br>
          </div>
          <span className="white-text">
            <h6>{item.title}</h6>
          </span>
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
        <h3 className="center white-text">Products</h3>
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
