import { AuthState } from './AuthContex';

type AuthAction=
|{type:'Registrarse'}
|{type:'IconoFavorito',payload:string}
|{type:'Desconectarse'}
|{ type:'CambioUsuario',payload:string}


//Reducir estado / generar estado
export const AuthReducer=(state:AuthState,action:AuthAction):AuthState =>{
    switch (action.type) {
        case 'Registrarse':
           return {
            ...state,
            Conectado:true,
           usuario:'no-username-yet',
        };
        case'IconoFavorito':
        return {
            ...state,
            iconoFavorito:action.payload
        }
        case'Desconectarse':
        return {
            ...state,
            Conectado:false,
            usuario:undefined,
            iconoFavorito:undefined,
            
        }
        case'CambioUsuario':
        return {
            ...state,
            usuario:action.payload
            
        }
        default:
            return state;
    }
}