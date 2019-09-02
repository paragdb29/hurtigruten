import React from 'react';

function List(props) {
    return <ul className="searchList">
       {
           props.listData.map((data) =>
        {
            return(
                <li key={data.id}>
                    {data.name}
                </li>
            )
        })           
       } 
    </ul>;
  }
  export default List;