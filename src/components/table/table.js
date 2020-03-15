import React from 'react';
import axios from 'axios';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import "./table.css"

class Table extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            posts: []
          }
    }

  componentDidMount(){
    const posts = axios.get("https://jsonplaceholder.typicode.com/posts").
    then(res => console.log(res)).
    catch(err => console.log(err))
    this.setState({
      posts
    });
  }

  render() {
        const columns = [
            {
                Header: "User ID",
                accessor: "userId"
            },
            {
                Header: "ID",
                accessor: "id"
            },
            {
                Header: "Title",
                accessor: "title"
            },
            {
                Header: "Content",
                accessor: "body"
            },
        ]

      return (
            <ReactTable
            columns={columns}
            >
                
              </ReactTable>
      );
  }
}

export default Table;