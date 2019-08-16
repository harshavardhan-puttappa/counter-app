import React, { Component } from "react";
import "../App.css";
import Navbar from "../components/navbar";
import Counters from "../components/counters";
import { connect } from "react-redux";
import {
  counterIncrement,
  counterDecrement,
  counterDelete,
  counterReset
} from "../actions/counterActions";
class App extends Component {
  // handleIncrement = counter => {
  //   //console.log(counter);
  //   const counters = [...this.state.counters]; //cloning counters in state
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   counters[index].value++; //directly updates the state value
  //   this.setState({ counters });
  // };

  // handleReset = () => {
  //   const counters = this.state.counters.map(c => {
  //     c.value = 0;
  //     return c;
  //   });
  //   this.setState({ counters: counters });
  // };

  // handleDelete = counterId => {
  //   const counters = this.state.counters.filter(c => c.id !== counterId);
  //   this.setState({ counters });
  // };

  render() {
    return (
      <React.Fragment>
        <Navbar totalCounters={this.props.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={this.props.counters}
            onReset={this.props.counterReset}
            onIncrement={this.props.counterIncrement}
            onDecrement={this.props.counterDecrement}
            onDelete={this.props.counterDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    counters: state.counters
  };
};

const mapDispatchToProps = dispatch => ({
  counterIncrement: counter => {
    dispatch(counterIncrement(counter));
  },
  counterDecrement: counter => {
    dispatch(counterDecrement(counter));
  },
  counterDelete: cid => {
    dispatch(counterDelete(cid));
  },
  counterReset: () => {
    dispatch(counterReset());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
