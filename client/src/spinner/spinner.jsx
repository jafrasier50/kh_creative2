import React from "react";

export const Spinner = () => (
  <div className="loader-wrapper">
    <div className="triangle-wrapper">
      <div className="triangle triangle-1">
        {" "}
        <svg className="triangle-svg" viewBox="0 0 140 141">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <polygon className="triangle-polygon" points="70 6 136 138 4 138" />
          </g>
        </svg>
      </div>
      <div className="triangle triangle-2">
        {" "}
        <svg className="triangle-svg" viewBox="0 0 140 141">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <polygon className="triangle-polygon" points="70 6 136 138 4 138" />
          </g>
        </svg>
      </div>
      <div className="triangle triangle-3">
        {" "}
        <svg className="triangle-svg" viewBox="0 0 140 141">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <polygon className="triangle-polygon" points="70 6 136 138 4 138" />
          </g>
        </svg>
      </div>
      <div className="triangle triangle-4">
        {" "}
        <svg className="triangle-svg" viewBox="0 0 140 141">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <polygon className="triangle-polygon" points="70 6 136 138 4 138" />
          </g>
        </svg>
      </div>
      <div className="triangle triangle-5">
        {" "}
        <svg className="triangle-svg" viewBox="0 0 140 141">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <polygon className="triangle-polygon" points="70 6 136 138 4 138" />
          </g>
        </svg>
      </div>
      <p className="triangle-loading">Loading</p>
    </div>
  </div>
);
