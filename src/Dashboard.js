import {useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import './Dashboard.css';


const Dashboard = () => {
   
  const[record,setRecord] = useState([])
  const [modeldata,setModeldata] = useState({
     id:'',
     userName:'',
     username:'',
     email:'',
     website:'',
     company:'',
     phone:''
  })
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   const getData = () =>
   {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(resposne=> resposne.json())
       .then(res=>setRecord(res))
   }
 
   useEffect(() => {
      getData();
   },[])
   
    const showDetail = (id) =>
    {
      
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response=> response.json())
      .then(res=>setModeldata(res))

      handleShow();
    }
  
    
  
    return (
    <div className="container mt-2">
        <div className="row mt-2 ">
            <div className="col-lg-1 col-md-6 col-sm-12">
            </div>  
            <div className="col-lg-11 col-md-6 col-sm-12">
              <h5 className="mt-3 mb-3 text-secondary text-center">
                Employee Data
              </h5>
                <div className=" mt-5">
                    <table className="table table-striped table-sm">
                        <thead className="thead-light">
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Website</th>
                                <th>Show Details</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                          {record.map((names,index)=>
                           <tr key={index}>
                               <td>{names.id}</td>
                              <td>{names.name}</td>
                              <td>{names.username}</td>
                              <td>{names.email}</td>
                              <td>{names.website}</td>
                              <td><button className="btn btn-primary" onClick={(e)=>showDetail(names.id)}  data-toggle="modal" data-target="#myModal">Get Details</button></td>
                           </tr>
                           )}
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
 
 
{/* 
 Model Box  */}
  

  <>
      

      <Modal show={show} onHide={handleClose} dialogClassName="mod">
        <Modal.Header closeButton>
          <Modal.Title>Row No : {modeldata.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <table class="table table-striped table" >
                        <thead class="thead-light">
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Website</th>
                                <th>company</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                           <tr >
                              <td>{modeldata.id}</td>
                              <td>{modeldata.name}</td>
                              <td>{modeldata.username}</td>
                              <td>{modeldata.email}</td>
                              <td>{modeldata.website}</td>
                              <td>{modeldata.company.name}</td>
                              <td>{modeldata.phone}</td>
                               
                           </tr>
                          
                        </tbody>
                    </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>

  


<div style={{ display: "flex", justifyContent: "center" }}>
    <Pagination >
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item active>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item disabled>{5}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{6}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
    </div>
  </div>

    )
}
 
 
export default Dashboard;