import React from 'react';


function Calculator() {
return (
    <div className="app-container d-flex flex-column flex-lg-row p-5  mx-auto">
      <div className="inputs pe-lg-5 align-self-center">
        <form id="form" action="" >
            <div className="bill-container mb-5">
              <label for="bill" className="input-label">Bill</label>
              <div className="d-flex justify-content-between bg-lighter-cyan px-3">
                <div>
                  <img src="public/icon-dollar.svg" alt="" className="" />
                </div>
                <div>
                  <input className="form-input text-end w-100 fw-700" type="number" id="bill" name="bill" Placeholder="0" required />
                </div>
              </div>
            </div>
            <div className="container mb-5">
              <label for="tips" className="input-label">Select Tip %</label>
              <div id="tip-btns" className="row row-cols-3 row-cols-md-4 justify-content-center">
                  <button className="tip-btn me-3 mb-3">5%</button>
                  <button className="tip-btn me-3 mb-3">10%</button>
                  <button className="tip-btn me-3 mb-3">15%</button>
                  <button className="tip-btn me-3 mb-3">25%</button>
                  <button className="tip-btn me-3 mb-3">50%</button>
                  <input type="number" id="tip" className="custom-tip me-3 mb-3" placeholder="custom" />
              </div>
            </div>
        </form>
      </div>
    </div>
    )
}



export default Calculator;