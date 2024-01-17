import React from 'react'

 const Block = () => {
  return (
    <div className = "">
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col">
            <div className="input-group flex-nowrap">
              <input
                type="text"
                className="form-control"
                placeholder="Enter todo here"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div className="col">
            <input type="date" name="" id="" />
          </div>
          <div className="col">
           <button type="button" className="btn btn-success">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Block
