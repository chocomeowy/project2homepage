import { useState, useEffect } from "react";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const AirTable = () => {
  const [table, setTable] = useState([]);
  const classes = useStyles();
  const API = `${process.env.REACT_APP_AIRTABLE_API}`;
  const url = `https://api.airtable.com/v0/appMw0i0ehMs73HRt/Table%201?api_key=${API}`;
  useEffect(() => {
    const APIcall = () => {
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Bad Response from Server");
        })
        .then((data) => {
          setTable(data);
          //console.log(data);
          //console.log(data.records[1].fields);
          // console.log(data.records[2].fields);
        })
        .catch((error) => {
          setTable(error);
        });
    };
    APIcall();
  }, [url]);
  //console.log(table.records, "records");
  //console.log(table?.records, "asdasdas");
  const test = table?.records;
  // //console.log("test", test);
  // let item = test?.map((tables) => {
  //   return (
  //     <>
  //       <div>
  //         {tables.fields.Name} - {tables.fields.Notes}
  //       </div>
  //       <div></div>
  //     </>
  //   );
  // });

  //  {
  //   return;
  //   <li>{tables.fields.Name}</li>;
  // });
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Note</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {test?.map((tables, index) => (
              <TableRow key={tables.fields.ID}>
                <TableCell>{tables.fields.Name}</TableCell>
                <TableCell>{tables.fields.Notes}</TableCell>
                <TableCell>{tables.fields.Status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div>
        <iframe
          className="airtable-embed"
          src="https://airtable.com/embed/shrNNg8FB0rOZAk3h?"
          backgroundcolor="cyan"
          viewcontrols="on"
          frameBorder="0"
          width="100%"
          height="533"
          style={{ background: "transparent" }}
        ></iframe>
      </div>
    </>
  );
};

export default AirTable;
