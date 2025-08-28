import React from "react";
import Navbar2 from "../components/Navbar2/Navbar2";
import Footer from "../components/Footer/Footer";
import "./Login.css";

function Login() {
  return  (
<>
<Navbar2 />
<div className="login-page">
  <div className="login-modal" dir="rtl">
    <div className="login-container">
      <h2 className="login-title">تسجيل الدخول</h2>
      <div className="login-fields">
        <div className="login-input">
          <span className="login-placeholder">رقم الجوال</span>
        </div>
        <div className="login-input">
          <span className="login-placeholder">كلمة المرور</span>
        </div>
      </div>
      <button className="login-submit">التالي</button>
    </div>
  </div>
</div>
</>




    
  ) 
}

export default Login;
