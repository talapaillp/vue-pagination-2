export default ()=>{
    return {
        format: true,
        chunk: 10,
        chunksNavigation:'scroll',
        edgeNavigation: false,
        theme:'semantic',
        texts:{
            count:'Showing {from} to {to} of {count} records|{count} records|One record',
            first:'First',
            last:'Last'
        }
    }
}