import React, { useReducer, useState } from "react";
export default function Customersize() {
  const [customers, setcustomers] = useState([]);
  const initialstate = {
    referanceNo: "",
    clientname: "",
    Phonenumber: "",
    Len: "",
    Shoulder: "",
    Seleves: "",
    Selevesfit1: "",
    Selevesfit2: "",
    Selevesfit3: "",
    Chest: "",
    Back: "",
    Ghera: "",
    Gala: "",
    Shalwar: "",
    Puncha: "",
    Ghair: "",
    KalarEdge: "",
    Bean: "",
    KafChurai: "",
    PattiChurai: "",
    FrontJeab: "",
    SideJeab: "",
    ShalwarJeab: "",
    Amount: "",
    Date: "",
    ReturnDate: "",
  };

  const changer = (state, action) => {
    switch (action.type) {
      case "reference":
        return { ...state, referanceNo: action.value };
      case "name":
        return { ...state, clientname: action.value };
      case "phonenumber":
        return { ...state, Phonenumber: action.value };
      case "length":
        return { ...state, Len: action.value };
      case "shoulder":
        return { ...state, Shoulder: action.value };
      case "seleves":
        return { ...state, Seleves: action.value };
      case "fit1":
        return { ...state, Selevesfit1: action.value };
      case "fit2":
        return { ...state, Selevesfit2: action.value };
      case "fit3":
        return { ...state, Selevesfit3: action.value };
      case "chest":
        return { ...state, Chest: action.value };
      case "back":
        return { ...state, Back: action.value };
      case "ghera":
        return { ...state, Ghera: action.value };
      case "gala":
        return { ...state, Gala: action.value };
      case "shalwar":
        return { ...state, Shalwar: action.value };
      case "puncha":
        return { ...state, Puncha: action.value };
      case "ghair":
        return { ...state, Ghair: action.value };
      case "kalaredge":
        return { ...state, KalarEdge: action.value };
      case "bean":
        return { ...state, Bean: action.value };
      case "kafchurai":
        return { ...state, KafChurai: action.value };
      case "pattichurai":
        return { ...state, PattiChurai: action.value };
      case "frontjeab":
        return { ...state, FrontJeab: action.value };
      case "shalwarjeab":
        return { ...state, ShalwarJeab: action.value };
      case "sidejeab":
        return { ...state, SideJeab: action.value };
      case "amount":
        return { ...state, Amount: action.value };
      case "date":
        return { ...state, Date: action.value };
      case "returndate":
        return { ...state, ReturnDate: action.value };
      case "Set":
        return { ...initialstate };
      default:
        return { ...state };
    }
  };

  const [state, dispatch] = useReducer(changer, initialstate);

  const submithandler = (e) => {
    e.preventDefault();
    if (
      state.referanceNo.length > 0 &&
      state.clientname.length > 0 &&
      state.Phonenumber.length > 0 &&
      state.Len.length > 0 &&
      state.Shoulder.length > 0 &&
      state.Seleves.length > 0 &&
      state.Selevesfit1.length > 0 &&
      state.Selevesfit2.length > 0 &&
      state.Selevesfit3.length > 0 &&
      state.Chest.length > 0 &&
      state.Back.length > 0 &&
      state.Ghera.length > 0 &&
      state.Gala.length > 0 &&
      state.Shalwar.length > 0 &&
      state.Puncha.length > 0 &&
      state.Ghair.length > 0 &&
      state.KalarEdge.length > 0 &&
      state.Bean.length > 0 &&
      state.KafChurai.length > 0 &&
      state.PattiChurai.length > 0 &&
      state.FrontJeab.length > 0 &&
      state.SideJeab.length > 0 &&
      state.ShalwarJeab.length > 0 &&
      state.Amount.length > 0 &&
      state.Date.length > 0 &&
      state.ReturnDate.length > 0
    ) {
    }
  };

  // id: key,
  // referanceNo: data[key].referanceNo,
  // clientname: data[key].clientname,
  // Phonenumber: data[key].Phonenumber,
  // Len: data[key].Len,
  // Shoulder: data[key].Shoulder,
  // Seleves: data[key].Seleves,
  // Selevesfit1: data[key].Selevesfit1,
  // Selevesfit2: data[key].Selevesfit2,
  // Selevesfit3: data[key].Selevesfit3,
  // Chest: data[key].Chest,
  // Back: data[key].Back,
  // Ghera: data[key].Ghera,
  // Gala: data[key].Gala,
  // Shalwar: data[key].Shalwar,
  // Puncha: data[key].Puncha,
  // Ghair: data[key].Ghair,
  // KalarEdge: data[key].KalarEdge,
  // Bean: data[key].Bean,
  // KafChurai: data[key].KafChurai,
  // PattiChurai: data[key].PattiChurai,
  // FrontJeab: data[key].FrontJeab,
  // SideJeab: data[key].SideJeab,
  // ShalwarJeab: data[key].ShalwarJeab,
  // Amount: data[key].Amount,
  // Date: data[key].Date,
  // ReturnDate: data[key].ReturnDate,

  return (
    <>
      <div>
        <form onSubmit={submithandler}>
          <div>
            <div>
              <label>Reference No</label>
              <input
                value={state.referanceNo}
                onChange={(e) => {
                  dispatch({ type: "reference", value: e.target.value });
                }}
                type="number"></input>
            </div>
            <div>
              <label>Client Name</label>
              <input
                value={state.clientname}
                onChange={(e) => {
                  dispatch({ type: "name", value: e.target.value });
                }}
                type="text"></input>
            </div>
            <div>
              <label>Phone Number</label>
              <input
                value={state.Phonenumber}
                onChange={(e) => {
                  dispatch({ type: "phonenumber", value: e.target.value });
                }}
                type="number"></input>
            </div>
          </div>
          <div>
            <div>
              <label>Length</label>
              <input
                value={state.Len}
                onChange={(e) => {
                  dispatch({ type: "length", value: e.target.value });
                }}
                type="number"></input>
            </div>
            <div>
              <label>Shoulder</label>
              <input
                value={state.Shoulder}
                onChange={(e) => {
                  dispatch({ type: "shoulder", value: e.target.value });
                }}
                type="number"></input>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label>Seleves</label>
              <input
                value={state.Seleves}
                onChange={(e) => {
                  dispatch({ type: "seleves", value: e.target.value });
                }}
                type="number"
                className="w-[50px]"></input>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label>Seleves fit1</label>
              <input
                value={state.Selevesfit1}
                onChange={(e) => {
                  dispatch({ type: "fit1", value: e.target.value });
                }}
                type="number"
                className="w-[50px]"></input>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label>Seleves fit2</label>
              <input
                value={state.Selevesfit2}
                onChange={(e) => {
                  dispatch({ type: "fit2", value: e.target.value });
                }}
                type="number"
                className="w-[50px]"></input>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label>Seleves fit3</label>
              <input
                value={state.Selevesfit3}
                onChange={(e) => {
                  dispatch({ type: "fit3", value: e.target.value });
                }}
                type="number"
                className="w-[50px]"></input>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label>Chest</label>
              <input
                value={state.Chest}
                onChange={(e) => {
                  dispatch({ type: "chest", value: e.target.value });
                }}
                type="number"
                className="w-[50px]"></input>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label>Back</label>
              <input
                value={state.Back}
                onChange={(e) => {
                  dispatch({ type: "back", value: e.target.value });
                }}
                type="number"
                className="w-[50px]"></input>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label>Ghera</label>
              <input
                value={state.Ghera}
                onChange={(e) => {
                  dispatch({ type: "ghera", value: e.target.value });
                }}
                type="number"
                className="w-[50px]"></input>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label>Gala</label>
              <input
                value={state.Gala}
                onChange={(e) => {
                  dispatch({ type: "gala", value: e.target.value });
                }}
                type="number"
                className="w-[50px]"></input>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label>Shalwar</label>
              <input
                value={state.Shalwar}
                onChange={(e) => {
                  dispatch({ type: "shalwar", value: e.target.value });
                }}
                type="number"
                className="w-[50px]"></input>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label>Puncha</label>
              <input
                value={state.Puncha}
                onChange={(e) => {
                  dispatch({ type: "puncha", value: e.target.value });
                }}
                type="number"
                className="w-[50px]"></input>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label>Ghair</label>
              <input
                value={state.Ghair}
                onChange={(e) => {
                  dispatch({ type: "ghair", value: e.target.value });
                }}
                type="number"
                className="w-[50px]"></input>
            </div>
          </div>
          <div className="flex justify-center gap-[40px]">
            <div className="flex flex-col gap-[10px]">
              <label>Kalar edge</label>
              <input
                value={state.KalarEdge}
                onChange={(e) => {
                  dispatch({ type: "kalaredge", value: e.target.value });
                }}
                type="number"
                className="w-[60px]"></input>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label>Bean</label>
              <input
                value={state.Bean}
                onChange={(e) => {
                  dispatch({ type: "bean", value: e.target.value });
                }}
                type="number"
                className="w-[60px]"></input>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label>Kaf churai</label>
              <input
                value={state.KafChurai}
                onChange={(e) => {
                  dispatch({ type: "kafchurai", value: e.target.value });
                }}
                type="number"
                className="w-[60px]"></input>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label>Patti churai</label>
              <input
                value={state.PattiChurai}
                onChange={(e) => {
                  dispatch({ type: "pattichurai", value: e.target.value });
                }}
                type="number"
                className="w-[60px]"></input>
            </div>
          </div>
          <div className="flex justify-center gap-[40px] items-center">
            <div className="flex flex-col gap-[10px] ">
              <label>Front Jeab</label>
              <input
                value={state.FrontJeab}
                onChange={(e) => {
                  dispatch({ type: "frontjeab", value: e.target.value });
                }}
                type="number"
                className="w-[40px]"></input>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label>Side Jeab</label>
              <input
                value={state.SideJeab}
                onChange={(e) => {
                  dispatch({ type: "sidejeab", value: e.target.value });
                }}
                type="number"
                className="w-[40px]"></input>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label>Shalwar Jeab</label>
              <input
                value={state.ShalwarJeab}
                onChange={(e) => {
                  dispatch({ type: "shalwarjeab", value: e.target.value });
                }}
                type="number"
                className="w-[40px]"></input>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label>Amount</label>
              <input
                value={state.Amount}
                onChange={(e) => {
                  dispatch({ type: "amount", value: e.target.value });
                }}
                type="number"
                className="w-[40px]"></input>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label>Date</label>
              <input
                value={state.Date}
                onChange={(e) => {
                  dispatch({ type: "date", value: e.target.value });
                }}
                type="date"
                className="w-[100px]"></input>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label>Return Date</label>
              <input
                value={state.ReturnDate}
                onChange={(e) => {
                  dispatch({ type: "returndate", value: e.target.value });
                }}
                type="date"
                className="w-[100px]"></input>
            </div>
          </div>

          <button
            onClick={submithandler}
            className="bg-gray-800 p-[20px] text-[20px]  mt-[10px] cursor-pointer w-[100%] border-none hover:bg-gray-900 hover:text-white ">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
