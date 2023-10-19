import React, { useRef } from "react"
import { Link } from "react-router-dom"
import * as API from './servicios/servicios'
import { useState } from "react"

export function RegistroUsuario() {

  const [mensajeExito, setMensajeExito] = useState('')
  const [mensajeError, setMensajeError] = useState('')

  const emailRef = useRef();
  const userRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();
  
  const guardar_usuario = (e)=>{
    e.preventDefault();
  console.log('Llama a la funcion correctamente')
  const textInput = userRef.current.value;
  const textInput2 = passwordRef.current.value;
  const textInput3 = password2Ref.current.value;
  const textInput4 = emailRef.current.value;
  console.log('lo que está en el text input es ', textInput, textInput2, textInput4)
  
  const enviarInputText = {
    email: textInput4,
    nickname: textInput,
    password: textInput2
  }
      
//funcion para matchear contraseñas//



//funcion para matchear contraseñas//
    if(Object.keys(enviarInputText).length > 0){
          if(textInput2===textInput3){
          console.log(enviarInputText)
          const res = API.RegistrarUsuario(enviarInputText);
          console.log('llega hasta aca')
          setMensajeExito('Se creó el usuario correctamente')
          setTimeout(()=>{
            setMensajeExito('');
            window.location.reload(true);
          }, 5000)

        }else{
          setMensajeError('las contraseñas no coinciden')
          setTimeout(()=>{
            setMensajeError('');
          }, 3000)
        }
    }
}

      return (
        <>
        <div className="carta">
                <div className="cartacabeza">
                <h1 className="titulito1">Nuevo Login</h1>
                </div>
              
              
        <div className="cartacuerpo">

        {
          mensajeError?
          <div className="alert alert-warning" role="alert">{mensajeError}</div>
          :''
        }

        {
          mensajeExito?
          <div className="alert alert-success" role="alert">{mensajeExito}</div>
          :''
        }
              
            <form id='formita' onSubmit={()=>guardar_usuario($event)}>
                

                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input required type="text" ref={emailRef} name="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>

                <div className="form-group">
                  <label htmlFor="">Nombre de Usuario</label>
                  <input required type="text" ref={userRef} name="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
  
                <div className="form-group">
                  <label htmlFor="">Contraseña</label>
                  <input required type="password" ref={passwordRef} name="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>

                <div className="form-group">
                  <label htmlFor="">Repetir contraseña</label>
                  <input required type="password" ref={password2Ref} name="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>

                <div className="form-group">
                  <button form="formita" onClick={guardar_usuario} className="btn btn-primary">Guardar Usuario</button>
                  <Link to={'/abogadosadmin'}><button type="button" className="btn btn-secondary">Volver al Inicio</button></Link>
                </div>

                </form>
   
  
        </div>
  

  
  
            <div className="card-footer text muted"></div>
  
        </div>
        </>
        )
  }