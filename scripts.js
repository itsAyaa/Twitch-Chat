var chat = document.querySelector("#chat>ul");

    ComfyJS.onChat = (user, message, flags, self, extra) => {
            // Create Var
            var newMessage = document.createElement("li");
            var text = document.createElement("blockquote");

            // Set Attributes
            newMessage.setAttribute("id", "li-name");
            text.setAttribute("id", "li-message");

            // Set Values
            newMessage.innerText = user;
            text.innerText = message;

            // Conditionals
            if(flags.broadcaster){
                newMessage.setAttribute("id", "flag-b");
            }
            else if(flags.mod){
                newMessage.setAttribute("id", "flag-m");
            }
            else if(flags.vip){
                newMessage.setAttribute("id", "flag-v");
            }
            else if(flags.subscriber){
                newMessage.setAttribute("id", "flag-s");
            }
            

            chat.append(newMessage);
            chat.append(text);

    }

    ComfyJS.onReward = ( user, reward, cost, message, extra ) => {
        console.log( user + " redeemed " + reward + " for " + cost );
    }


    ComfyJS.Init("ayavt");