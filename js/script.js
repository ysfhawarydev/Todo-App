const taskInput = document.querySelector ( '#task' ) ;
let taskList = JSON.parse ( localStorage.getItem ( 'taskList' ) ) || [] ;

function add (  ) {
    let task = taskInput.value.trim (  ) ;

    if ( task === '' )
        alert ( 'Add task please!' ) ; 

    else {
        const allTasks = {
            task 
        } ;

        taskList.push ( allTasks ) ;
        localStorage.setItem ( 'taskList' , JSON.stringify ( taskList ) ) ;
        displayTasks (  ) ;
        displayCount (  ) ;
        taskInput.value = '' ;
    }
}

function displayTasks (  ) {
    let output = '' ;

    for ( let i = 0 ; i < taskList.length ; i++ ) {
        output += `<p style="padding-block : 1rem ;">Task${ i + 1 }: ${ taskList [ i ].task }                          <button class="btn2"  onclick="deleteTasks ( ${ i } )">Delete</button></p>` ;
    }

    document.querySelector ( '#output' ).innerHTML = output ;
}

function displayCount (  ) {
    let count = `<p class="total">Total Tasks: ${ taskList.length }</p>
                <p>Completed Tasks: ${ deleteCount }</p>` ;

    document.querySelector ( '#countTasks' ).innerHTML = count ;
}

let deleteCount = Number ( localStorage.getItem ( 'deleteCount' ) ) || 0 ;

function deleteTasks ( index ) {
    if ( confirm ( 'Are you sure to delete this task ?' ) ) {
        taskList.splice ( index , 1 ) ;
        localStorage.setItem ( 'taskList' , JSON.stringify ( taskList ) ) ;
        deleteCount++ ;
        localStorage.setItem ( 'deleteCount' , deleteCount ) ;
        displayTasks (  ) ;
        displayCount (  ) ;
    }
}

const dark = document.querySelector ( '.mode' ) ;
const icon = document.querySelector ( '.mode i' ) ;

dark.onclick = function (  ) {
    document.body.classList.toggle ( 'dark' ) ;

    if ( document.body.classList.contains ( 'dark' ) ) {
        localStorage.setItem ( 'theme' , 'dark' ) ;
    }

    else {
        localStorage.setItem ( 'theme' , 'light' )
    }

    const theme = localStorage.getItem ( 'theme' ) ;

    if ( theme === 'dark' ) {
        document.body.classList.add ( 'dark' ) ;
        icon.classList.remove ( 'fa-sun' ) ;
        icon.classList.add ( 'fa-moon' ) ;
    }
}

displayTasks (  ) ;
displayCount (  ) ;