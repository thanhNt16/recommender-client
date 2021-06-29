import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Typography } from "antd";
import { getPageById } from "../../redux/actions/Page";
import { getPopularRecommendation, getCollaborativeRecommendation, getContentRecommendation, getSequenceRecommendation, getDataByType } from "../../redux/actions/Recommend";
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
  const demoData = useSelector(({ demoPage }) => demoPage.demoData);



  useEffect(() => {
    if (router.query.id) {
      console.log(router.query.id);
      dispatch(getPageById({ id: router.query.id }));
    }
  }, [router.query.id]);

  useEffect(() => {
    if (page && authUser) {
      dispatch(getDataByType(page.algorithm, { skip: 0, limit: 10}))
    }
    
  }, [page, authUser])

  useEffect(() => {
    if (page && authUser && demoData.length !== 0) {
      console.log('demo', demoData)
      page.algorithm === "popular" &&
        dispatch(
          getPopularRecommendation({
            customer_id: authUser._id,
            user_id: demoData[2].userId,
            top: 10,
          })
        );
        page.algorithm === "content" &&
        dispatch(
          getContentRecommendation({
            customer_id: authUser._id,
            item_id: demoData[0].itemId,
            top: 10,
          })
        );
        page.algorithm === "collaborative" &&
        dispatch(
          getCollaborativeRecommendation({
            customer_id: authUser._id,
            user_id: demoData[0].userId,
            top: 10,
          })
        );
        page.algorithm === "sequence" &&
        dispatch(
          getSequenceRecommendation({
            customer_id: authUser._id,
            user_id: demoData[2].userId,
            top: 10,
          })
        );
    }
  }, [page, authUser, demoData]);
  return <React.Fragment>
    {page ? <React.Fragment>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Title>{page.name}</Title>
        </div>
        {page.algorithm === 'popular' && <Title>Most popular items overtime: </Title>}
        {page.algorithm === 'content' && items && <Title>Because you like {items.current_product.content} <br />Similar items you want to try: </Title>}
        {page.algorithm === 'collaborative' && items && <Title>Recomendation products for user {items.current_user.id}: </Title>}
        {page.algorithm === 'sequence' && items && <Title>Personalized recomendation products for user {items.current_user.id}: </Title>}


        <div style={{ display: 'flex', justifyContent: 'start', flexDirection: 'column' }}>
          {page.algorithm === 'content' && items && items.similar_products.map((item, index) => {
            return <ProductItem key={index} product={{
              name: item.itemId, description: item.content
            }}/>
          })}
           {page.algorithm === 'collaborative' && items && items.suggestion.map((item, index) => {
            return <ProductItem key={index} product={{
              name: item.item_id, description: ''
            }}/>
          })}
          {page.algorithm === 'sequence' && items && items.suggestion.map((item, index) => {
            return <ProductItem key={index} product={{
              name: item.id, description: ''
            }}/>
          })}
          {page.algorithm === 'popular' && items && items.map((item, index) => {
            return <ProductItem key={index} product={{
              name: item, description: ''
            }}/>
          })}
      </div>
    </React.Fragment> : <div>loading...</div>}
  </React.Fragment>;
}

