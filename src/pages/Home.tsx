import { Box, Button, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Details {
  name: string | null;
  email: string | null;
  number: number | null;
}

export default function Home() {
  const [details, setDetails] = useState<Details>({
    name: null,
    email: null,
    number: null,
  });

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(details));
    navigate("/api-data");
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component={"form"}
        onSubmit={handleSubmit}
        sx={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={handleChange}
          name="name"
          value={details.name}
          required
          type="text"
        />
        <TextField
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
          value={details.email}
          onChange={handleChange}
          name="email"
          required
          type="email"
        />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          value={details.number}
          onChange={handleChange}
          name="number"
          required
          type="number"
        />
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </Box>
    </Box>
  );
}
