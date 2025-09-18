	$(document).ready(function(){
		var quoteSource=[
		{
			quote: "Every moment I spend with you is like a dream come true. I love you so much, my beautiful wife.",
			name:"HUBBY WHO LOVE YOU"
	    },
	    {
	    	quote:"Believe you can and you're halfway there.",
	    	name:"HEHE LAOGONG SUPPORT YOU"
	    },
	    {
	    	quote:"I will always be here for you, my love. I will always be your rock, your protector and your best friend. I love you from the bottom of my heart.",
	    	name:"SWEET TEO"
	    },
	    {
	    	quote:"You are the light of my life and my reason for everything. I love you more than anything in this world, my sweet LAOPO.",
	    	name:"CS LOVE YOU 3000"
	    },
	    {
	    	quote:"Every time I see you, it takes my breath away. I am so deeply in love with you, my wife.",
	    	name:"BIG EYES LAOGONG"
	    },
	    {
	    	quote:"I would be lost without you. You are my anchor, my strength and my reason for everything. I love you more than life itself, my beautiful BABY.",
	    	name:"MUAHAHAHA MEME AINI"
	    },
	    {
	    	quote:"I am so grateful to be with you, my beautiful wife. You are my heart and soul, my everything. I love you more than words could ever say.",
	    	name:"张承栩"
	    },
	    {
	    	quote:"Seeing your face brightens even the darkest of my days. Your light shines so brightly, my sweet wife. I love you more than anything in this world.",
	    	name:"TEO CHENG SHI"
	    },
	    {
	    	quote:"There may be some times that we fight and argue, but just know that my love for you will never fade. I will always be here, loving you.",
	    	name:"LAOGONG AINI"
	    },
	    {
	    	quote:"I know I’m not the perfect husband, but I can promise you that I will love you and stay faithful to you for the rest of my life.",
	    	name:"NOT PERFECT DE LAOGONG"
	    },
	    {
	    	quote:"I know I love you because I can’t stop thinking about you even when I try.",
	    	name:"HARD DICK SPEAKING"
	    },
	    {
	    	quote:"No words can express how much I love you. Just always remember that my love is true. You’re always on my mind and I always want you by my side.",
	    	name:"SAY NO MORE DE CS"
	    },
	    {
	    	quote:"Two things are infinite: the universe and Our Love.",
	    	name:"UWA CS AINI"
	    },
	    {
	    	quote:"Every day that I spend with you is the most special day of my life. Seeing you smile, hearing your laugh, and feeling your touch is all I need to be happy.",
	    	name:"CHICKEN OUTSIDE OF THE HOUSE"
	    },
	    {
	    	quote:"No matter how many years we are together, there are two times when I want to be with you – now and forever.",
	    	name:"CS FOREVER LOVE YOU!"
	    },
	    {
	    	quote:"Without you, I am nothing. With you, I am everything.",
	    	name:"SMILING DE TEO"
	    },
	    {
	    	quote:"Your love keeps me going. The thought of coming home to you and lying in your arms at night makes me get through the toughest of days.",
	    	name:"GWEN'S LAOGONG"
	    },
	    {
	    	quote:"LET GET MY DICK IN YOUR FACE.",
	    	name:"BIG DICK TEO"
	    },
	    {
	    	quote:"A day without YOU is like, a day without SUNSHINE.",
	    	name:"GWEN'S HUBBY"
	    },
	    {
	    	quote:"The sky may be dark and stormy, but knowing that you are mine makes everything bright and beautiful.",
	    	name:"GWEN'S BOYFRIEND"
	    },
	    {
	    	quote:"My dear, thank you so much for all that you do for me. You brighten up every day and make my life infinitely better.",
	    	name:"GWEN'S BABY BOY"
	    },
	    {
	    	quote:"You are a special gift from the heavens. Your smile warms my heart and your presence makes me whole.",
	    	name:"GWEN'S BAOBAO"
	    },
	    {
	    	quote:"I just want to let you know that I love you with everything I am, and I will always stand by your side no matter what life throws our way.",
	    	name:"GWEN'S TILDO"
	    },
	    {
	    	quote:"I go to sleep thinking of you, lose sleep thinking of you, and wake up thinking of you. I will be thinking about you as long as I love you, and I will love you forever.",
	    	name:"GWEN'S BAOBEI"
	    }

	];
		

		$('#quoteButton').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuoteGenius = quoteSource[randomNumber].name;
			//console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });  
			
			break;
		};//end for loop
	
	});//end quoteButton function
		
		
});//end document ready

