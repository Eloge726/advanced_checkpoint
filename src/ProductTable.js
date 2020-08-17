import React from 'react';
import PropTypes from'prop-types';
const ProductTable = (props) => {
    return (<>
    <table border="1">
        <tr>
        <th>nom</th>
        <th>category</th>
        <th>prix</th>
        </tr>
        
    {props.prod.map(el=><tr><td>{el.nom}</td>
    <td>{el.category}</td>
    <td>{el.prix}</td></tr>)}
    </table>

    </>  );
}
ProductTable.propTypes={
    prod:PropTypes.array,
    x:PropTypes.number,
}
export default ProductTable;