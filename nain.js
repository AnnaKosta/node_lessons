/*console.log("this is main");

const func=require('./function.js');

console.log(func(8));*/

/*const fs=require('fs');
const text=fs .readFileSync('./text.txt');
console.log(decodeURIComponent(text));*/

/*const fs=require('fs');
console.log('start');

fs.readFile('./text.txt', function(err, data){
    if(err)console.log(err);
    console.log(decodeURIComponent(data));
});
console.log('end');*/



/*Create server*/

/*var http = require('http');// kmiacnenq server@
const fs=require('fs');


http.createServer((req, res) =>{//tvyalner xrkel stanal
    res.writeHead(200, {'Content-Type': 'text/html'});

    console.log(req.url);
    /*res.write('<h1>Hello World!</h1>'); */
    /*fs.readFile('index.html', 'utf8', (err, data)=>{
        res.write(data);
    res.end();})*/





 /* const http = require ('http');

const fs = require ('fs');


http.createServer( (req, res) => {
    
    res.writeHead(200, {'Content_Type':'text/html'
});

if (req.url === '/' ) {
    fs.readFile ('index.html', 'utf-8', (err,data)=> {
        res.write(data);
        res.end();
     })
    }
    
      else   if (req.url ==='/contact'){
        fs.readFile ('contact.html', 'utf-8', (err,data)=> {
            res.write(data);
             res.end();
          
         });

    } else if (req.url ==='/news'){
        fs.readFile ('news.html', 'utf-8', (err,data)=> {
            res.write(data);
             res.end();
            
    })
}



 else  {
     res.writeHead(404, {'Content-Type': 'text/html'});
      res.end("<h1 >404 Page not found</h1>");
 }
*/

//res.write(' <h1> hello </h1>');
    //res.end();
/*}).listen(8080);*/





/*const http = require ('http');

const fs = require ('fs');


http.createServer( (req, res) => {
    
    res.writeHead(200, {'Content_Type':'text/html'
});
switch(req.url){
    case '/':
            fs.readFile ('index.html', 'utf-8', (err,data)=> {
                res.write(data);
                res.end();
                });
                break;


      case '/news':
                       
            fs.readFile ('news.html', 'utf-8', (err,data)=> {
                res.write(data);
                res.end();)}
                break;

                case '/contact':
                        fs.readFile ('contac.html', 'utf-8', (err,data)=> {
                            res.write(data);
                            res.end();
                            break;     
         default:
         res.writeHead(404, {'Content-Type': 'text/html'});
         res.end("<h1 >404 Page not found</h1>");    */
         
         
         /*const http = require ('http');

         const fs = require ('fs');

function sendData(res,data, statusCode=500)
{
    res.writeHead(statusCode,{'Content-Type': 'text/html'});
}

         function senddataToClient(res, fileName='index.htm', statuscode)
         {
            

             fs.readFile (fileName, 'utf-8', (err,data)=> {

                if(err){
                   
                    return sendData(res,'<h1>500eror</h1>');
                }
               sendData(res, data,statuscode);

                
             })
        }

        http.createServer((req, res)=>{
            switch(req.url){

                case '/':
                    senddataToClient(res, 'index.html',200);
                    break;
                    case '/news':
                            senddataToClient(res);
                            break;    
                            case '/contact':
                                    senddataToClient(res, 'contact.html');
                                    break;
                                    
                                    default:
                                        senddataToClient(res, '404.html');
        }}).listen(8080);
                             



*/
                           
const http = require ('http');

const url=require('url');
const fs = require ('fs');
http.createServer((req, res)=>{
    res.writeHead(200);
const data=url.parse(req.url, true).query;
//-console.log(req.url);

console.log(data.name);

    //res.write('TEST');


    if (req.url === '/?page=home' ) {
        fs.readFile ('index.html', 'utf-8', (err,data)=> {
            res.write(data);
            res.end();
         })
        }
        
    
    
    
    
 


   
    
}).listen(8080);





  