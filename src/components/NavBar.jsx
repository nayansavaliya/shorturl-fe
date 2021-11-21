


import logoImage from './../assets/img/logo.png'


export default function Stats({
	...otherProps
}) {
	return (
        <nav
          className="navbar navbar-expand-lg fixed-top navbar-light "
          style={{
            width: '100%',
            boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16)',
            backgroundColor: 'whitesmoke',
          }}
        >
          <div className="container-fluid">
            <div className="navbar-brand text-dark" to="#">
              <img src={logoImage} alt="" width="30rem" height="30rem" />
              {' shortUrl'}
            </div>
          </div>
        </nav>
	);
}