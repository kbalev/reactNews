import { Blurb } from "./Blurb";
import { Picture } from "./Picture";
import { Title } from "./Title";

export const NewsBox = (props) => {
  return (<div className="NewsBox">
    <Picture className="Picture" picture={props.picture}/>
    <Title className="Title" title={props.title}/>
    <Blurb className="Blurb" blurb={props.blurb}/>
  </div>);
};


export default NewsBox
