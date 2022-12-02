import { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";
import { Usuario } from '../pantallas/Usuario';


//Información del context
export interface AuthState{
    Conectado:boolean;
    usuario?:string;
    iconoFavorito?:string;
}

//Estado inicial

export const authInicialState: AuthState = {
    Conectado: false,
    usuario:undefined,
    iconoFavorito:undefined,
};

//Definir el contexto
export interface AuthContextProps{
    authState:AuthState;
    Registrarse:()=>void;
    IconoFavorito: (NombreIcono: string) => void;
    Desconectarse: () => void
    CambioUsuario: (usuario: string) => void;
}

//Crear el contexto
export const AuthContext=createContext({}as AuthContextProps);


//componente proveedor de estado
export const AuthProvider =({children}:any)=>{
    
    const [authState, dispatch] = useReducer(AuthReducer, authInicialState);
    
    const Registrarse = ()=>{
        dispatch({type:'Registrarse'});
    };
    
    const IconoFavorito=(NombreIcono:string)=>{
        dispatch({type:'IconoFavorito',payload:NombreIcono})
    }
    const Desconectarse =()=>{
        dispatch({type:'Desconectarse'});
    }
    const CambioUsuario =(usuario:string)=>{
        dispatch({type:'CambioUsuario',payload:usuario});
    }
    return (
        <AuthContext.Provider value={{
            authState,
            Registrarse,
            IconoFavorito,
            Desconectarse,
            CambioUsuario,
        }}>
            {children}
        </AuthContext.Provider>
    )
}