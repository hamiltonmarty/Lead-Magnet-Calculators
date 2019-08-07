import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBCard, MDBCardHeader, MDBCardBody, MDBBtn,  } from 'mdbreact';
const rows = ["", "Sale Price", "Size", "Price/SqFt", "Size Factor", "Factor %", "Size Adjustment", "Adjustment %", "Net Adjustment", "Net %", "Gross Adjustment", "Gross %", "Indicated Value" ];
const Sensitivity = (props) => {
  const data = {
    columns: [
      {
        label: '',
        field: 'labels'
      },
      {
        label: 'Subject',
        field: 'name',
        sort: 'asc'
      },
      {
        label: 'Comp 1',
        field: 'position',
        sort: 'asc'
      },
      {
        label: 'Comp 2',
        field: 'office',
        sort: 'asc'
      },
      {
        label: 'Comp 3',
        field: 'age',
        sort: 'asc'
      },
      {
        label: 'Comp 4',
        field: 'date',
        sort: 'asc'
      },
      {
        label: 'Comp 5',
        field: 'salary',
        sort: 'asc'
      }
    ],
    rows: [
      {
        labels:'Sale Price',
        name: 'Tiger Nixon',
        position: 'System Architect',
        office: 'Edinburgh',
        age: '61',
        date: '2011/04/25',
        salary: '$320'
      },
      {
        labels:'Size',
        name: 'Garrett Winters',
        position: 'Accountant',
        office: 'Tokyo',
        age: '63',
        date: '2011/07/25',
        salary: '$170'
      },
      {
        labels:'Price/SqFt',
        name: 'Ashton Cox',
        position: 'Junior Technical Author',
        office: 'San Francisco',
        age: '66',
        date: '2009/01/12',
        salary: '$86'
      },
      {
        labels:'Size Factor',
        name: '',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433'
      },
      {
        labels:'Factor %',
        name: '',
        position: 'Accountant',
        office: 'Tokyo',
        age: '33',
        date: '2008/11/28',
        salary: '$162'
      },
      {
        labels:'Size Adjustment',
        name: '',
        position: 'Integration Specialist',
        office: 'New York',
        age: '61',
        date: '2012/12/02',
        salary: '$372'
      },
      {
        labels:'Adjustment %',
        name: '',
        position: 'Sales Assistant',
        office: 'San Francisco',
        age: '59',
        date: '2012/08/06',
        salary: '$137'
      },
      {
        labels:'Net Adjustment',
        name: '',
        position: 'Integration Specialist',
        office: 'Tokyo',
        age: '55',
        date: '2010/10/14',
        salary: '$327'
      },
      {
        labels:'Net %',
        name: '',
        position: 'Javascript Developer',
        office: 'San Francisco',
        age: '39',
        date: '2009/09/15',
        salary: '$205'
      },
      {
        labels:'Gross Adjustment',
        name: '',
        position: 'Software Engineer',
        office: 'Edinburgh',
        age: '23',
        date: '2008/12/13',
        salary: '$103'
      },
      {
        labels:'Gross %',
        name: '',
        position: 'Office Manager',
        office: 'London',
        age: '30',
        date: '2008/12/19',
        salary: '$90'
      },
      {
        labels:'Indicated Value',
        name: '',
        position: 'Support Lead',
        office: 'Edinburgh',
        age: '22',
        date: '2013/03/03',
        salary: '$342'
      }
    ]
  };

  return (
    <MDBCard narrow>
      <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
        <div>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-th-large mt-0"></i>
          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-columns mt-0"></i>
          </MDBBtn>
        </div>
        <a href="#" className="white-text mx-3">Sensitivity Analysis</a>
        <div>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fas fa-pencil-alt mt-0"></i>
          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fas fa-times mt-0"></i>
          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-info-circle mt-0"></i>
          </MDBBtn>
        </div>
      </MDBCardHeader>
      <MDBCardBody cascade>
    <MDBTable responsive striped hover>
      <MDBTableHead columns={data.columns}/>
      <MDBTableBody rows={data.rows} />
    </MDBTable>
    </MDBCardBody>
    </MDBCard>
  );
}

export default Sensitivity;