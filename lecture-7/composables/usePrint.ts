export const usePrint = ()=> {
    const sayHello = (message: any)=> {
        console.log(message)
    }
    return {sayHello}
}