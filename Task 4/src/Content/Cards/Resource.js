import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setActive, setSubmit, setIndex } from '../../redux/status.js'
import Page2_template from './Page2_template';
const Resource = () => {
  const index = 11;
  const sub_list = useSelector((state) => state.status.subcategories).find((sub) => sub.id === index).sub;
  return ( 
    <div className = "Resource">
      {sub_list.map((smaller) => <Page2_template name = {smaller} number = {index}/>)}
    </div>
  );
}
 
export default Resource;