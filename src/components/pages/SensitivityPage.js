import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./DataTable.css";
//import Fa from '../Fa';

class Sensitivity extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
         comparables: [
            { 
              id: 1, 
              id: 2, 
              id: 3, 
              id: 4
              
            },
            { 
              id: 2
              , name: 'Ali'
              , age: 19
              , email: 'ali@email.com' 
            },
            { 
              id: 3
              , name: 'Saad'
              , age: 16
              , email: 'saad@email.com' 
            },
            { 
              id: 4
              , name: 'Asad'
              , age: 25
              , email: 'asad@email.com' 
            }
         ]
      }
   }

   renderTableHeader() {
      let header = Object.keys(this.state.comparables[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

   renderTableData() {
      return this.state.comparables.map((comparables, index) => {
         const { id, name, age, email } = comparables //destructuring
         return (
           <tr>
               <td>{id}</td>
            </tr>
            <tr>
               <td>{name}</td>
               <td>{age}</td>
               <td>{email}</td>
            </tr>
         );
      })
   }

   render() {
      return (
         <div>
            <h1 id='title'>React Dynamic Table</h1>
            <table id='students'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

export default Sensitivity;
