import React from "react";
import "../index.css";

export default function SearchForm(props) {

  return (
    <section className="search-form">
     <form className="search-area">
       <input
       size="15"
       className="search"
       type="text"
       placeholder="Search"
       value={props.value}
       onChange={props.onChange}
       />
     </form>
    </section>
  );
}
