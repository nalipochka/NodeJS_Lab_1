
const http = require("http");
const os = require('os');
const { url } = require("inspector");
const server =http.createServer((req, resp)=>{
    const interfaces = os.networkInterfaces();
    const adresses=[];
    
    for(let interfaceName in interfaces){
        const interface = interfaces[interfaceName];
    
        for(const interfaceInfo of interface){
            if(interfaceInfo.family === 'IPv4' && !interfaceInfo.internal){
                adresses.push(interfaceInfo.address);
            }
        }
    }
    
    resp.end(`IPv4 adresser server: ${adresses.join(', ')}`);
});

let port =3001;
server.listen(port, "127.0.0.1",()=>{
    console.log(`Server starts on ${port}`);
})

