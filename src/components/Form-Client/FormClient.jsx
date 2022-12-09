import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { SelectButton } from "primereact/selectbutton";
import { Button } from "primereact/button";

import "./FormClient.scss";

const FormUsuario = () => {
  const [nameUser, setNameUser] = useState("");
  const [secondName, setSecondName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telefonoUsuario, setTelefonoUsuario] = useState("");
  const [direccionUsuario, setDireccionUsuario] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [moneyCash, setMoneyCash] = useState(45);
  const [changeCash, setChangeCash] = useState("");
  const [nameCard, setNameCard] = useState("");
  const [numberCard, setNumberCard] = useState("");
  const [monthCard, setMonthCard] = useState("");
  const [ageCard, setAgeCard] = useState("");
  const [selectMethod, setSelectMethod] = useState("Tarjeta");
  const options = ["Cash", "Tarjeta"];


  return (
    <>
      <div id="usuario-card" className="usuario-card">
        <form id="form-info-client">
          <h1>Registrate! (●'◡'●)</h1>

          <div className="primer-nombre-usuario">
            <span className="p-float-label">
              <InputText
                id="username"
                nameUser={nameUser}
                onChange={(e) => setNameUser(e.target.nameUser)}
              />
              <label htmlFor="firstName">Primer Nombre</label>
            </span>
          </div>
          <div className="segundo-nombre-usuario">
            <span className="p-float-label">
              <InputText
                id="username"
                secondName={secondName}
                onChange={(e) => setSecondName(e.target.secondName)}
              />
              <label htmlFor="secondName">Segundo Nombre</label>
            </span>
          </div>
          <div className="apellido-nombre-usuario">
            <span className="p-float-label">
              <InputText
                id="username"
                lastName={lastName}
                onChange={(e) => setLastName(e.target.lastName)}
              />
              <label htmlFor="username">Apellido de Usuario</label>
            </span>
          </div>
          <div className="telefono-usuario">
            <span className="p-float-label">
              <InputText
                id="username"
                telefonoUsuario={telefonoUsuario}
                onChange={(e) => setTelefonoUsuario(e.target.telefonoUsuario)}
              />
              <label htmlFor="username">Telefono de Usuario</label>
            </span>
          </div>
          <div className="direccion-usuario">
            <span className="p-float-label">
              <InputText
                id="username"
                direccionUsuario={direccionUsuario}
                onChange={(e) => setDireccionUsuario(e.target.direccionUsuario)}
              />
              <label htmlFor="username">Direccion de Usuario</label>
            </span>
          </div>
          <div className="email-usuario">
            <span className="p-float-label">
              <InputText
                id="username"
                emailUser={emailUser}
                onChange={(e) => setEmailUser(e.target.emailUser)}
              />
              <label htmlFor="username">Email de Usuario</label>
            </span>
          </div>
        </form>
        <form className="form-payment-method">
          <h1>Metodo de Pago</h1>
          <div className="select-method">
            <SelectButton
              value={selectMethod}
              options={options}
              onChange={(e) => setSelectMethod(e.value)}
            />
          </div>
          {selectMethod === "Tarjeta" ? (
            <div className="method-card">
              <div className="name-card">
                <span className="p-float-label">
                  <InputText
                    id="username"
                    nameCard={nameCard}
                    onChange={(e) => setNameCard(e.target.nameCard)}
                  />
                  <label htmlFor="nameCard">Nombre del Propietario</label>
                </span>
              </div>
              <div className="numberCard-card">
                <span className="p-float-label">
                  <InputText
                    id="numberCard"
                    numberCard={numberCard}
                    onChange={(e) => setNumberCard(e.target.numberCard)}
                  />
                  <label htmlFor="numberCard">Numero de la Tarjeta</label>
                </span>
              </div>
              <div className="month-card">
                <span className="p-float-label">
                  <InputText
                    id="monthCard"
                    monthCard={monthCard}
                    onChange={(e) => setMonthCard(e.target.monthCard)}
                  />
                  <label htmlFor="monthCard">Mes de la Tarjeta</label>
                </span>
              </div>
              <div className="age-card">
                <span className="p-float-label">
                  <InputText
                    id="ageCard"
                    ageCard={ageCard}
                    onChange={(e) => setAgeCard(e.target.ageCard)}
                  />
                  <label htmlFor="ageCard">Año de la Tarjeta</label>
                </span>
              </div>
            </div>
          ) : (
            <div className="method-cash">
              <div className="money-Cash">
                <label htmlFor="integeronly">Ingrese el monto a pagar</label>
                <span className="p-float-label">
                  <div className="field col-12 md:col-3">
                    <InputNumber
                      inputId="integeronly"
                      value={moneyCash}
                      onValueChange={(e) => setMoneyCash(e.moneyCash)}
                    />
                  </div>
                </span>
              </div>
              <div className="change-cash">
                <span>{changeCash}</span>
              </div>
            </div>
          )}
        </form>
      </div>
      <div id="button-usuario">
        <Button
          label="Enviar"
          className="p-button-raised"
        />
      </div>
    </>
  );
};

export default FormUsuario;
