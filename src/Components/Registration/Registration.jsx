import { useState } from 'react';
import "./registration.css";
import img1 from "../assets/tabler_brand-walmart.png";
import img2 from '../assets/bg.png';
import img3 from '../assets/reg-img.png';


const Registration = () => {

  const apiHostname = process.env.REACT_APP_API_HOSTNAME2;
  const [formData, setFormData] = useState({
    phone: '',
    password: '',
    confirmPassword: '',
    withdrawalPassword: '',
    invitationCode: '',
    termsAccepted: false,
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!formData.termsAccepted) {
      setError('You must accept the terms and conditions');
      return;
    }

    setError('');
    setSuccess('');

    // Prepare data for the backend
    const payload = {
      phone: formData.phone,
      password: formData.password,
      withdrawalPassword: formData.withdrawalPassword,
      invitationCode: formData.invitationCode,
    };

    try {
      //const response = await fetch(`${http://127.0.0.1:9090}/api/accounts/users/}`, {
      // const response = await fetch(`${apiHostname}/api/accounts/users/`, {
      const response = await fetch('https://wall-mart-api.onrender.com/api/accounts/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setSuccess('Registration successful');
      console.log('Form data submitted:', result);
      // Optionally, you can clear the form or redirect the user
    } catch (error) {
      setError('Registration failed: ' + error.message);
      console.error('Error:', error);
    }
  };

  return (
    <div className="container-fluid header">
      <section className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 text-center mt-5">
            <div>
              <img src={img1} alt="icon" />
            </div>
            <h2>Create your Account</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="tel"
                  name="phone"
                  className="form-control py-3 rounded-5 my-4"
                  placeholder="+234| Enter your number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  className="form-control py-3 rounded-5 my-4"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control py-3 rounded-5 my-4"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="password"
                  name="withdrawalPassword"
                  className="form-control py-3 rounded-5 my-4"
                  placeholder="Set withdrawal password"
                  value={formData.withdrawalPassword}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="invitationCode"
                  className="form-control py-3 rounded-5 my-4"
                  placeholder="Enter invitation code"
                  value={formData.invitationCode}
                  onChange={handleChange}
                />
              </div>
              <div className="text-start">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  className=""
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                />{" "}
                <span>
                  By logging in you agree to our{" "}
                  <a href="#" className="terms">
                    Terms of use & Privacy Policy
                  </a>
                </span>
              </div>
              {error && <div className="text-danger">{error}</div>}
              {success && <div className="text-success">{success}</div>}
              <div className="regs-btn my-4 fw-bold fs-4">
                <button type="submit" className="w-100 rounded-5 text-light py-2 reg-btn border-0">
                  Register
                </button>
              </div>
              <div>
                <p>
                  Already have an account?{" "}
                  <a href="#" className="sub-login">
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 d-none d-md-block">
            <div className="container reg-con">
              <img src={img2} alt="" className="img-fluid vh-100 img-reg-1" />
              <img src={img3} alt="" className="img-fluid img-reg-2" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;