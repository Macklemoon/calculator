import React, {Component} from 'react';

class Button extends Component {
    render() {
        return(
            <div>
               <button onClick={()=>this.props.handleClick(this.props.children)}>
                    {this.props.children}
               </button>
            </div>
        )
    }
}

export default Button