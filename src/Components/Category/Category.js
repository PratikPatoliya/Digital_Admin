import axios from 'axios'
import { useState, useEffect ,forwardRef} from 'react'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import Check from '@material-ui/icons/Check'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import Clear from '@material-ui/icons/Clear'
import Edit from '@material-ui/icons/Edit'
import FilterList from '@material-ui/icons/FilterList'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Remove from '@material-ui/icons/Remove'
import SaveAlt from '@material-ui/icons/SaveAlt'
import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'
import VisibilityIcon from '@material-ui/icons/Visibility'
import { AddBox } from '@material-ui/icons'
import MaterialTable from 'material-table'
import { MuiThemeProvider } from '@material-ui/core'
import Navbar from '../Navbar/Navbar'

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
    VisibilityIcon: forwardRef((props, ref) => (
      <VisibilityIcon {...props} ref={ref} />
    ))
  }

function Category() {
    const [data,setData] = useState([])

    useEffect(() => {
        
        getData()

    }, []);

    const getData = async() =>{
        const result = await axios.get("https://nodehostheroku.herokuapp.com/category")
        console.log("result",result);
        setData(result.data)

    }

    const fieldLabel = [
        { title: 'Category', field: 'category' },
        { title: 'Password', field: 'password' }
        // { title: 'Age', field: 'age' }
      ]
    return (
        <div>
            <Navbar/>
            <div className='container'>
                <MuiThemeProvider /* theme={theme} */>
                    <MaterialTable
                        icons={tableIcons}
                        title='Person Data'
                        columns={fieldLabel}
                        // tableRef={tableRef}
                        data={data}
                        options={{
                            filtering: true,
                            paging: true,
                            paginationType: 'stepped',
                            pageSize: 10,
                            actionsColumnIndex: -1,
                            pageSizeOptions: [10, 20, 30]
                        }}
                        actions={[
                            {
                                icon: VisibilityIcon,
                                tooltip: 'View',
                                onClick: (event, rowData) => {
                                    // handleShowDetails(rowData.id)
                                }
                            },
                            {
                                icon: DeleteOutline,
                                tooltip: 'Delete',
                                onClick: (event, rowData) => {
                                    // handleRemoveUser(rowData.id)
                                }
                            }
                        ]}
                    />
                </MuiThemeProvider>

            </div>
        </div>
    )
}

export default Category