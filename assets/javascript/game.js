var Song1 = ["R", "e", "s", "o", "n", "a", "n", "c", "e"];
var Song2;
var Song3;
var Song4;
var Song5;
var guesses = 6;
var guesslist = [];
var RandomSong;
songlist = ["Resonance"];
Alth = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
play2 = ["Resonance.mp4","Crisis.mp4"];
isplaying = false;
function Reset(){
    RandomSong = RandomSong[Math.floor(Math.random()*RandomSong.length)];
    audioElement.innerHTML = '<source src="' + 'assets/Songs/' + RandomSong + '" type="audio/mpeg" />';  
    audioElement.play();
    console.log(RandomSong);
}
function pplay(){
    
    console.log(Alth);
    if(isplaying == false){
        audioElement = document.createElement('audio');
        RandomSong = play2[Math.floor(Math.random()*play2.length)];
        console.log(RandomSong);
        audioElement.innerHTML = '<source src="' + 'assets/Songs/' + RandomSong + '" type="audio/mpeg" />';  
        audioElement.play();
        

        document.getElementById('te').innerHTML = "<marquee>Now Playing</marquee>";
        document.getElementById('tt').innerHTML = "☯";
        
        console.log(isplaying);
        isplaying = true;
        if(RandomSong == "Resonance.mp4"){

            letters = [];
           
            table = [];
            table2 = [];
            tableprint = table.join(" ");
            for(s = 0; s<Song1.length; s++){
                
                table[s] = "_";
            }
            compare = table.toString();
            compare2 = Song1.toString();
            document.getElementById("letter").innerHTML = "<h3>Letters tried: " +  "</h3>";
            document.getElementById("numb").innerHTML = "<h3>Number of Guesses: " + guesses +  "</h3>";
            document.getElementById("ttt").innerHTML = "<h2>Guess:" + table + "</h2>";
            function Miscari(e) {
                var x = e.keyCode;
                var check = false;
                var s = String.fromCharCode(e.keyCode);
                s = s.toLowerCase();
                console.log(x);
                compare = table.toString();
                compare2 = Song1.toString();
            
                    if(x == 65){
                        console.log("test");
                        table.push
                        table[5] = "a";
                        guesslist.push(s);
                        console.log(guesslist);
                        document.getElementById("ttt").innerHTML = "<h2>Guess:" + table + "</h2>";
                    }
                    else if(x == 82){
                        console.log("test");
                        table.push
                        table[0] = "R";
                        
                        
                        document.getElementById("ttt").innerHTML = "<h2>Guess:" + table + "</h2>";
                    }
                    else if(x == 69){
                        console.log("test");
                        table.push
                        table[1] = "e";
                        table[8] = "e";
                        document.getElementById("ttt").innerHTML = "<h2>Guess:" + table + "</h2>";
                    }
                    else if(x == 79){
                        console.log("test");
                        table.push
                        table[3] = "o";
                        
                        document.getElementById("ttt").innerHTML = "<h2>Guess:" + table + "</h2>";
                    }
                    else if(x == 83){
                        console.log("test");
                        table.push
                        table[2] = "s";
                        
                        document.getElementById("ttt").innerHTML = "<h2>Guess:" + table + "</h2>";
                    }
                    else if(x == 78){
                        console.log("test");
                        table.push
                        table[4] = "n";
                        table[6] = "n";
                        

                        document.getElementById("ttt").innerHTML = "<h2>Guess:" + table + "</h2>";
                    }
                    else if(x == 67){
                        console.log("test");
                        table.push
                        table[7] = "c";
                        console.log(table);

                        document.getElementById("ttt").innerHTML = "<h2>Guess:" + table + "</h2>";
                    }

                    
                    else{
                        for(i = 0; i < letters.length; i++){
                            console.log(s);
                            if(s == letters[i]){
                                check = true;
                                console.log("check");
                                
                            }

                        }
                        if(check == false){
                            guesses --;
                            letters.push(s);
                            console.log("minus");
                        }
                        else{
                            
                        }
                        if(guesses <= 0){
                            guesses = 0;
                        }
                        document.getElementById("numb").innerHTML = "<h3>Number of Guesses: " + guesses +  "</h3>";
                        document.getElementById("letter").innerHTML = "<h3>Letters tried: " + letters +  "</h3>";
                    }
                    if(guesses == 0){
                        audioElement.pause();
                        console.log("pause");
                        document.getElementById("numb").innerHTML = "";
                        document.getElementById("ttt").innerHTML = "<h1>You lose! Press enter to play agian</h1>";
                        document.getElementById('te').innerHTML = "<marquee>:(</marquee>";
                        document.getElementById("numb").innerHTML = "";
                        if(x == 13){
                            console.log("enter");
                        }
                        
                    }
                    if(compare === compare2){
                        document.getElementById("numb").innerHTML = "";
                        document.getElementById("letter").innerHTML = "";
                        audioElement.pause();
                        document.getElementById("ttt").innerHTML = "<h1>You Win! Press enter to play again.</h1>";

                        document.getElementById('te').innerHTML = "<marquee>✌</marquee>";
                        if(x == 13){
                            console.log("enter");
                            isplaying = false;
                           
                            guesses = 6;
                            RandomSong = play2[Math.floor(Math.random()*play2.length)];
                           
                        }
                        
                        
                    }
                    

                
              }
              
              document.addEventListener('keydown', Miscari);

            console.log("test");
        }
        else{
            console.log(":O");
        }
        
    }
else{
    
    console.log("already playing");
}
}
