import { Component } from "react";
import Header from './Header';
import CardSection1 from "./CardSection";
import Section2 from "./Section2";


class Main extends Component {
    render() {
        return (
            <div className="Main">
             
                <Header/>
                <CardSection1/>
                <Section2/> 
            </div>
        )
    }
}
export default Main;