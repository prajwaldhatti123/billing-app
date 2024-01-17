import React from 'react'


export default function Todo(list) {
  return (
    <div>
      <div className="">
        <div className="container text-center mt-5">
          <div className="row">
            <div className="col">
              {list.title}
            </div>
            <div className="col">
              {list.date}
            </div>
            <div className="col">
              <button type="button" className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
