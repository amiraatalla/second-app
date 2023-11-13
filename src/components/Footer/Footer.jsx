import { Component } from "react";
import Styles from './Footer.module.css';

class Footer extends Component {
    x= {color:"white", backgroundColor:"green" , padding:"10px"};
    hstyle= {color:"white", backgroundColor:"red" , padding:"10px"};
    render() {
        return <>
            <h1 className={Styles.bg}>Hi</h1>
            <p
            style={{color:"white", backgroundColor:"grey" , padding:"10px"}}
    
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, impedit aliquid, quo, hic nam labore nisi tenetur eveniet iste ipsa accusantium necessitatibus dolor ad iusto? 
                </p>
            <h2 style={this.hstyle}>
                chapter1
            </h2>
            <p style={this.x}>Nemo distinctio voluptas magnam impedit.</p>
        </>
    }
}

export default Footer;
