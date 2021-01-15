var fs= require('fs');
fs.readFile('../data.csv', 'utf-8', function (err, ans){
  if (err){
    console.log(err)
  }else{
    var b=['First Name', 'Last Name', 'Date of Birth']
    var a=[]
    var c={}
    var final=[]
    var lines= ans.split('\n')
    var header=lines[0].split(',');
    for( var i=0; i<3; i++){
      a.push(header.indexOf(b[i]))
    }
    for(var i=1; i<lines.length; i++){
      rowdata=lines[i].split(',');
      for (var j=0; j<a.length; j++){
        c[b[j]]=rowdata[a[j]]
      }
      final.push(c)        
    } 
    console.log(final)
  }
});
 
/*module.exports.main=function(req, res, next) {
 
}*/
/*var sendresult=(res, status, content)=>{
  res.status(status);
  res.json(content);
}*/