import React from "react";

export const ReposItem = ({ repo: { name, html_url } }) => {
  return (
    <tr>
      <td>
        <a href={html_url}> {name} </a>
      </td>
    </tr>
  );
};

export default ReposItem;
