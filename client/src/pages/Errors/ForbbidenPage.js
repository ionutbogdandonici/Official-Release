import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";

function ForbbidenPage() {
    const navigator = useNavigate();

    return (
        <div className="">
            <div className="bg-transparent min-h-screen px-4 py-16 sm:px-6 sm:pt-64">
                <div className="max-w-max mx-auto">
                    <main className="sm:flex">
                        <p className="text-4xl font-extrabold text-blue-600 sm:text-5xl">403</p>
                        <div className="sm:ml-6">
                            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                                <h1 className="text-4xl font-extrabold text-zinc-800 tracking-tight sm:text-5xl">Page Forbbiden</h1>
                                <p className="mt-1 text-base text-zinc-500">We're sorry, you don't have access to the page you requested.</p>
                            </div>
                            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                                <Button decoration="primary" type="button" onClick={() => navigator("/")} hasIcon={true}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="-ml-1 mr-3 h-5 w-5 my-auto" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                    </svg>
                                    Go Home
                                </Button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default ForbbidenPage;
