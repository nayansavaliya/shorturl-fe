import React, { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import isURL from 'validator/lib/isURL';


import NavBar from './components/NavBar'
import CustomInput from './components/CustomInput'
import Stats from './components/Stats'
import{generateShortUrl,getStats} from './services/shortner'

function App() {
  const [url, setUrl] = useState({ longUrl: ''})
  const [errorDetails, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [shortUrl, setShortUrl] = useState("")
  const [stats,setstats] = useState([])



  async function statsData(){
    const result = await getStats()
    setstats(result)
  }

  useEffect( () => {
		statsData()
	}, [loading])


  const handleChange = ({ currentTarget: input }) => {
		const accountData = { ...url }
		accountData[input.name] = input.value
		setUrl(accountData)
	}

  const validate = () => {
		const errors = {}
		if (!isURL(url.longUrl)) {
			errors['longUrl'] = 'Please enter a valid URL'
      setShortUrl("")
		}
		setErrors(errors)
		if (Object.keys(errors).length === 0) {
			return true
		} else return false
	}

  async function handleSubmit() {
		if (validate()) {
			setLoading(true)
			const result = await generateShortUrl(url)
			if (!result) {
				setLoading(false)
        setShortUrl("")
			} else {
				setLoading(false)
        setShortUrl(result)
			}
		}
	}

  return (
    <React.Fragment>
			<ToastContainer/>
			<div style={{ marginTop: '5rem' }}>
        
        <NavBar/>

        <div className="container-fluid" style={{ marginLeft: '0.8rem' }}>
          <div className="row  mt-3 justify-content-center">
            <div className="col-md">
              <CustomInput
                name="longUrl"
                type="text"
                label="Long Url"
                onChange={handleChange}
                value={url.longUrl}
                errorText={errorDetails.longUrl}
                error={errorDetails.longUrl}
                autoFocus
                      />
            </div>
            <div className="col-md">
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
                      className="spinner-border spinner-border-sm text-light"
                      role="status"
                    />
                    <span>Shortning...</span>
                  </>
                ) : (
                  'Shorten'
                )}
              </button>
            </div>   
               
          </div>
         <div className="col-md" >
          <label className="h6 form-label" style={{ marginRight: '0.4rem' }}>
            {"Short Url:    "}
          </label>
            <a href={shortUrl} target="_blank" onClick={()=> statsData()}>{shortUrl}</a>
          </div>
        </div>

        <hr/>

        <Stats data={stats} handle={statsData}/>

			</div>
		</React.Fragment>
  );
}

export default App;
