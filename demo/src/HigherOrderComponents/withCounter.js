/*HOC to share common functinality between components
it is pattern where a function takes a component as an argument and return a new component.

const  NewComponent = higherOrderComponent(originalComponent)
*/
import React from 'react';


const UpdatedComponent = OriginalComponent => {
    
    class NewComponent extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          count: 0,
        };
        this.counter = this.counter.bind(this);
      }
      counter() {
        this.setState((previos) => {
          return {
            count: previos.count + 1,
          };
        });
      }
      render() {
          return <OriginalComponent count={this.state.count} counter={ this.counter}/>;
      }
    }
    return NewComponent;
}
export default UpdatedComponent;