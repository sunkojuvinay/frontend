//DataGrid Example Code Backup////


import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'


const Datagrid = () => {
const columns = [
 	
  { id: 'knowledge_id', headerName: 'knowledge_id', width: 150 },
    { id: 'product_version_id', headerName: 'product_version_id', width: 150 },
    { id: 'knowledge_number', headerName: 'knowledge_number', width: 150 },
    { id: 'build_number', headerName: 'build_number', width: 150 },
    { id: 'file_version', headerName: 'file_version', width: 150 },
    { id: 'release_date', headerName: 'release_date', width: 150 },
    { id: 'kb_url', headerName: 'kb_url', width: 200 },
    { id: 'kb_detail', headerName: 'kb_detail', width: 150 },
]



  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("http://localhost:8082/release2022")
      .then((data) => data.json())
      .then((data) => setTableData(data));

  }, [])

  console.log(tableData)

  return (
    <div style={{ height: 700, width: '100%' }}>
      <Datagrid
        rows={tableData}
        columns={columns}
        pageSize={12}
      />
    </div>
  )
}

export default Datagrid;


//DataTable Backup//

import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({
    rows,
    columns,
    loading,
    sx
}) => {
    const [pageSize, setPageSize] = useState(2);

    return (
        <DataGrid 
            rows={rows}
            columns={columns}
            loading={loading}
            sx={sx}
            pagination
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[2, 5, 10]}
        />
    );
};

export default DataTable;

//Table backup//

import React, { useEffect, useState } from 'react'
import DataTable from './DataTable';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'knowledge_id', width: 150 },
    { field: 'product_version_id', headerName: 'product_version_id', width: 150 },
    { field: 'knowledge_number', headerName: 'knowledge_number', width: 150 },
    { field: 'build_number', headerName: 'build_number', width: 150 },
    { field: 'file_version', headerName: 'file_version', width: 150 },
    { field: 'release_date', headerName: 'release_date', width: 150 },
    { field: 'kb_url', headerName: 'kb_url', width: 200 },
    { field: 'kb_detail', headerName: 'kb_detail', width: 150 },
];

const userTableStyles = {
    height: '800px',
    width : '600px'
};

const Release2022 = ({ onError }) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8082/release2022')
            .then((response) => response.json())
            .then((json) => setUser(json))
            .catch(() => onError())
    }, []);

<DataGrid getRowId={(row) => row.users} />

    return (
        <DataTable
            rows={user}
            columns={columns}
            loading={!user.length}
            sx={userTableStyles}
            
            
        />
    );
};

export default Release2022;

//Products Backup//

import React, { useState, useEffect } from 'react';



const Product = () => {
    const [product, setProduct] = useState([]);



   useEffect(() => {
        fetch('http://localhost:8082/product')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProduct(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);



   return (
        <div className="posts-container">
            <table class="table table-striped table-bordered table-sm">
                <thead>
                    <tr>
                        <th scope="col">Product Id</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Owner</th>
                        
                    </tr>
                </thead>
                <tbody>



                   {product.map((product) => {
                        return (



                           <tr>
                                <td>{product.product_id}</td>
                                <td>{product.product_name}</td>
                                <td>{product.product_owner}</td>
                            
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>




    );
};



export default Product;

//KnowledgeBase Backup//


import React, { useState, useEffect } from 'react';



const KnowledgeBase = () => {
    const [knowledgeBase, setKnowledgeBase] = useState([]);



   useEffect(() => {
        fetch('http://localhost:8082/release2022')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setKnowledgeBase(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);



   return (
        <div className="posts-container">
            <table class="table table-striped table-bordered table-sm">
                <thead>
                    <tr>
                        <th scope="col">Knowledge Id</th>
                        <th scope="col">product_version_id</th>
                        <th scope="col">Knowledge Number</th>
                        <th scope="col">Build Number</th>
                        <th scope="col">File Version</th>
                        <th scope="col">Release Date</th>
                        <th scope="col">Kb Url</th>
                        <th scope="col">Kb Details</th>
                        
                        
                    </tr>
                </thead>
                <tbody>



                   {knowledgeBase.map((knowledgeBase) => {
                        return (



                           <tr>
                                <td>{knowledgeBase.knowledge_id}</td>
                                <td>{knowledgeBase.product_version_id}</td>
                                <td>{knowledgeBase.knowledge_number}</td>
                                <td>{knowledgeBase.build_number}</td>
                                <td>{knowledgeBase.file_version}</td>
                                <td>{knowledgeBase.release_date}</td>
              					<td>{knowledgeBase.kb_url}</td>
                                <td>{knowledgeBase.kb_detail}</td>
                                
                            
                            
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>




    );
};



export default KnowledgeBase;


//Mui Table Example//






