import {useState , useEffect} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import filterFactory, { textFilter} from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import Paper from "@mui/material/Paper";


function Sql2014() {

    const [reports,setReports] =useState([]);
        const columns =[
        {dataField: 'product_version_id',
        text: 'version_id' ,
        sort: true ,
        headerAlign: 'center',
        headerStyle: (colum, colIndex) => {
            return {  backgroundColor: '#285430' , color: 'white', width: '100px', textAlign: 'center' , position: 'sticky' , top:0 };
            
        },
        style: (cell, row, rowIndex, colIndex) => {
            if (rowIndex % 2 === 0) {
            return {
                backgroundColor: '#81c784'
            };
            }
            return {
            backgroundColor: '#c8e6c9'
            };
        }
        
        },
        {dataField: 'knowledge_number', text: 'knowledge_number' , sort: true ,
        headerAlign: 'center',
        headerStyle: (colum, colIndex) => {
            return {  backgroundColor: '#285430' , color: 'white', width: '150px', textAlign: 'center' , position: 'sticky' , top:0 };
            
        },
        style: (cell, row, rowIndex, colIndex) => {
            if (rowIndex % 2 === 0) {
            return {
                backgroundColor: '#81c784'
            };
            }
            return {
            backgroundColor: '#c8e6c9'
            };
        }
    } ,
        {dataField: 'build_number', text: 'build_number' , sort: true ,
        headerAlign: 'center',
        headerAlign: 'center',
        headerStyle: (colum, colIndex) => {
            return {  backgroundColor: '#285430' , color: 'white', width: '150px', textAlign: 'center' , position: 'sticky' , top:0 };
            
        },
        style: (cell, row, rowIndex, colIndex) => {
            if (rowIndex % 2 === 0) {
            return {
                backgroundColor: '#81c784'
            };
            }
            return {
            backgroundColor: '#c8e6c9'
            };
        }
    },
        {dataField: 'file_version', text: 'file_version' , sort: true ,
        headerAlign: 'center',
        headerStyle: (colum, colIndex) => {
            return {  backgroundColor: '#285430' , color: 'white', width: '150px', textAlign: 'center' , position: 'sticky' , top:0 };
            
        },
        style: (cell, row, rowIndex, colIndex) => {
            if (rowIndex % 2 === 0) {
            return {
                backgroundColor: '#81c784'
            };
            }
            return {
            backgroundColor: '#c8e6c9'
            };
        }
    },    
        {dataField: 'release_date', text: 'release_date' , sort: true , filter: textFilter(),
        headerAlign: 'center',
        headerStyle: (colum, colIndex) => {
            return {  backgroundColor: '#285430' , color: 'white', width: '300px', textAlign: 'center' , position: 'sticky' , top:0 };
            
        },

        style: (cell, row, rowIndex, colIndex) => {
            if (rowIndex % 2 === 0) {
            return {
                backgroundColor: '#81c784'
            };
            }
            return {
            backgroundColor: '#c8e6c9'
            };
        }
    },
        {dataField: 'kb_url', text: 'kb_url' , sort: true 
        ,headerAlign: 'center',
        headerStyle: (colum, colIndex) => {
            return {  backgroundColor: '#285430' , color: 'white', width: '380px', textAlign: 'center' , position: 'sticky' , top:0 };
            
        },

        formatter: (cell, row, rowIndex, extraData) => (
            <div>
              <a href={row.kb_url}> {row.kb_url} </a>
            </div>
          )


        ,style: (cell, row, rowIndex, colIndex) => {
            if (rowIndex % 2 === 0) {
            return {
                backgroundColor: '#81c784'
            };
            }
            return {
            backgroundColor: '#c8e6c9'
            };
        }
    },
        {dataField: 'kb_detail', text: 'kb_detail' , sort: true 
        ,headerAlign: 'center',
        headerStyle: (colum, colIndex) => {
            return {  backgroundColor: '#285430' , color: 'white', width: '1300px', textAlign: 'center' , position: 'sticky' ,top:0 , jestifycontent: "center" };
            
        },
    
        style: (cell, row, rowIndex, colIndex) => {
            if (rowIndex % 2 === 0) {
            return {
                backgroundColor: '#81c784'
            };
            }
            return {
            backgroundColor: '#c8e6c9'
            };
        }
    
    },
      
    ]


        useEffect(() =>{
fetch("http://localhost:8082/release2014")
.then(response => response.json())
.then(result =>setReports(result))
.catch(error =>console.log(error));

        })
    
const pagination = paginationFactory({
  
page: 1,
sizePerPage :20,
alwaysShowAllBtns :true,
firstPageText :'<<',
lastPageText: '>>',
prePageText: '<',
nextPageText: '>',
showTotal:true,
onPageChange: function(page ,sizePerPage){
    console.log('page' ,page);
    console.log('sizePerPage' , sizePerPage);
},
onSizePerPageChange:function(page , sizePerPage){
    console.log('page' ,page);
    console.log('sizePerPage' , sizePerPage);
}

});


const CaptionElement = () => <h3 style={{ borderRadius: '0.3em', textAlign: 'center', color: 'black', border: '1px solid black', padding: '0.1em' , width:'50%' ,position: 'sticky' , top: 0 }}>Microsoft SQL Server 2014</h3>;

return (
    <Paper>
    <div class="Sqlfilter">
        <BootstrapTable 
        bootstrap4 
        keyField='product_version_id' 
        columns={columns} 
        data={reports}
        pagination={pagination}
        filter={filterFactory()}
        fixedHeader
        fixedHeaderScrollHeight="100px"
        hover
        bordered={ true }
        striped
        condensed
        caption={<CaptionElement />} 
        loading={ true } 
        />

        </div>
        </Paper>      
)
}

export default Sql2014;
