// Client side


const urlParams = new URLSearchParams(window.location.search);
// const username = urlParams.get('username');
const version = urlParams.get('version');

// const socket = io("http://localhost:7000") // for local host 
const socket = io("https://chatbuddy-0nsc.onrender.com"); // for render host



const form = document.getElementById("send-container")


const messageInput = document.getElementById("message-input")


const messagecontainer = document.querySelector(".chat") 




// audio for send and receive messages notification
    let audio1 = new Audio("receivedNotification.mp3");
    let audio2 = new Audio("messagesent.mp3");




// this is for specific chat room update name (general or tech)

        const heading = document.getElementById("chat-heading");
        if (version) {
            heading.innerText = `Welcome to ${version.charAt(0).toUpperCase() + version.slice(1)} Chat`;
        }




// this is for dark mode 

    document.getElementById('toggleDarkMode').addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');
    });



//   taking username to start chat 

    let username = prompt("Enter your name to start chat ")
// if username is null or black redirect to index.html
    if (!username || username.trim() === "") {
        alert("Username is required to start chat.");
        window.location.href = "../index.html";
        // Prevent rest of script from running
        throw new Error("No username entered");
    }
    console.log("Sending username:", username);
    socket.emit("New-user-joined",{username,version})


// for handling submitted messages 
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        const message = messageInput.value;
        append( message,'right')
        socket.emit("send",message);
        messageInput.value=""
        
    })

// handling messages for both side 
    const append = (message,position)=>{
    const messageElement = document.createElement("div")
    messageElement.innerText = message

    messageElement.classList.add("message",position)
    messagecontainer.append(messageElement) 

        if(position == "left"){
            audio1.play();

        }
        else if(position == "right"){
            audio2.play();

        }
    }

//if new user joined display(to others)

    socket.on("User-joined", name => {
       
            append(`${name} joined the chat`, 'center');
        
    });


//if user left chat display(to others)
    socket.on("left",name=> {
        if(name == null){
            return
        }else{

            append(`${name} left the chat`,'center')
        }
    } )



// for our new message display to others(on the left side)
    socket.on("receive",data=> {
        append(`${data.username}: ${data.message} `,'left')
    } )

