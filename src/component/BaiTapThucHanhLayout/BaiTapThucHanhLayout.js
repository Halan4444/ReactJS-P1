import React, {Component} from 'react';
import HeaderBTTH from "./HeaderBTTH";
import BodyBTTH from "./BodyBTTH";
import FooterBTTH from "./FooterBTTH";

class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <HeaderBTTH/>
                <BodyBTTH/>
                <FooterBTTH/>
            </div>
        );
    }
}

export default BaiTapThucHanhLayout;