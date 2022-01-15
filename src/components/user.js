import React from "react";
class User extends React.Component{
  constructor(props){
    super(props);

    this.state={ //a state is a set of data that an individual component can hold
      planet:"earth"
    };
    console.log("Hey i am from constructor");
  }
  componentDidMount(){
    this.setState({planet:"Mars"});
    console.log("Hay i am from componentDidMount");
  }
  render(){
    console.log("Hey i am from rendered");
    return (
      <div>
      <h1>{this.props.name}</h1>
      <h4>{this.props.description}</h4>
      <h4>{this.state.planet}</h4>
      </div>
    );
  }
}


export default User;

//props -> properties/params, a data that is passed to one component to another
//life cycle method->
//mount-component is initially rendered in ur dom
//constructor,render,componentdidmount - side effects
//update - component is being updated
//unmount - component is removed from the dom
