let taskList = [] ;

function add (  ) {
    let task = document.querySelector ( '#task' ).value ;
    
    if ( task === '' )
        alert ( 'Please enter your task!' ) ;

    else {
        allTasks = {
            task : task
        } ;

        taskList.push ( allTasks ) ;
        displayTasks (  ) ;
        displayCount (  ) ;
        document.querySelector ( '#task' ) = '' ;
    }
}

function displayTasks (  ) {
    let output = '' ;

    for ( let i = 0 ; i < taskList.length ; i++ ) {
        output += `<p style="padding-block : 1rem ;">Task${ i + 1 }: ${ taskList [ i ].task } <button class="btn2" onclick="deleteTasks (  )">Delete</button></p>` ;
    }

    document.querySelector ( '#output' ).innerHTML = output ;
}

function displayCount (  ) {
    let count = `<p class="total">Total Tasks: ${ taskList.length }</p>
                        <p>Completed Tasks: ${ deleteCount }</p>` ;

    document.querySelector ( '#countTasks' ).innerHTML = count ;
}

let deleteCount = 0 ;

function deleteTasks ( index ) {
    taskList.splice ( index , 1 ) ;
    deleteCount++ ;
    displayTasks (  ) ;
    displayCount (  ) ;
}

const dark = document.querySelector ( '.mode' ) ;
const icon = document.querySelector('.mode i');
dark.onclick = function (  ) {
    document.body.classList.toggle ( 'dark' ) ;

    if ( document.body.classList.contains ( 'dark' ) ) {
        icon.classList.remove ( 'fa-sun' ) ;
        icon.classList.add ( 'fa-moon' ) ;
    }

    else {
        icon.classList.remove ( 'fa-moon' ) ;
        icon.classList.add ( 'fa-sun' ) ;
    }
}