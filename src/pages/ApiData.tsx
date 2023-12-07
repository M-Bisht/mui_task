import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import CheckboxComp from "../components/CheckboxComp";

const columns: GridColDef[] = [
  { field: "userId", headerName: "User ID", width: 70 },
  {
    field: "id",
    headerName: "ID",
    width: 30,
  },
  {
    field: "title",
    headerName: "Title",
    width: 300,
  },
  {
    field: "body",
    headerName: "CONTENT",
    width: 1300,
  },
];

interface Api {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function ApiData() {
  const [data, setData] = useState<Api[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Box sx={{ height: 400, width: "100%" }}>
        {data && (
          <DataGrid
            rows={data}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
          />
        )}
      </Box>
      <CheckboxComp />
    </>
  );
}
