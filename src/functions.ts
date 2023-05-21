

  export const parse = (obj: any, nameObj: string, type: string ): any => {
    if( typeof obj !== type){
        throw new Error (`${nameObj} no be ${type}`)
    }
    return obj
}


const parseId = (idFromReq: string): string => {
  if(typeof idFromReq !== 'string'){
    throw new Error ('Id should be string ')
  }
  if(idFromReq.length !== 24){
    throw new Error ('Id length should be 24 ')
  }
  return idFromReq
}

export const verifyId = (obj:string): string => {
  const id = parseId(obj)
  return id
}
