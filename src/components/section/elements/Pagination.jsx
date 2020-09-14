import React from "react";

export default function Pagination({ gotoPrevPage, gotoNextPage }) {
  return (
    <div style={{ textAlign: "center" }}>
      {gotoPrevPage && (
        <button
          type="button"
          className="btn btn-primary sigIn"
          style={{ display: "inline-block" }}
          onClick={gotoPrevPage}
        >
          Previous
        </button>
      )}
      {gotoNextPage && (
        <button
          type="button"
          className="btn btn-primary sigIn"
          style={{ display: "inline-block" }}
          onClick={gotoNextPage}
        >
          Next
        </button>
      )}
    </div>
  );
}
