import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
   
    return (
        <div className='m-0 p-0'>
       <section className="flex items-center p-16 dark:bg-gray-900 dark:text-gray-100 w-full h-[100vh]">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                        <span className="sr-only">Error</span>{
                            error?.status ? error?.status:"404"
                        }
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8 dark:text-gray-400">{
                       error?.statusText || error?.message
                    }</p>
                    <Link rel="noopener noreferrer" to={'/'} className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Back to homepage</Link>
                </div>
            </div>
        </section>
        <Helmet>
            <title>Ma Consulting- Error</title>
        </Helmet>
        </div>
    );
};

export default ErrorPage;