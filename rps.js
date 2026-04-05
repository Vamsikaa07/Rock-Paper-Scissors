const score = JSON.parse(localStorage.getItem('score')) || {
        wins:0,
        lose: 0,
        tie: 0
      };
      
      function pickCompMove(){
        const RandomNum = Math.random();
        let compMove = '';

    if(RandomNum >=0 && RandomNum<1/3){
       compMove = 'Rock';
    }else if(RandomNum >=1/3 && RandomNum<2/3){
       compMove = 'Paper';
    }else if(RandomNum >=2/3 && RandomNum<1){
       compMove = 'Scissors';
    }
    return compMove;
      }
      let isAP = false;
      let intervalId;
      function autoPlay(){
        if(!isAP){
        intervalId = setInterval(function(){
          const playerMove = pickCompMove();
          playGame(playerMove);}
        ,1000);
        isAP = true;
       }
       else{
        clearInterval(intervalId);
        isAP = false;
       }
      }

    function playGame(playerMove){
      const compMove = pickCompMove();
      let result = '';
    if(playerMove === 'Scissors'){
      if(compMove==='Rock'){
      result = 'You lose :(';
      }else if (compMove==='Paper'){
      result = 'You win!!!';
      }else if(compMove==='Scissors'){
      result = 'Tie...';
      }
    }
    else if(playerMove==='Paper'){
      if(compMove==='Rock'){
      result = 'You win!!!';
      }else if (compMove==='Paper'){
      result = 'Tie...';
      }else if(compMove==='Scissors'){
      result = 'You lose :(';
      }
    }
    else if(playerMove==='Rock'){
      if(compMove==='Rock'){
      result = 'Tie...';
      }else if (compMove==='Paper'){
      result = 'You lose :(';
      }else if(compMove==='Scissors'){
      result = 'You win!!!';
      }
    }
    if(result === 'You win!!!'){
      score.wins += 1;
    }else if(result === 'You lose :('){
      score.lose += 1;
    }else if (result === 'Tie...'){
      score.tie += 1;
    }
    localStorage.setItem('score',JSON.stringify(score));
     //alert('You picked '+ playerMove+'.Computer picked '+ compMove + '.\n'+result+'\nWins: '+score.wins+' Loss: '+score.lose+' Ties: '+score.tie);

     updateScore();
     document.querySelector('.js-result').innerHTML = result;
     document.querySelector('.js-moves').innerHTML = `You picked  <img class="move-icon" src="images/${playerMove}-emoji.png">.Computer picked <img class="move-icon" src="images/${compMove}-emoji.png">.`
    }
    function updateScore(){
       document.querySelector('.js-score').innerHTML = 'Wins:'+score.wins+' Loss: '+score.lose+' Ties: '+score.tie;
    }

    updateScore();