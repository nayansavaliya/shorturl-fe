export default function Stats({
    data,
    handle
}) {
    
    if(!data){
        return(
            <div>
            </div>
        )
    }
	return (
        <>
        
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
               
                {
                    data.map(
                
                        (stat, index) => {
                            return(
                                <tr key = {index+1}>
                                <td>{index+1}</td>
                                <td>{stat.longUrl}</td>
                                <td><a href={stat.shortUrl} target="_blank" onClick={()=>handle()}>{stat.shortUrl}</a></td>
                                <td>{stat.shorteningAtempts}</td>
                                <td>{stat.hits}</td>
                                </tr>
                            );
                        }
                    )
                }
            </tbody>
            </table>
        </div>
        </>
	);
}