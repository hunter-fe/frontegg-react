import React, { useState } from 'react'


import { FronteggProvider, } from "@frontegg/react";
import App from './App';
import { login } from '@frontegg/rest-api/dist/auth';
const contextOptions = {
  // baseUrl: "https://demo1.frontegg.com",
  baseUrl: "https://kakibaleben.stg.frontegg.com"
};
const headerImage =
  "https://assets.frontegg.com/public-frontegg-assets/acme-logo.svg";
const themeOptions = {
  adminBox: {
    fullScreenMode: true
  }
  
}
const Ex
= () => {

    return (
        <FronteggProvider
        contextOptions={contextOptions}
        headerImage={headerImage}
        themeOptions={themeOptions}
        // authOptions={{routes: {authenticatedUrl: '/cool-dashboard'}}} 
        // customLoginBox={true}
      >
          <App></App>
      </FronteggProvider>
    )
}

export default Ex

