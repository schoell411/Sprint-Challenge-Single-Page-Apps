import React from "react";

export default function SearchForm(props) {
 
  return (
    <section className="search-form">
     <form>
       <input
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
