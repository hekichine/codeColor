import { useState } from "react";

import data from "./data";
import "./search.css";

const Search = () => {
  const [inpSearch, setInpSearch] = useState("");

  const handleCopy = (item: any) => {
    navigator.clipboard.writeText(item.name);
  };
  return (
    <>
      <section className="wrap-search mt-5 mb-5">
        <div className="container">
          <div className="row justify-content-center gy-4 gx-3">
            <div className="col-12 col-md-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Input group example"
                  aria-label="Input group example"
                  aria-describedby="basic-addon1"
                  value={inpSearch}
                  onChange={(e) => setInpSearch(e.target.value)}
                />
                <span className="input-group-text" id="basic-addon1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="result">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Code</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data
                ?.filter((item) => {
                  if (
                    item.name.toLowerCase().includes(inpSearch.toLowerCase()) ||
                    item.code.toLowerCase().includes(inpSearch.toLowerCase())
                  ) {
                    return item;
                  } else {
                    return null;
                  }
                })
                ?.map((item, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{item?.name}</td>
                    <td>{item?.code}</td>
                    <td>
                      <button
                        onClick={() => handleCopy(item)}
                        className="btn btn-primary"
                      >
                        Copy name
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </section>
    </>
  );
};
export default Search;
