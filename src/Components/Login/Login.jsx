import { useState } from "react";
import "./Login.css";
import img1 from "../assets/tabler_brand-walmart.png";
import img2 from "../assets/bg.png";
import img3 from "../assets/reg-img.png";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Login = () => {

  const navigate = useNavigate();
  const djangoHostname = import.meta.env.VITE_DJANGO_HOSTNAME;
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
    termsAccepted: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // New loading state

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true); // Set loading to true when the form is submitted
    // Prepare data for the backend
    const payload = {
      phone: formData.phone,
      password: formData.password,
    }; 

    try {
      //const response = await fetch(`${apiHostname}/api/accounts/login/`, {
      //const response = await fetch('https://wall-mart-api.onrender.com/api/accounts/login/', {
      const response = await fetch(`${djangoHostname}/api/accounts/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setSuccess("Login successful");
      navigate('/homepage')
      console.log("Form data submitted:");
    
      localStorage.setItem("token", result.token)
      localStorage.setItem("user_id", result.user_id)
      // Access the `code` property directly from the `user_invitation_code` object
      const userInvitationCode = result.user_invitation_code.code;
            
      localStorage.setItem("user_invitation_code", userInvitationCode);

      // Optionally, you can clear the form or redirect the user
    } catch (error) {
      setError("Login failed: " + error.message);
      console.error("Error:", error);
    } finally {
      setLoading(false); // Set loading to false once the request is completed
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
            <div className="py-3">
            <h2 className="text-start">Login</h2>
            <p className="text-start">Welcome back! Please login to your account.</p>
            </div>
            <form onSubmit={handleSubmit} className="">
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
              <div className="input-group my-4 position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="form-control py-3 rounded-5"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span
                  className="position-absolute top-50 end-0 translate-middle-y me-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <i className="bi bi-eye-slash"></i>
                  ) : (
                    <i className="bi bi-eye"></i>
                  )}
                </span>
              </div>
              <div className="text-start d-flex justify-content-between">
                <div>
                <input
                  type="checkbox"
                  name="termsAccepted"
                  className=""
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                />{" "}
                <span>Remember me</span>
                </div>
               
                <div>
                  <a className="text-end" href="#">
                    Forgot password?
                  </a>
                </div>
              </div>
              {error && <div className="text-danger">{error}</div>}
              {success && <div className="text-success">{success}</div>}
              <div className="regs-btn my-4 fw-bold fs-4">
                <button
                  type="submit"
                  className="w-100 rounded-5 text-light py-2 reg-btn border-0" disabled={loading} 
                >
                   {loading ? (
                    <div className="spinner-border text-light" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
              <div>
                <p>
                  Don&apos;t have an account?{" "}
                  <Link to={'/registration'} className="sub-login">
                    Sign up
                  </Link>
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

export default Login;
