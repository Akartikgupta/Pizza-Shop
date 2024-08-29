// to fetch the data from mock server
export async function apiCall(URL){
   // const promise= fetch(URL); // async way
   try{
      const response=await fetch(URL);
      return response;
   }catch(err){
      throw err;
   }
   // return promise;
}