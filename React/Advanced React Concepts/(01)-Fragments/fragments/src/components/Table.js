import React from "react";
import Columns from "./Columns";

function Table() {
	return (
		<table>
			<tbody>
				<tr>
					<Columns />
					{/* If we don't use <React.Fragment> the <div> tag will be inside this <tr> tag. */}
				</tr>
			</tbody>
		</table>
	);
}

export default Table;
