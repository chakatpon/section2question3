const fundsNAV = {
    'B-INCOMESSF'	: 10.0548,	
    'BM70SSF'	    : 9.9774,
    'BEQSSF'	    : 11.247,
    'B-FUTURESSF'	: 11.443
}


function getfund() {
    console.log(fundsNAV[process.argv[2]])
}

getfund();