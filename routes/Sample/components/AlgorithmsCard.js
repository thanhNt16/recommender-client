import React from "react";
import {Avatar, Dropdown, Menu} from "antd";
import { useRouter } from 'next/router'

import Widget from "../../../app/components/Widget";



const ProjectWidget = ({ id, image, title, description }) => {
  const router = useRouter()

  return (
    <Widget styleName="gx-ch-capitalize gx-card-sm-px"  title={title}>
      <div className="gx-text-center gx-pt-sm-3">
        <img className="gx-slider-img gx-mb-3" src={image} alt='birds'/>

        <h2 className="gx-mb-3 gx-mb-sm-4">{title}</h2>

        <p className="gx-mb-3 gx-mb-sm-4">{description}</p>
        <button onClick={() => {
          console.log("ok")
          router.push(`/algorithmDetail?id=${id}`)
        }} className="gx-btn gx-btn-primary gx-text-white gx-mb-1">Try algorithm</button>
      </div>
    </Widget>
  );
};

export default ProjectWidget;
