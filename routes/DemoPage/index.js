import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Typography } from "antd";
import { getPageById } from "../../redux/actions/Page";
import { getPopularRecommendation, getCollaborativeRecommendation, getContentRecommendation, getSequenceRecommendation } from "../../redux/actions/Recommend";
import { useAuth } from "../../util/use-auth";
import { useRouter } from "next/router";
import ProductItem from '../../app/components/eCommerce/ProductItem'

const Title = Typography.Title

export default function DemoPage() {
  const router = useRouter();
  const { authUser } = useAuth();

  const dispatch = useDispatch();
  const page = useSelector(({ demoPage }) => demoPage.page);
  const items = useSelector(({ demoPage }) => demoPage.items);


  useEffect(() => {
    if (router.query.id) {
      console.log(router.query.id);
      dispatch(getPageById({ id: router.query.id }));
    }
  }, [router.query.id]);

  useEffect(() => {
    if (page && authUser) {
      console.log("page", page);
      page.algorithm === "popular" &&
        dispatch(
          getPopularRecommendation({
            customer_id: authUser._id,
            user_id: "linhkm2",
            top: 10,
          })
        );
        page.algorithm === "content" &&
        dispatch(
          getContentRecommendation({
            customer_id: authUser._id,
            item_id: "id",
            top: 10,
          })
        );
        page.algorithm === "collaborative" &&
        dispatch(
          getCollaborativeRecommendation({
            customer_id: authUser._id,
            user_id: "mailienphung1204",
            top: 10,
          })
        );
        page.algorithm === "sequence" &&
        dispatch(
          getSequenceRecommendation({
            customer_id: authUser._id,
            user_id: "1032468307128146",
            top: 10,
          })
        );
    }
  }, [page, authUser]);
  return <React.Fragment>
    {page ? <React.Fragment>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Title>{page.name}</Title>
        </div>
        {page.algorithm === 'popular' && <Title>Most popular items overtime: </Title>}
        {page.algorithm === 'content' && <Title>Because you like it.Similar item you want to try: </Title>}
        {page.algorithm === 'collaborative' && <Title>You may also like: </Title>}
        {page.algorithm === 'sequence' && <Title>You may also like: </Title>}


        <div style={{ display: 'flex', justifyContent: 'start', flexDirection: 'column' }}>
          {items && items.map((item, index) => {
            return <ProductItem key={index} product={{
              name: item, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }}/>
          })}
      </div>
    </React.Fragment> : <div>loading...</div>}
  </React.Fragment>;
}

