import React, {useEffect} from "react";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_CATEGORIES } from "../../utils/queries";
import {UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY} from '../../utils/actions';
import {useStoreContext} from '../../utils/GlobalState';

function CategoryMenu({ setCategory }) {
  // const { data: categoryData } = useQuery(QUERY_CATEGORIES);
  // const categories = categoryData?.categories || [];

  // retreieve the state from global state object and dispatch method to update the state
  const [state, dispatch] = useStoreContext();
  // destructure categories out of global state
  const {categories} = state;
  const {data: categoryData } = useQuery(QUERY_CATEGORIES);


  // useEffect will run on component load, and when state changes in the component
  useEffect(() => {
    // if categoryData exists or has changed from the response of useQuery, then run dispatch
    if(categoryData) {
      // execute dispatch function wiht our action object indicating the type of action and the data to set our state for categories to
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories
      });
    }
  }, [categoryData, dispatch]);

  const handleClick = id => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id
    });
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map(item => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
