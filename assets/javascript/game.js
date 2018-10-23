
var Song3;
var Song4;
var Song5;
var guesses = 6;
var guesslist = [];
var RandomSong;
songlist = ["Resonance","Crisis"];
Alth = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
play2 = ["Resonance.mp4","Crisis.mp4"];
isplaying = false;
function Reset(){
    RandomSong = RandomSong[Math.floor(Math.random()*RandomSong.length)];
    audioElement.innerHTML = '<source src="' + 'assets/Songs/' + RandomSong + '" type="audio/mpeg" />';  
    audioElement.play();
    console.log(RandomSong);
}
function pplay(RandomSong){
    var Song1 = ["r", "e", "s", "o", "n", "a", "n", "c", "e"];
    var Song2 = ["c", "r", "i", "s", "i","s"];
    var song = ""; 
    console.log(RandomSong);
    console.log(Alth);
    if(isplaying == false){
        var song = ""; 
        audioElement = document.createElement('audio');
        RandomSong = play2[Math.floor(Math.random()*play2.length)];
        if(RandomSong == "Resonance.mp4"){
            song = songlist[0];
        }
        else{
            song = songlist[1];
        }
        console.log(RandomSong);
        console.log(song);
        audioElement.innerHTML = '<source src="' + 'assets/Songs/' + RandomSong + '" type="audio/mpeg" />';  
        audioElement.play();
        

        document.getElementById('te').innerHTML = "<marquee>Now Playing</marquee>";
        document.getElementById('tt').innerHTML = "☯";
        
        console.log(isplaying);
        isplaying = true;
        

            letters = [];
            playing = [];
            table = [];
            table2 = [];
            exclude = [];
            tableprint = table.join(" ");
            for(s = 0; s<song.length; s++){
                
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
                
                if(RandomSong == "Resonance.mp4"){
                    playing = Song1;
                    compare2 = Song1.toString();
                }
                else if(RandomSong == "Crisis.mp4"){
                    playing = Song2;
                    compare2 = Song2.toString();
                }
            for(i = 0; i<song.length; i++){
                console.log("t");
                console.log(s);
                console.log(song.length);
                console.log(Song1[i]);
                    if(s == playing[i]){
                        console.log("test");
                        table.push
                        table[i] = s;
                        guesslist.push(s);
                        console.log(guesslist);
                        document.getElementById("ttt").innerHTML = "<h2>Guess:" + table + "</h2>";
                        
              
                    }
               else{

               }
            }
                    
                    

                     
                        for(j = 0; j < letters.length; j++){    
                            console.log(s);
                            
                            if(s == letters[j]){
                                check = true;
                                console.log("check");
                                
                                
                            }
                            
                        }
                    for(p = 0; p < playing.length; p++){
                        if(s == playing[p]){
                            check = true;
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
                       
                    
                    
                    
                    if(guesses == 0){
                        audioElement.pause();
                        console.log("pause");
                        document.getElementById("numb").innerHTML = "";
                        document.getElementById("ttt").innerHTML = "<h1>You lose! Press enter to play agian</h1>";
                        document.getElementById('te').innerHTML = "<marquee>:(</marquee>";
                        document.getElementById("numb").innerHTML = "";
                        if(x == 13){
                            RandomSong = play2[Math.floor(Math.random()*play2.length)];
                            console.log("enter");
                            guesses = 6;
                            isplaying = false;    
                            
                                             
                                             
                            
                            
                        }
                        
                    }
                    if(compare === compare2){
                        document.getElementById("numb").innerHTML = "";
                        document.getElementById("letter").innerHTML = "";
                        audioElement.pause();
                        document.getElementById("ttt").innerHTML = "<h1>You Win! Press enter to play again.</h1>";

                        document.getElementById('te').innerHTML = "<marquee>✌</marquee>";
                        if(x == 13){
                            RandomSong = play2[Math.floor(Math.random()*play2.length)];
                            guesses = 6;
                            isplaying = false;
                            pplay();
                                            
                            
                            
                           
                        }
                        
                        
                    }
                    

                
              }
              
              document.addEventListener('keydown', Miscari);

            console.log("test");
      
        
    
}
else{
    
    console.log("already playing");
}
}
