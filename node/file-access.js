const fs=require("fs");//file system
fs.readFile("./cool.txt","utf-8",function(err,content){
    // if(err){
    //     console.log(err);
    // }
    console.log(content);
});
// const quote="NO beuaty shines brigheter than that of a good heart!!!";

// fs.writeFile("./awesome.txt",quote,function(err){
//     console.log("Completed writing!!!"); 
// });//quote is directly created on awesome.txt 

// const quote2= "\n Live more,worry less";
//  fs.appendFile("./awesome.txt",quote2, function(err){
//      console.log("Added to the file!!!");
//  });

//  fs.unlink("./backups/text1.js", function(err) {
//      console.log("removed the file!!!");
//  });
// //   10 files-inside backups folder 
// //   text-1.html,text-2.html,.....text-10.html ---Good morning!!!
// const htmlData="Good morning!!!";
// for(let i=1;i<=10;i++){
//     fs.writeFile(`./backups/text-${i}.html`,htmlData,function(err){
//         console.log("Completed writing!!!",i);
//     });
// }

// fs.readdir("./backups",function(err,files){
//     console.log(files);
//});
// // delete all the 10 files in backups
// // for(let i=1;i<=10;i++){
// //     fs.unlink(`./backups/.text-${i}.html`,function(err){
// //         console.log("Removed the file!!!",i);
// //     });
// // }

// remove all files in backups
// unknown no.of files in backups & names of the files
// redddir & unlink (deleted)

function removeFile(file){
    fs.unlink(`./backups/${file}`,function (err){
        console.log("Removed the files!!!",file);
    });
}
fs.readdir("./backups",function(err,files){
console.log(files);
files.forEach((file)=>removeFile(file));
});
   
