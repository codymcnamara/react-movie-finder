import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = ()=> {
    const error = useRouteError();
    let errorMessage: string;
  
    if (isRouteErrorResponse(error)) {
      errorMessage = error.data || error.statusText;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    } else {
      console.error(error);
      errorMessage = 'Unknown error';
    }
    console.log(error);
    
    return(
        <>
            <h1>Error</h1>
            <div>{errorMessage}</div>
        </>
    )
}
export default ErrorPage;