import React, {Component} from 'react';

class Clear extends Component {
    render() {
        return(
            <div>
               <button onClick={()=>this.props.handleClear(this.props.children)}>
                    {this.props.children}
               </button>
            </div>
        )
    }
}

export default Clear