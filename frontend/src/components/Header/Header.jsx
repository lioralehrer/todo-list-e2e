import React from "react"
import "./Header.css"
class Header extends React.Component {
    constructor(){
        super();
        this.state=({
            time : new Date().toLocaleString()
        })
    }
   tick(){
       this.setState({
           time : new Date().toLocaleString()
       })
   }
    componentDidMount(){
         this.interval = setInterval(()=>this.tick(),1000);
         }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
   
    render() {
        return (
            <div>
                <div className="header">
                    <a href="#default" className="logo">OurLogo</a>
                    <a>{this.state.time}</a>
                    <a>Take care of your TIME</a>
                    <div className="header-right">
                       
                        <a className="active" href="#">Home</a>
                        <a href="#">Contact</a>
                        <a href="#">About</a>
                    </div>
                </div>

                <div style={{paddingLeft:20+"px"}}>
                    <h1>Todo List</h1>
                    <p>A new way to manage your work.</p>
                    <p>Plan. Organize. Track. In one visual space.</p>
                </div>
            </div>
        )
    }
}
export default Header;