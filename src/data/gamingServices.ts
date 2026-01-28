export interface GameService {
  name: string;
  href: string;
  imageUrl: string;
  showLabel?: boolean;
}

export const gameServices: GameService[] = [
  // Row 1
  {
    name: "Tetris",
    href: "https://www.lumpty.com/amusements/Games/Tetris/tetris.html",
    imageUrl: "https://i0.wp.com/members.abettertheater.com/wp-content/uploads/2023/11/tetris_game.jpg?w=449&ssl=1",
  },
  {
    name: "The Martians are Back",
    href: "https://js13kgames.com/games/the-martians-are-back/index.html",
    imageUrl: "https://i0.wp.com/members.abettertheater.com/wp-content/uploads/2023/11/martians_game.jpg?w=449&ssl=1",
    showLabel: true,
  },
  {
    name: "Off the Line",
    href: "https://js13kgames.com/games/off-the-line/index.html",
    imageUrl: "https://i0.wp.com/members.abettertheater.com/wp-content/uploads/2023/11/offtheline_game.jpg?w=449&ssl=1",
    showLabel: true,
  },
  {
    name: "Push Back",
    href: "https://js13kgames.com/games/push-back/index.html",
    imageUrl: "https://i0.wp.com/members.abettertheater.com/wp-content/uploads/2023/11/pushback_game.jpg?w=449&ssl=1",
  },

  // Row 2
  {
    name: "Backshot",
    href: "https://backshot-tactics.herokuapp.com/",
    imageUrl: "https://i0.wp.com/members.abettertheater.com/wp-content/uploads/2023/11/backshot_game.jpg?w=449&ssl=1",
    showLabel: true,
  },
  {
    name: "Backcountry",
    href: "https://js13kgames.com/games/backcountry/index.html",
    imageUrl: "https://i0.wp.com/members.abettertheater.com/wp-content/uploads/2023/11/backcountry_game.jpg?w=449&ssl=1",
  },
  {
    name: "Oh Flip",
    href: "https://js13kgames.com/games/oh-flip/index.html",
    imageUrl: "https://i0.wp.com/members.abettertheater.com/wp-content/uploads/2023/11/ohflip_game.jpg?w=449&ssl=1",
  },
  {
    name: "Thug Racer",
    href: "https://monsterofcookie.itch.io/thug-racer",
    imageUrl: "https://i0.wp.com/members.abettertheater.com/wp-content/uploads/2023/11/thugracer_game.jpg?w=449&ssl=1",
  },

  // Row 3
  {
    name: "2048",
    href: "https://play2048.co/",
    imageUrl: "https://i0.wp.com/members.abettertheater.com/wp-content/uploads/2023/12/2048-logo.webp?w=500&ssl=1",
  },
  {
    name: "Blackjack",
    href: "https://www.247blackjack.com/",
    imageUrl: "https://i0.wp.com/members.abettertheater.com/wp-content/uploads/2023/12/Blackjack-logo.webp?w=500&ssl=1",
  },
  {
    name: "Checkers",
    href: "https://gametable.org/games/checkers/",
    imageUrl: "https://i0.wp.com/members.abettertheater.com/wp-content/uploads/2023/12/Checkers-logo.webp?w=500&ssl=1",
  },
  {
    name: "Chess",
    href: "https://chess.com",
    imageUrl: "https://i0.wp.com/members.abettertheater.com/wp-content/uploads/2023/12/Chess-logo.webp?w=500&ssl=1",
  },

  // Row 4
  {
    name: "Euchre",
    href: "https://cardgames.io/euchre/",
    imageUrl: "https://i0.wp.com/members.abettertheater.com/wp-content/uploads/2023/12/Euchre-logo.webp?w=500&ssl=1",
  },
  {
    name: "Gin Rummy",
    href: "https://cardgames.io/ginrummy/",
    imageUrl: "https://i0.wp.com/members.abettertheater.com/wp-content/uploads/2023/12/Gin-Rummy-logo.webp?w=500&ssl=1",
  },
  {
    name: "Go",
    href: "https://www.cosumi.net/en/",
    imageUrl: "https://i0.wp.com/members.abettertheater.com/wp-content/uploads/2023/12/Go-logo.webp?w=500&ssl=1",
  },
  {
    name: "Minesweeper",
    href: "https://www.google.com/fbx?fbx=minesweeper",
    imageUrl: "https://i0.wp.com/members.abettertheater.com/wp-content/uploads/2023/12/Minesweeper-logo.webp?w=500&ssl=1",
  },

  // Row 5
  {
    name: "Pinball",
    href: "https://www.classicgame.com/game/Metal+Pinball",
    imageUrl: "https://i0.wp.com/members.abettertheater.com/wp-content/uploads/2023/12/Pinball-logo.webp?w=500&ssl=1",
  },
  {
    name: "Poker",
    href: "https://www.247freepoker.com/",
    imageUrl: "https://i0.wp.com/members.abettertheater.com/wp-content/uploads/2023/12/Poker-logo.webp?w=500&ssl=1",
  },
  {
    name: "Snake",
    href: "https://plays.org/coin-snake/",
    imageUrl: "https://i0.wp.com/members.abettertheater.com/wp-content/uploads/2023/12/Snake-logo.webp?w=500&ssl=1",
  },
  {
    name: "Solitaire",
    href: "https://solitaired.com/",
    imageUrl: "https://i0.wp.com/members.abettertheater.com/wp-content/uploads/2023/12/Solitaire-logo.webp?w=500&ssl=1",
  },

  // Row 6
  {
    name: "Tic-tac-toe",
    href: "https://gametable.org/games/tic-tac-toe/",
    imageUrl: "https://i0.wp.com/members.abettertheater.com/wp-content/uploads/2023/12/Tic-tac-toe-logo.webp?w=500&ssl=1",
  },
  {
    name: "War",
    href: "https://cardgames.io/war/",
    imageUrl: "https://i0.wp.com/members.abettertheater.com/wp-content/uploads/2023/12/War-logo.webp?w=500&ssl=1",
  },
  {
    name: "Casual Crusade",
    href: "https://js13kgames.com/games/casual-crusade/index.html",
    imageUrl: "https://i0.wp.com/members.abettertheater.com/wp-content/uploads/2023/12/Crusade-logo.webp?w=500&ssl=1",
    showLabel: true,
  },
  {
    name: "Crazy Coasters",
    href: "https://monsterofcookie.itch.io/crazy-coasters",
    imageUrl: "https://i0.wp.com/members.abettertheater.com/wp-content/uploads/2023/12/Coaster-logo.webp?w=500&ssl=1",
    showLabel: true,
  },
];
