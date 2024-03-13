// redux lab

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { connect } from 'react-redux'
import { addData } from '../store/apiData/actions'
import axios from 'axios'


// const MyComponent = ({ addedData, addData }) => {
const MyComponent = () => {
     const dispatch = useDispatch();
     const addedData = useSelector((state) => state.addedData);

     const [id, setId] = useState(1);

     const fetchData = async (id) => {
          try {
               const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
               console.log(res.data);
               if (res.data && !addedData.includes(res.data.title)) {
                    dispatch(addData(res.data.title));
               }
          } catch (e) {
               console.log(e);
          }
     }

     //useEffect(() => { dispatch(addData) }, [dispatch])

     return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3, width: '300px' }} >
               <input type='number' name='id' placeholder='enter number' onChange={(e) => { setId(e.target.value) }} />
               <button onClick={() => fetchData(id)} style={{ width: 'fit-content' }}> add to store </button>

               <div>
                    <ul>
                         {addedData.map((data, index) => (
                              <li key={index}>{data}</li>
                         ))}
                    </ul>
               </div>

          </div >
     )
}
// const mapStateToProps = (state) => ({
//      addedData: state.addedData,
// })

// const mapDispatchToProps = (dispatch) => ({
//      addData: (data) => dispatch(addData(data))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);

export default MyComponent