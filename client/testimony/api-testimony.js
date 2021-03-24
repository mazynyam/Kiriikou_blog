const create = async(  testimony)=>{
    try {
        let response = await fetch('/api/testimony/create',{
           method:'POST',
           headers:{
               'Accept':'application/json',
               'Content-Type': 'application/json'
           },
           body:JSON.stringify(testimony)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const list = async(signal)=>{
    try{
        let response = await fetch('/api/testimony', {
            method:'GET',
            signal:signal
        })
        return response.json()
    }
    catch(err){
        console.log(err)
    }
}

const remove = async(params, credentials)=>{
    try {
      let response = await fetch('/api/testimony/'+params.testimonyId,{
          method:'DELETE',
          headers:{
              'Accept':'application/json',
              'Content-Type':'application/json',
              'Authorization':'Bearer '+ credentials.t
          }
      })
      return response.json()  
    } catch (err) {
        console.log(err)
    }
}

const listByOwner = async(params, credentials, signal)=>{
    try {
        let response = await fetch('/api/testimony/'+params.userId, {
          method: 'GET',
          signal: signal,
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + credentials.t
          }
        })
        return response.json()
      }catch(err){
        console.log(err)
      }
}