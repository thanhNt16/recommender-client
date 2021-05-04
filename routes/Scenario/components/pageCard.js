import React from "react";
import { Button } from "antd";
import { algorithms } from "../configuration";
import Widget from "../../../app/components/Widget/index";
import { useRouter } from 'next/router'

const PageCard = (props) => {
  const router = useRouter()

  const { name, algorithm, id } = props;
  const algo = algorithms.filter((item) => item.id === algorithm)[0];
  return (
    <Widget style={{ height: 600 }}>
      <div className="gx-mr-3">
        <img src={algo.image} alt="flying" />
      </div>
      <div className="gx-media gx-align-items-center gx-mb-4">
        <div className="gx-media-body">
          <h2 className="gx-mb-1">{name}</h2>
          <p className="gx-text-grey gx-mb-0">{algo.title}</p>
        </div>
      </div>
      <p className="gx-mb-4">{algo.description}</p>
      <Button onClick={() => router.push(`/demo-page?id=${id}`)} type="primary">View demo page</Button>
    </Widget>
  );
};

export default PageCard;
