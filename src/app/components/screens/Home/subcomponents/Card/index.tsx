import React, { FunctionComponent } from "react";
import "./index.scss";
import { useHistory } from "react-router-dom";

interface Iprops {
    icon : JSX.Element,
    count : number,
    title : string,
    colorLeft : string,
    colorRight : string,
    link : string
}

const Card : FunctionComponent<Iprops> = props => {
    const history = useHistory();
    const { icon , count , title , colorLeft, colorRight, link } = props;
    const onPress = () : void => history.push(link);

    return <article className="card" onClick={onPress} >
        <div className="container-icon" style={{ backgroundColor : colorLeft }}>
            <span className="icon">{icon}</span>           
        </div>
        <div className="information" style={{ backgroundColor : colorRight }}>
            <p className="count-information">{count}</p>
            <p className="title-information">{title}</p>
        </div>
    </article>
}

export default Card;