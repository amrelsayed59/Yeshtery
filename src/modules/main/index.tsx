import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../services/products';
import Item from './Components/Item';
import { useMainDispatch, useMainState } from '../../context/gloabal';
import { InnerLoader } from '../../components/Loader';

export const Main: React.FC<any> = () => {
  const { searchHistory } = useMainState();
  const dispatch = useMainDispatch();
  const [products, setProducts] = useState([]);
  const [historyCard, setHistoryCard] = useState(searchHistory);
  const [loader, setLoader] = useState(false);

  //getProducts
  const getProducts = async () => {
    setLoader(true);
    const result = await getAllProducts();
    setProducts(result.productList);
    setLoader(false);
  };

  //Avoid pushing duplicate objects in array
  const isDuplicate = (data: [], obj: Object) =>
    data.some((el: any) =>
      Object.entries(obj).every(([key, value]) => value === el[key])
    );

  const handleClickCard = (item: any) => {
    const history = historyCard;
    if (!isDuplicate(history, item)) history.push(item);
    setHistoryCard(history);
    dispatch({
      type: 'search_history',
      payload: history,
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const AllProducts = products?.map((product: any) => (
    <Item
      product={product}
      key={product.id}
      handleClickCard={handleClickCard}
    />
  ));

  return (
    <>
      {loader ? (
        <InnerLoader />
      ) : (
        <section className="main">
          <div className="container">
            {AllProducts.length > 0 ? (
              <div className="product-section">{AllProducts}</div>
            ) : (
              <p>No Results Found</p>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Main;
