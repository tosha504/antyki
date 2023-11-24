"use client";
import { useState, useCallback } from "react";
import Pagination from "@mui/material/Pagination";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const CustomPagination = ({ headers }) => {
  const intHeaders = parseInt(headers);
  const router = useRouter();
  // const [page, setPage] = useState(1);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  console.log(pathname);
  const handleChange = (event, value) => {
    // console.log(pathname + "?" + createQueryString("page", value));
    // setPage(value);
    router.push(pathname + "?" + createQueryString("page", value));
  };
  return (
    <>
      <h3>{new Date().getTime()}</h3>
      {intHeaders > 1 && (
        <Pagination
          className="pagination"
          variant="outlined"
          count={intHeaders}
          onChange={handleChange}
          color="primary"
        />
      )}
    </>
  );
};

export default CustomPagination;
