import axios from "axios";
import React, { useState, useEffect } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
const Home = () => {
  const [user, setUser] = useState([]);
  const [searchResult, setSearch] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPagelimit] = useState(4);

  const SearchData = async () => {
    try {
      console.log(searchResult);
      const res = await axios.get(
        `http://localhost:5000/users?q=${searchResult}`
      );
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // sort options

  const sortOptions = ["name", "email", "phone", "address", "status"];

  const handleSort = async (e) => {
    let value = e.target.value;
    setSortValue(value);
    try {
      const res = await axios.get(
        `http://localhost:5000/users?_sort=${value}&_order=asc`
      );
      setUser(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlefilter = async (value) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/users?status=${value}`
      );
      setUser(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const resetData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/users?_start=${0}&_end=${4}`
      );
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async (startValue, endvalue, inc) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/users?_start=${startValue}&_end=${endvalue}`
      );
      setUser(res.data);
      setCurrentPage(currentPage + inc);
    } catch (error) {
      console.log(error);
    }
  };

  const renderPagination = () => {
    if (currentPage === 0) {
      return (
        <div>
          <sapn>1</sapn>
          <button onClick={() => getData(4, 8, 4)}>Next</button>
        </div>
      );
    } else if (currentPage > pageLimit - 1 && user.length == pageLimit) {
      return (
        <div>
          <button
            onClick={() => getData((currentPage - 1) * 4, currentPage * 4, -1)}
          >
            Prev
          </button>

          <sapn>{currentPage + 1}</sapn>
          <button
            onClick={() => getData((currentPage + 1) * 4, currentPage * 2, 1)}
          >
            Next
          </button>
        </div>
      );
    }
  };

  useEffect(() => {
    getData(0, 4, 0);
  }, []);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ margin: 10 }}>
          <input
            name="searchResult"
            value={searchResult}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-primary" onClick={() => SearchData()}>
            Search
          </button>
        </div>
        <div style={{ margin: 10 }}>
          <button className="btn btn-danger" onClick={() => resetData()}>
            Reset
          </button>
        </div>

        <div style={{ margin: 10 }}>
          <select value={sortValue} onChange={handleSort}>
            <option value=""> Select values</option>
            {sortOptions.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>

        <div style={{ margin: 10 }}>
          <button className="success" onClick={() => handlefilter("Active")}>
            Active
          </button>
          <button className="primary" onClick={() => handlefilter("Inactive")}>
            InActive
          </button>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {user && user.length > 0 ? (
            user.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.address}</td>
                  <td>{data.status}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>No Data found</td>
            </tr>
          )}
        </tbody>
      </table>
      <div>{renderPagination()}</div>
    </>
  );
};

export default Home;
