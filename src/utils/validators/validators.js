export const required =(value)=>{
        if(value) return undefined
        return 'Field is reguired'
}

export const maxLengthCreator =(maxLength)=>(value)=>{
    if(value.length>maxLength) return `Max length is ${maxLength} sumbols`
    return undefined
}