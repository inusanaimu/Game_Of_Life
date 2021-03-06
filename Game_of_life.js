// collecting and declaring variables 
const rows = document.getElementById('row').value;
const column = document.getElementById('column').value;

// classs creating the cells
class Cell{
    constructor(cellnum, column, row, status){
    this.cellnum = cellnum;
    this.column = column;
    this.row = row;
    this.status = status;
    };
};

// (initializeGame) this is the container of all the created cells
var initializeGame;

//  This function create the required Number of cell due to the input value
function createGame(x, y = x) {
    initializeGame = {};
    let count = 1;
    for (let i = 1; i<= x; i++){
        initializeGame["arr" + i] = [];
        for(let j = 1; j <= y; j++){
            let DOA = (((Math.random()*100).toFixed(0))%2 == 0)? "alive": "dead";
            let c = new Cell(count, j, i, DOA);
            count++;
            initializeGame["arr" + i].push(c);
        }
    }
    return initializeGame;

}


//  function liveOrDie1(){
//         for(let x in initializeGame){
//             for (let i = 0; i < (initializeGame[x]).length; i++){
//                 console.log();
//                 if (((initializeGame[x][i]).status == "alive")){
//                     console.log("Living Cell")
//                 } else {
//                     console.log("Dead Cell")
//                 }
//             }
//         }
    
//     }
// liveOrDie1();

// 


function liveOrDie(row, coln){

    // this function call immediatly below need to be place in some
    // other place in order for the for the liveOrDie() to run 
    // without recreating the game all over
    createGame(row, coln)
    // -------------------------

    // next time obj destruction is a better option here
let arrKeys = Object.keys(initializeGame);
let arrValues = initializeGame[arrKeys[0]]
console.log(arrValues.length)
console.log(initializeGame);

for (let i = 0; i < arrKeys.length; i++){
    for(let j = 0; j < arrValues.length; j++){
        if (((initializeGame[arrKeys[i]][j]) != undefined) &&
            ((initializeGame[arrKeys[i]][j]).status != undefined) &&
            ((initializeGame[arrKeys[i]][j]).status == "alive")){
            function checkAround_Live() {
                let counter = 0;
                //checking the current array next column cell arr i, j+1
                 if ((((initializeGame[arrKeys[i]][j+1]) != undefined) && 
                     (initializeGame[arrKeys[i]][j+1]).status == "alive") && 
                     ((initializeGame[arrKeys[i]][j+1]).status != "dead")){
                     counter+=1;
                    }
                //checking the next array next column cell arr i+1, j+1    
                if ((((initializeGame[arrKeys[i+1]]) != undefined) && 
                     ((initializeGame[arrKeys[i+1]][j+1]) != undefined) && 
                     (initializeGame[arrKeys[i+1]][j+1]).status == "alive") && 
                     ((initializeGame[arrKeys[i+1]][j+1]).status != "dead")){
                     counter+=1;
                    }
                //checking the previous array next column cell arr i-1, j+1
                if ((((initializeGame[arrKeys[i-1]]) != undefined) &&
                     ((initializeGame[arrKeys[i-1]][j+1]) != undefined) && 
                     (initializeGame[arrKeys[i-1]][j+1]).status == "alive") && 
                     ((initializeGame[arrKeys[i-1]][j+1]).status != "dead")){
                     counter+=1;
                    }
                //checking the previous array current column cell arr i-1, j
                if ((((initializeGame[arrKeys[i-1]]) != undefined) &&
                     ((initializeGame[arrKeys[i-1]][j]) != undefined) && 
                     (initializeGame[arrKeys[i-1]][j]).status == "alive") && 
                     ((initializeGame[arrKeys[i-1]][j]).status != "dead")){
                     counter+=1;
                    }
                //checking the next array current column cell arr i+1, j
                if ((((initializeGame[arrKeys[i+1]]) != undefined) && 
                     ((initializeGame[arrKeys[i+1]][j]) != undefined) && 
                     (initializeGame[arrKeys[i+1]][j]).status == "alive") && 
                     ((initializeGame[arrKeys[i+1]][j]).status != "dead")){
                     counter+=1;
                    }
                //checking the previous array previous column cell arr i-1, j-1
                if ((((initializeGame[arrKeys[i-1]]) != undefined) &&
                     ((initializeGame[arrKeys[i-1]][j-1]) != undefined) && 
                     (initializeGame[arrKeys[i-1]][j-1]).status == "alive") && 
                     ((initializeGame[arrKeys[i-1]][j-1]).status != "dead")){
                     counter+=1;
                    }
                //checking the current array previous column cell arr i, j-1
                if ((((initializeGame[arrKeys[i]][j-1]) != undefined) && 
                     (initializeGame[arrKeys[i]][j-1]).status == "alive") && 
                     ((initializeGame[arrKeys[i]][j-1]).status != "dead")){
                     counter+=1;
                    }
                //checking the next array previous column cell arr i+1, j+1
                if ((((initializeGame[arrKeys[i+1]]) != undefined) && 
                     ((initializeGame[arrKeys[i+1]][j-1]) != undefined) && 
                     (initializeGame[arrKeys[i+1]][j-1]).status == "alive") && 
                     ((initializeGame[arrKeys[i+1]][j-1]).status != "dead")){
                     counter+=1;
                    }
                return counter;
                
            }
            function kill(){
                let decisionValue = checkAround_Live();
                console.log(decisionValue);
                if (decisionValue < 2 || decisionValue > 3){
                    (initializeGame[arrKeys[i]][j]).status = "dead";
                    return "This Cell Is Now "+ (initializeGame[arrKeys[i]][j]).status;
                }
                
            }
            console.log(kill());
            console.log(initializeGame[arrKeys[i]][j]);

        }else{
            function checkAround_Dead() {
                let counter = 0;
                //checking the current array next column cell arr i, j+1
                 if ((((initializeGame[arrKeys[i]][j+1]) != undefined) && 
                     (initializeGame[arrKeys[i]][j+1]).status == "alive") && 
                     ((initializeGame[arrKeys[i]][j+1]).status != "dead")){
                     counter+=1;
                    }
                //checking the next array next column arr cell i+1, j+1 
                if ((((initializeGame[arrKeys[i+1]]) != undefined) && 
                     ((initializeGame[arrKeys[i+1]][j+1]) != undefined) && 
                     (initializeGame[arrKeys[i+1]][j+1]).status == "alive") && 
                     ((initializeGame[arrKeys[i+1]][j+1]).status != "dead")){
                     counter+=1;
                    }
                //checking the previous array next column cell arr i-1, j+1
                if ((((initializeGame[arrKeys[i-1]]) != undefined) &&
                     ((initializeGame[arrKeys[i-1]][j+1]) != undefined) && 
                     (initializeGame[arrKeys[i-1]][j+1]).status == "alive") && 
                     ((initializeGame[arrKeys[i-1]][j+1]).status != "dead")){
                     counter+=1;
                    }
                //checking the previous array current column cell arr i-1, j
                if ((((initializeGame[arrKeys[i-1]]) != undefined) &&
                     ((initializeGame[arrKeys[i-1]][j]) != undefined) && 
                     (initializeGame[arrKeys[i-1]][j]).status == "alive") && 
                     ((initializeGame[arrKeys[i-1]][j]).status != "dead")){
                     counter+=1;
                    }
                //checking the next array current column cell arr i+1, j
                if ((((initializeGame[arrKeys[i+1]]) != undefined) && 
                     ((initializeGame[arrKeys[i+1]][j]) != undefined) && 
                     (initializeGame[arrKeys[i+1]][j]).status == "alive") && 
                     ((initializeGame[arrKeys[i+1]][j]).status != "dead")){
                     counter+=1;
                    }
                //checking the previous array previous column cell arr i-1, j-1
                if ((((initializeGame[arrKeys[i-1]]) != undefined) &&
                     ((initializeGame[arrKeys[i-1]][j-1]) != undefined) && 
                     (initializeGame[arrKeys[i-1]][j-1]).status == "alive") && 
                     ((initializeGame[arrKeys[i-1]][j-1]).status != "dead")){
                     counter+=1;
                    }
                //checking the current array previous column cell arr i, j-1
                if ((((initializeGame[arrKeys[i]][j-1]) != undefined) && 
                     (initializeGame[arrKeys[i]][j-1]).status == "alive") && 
                     ((initializeGame[arrKeys[i]][j-1]).status != "dead")){
                     counter+=1;
                    }
                //checking the next array previous column cell arr i+1, j+1
                if ((((initializeGame[arrKeys[i+1]]) != undefined) && 
                     ((initializeGame[arrKeys[i+1]][j-1]) != undefined) && 
                     (initializeGame[arrKeys[i+1]][j-1]).status == "alive") && 
                     ((initializeGame[arrKeys[i+1]][j-1]).status != "dead")){
                     counter+=1;
                    }
                return counter;
                
            }
            function Revive(){
                let decisionValue = checkAround_Dead();
                console.log(decisionValue);
                if ( decisionValue > 3){
                    (initializeGame[arrKeys[i]][j]).status = "alive";
                    return "This Cell Is Now "+ (initializeGame[arrKeys[i]][j]).status;
                }
                return "Thank's for your effort Inusa";
                
            }
            console.log(initializeGame[arrKeys[i]][j]);
            console.log(Revive());
        }
    }
}
}

liveOrDie(6, 9);