import React from "react";

import Metrics from "../../../components/Metrics";
import {Avatar} from "antd";

const userImageList = [
  {
    id: 1,
    image: ('/images/avatar/a5.png'),
  },
  {
    id: 2,
    image: ('/images/avatar/a6.png'),
  },
  {
    id: 3,
    image: ('/images/avatar/domnic-harris.png'),

  },
  {
    id: 4,
    image: ('/images/avatar/a8.png'),
    name: 'Mila Alba',
    rating: '5.0',
    deals: '27 Deals'
  },
]

const NewCustomers = () => {
  return (
    <Metrics title="NEW CUSTOMERS">
      <div className="gx-customers">
        <ul className="gx-list-inline gx-customers-list gx-mb-0">
          {userImageList.map((user, index) =>
            <li className="gx-mb-2" key={index}>
              <Avatar src={user.image}/>
            </li>
          )
          }
        </ul>
      </div>
    </Metrics>
  );
};


export default NewCustomers;
