const responseErrorApiCall = (errorRes: any) => {
  switch (errorRes.code) {
    case 401:
      return Promise.reject(errorRes.message);
      break;
    // case 'ORDER-UPDATE_FAILED':
    //   return Promise.reject(errorRes.message);
    //   break;
    // case 'CLAIM-INVALID':
    //   return Promise.reject(errorRes.message);
    //   break;
    // case 'PRICE_UNCAUGHT':
    //   return Promise.reject(errorRes.message);
    //   break;
    // case 'ITEM_BUNDLING-COMPOSITION_UNREGISTERED':
    //   return Promise.reject(errorRes.message);
    //   break;
    // case 'ORDER-INVALID_PROGRESS':
    //   return Promise.reject(errorRes.message);
    //   break;
    // case 'ORDER-RECEIPT_FAILED':
    //   return Promise.reject(errorRes.message);
    //   break;
    // case 'ORDER-UPDATE_NOT_ALLOWED':
    //   return Promise.reject(errorRes.message);
    //   break;
    // case 'INVOICE-GENERATE_FAILED':
    //   return Promise.reject(errorRes.message);
    //   break;
    // case 'INVOICE-UPDATE_FAILED':
    //   return Promise.reject(errorRes.message);
    //   break;
    // case 'PAYMENT-FAILED':
    //   return Promise.reject(errorRes.message);
    //   break;
    // case 'PAYMENT-INSUFFICIENT':
    //   return Promise.reject(errorRes.message);
    //   break;
    // case 'AUTH-FAILED':
    //   return Promise.reject(errorRes.message);
    //   break;
    // case 'CREDENTIAL-OLD':
    //   return Promise.reject(errorRes.message);
    //   break;
    // case 'INVALID_REQUEST':
    //   return Promise.reject(errorRes.message);
    //   break;
    default:
      return Promise.reject(errorRes.message);
      break;
  }
};

export default responseErrorApiCall;
