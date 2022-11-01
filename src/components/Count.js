import React ,{Component} from "react";


class Count extends Component{
    
    constructor(props){
        super(props)
        this.state={
            start : 0,
        }
    }; 

    componentDidMount(){
        setInterval(
            ()=>{
                this.setState(
                
                    ()=>({start :this.state.start+1})
                
                )
                }, 1000)

    };
    render(){
        return(
            <div style={{width:'120px',height:'20px',margin:'auto',paddingBottom:'15px',background:'#4CAF50', color:'white',borderRadius:'15px'}}>
                <h2><i>{this.state.start}</i></h2>
            </div>
        )
    }
}




export default Count