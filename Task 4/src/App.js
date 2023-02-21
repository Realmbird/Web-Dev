
import Page_1 from './Page 1';
import Page_2 from './Page 2';
import Page_3 from './Page 3';
import Page_4 from './Page 4';
import { useSelector, useDispatch } from 'react-redux'
import { setActive, setSubmit, setIndex, setData } from './redux/status.js'
function App() {
  const submit_status = useSelector((state) => state.status.submit);
  const complete_1 = submit_status.slice(0,9).every(submit => submit === true);
  const complete_2 = submit_status.slice(9,12).every(submit => submit === true);
  const complete_3 = submit_status.slice(12, 14).every(submit => submit === true);
  const complete_4 = submit_status.slice(14, 16).every(submit => submit === true);
    if(complete_1){
      if(complete_2){
        if(complete_3){
          return(
            <Page_4 />
          );
        }
        return(
          <Page_3 />
        )
      }
      return(
        <Page_2 />
      );
    }else{
      return(
        <Page_1 />
      );
    }
}

export default App;
