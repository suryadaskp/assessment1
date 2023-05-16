import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  var [details, setDetails] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response.data);
      setDetails(response.data);
    });
  });
  return (
    <div style={{ paddingTop: "100px" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "green" }}>ID</TableCell>
              <TableCell style={{ color: "green" }}>TITLE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {details.map((value, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{value.id}</TableCell>
                  <TableCell>{value.title}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
