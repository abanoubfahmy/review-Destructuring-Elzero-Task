const game = {
    title: "YS",
    developer: "Falcom",
    releases: {
      "Oath In Felghana": ["USA", "Japan"],
      "Ark Of Napishtim": {
        US: "20 USD",
        JAP: "10 USD",
      },
      Origin: "30 USD",
    },
  };
  
  // Write Your Destructuring Assignment/s Here
  let {
    title: a,
    developer: b,
    releases: {
      "Oath In Felghana": [c, d],
      "Ark Of Napishtim": { US: e, JAP: f },
      Origin: w,
    },
  } = game;
   
  const j="Ark Of Napishtim";
  
  console.log(`My favourite Games style IS ${j} style`);
  // My Favourite Games Style Is YS Style
  
  console.log(`And I Love ${b} Games`);
  // And I Love Falcom Games
  
  console.log(`My Best Release Is Oath In Felghana It Released in ${c} & ${d}`);
  // My Best Release Is Oath In Felghana It Released in USA & Japan
  
//   console.log(`Although I Love ${a}`);
//   // Although I Love Ark Of Napishtim
  
//   console.log(`${a} Price in USA Is ${e}`);
  // Ark Of Napishtim Price in USA Is 20 USD
  
  console.log(`${a} Price in Japan Is ${e}`);
  // Ark Of Napishtim Price in Japan Is 10 USD
  
  console.log(`Origin Price Is ${w}`);
  // Origin Price Is 30 USD


