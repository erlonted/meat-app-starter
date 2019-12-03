import {Response} from '@angular/http'
import { Observable } from 'rxjs/Observable'

export class ErrorHandler
{

    static handleError(error : Response | any)
    {
        let errorMessage : string
        console.log(errorMessage)
        if(error instanceof Response)
            {
                errorMessage = `Error ${error.status} ao acessar  url ${error.url} - ${error.statusText}`
            }
            else
            {
                errorMessage =  error.toString();
                
            }
        

        return Observable.throw(errorMessage)
    }
}