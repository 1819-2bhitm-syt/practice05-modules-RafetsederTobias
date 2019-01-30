
let startProgramm =
     function (waittime, programName, program) {
        console.log("*** Starting " + programName + "in " + waittime + " seconds. ***");
       setTimeout(program,waittime*1000);


    };


module.exports = startProgramm;


