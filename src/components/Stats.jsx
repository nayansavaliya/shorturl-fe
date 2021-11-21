export default function Stats({
	...otherProps
}) {
	return (
        <div className="table-responsive" style={{height: '25rem', overflow: 'auto'}}>
            <table className="table" >
            <thead>
                <tr>
                <th>#</th>
                <th>Long Url</th>
                <th>Short Url</th>
                <th>Shortening Atempts</th>
                <th>Hits</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Anna</td>
                <td>Pitt</td>
                <td>35</td>
                <td>New York</td>
                </tr>
                
            </tbody>
            </table>
        </div>
	);
}