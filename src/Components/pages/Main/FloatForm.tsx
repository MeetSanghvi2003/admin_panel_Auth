import React, { HtmlHTMLAttributes, useEffect, useState } from "react";
import { handleFloatEvent } from "./Functional";
import Papa from "papaparse";

interface floatform {
  eventname: string;
  location: string;
  date: string;
  saledate: string;
  codetype: string;
}
const FloatForm = () => {
  const [data, setData] = useState<floatform>({
    eventname: "",
    location: "",
    date: "",
    saledate: "",
    codetype: "",
  });
  const [imprt, setImprt] = useState<unknown[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    let name = e.target.name;
    setData({ ...data, [name]: value });
  };

  const showImp = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (res) => {
        setImprt(res.data);
      },
    });
    // let show = [];
    // for (let i = 0; i < imprt.length; i++) {
    // show.push(imprt[i]);
    // }
    // console.log(show);
  };

  useEffect(() => {
    let day = new Date().toISOString().split("T")[0];
    setData({ ...data, date: day, saledate: day });
  }, []);

  return (
    <>
      {imprt.length ? "" : null}
      <div className="bg-zindex" onClick={handleFloatEvent}></div>
      <div className="float-form-wrap">
        <div className="float-form">
          <div className="float-form-upper">
            <div className="ff-heading">Add Event</div>
            <div className="import">
              <label htmlFor="import_CSV">Import CSV</label>
              <input
                type="file"
                name="import_CSV"
                accept=".csv"
                id="import_CSV"
                hidden
                onChange={showImp}
              />
            </div>
          </div>
          <div className="float-form-division">
            <span>OR</span>
          </div>
          <form>
            <div className="form-field100 form-field ">
              <div className="heading">Event Name</div>
              <input type="text" autoComplete="off" name="eventname" required />
            </div>
            <div className="form-field-wrap50">
              <div className="form-field">
                <div className="heading">Location</div>
                <input
                  type="text"
                  autoComplete="off"
                  name="location"
                  required
                />
              </div>
              <div className="form-field">
                <div className="heading">Date</div>
                <div className="date-wrap">
                  <label htmlFor="saledate">{data.date}</label>
                  <input
                    id="saledate"
                    type="date"
                    value={data.date}
                    onChange={handleChange}
                    name="date"
                    required
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="form-field">
                <div className="heading">on Sale Date</div>
                <div className="date-wrap">
                  <label htmlFor="saledate">{data.saledate}</label>
                  <input
                    id="saledate"
                    type="date"
                    value={data.saledate}
                    onChange={handleChange}
                    name="saledate"
                    required
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="form-field">
                <div className="heading">Code Type</div>
                <input
                  type="text"
                  autoComplete="off"
                  name="codetype"
                  required
                />
              </div>
            </div>
            <div className="float-form-button">
              <button
                onClick={handleFloatEvent}
                className="cancel"
                type="button"
              >
                Cancel
              </button>
              <button className="save">Save</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FloatForm;
