import React from "react";

class ClassComponent extends React.Component{
    constructor (props){
        super(props);
        this.state={
            title: props.name,
            count: 0,
            
           };
    }
    componentDidMount(){
        console.log('Component Mounted');
    }
    componentDidUpdate(){
        console.log('Component did update');
    }
    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <h1>{this.props.name}</h1>
                <h1>{this.state.count}</h1>
                <button onClick={()=>
                    this.setState({
                        count: this.state.count+1,
                    })
                }> +1 </button> 
                 
                
                <p> This is our first Component</p>
            </div>
            
        );
    }
}
export default ClassComponent;