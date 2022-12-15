import React, {Component} from 'react';
import BannerBTTH from "./BannerBTTH";
import ItemBTTH from "./ItemBTTH";

class BodyBtth extends Component {
    render() {
        return (
            <div>
                <BannerBTTH/>
                <ItemBTTH/>
            </div>
        );
    }
}

export default BodyBtth;