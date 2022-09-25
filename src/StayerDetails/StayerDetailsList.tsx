import React from 'react';
import { useTable } from 'react-table'

const StayerDetailsList = ({userDataList } : any) => {
  console.log( 'user data ' ,
  userDataList
  )
  const data = React.useMemo(
    () => userDataList,
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Address',
        accessor: 'stayerAddress',
      },
      {
        Header: 'Mobile',
        accessor: 'mobile',
      },
      {
        Header: 'Date of Arrival',
        accessor: 'dateOfArrival',
      },
      {
        Header: 'Coming From',
        accessor: 'comingForm',
      },
      {
        Header: 'Proffessional Address',
        accessor: 'proffessionalAddress',
      },
      {
        Header: 'Purpose of Visit',
        accessor: 'visitPurpose',
      },
      {
        Header: 'Address Proof',
        accessor: 'addressProof',
        Cell: (props : any) => {
          return (
          <div className="blog-comments__avatar mr-3">
            <img
              src={props.cell.value}  width={50}
            />
          </div>
        )
          }
      },
      {
        Header: 'Duration of  Stay',
        accessor: 'durationOfStay',
      },
      

      
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data } as any)

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px black' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  padding: "10px",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                  textAlign: "left",
                  backgroundColor: "#04AA6D",
                  color: "white",
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: 'solid 1px gray',
                      background: 'white',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
export default StayerDetailsList


