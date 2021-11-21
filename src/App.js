import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { NavLink } from 'react-router-dom'


import NavBar from './components/NavBar'
import CustomInput from './components/CustomInput'
import Stats from './components/Stats'

function App() {
  const [url, setUrl] = useState({ longUrl: ''})
  const [errorDetails, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const handleChange = ({ currentTarget: input }) => {
		const accountData = { ...url }
		accountData[input.name] = input.value
		setUrl(accountData)
	}

  async function handleSubmit() {
		// if (validate()) {
		// 	setLoading(true)
		// 	const success = await login(account)
		// 	if (!success) {
		// 		setLoading(false)
		// 	} else {
		// 		// history.replace('/home')
		// 		const { state } = props.location
		// 		window.location = state ? state.from.pathname : '/dashboard'
		// 	}
		// }
	}

  return (
    <React.Fragment>
			<ToastContainer />
			<div style={{ marginTop: '5rem' }}>
        
        <NavBar/>

        <div className="container-fluid" style={{ marginLeft: '0.8rem' }}>
          <div className="row  mt-3 justify-content-center">
            <div class="col-md">
              <CustomInput
                name="email"
                type="email"
                label="Long Url"
                onChange={handleChange}
                value={url.longUrl}
                errorText={errorDetails.longUrl}
                error={errorDetails.longUrl}
                autoFocus
                      />
            </div>
            <div class="col-md">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={(e) => {
                  handleSubmit(e)
                }}
                style={{ marginTop: '1.8rem' }}
              >
                {' '}
                {loading ? (
                  <>
                    <div
                      class="spinner-border spinner-border-sm text-light"
                      role="status"
                    />
                    <span>Signing In...</span>
                  </>
                ) : (
                  'Shorten'
                )}
              </button>
            </div>   
                
          </div>
          <div class="col-md">
          <label className="h6 form-label" style={{ marginRight: '0.4rem' }}>
            {"Short Url:    "}
          </label>
            <a href="https://pngtree.com/so/link" target="_blank">https://pngtree.com/so/link</a>
          </div> 
        </div>

        <hr/>

        <Stats/>

			</div>
		</React.Fragment>
  );
}

export default App;
