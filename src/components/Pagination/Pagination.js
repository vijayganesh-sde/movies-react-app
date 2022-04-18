import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Movies from "/src/Pages/Movies/Movies";
import { page } from "/src/config.js";
export default class PaginationRounded extends React.Component {
  state = {
    pag: page
  };
  render() {
    return (
      <Stack spacing={2}>
        <Pagination
          count={10}
          onClick={() => {
            this.state.pag = this.state.pag + 1;
          }}
          variant="outlined"
          shape="rounded"
          color="primary"
        />
      </Stack>
    );
  }
}
