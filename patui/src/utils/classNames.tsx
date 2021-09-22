type IClassNameProps = (string|{[key:string]:boolean})[]

const genClassName = (...rest:IClassNameProps) => {
    return rest.reduce((acc:string,curr)=>{
        if(typeof curr === "string"){
            return acc + " " + curr
        }else{
            return acc + Object.entries(curr).reduce((acc1,[k,v])=>{
                return v?acc1+ " "+ k :acc1
            },"")
        }
        
    },"")
}

export default genClassName