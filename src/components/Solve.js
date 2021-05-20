import React, {Component} from 'react';

class Solve extends Component {
    render() {
        return(
            <div>
               <button onClick={()=>this.props.handleSolve(this.props.children)}>
                    {this.props.children}
               </button>
            </div>
        )
    }
}

export default Solve