import { useState, useEffect, forwardRef } from 'react'
import axios from 'axios';
import Navbar from '../Components/Navbar/Navbar';
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
import { AddBox, EditRounded, } from '@material-ui/icons'
import MaterialTable from 'material-table'
import { MuiThemeProvider } from '@material-ui/core'
import { ToastContainer, toast } from 'react-toastify';

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

function DashboardPage() {
  const [user, setUser] = useState([]);
  const [reloadListing, setReloadListing] = useState(0)
  useEffect(() => {
    loadUser();
  }, [])

  const loadUser = async () => {
    const res = await axios.get("https://nodehostheroku.herokuapp.com/register")
    setUser(res.data.data)
    console.log("ressssss", res.data.data);

  }




  const fieldLabel = [
    { title: 'Mobile No.', field: 'mobile_number' },
    { title: 'Password', field: 'password' }
  ]

  const handleRemoveUser = (id) => {
    console.log("idddd", id);
    const userRecord = user.filter(item => item._id !== id)
    setUser(userRecord)
    axios
      .delete(`https://nodehostheroku.herokuapp.com/register/${id}`)
      .then(res => {
        if (res && res.status === 200) {
          toast.success('User Delete Successfully.')
          loadUser()
          setReloadListing(reloadListing + 1)
        }
      })
      .catch(error => {
        console.log('error', error)
        toast.error('User Delete Successfully.')
      })
  }

  const handleShowDetails = (id) => {
    console.log("idd", id);

  }

  

  return (
    <div>
      <Navbar />
      <div className='container mt-3'>
        <ToastContainer />
        <MuiThemeProvider /* theme={theme} */>
          <MaterialTable
            key={reloadListing}
            icons={tableIcons}
            title='Person Data'
            columns={fieldLabel}
            // tableRef={tableRef}
            data={user}
            options={{
              filtering: true,
              paging: true,
              paginationType: 'stepped',
              pageSize: 5,
              actionsColumnIndex: -1,
              pageSizeOptions: [10, 20, 30]
            }}
            
            actions={[
              {
                icon: VisibilityIcon,
                tooltip: 'View',
                onClick: (event, rowData) => {
                  handleShowDetails(rowData._id)
                }
              },
              {
                icon: EditRounded,
                tooltip: 'Edit',
                onClick: (event, rowData) => {
                  handleShowDetails(rowData._id)
                }
              },
              {
                icon: DeleteOutline,
                tooltip: 'Delete',
                onClick: (event, rowData) => {
                  handleRemoveUser(rowData._id)
                }
              }
            ]}
          />
        </MuiThemeProvider>


      </div>
    </div>
  )
}

export default DashboardPage