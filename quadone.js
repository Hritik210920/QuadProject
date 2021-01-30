const https = require('https');
const express = require('express');
const app = express();
app.use(express.static('./static'));
const fs = require('fs');

https.get('https://api.wazirx.com/api/v2/tickers' , res =>{
    var data = ' ';
    res.on('data',chunk=>{
        data += chunk;
        
    })
    
    res.on('end',()=>{
        fs.writeFile('./sample.json',data,err=>{
            if(err) throw err;
        })
    })
})

const data = require('./sample.json');
const t = Object.entries(data);






const x = `<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:white;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:20px 20px;word-break:normal;}
.tg th{border-color:white;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:20px 20px;word-break:normal;}
.tg .tg-fuxe{border-color:white;font-size:18px;text-align:left;vertical-align:top}
.tg .tg-0pky{border-color:white;text-align:left;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
.tr{border-color:white;}
table{
  display:flex;
  justify-content:center;
  align-items:center;
  min-height:120vh;
}
*
{
  background:black;
  color:white;
}
a
{
  position :relative;
  left:400px;
  top:50px;
  color:#3cc5c0;
  text-decoration:none;
}
p
{
  position :relative;
  left:400px;
  top:50px;
}
p span
{
  color:#3cc5c0;
}
#connect
{
  padding:5px;
  border-radius:10px;
  background-color:#3cc5c0;
  color:black;
  position:relative;
  left:900px;
  top:-20px;
}
</style>
<body>
<h1><a href="#">HOLDINFO.com</a></h1>
<p>Powered By <span>Finterest</span></p>
<h3><a id="connect" href="#">Connect Telegram</a></h3>
<table class="tg">

<tbody>
<tr>
    <th class="tg-fuxe">#</th>
    <th class="tg-0pky">Name</th>
    <th class="tg-0lax">Last</th>
    <th class="tg-0lax">Buy/Sell</th>
    <th class="tg-0lax">Volume</th>
    <th class="tg-0lax">Base_Unit</th>
  </tr>
  
 
    <tr>
    <td class="tg-fuxe">1</td>
    <td class="tg-0pky">`+t[0][1].name+`</td>
    <td class="tg-0lax">`+t[0][1].last+`</td>
    <td class="tg-0lax">`+t[0][1].buy+'/'+t[0][1].sell+`</td>
    <td class="tg-0lax">`+t[0][1].volume+`</td>
    <td class="tg-0lax">`+t[0][1].base_unit+`</td>
  </tr>
      <tr>
    <td class="tg-fuxe">2</td>
    <td class="tg-0pky">`+t[1][1].name+`</td>
    <td class="tg-0lax">`+t[1][1].last+`</td>
    <td class="tg-0lax">`+t[1][1].buy+'/'+t[0][1].sell+`</td>
    <td class="tg-0lax">`+t[1][1].volume+`</td>
    <td class="tg-0lax">`+t[1][1].base_unit+`</td>
  </tr>
      <tr>
    <td class="tg-fuxe">3</td>
    <td class="tg-0pky">`+t[2][1].name+`</td>
    <td class="tg-0lax">`+t[2][1].last+`</td>
    <td class="tg-0lax">`+t[2][1].buy+'/'+t[0][1].sell+`</td>
    <td class="tg-0lax">`+t[2][1].volume+`</td>
    <td class="tg-0lax">`+t[2][1].base_unit+`</td>
  </tr>
      <tr>
    <td class="tg-fuxe">4</td>
    <td class="tg-0pky">`+t[3][1].name+`</td>
    <td class="tg-0lax">`+t[3][1].last+`</td>
    <td class="tg-0lax">`+t[3][1].buy+'/'+t[0][1].sell+`</td>
    <td class="tg-0lax">`+t[3][1].volume+`</td>
    <td class="tg-0lax">`+t[3][1].base_unit+`</td>
  </tr>
      <tr>
    <td class="tg-fuxe">5</td>
    <td class="tg-0pky">`+t[4][1].name+`</td>
    <td class="tg-0lax">`+t[4][1].last+`</td>
    <td class="tg-0lax">`+t[4][1].buy+'/'+t[0][1].sell+`</td>
    <td class="tg-0lax">`+t[4][1].volume+`</td>
    <td class="tg-0lax">`+t[4][1].base_unit+`</td>
  </tr>
      <tr>
    <td class="tg-fuxe">6</td>
    <td class="tg-0pky">`+t[5][1].name+`</td>
    <td class="tg-0lax">`+t[5][1].last+`</td>
    <td class="tg-0lax">`+t[5][1].buy+'/'+t[0][1].sell+`</td>
    <td class="tg-0lax">`+t[5][1].volume+`</td>
    <td class="tg-0lax">`+t[5][1].base_unit+`</td>
  </tr>
      <tr>
    <td class="tg-fuxe">7</td>
    <td class="tg-0pky">`+t[6][1].name+`</td>
    <td class="tg-0lax">`+t[6][1].last+`</td>
    <td class="tg-0lax">`+t[6][1].buy+'/'+t[0][1].sell+`</td>
    <td class="tg-0lax">`+t[6][1].volume+`</td>
    <td class="tg-0lax">`+t[6][1].base_unit+`</td7
  </tr>
      <tr>
    <td class="tg-fuxe">8</td>
    <td class="tg-0pky">`+t[7][1].name+`</td>
    <td class="tg-0lax">`+t[7][1].last+`</td>
    <td class="tg-0lax">`+t[7][1].buy+'/'+t[0][1].sell+`</td>
    <td class="tg-0lax">`+t[7][1].volume+`</td>
    <td class="tg-0lax">`+t[7][1].base_unit+`</td>
  </tr>
      <tr>
    <td class="tg-fuxe">9</td>
    <td class="tg-0pky">`+t[8][1].name+`</td>
    <td class="tg-0lax">`+t[8][1].last+`</td>
    <td class="tg-0lax">`+t[8][1].buy+'/'+t[0][1].sell+`</td>
    <td class="tg-0lax">`+t[8][1].volume+`</td>
    <td class="tg-0lax">`+t[8][1].base_unit+`</td>
  </tr>
      <tr>
    <td class="tg-fuxe">10</td>
    <td class="tg-0pky">`+t[9][1].name+`</td>
    <td class="tg-0lax">`+t[9][1].last+`</td>
    <td class="tg-0lax">`+t[9][1].buy+'/'+t[0][1].sell+`</td>
    <td class="tg-0lax">`+t[9][1].volume+`</td>
    <td class="tg-0lax">`+t[9][1].base_unit+`</td>
  </tr>
  
  
</tbody>
</table>
</body>`;







const path = require('path');
app.get('/',(req,res)=>{
    res.write(x);
    
    
    
    res.end();
})

app.listen(3000);