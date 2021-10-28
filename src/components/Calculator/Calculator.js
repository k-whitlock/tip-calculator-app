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
                  <img src="images\icon-dollar.svg" alt="" className="" />
                </div>
                <div>
                  <input className="form-input text-end w-100 fw-700" type="number" id="bill" name="bill" Placeholder="0" required />
                </div>
              </div>
            </div>
        </form>
        </div>
    </div>
    )
}



export default Calculator;