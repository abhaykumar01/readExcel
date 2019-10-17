import React, {Component} from 'react';
import {Table} from 'reactstrap';

class TableDisplay extends Component{
    
    render(){
      const isTableData = this.props.data !== null ? true : false;
      console.log(">>>>>>", this.props, isTableData);
        return (
            <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>DOB</th>
                <th>Address</th>
                <th>Phone</th> 
              </tr>          
            </thead>
             <tbody>
               {
                 (isTableData) ? 
                 this.props.data.map( (item) => {
                   return(
                      <tr key ={item.id}>
                      <td>{item.Name}</td>
                      <td>{item.birthday}</td>
                      <td>{item.Address}</td>
                      <td>{item.phone}</td>
                      </tr>
                   ) 
                 })
                 :
                <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
              }
              </tbody> 
          </Table>
        )
    }
    
}
export default TableDisplay;
