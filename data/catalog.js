let topMovies = [
    {
        "title": "Inside Out 2",
        "director": "Director: Kelsey Mann",
        "year": "2024",
        "duration": "96 min",
        "cover": "https://m.media-amazon.com/images/M/MV5BYTc1MDQ3NjAtOWEzMi00YzE1LWI2OWUtNjQ0OWJkMzI3MDhmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
        "plot": "A sequel that features Riley entering puberty and experiencing brand new, more complex emotions as a result. As Riley tries to adapt to her teenage years, her old emotions try to adapt to the possibility of being replaced.",
        "link": "https://www.imdb.com/title/tt22022452/",
        "trailerLink": "https://www.youtube.com/embed/LEjhY15eCx0?autoplay=1&mute=1",
        "trailerTitle": "Inside Out 2 | Official Trailer"
    },
    {
        "title": "Deadpool & Wolverine",
        "director": "Director: Shawn Levy",
        "year": "2024",
        "duration": "128 min",
        "cover": "https://m.media-amazon.com/images/M/MV5BNzRiMjg0MzUtNTQ1Mi00Y2Q5LWEwM2MtMzUwZDU5NmVjN2NkXkEyXkFqcGc@._V1_SX300.jpg",
        "plot": "Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority, but instead recruits a variant of Wolverine to save his universe from extinction.",
        "link": "https://www.imdb.com/title/tt6263850/",
        "trailerLink": "https://www.youtube.com/embed/uJMCNJP2ipI?autoplay=1&mute=1",
        "trailerTitle": "Deadpool & Wolverine | Official Teaser"
    },
    {
        "title": "Despicable Me 4",
        "director": "Director: Chris Renaud, Patrick Delage",
        "year": "2024",
        "duration": "94 min",
        "cover": "https://m.media-amazon.com/images/M/MV5BOTk4MjFhZTMtOWIxOS00YzE2LThkZGEtMzg0MDAyMmFiZmU1XkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_SX300.jpg",
        "plot": "Gru, Lucy, Margo, Edith, and Agnes welcome a new member to the family, Gru Jr., who is intent on tormenting his dad. Gru faces a new nemesis in Maxime Le Mal and his girlfriend Valentina, and the family is forced to go on the run.",
        "link": "https://www.imdb.com/title/tt7510222/",
        "trailerLink": "https://www.youtube.com/embed/LtNYaH61dXY?autoplay=1&mute=1",
        "trailerTitle": "Despicable Me 4 | Official Trailer 2"
    },
    {
        "title": "Dune: Part Two",
        "director": "Director: Denis Villeneuve",
        "year": "2024",
        "duration": "166 min",
        "cover": "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_SX300.jpg",
        "plot": "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
        "link": "https://www.imdb.com/title/tt15239678/",
        "trailerLink": "https://www.youtube.com/embed/Way9Dexny3w?autoplay=1&mute=1",
        "trailerTitle": "Dune: Part Two | Official Trailer"
    },
    {
        "title": "Twisters",
        "director": "Director: Lee Isaac Chung",
        "year": "2024",
        "duration": "122 min",
        "cover": "https://m.media-amazon.com/images/M/MV5BZTQ0YjZhNzMtMzMwYi00YTQwLTlhYTgtNDBlZjRhYjJmMzJmXkEyXkFqcGc@._V1_SX300.jpg",
        "plot": "Kate Carter, a retired tornado-chaser and meteorologist, is persuaded to return to Oklahoma to work with a new team and new technologies.",
        "link": "https://www.imdb.com/title/tt12584954/",
        "trailerLink": "https://www.youtube.com/embed/wdok0rZdmx4?autoplay=1&mute=1",
        "trailerTitle": "TWISTERS | Official Trailer"
    },
    {
        "title": "Godzilla x Kong: The New Empire",
        "director": "Director: Adam Wingard",
        "year": "2024",
        "duration": "115 min",
        "cover": "https://m.media-amazon.com/images/M/MV5BY2QwOGE2NGQtMWQwNi00M2IzLThlNWItYWMzNGQ5YWNiZDA4XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg",
        "plot": "Two ancient titans, Godzilla and Kong, clash in an epic battle as humans unravel their intertwined origins and connection to Skull Island's mysteries.",
        "link": "https://www.imdb.com/title/tt14539740/",
        "trailerLink": "https://www.youtube.com/embed/lV1OOlGwExM?autoplay=1&mute=1",
        "trailerTitle": "Godzilla x Kong : The New Empire | Official Trailer"
    },
    {
        "title": "Kung Fu Panda 4",
        "director": "Director: Mike Mitchell, Stephanie Stine",
        "year": "2024",
        "duration": "94 min",
        "cover": "https://m.media-amazon.com/images/M/MV5BZDY0YzI0OTctYjVhYy00MTVhLWE0NTgtYTRmYTBmOTE3YTViXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
        "plot": "After Po is tapped to become the Spiritual Leader of the Valley of Peace, he needs to find and train a new Dragon Warrior, while a wicked sorceress plans to re-summon all the master villains whom Po has vanquished to the spirit re...",
        "link": "https://www.imdb.com/title/tt21692408/",
        "trailerLink": "https://www.youtube.com/embed/_inKs4eeHiI?autoplay=1&mute=1",
        "trailerTitle": "KUNG FU PANDA 4 | Official Trailer"
    },
    {
        "title": "Bad Boys: Ride or Die",
        "director": "Director: Adil El Arbi, Bilall Fallah",
        "year": "2024",
        "duration": "115 min",
        "cover": "https://m.media-amazon.com/images/M/MV5BY2U5YmQ3YjgtM2I2OC00YmM5LTkyM2MtN2I5Zjg2MDE0ODkwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
        "plot": "When their late police captain gets linked to drug cartels, wisecracking Miami cops Mike Lowrey and Marcus Burnett embark on a dangerous mission to clear his name.",
        "link": "https://www.imdb.com/title/tt4919268/",
        "trailerLink": "https://www.youtube.com/embed/hRFY_Fesa9Q?autoplay=1&mute=1",
        "trailerTitle": "BAD BOYS: RIDE OR DIE – Official Trailer (HD)"
    },
    {
        "title": "Kingdom of the Planet of the Apes",
        "director": "Director: Wes Ball",
        "year": "2024",
        "duration": "145 min",
        "cover": "https://m.media-amazon.com/images/M/MV5BZGI4NTEwNTAtZDcwMi00MDkxLTg1OGYtNTZmMzE3ZDljNzVlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
        "plot": "Many years after the reign of Caesar, a young ape goes on a journey that will lead him to question everything he's been taught about the past and make choices that will define a future for apes and humans alike.",
        "link": "https://www.imdb.com/title/tt11389872/",
        "trailerLink": "https://www.youtube.com/embed/XtFI7SNtVpY?autoplay=1&mute=1",
        "trailerTitle": "Kingdom of the Planet of the Apes | Official Trailer"
    },
    {
        "title": "A Quiet Place: Day One",
        "director": "Director: Michael Sarnoski",
        "year": "2024",
        "duration": "99 min",
        "cover": "https://m.media-amazon.com/images/M/MV5BNGZmODU3ZDEtMjQwZC00NTA5LThmNWYtYzk5MmY5ZmM4NGIxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
        "plot": "A young woman named Sam finds herself trapped in New York City during the early stages of an invasion by alien creatures with ultra-sensitive hearing.",
        "link": "https://www.imdb.com/title/tt13433802/",
        "trailerLink": "https://www.youtube.com/embed/YPY7J-flzE8?autoplay=1&mute=1",
        "trailerTitle": "A Quiet Place: Day One | Official Trailer"
    }
]

let topSeries = [
    {
        "title": "Game of Thrones",
        "director": "",
        "year": "2011–2019",
        "duration": "8 seasons",
        "cover": "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
        "plot": "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
        "link": "https://www.imdb.com/title/tt0944947/",
        "trailerLink": "https://www.youtube.com/embed/KPLWWIOCOOQ?autoplay=1&mute=1",
        "trailerTitle": "Game of Thrones | Official Series Trailer (HBO)"
    },
    {
        "title": "Breaking Bad",
        "director": "",
        "year": "2008–2013",
        "duration": "5 seasons",
        "cover": "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg",
        "plot": "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student to secure his family's future.",
        "link": "https://www.imdb.com/title/tt0903747/",
        "trailerLink": "https://www.youtube.com/embed/HhesaQXLuRY?autoplay=1&mute=1",
        "trailerTitle": "Breaking Bad Trailer (First Season)"
    },
    {
        "title": "Anne with an E",
        "director": "",
        "year": "2017–2019",
        "duration": "3 seasons",
        "cover": "https://m.media-amazon.com/images/M/MV5BNThmMzJlNzgtYmY5ZC00MDllLThmZTMtNTRiMjQwNmY0NmRhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        "plot": "The adventures of a young orphan girl living in the late 19th century. Follow Anne as she learns to navigate her new life on Prince Edward Island, in this new take on L.M. Montgomery's classic novels.",
        "link": "https://www.imdb.com/title/tt5421602/",
        "trailerLink": "https://www.youtube.com/embed/bBervTlBurY?autoplay=1&mute=1",
        "trailerTitle": "Anne | Trailer principal | Netflix [HD]"
    },
    {
        "title": "Supernatural",
        "director": "",
        "year": "2005–2020",
        "duration": "15 seasons",
        "cover": "https://m.media-amazon.com/images/M/MV5BMDFmMGZmMGItNGRjNC00NjVjLWI5ODEtNzhjMTE5MmJhN2FkXkEyXkFqcGc@._V1_SX300.jpg",
        "plot": "Two brothers follow their father's footsteps as hunters, fighting evil supernatural beings of many kinds, including monsters, demons, and gods that roam the earth.",
        "link": "https://www.imdb.com/title/tt0460681/",
        "trailerLink": "https://www.youtube.com/embed/apltEQy8RzQ?autoplay=1&mute=1",
        "trailerTitle": "Sobrenatural - Trailer Oficial"
    },
    {
        "title": "Sherlock",
        "director": "",
        "year": "2010–2017",
        "duration": "4 seasons",
        "cover": "https://m.media-amazon.com/images/M/MV5BNTQzNGZjNDEtOTMwYi00MzFjLWE2ZTYtYzYxYzMwMjZkZDc5XkEyXkFqcGc@._V1_SX300.jpg",
        "plot": "The quirky spin on Conan Doyle's iconic sleuth pitches him as a \"high-functioning sociopath\" in modern-day London. Assisting him in his investigations: Afghanistan War vet John Watson, who's introduced to Holmes by a mutual acquai...",
        "link": "https://www.imdb.com/title/tt1475582/",
        "trailerLink": "https://www.youtube.com/embed/iKUzhzustok?autoplay=1&mute=1",
        "trailerTitle": "Sherlock Holmes Trailer # 1"
    },
    {
        "title": "This Is Us",
        "director": "",
        "year": "2016–2022",
        "duration": "6 seasons",
        "cover": "https://m.media-amazon.com/images/M/MV5BNzYxYWY3YzctZjRiNS00MTViLTk5OTYtZDEyNzAwNGE5ODY0XkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_SX300.jpg",
        "plot": "A heartwarming and emotional story about a unique set of triplets, their struggles, and their wonderful parents.",
        "link": "https://www.imdb.com/title/tt5555260/",
        "trailerLink": "https://www.youtube.com/embed/OkTEQwsE8l4?autoplay=1&mute=1",
        "trailerTitle": "This Is Us | Season 1 Trailer | FOX Home Entertainment"
    },
    {
        "title": "Vikings",
        "director": "",
        "year": "2013–2020",
        "duration": "6 seasons",
        "cover": "https://m.media-amazon.com/images/M/MV5BZWNlZmNiNzItYWMwNC00ODYxLThlNjYtMjU3NzlmNDQxMTY2XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_SX300.jpg",
        "plot": "Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore--and raid--the distant shores across the ocean.",
        "link": "https://www.imdb.com/title/tt2306299/",
        "trailerLink": "https://www.youtube.com/embed/9GgxinPwAGc?autoplay=1&mute=1",
        "trailerTitle": "Vikings Season 1 Trailer"
    },
    {
        "title": "Chernobyl",
        "director": "",
        "year": "2019",
        "duration": "1 season",
        "cover": "https://m.media-amazon.com/images/M/MV5BOTJiOWExNWEtYzE1ZS00NDJmLWFiY2ItYTNjMWZiNTQ2ZDIwXkEyXkFqcGc@._V1_SX300.jpg",
        "plot": "In April 1986, the city of Chernobyl in the Soviet Union suffers one of the worst nuclear disasters in the history of mankind. Consequently, many heroes put their lives on the line in the following days, weeks and months.",
        "link": "https://www.imdb.com/title/tt7366338/",
        "trailerLink": "https://www.youtube.com/embed/s9APLXM9Ei8?autoplay=1&mute=1",
        "trailerTitle": "Chernobyl (2019) | Official Trailer | HBO"
    },
    {
        "title": "Peaky Blinders",
        "director": "",
        "year": "2013–2022",
        "duration": "6 seasons",
        "cover": "https://m.media-amazon.com/images/M/MV5BYTYxODk2NGMtM2Q0Yi00MmEzLTlkZDYtOGZhNzRhZmViOTY0XkEyXkFqcGc@._V1_SX300.jpg",
        "plot": "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
        "link": "https://www.imdb.com/title/tt2442560/",
        "trailerLink": "https://www.youtube.com/embed/oVzVdvGIC7U?autoplay=1&mute=1",
        "trailerTitle": "Peaky Blinders - Season 1 | Trailer"
    },
    {
        "title": "Prison Break",
        "director": "",
        "year": "2005–2017",
        "duration": "5 seasons",
        "cover": "https://m.media-amazon.com/images/M/MV5BMTg3NTkwNzAxOF5BMl5BanBnXkFtZTcwMjM1NjI5MQ@@._V1_SX300.jpg",
        "plot": "A structural engineer installs himself in a prison he helped design, in order to save his falsely accused brother from a death sentence by breaking themselves out from the inside.",
        "link": "https://www.imdb.com/title/tt0455275/",
        "trailerLink": "https://www.youtube.com/embed/4oifOdzeNGo?autoplay=1&mute=1",
        "trailerTitle": "PRISON BREAK 6 — Teaser Trailer (2024)"
    }
]

let topBooks = [
    {
        "title": "Daydream: A Novel",
        "director": "Author: Hannah Grace",
        "year": "2024",
        "duration": "448 pages",
        "cover": "https://m.media-amazon.com/images/I/41S6GX4S-kL._SY445_SX342_.jpg",
        "plot": "The third in the New York Times bestselling Maple Hills series follows fan-favorite Henry and a bookish fellow student who come up with a plan to help them both overcome their respective challenges in a difficult year. When his procrastination lands him in a difficult class with his least favorite professor, Henry Turner knows he’s going to have to work extra hard to survive his junior year of college. And now with his new title of captain for the hockey team—which he didn’t even want—Henry absolutely cannot fail. Enter Halle Jacobs, a fellow junior who finds herself befriended by Henry when he accidentally crashes her book club. Halle may not have the romantic pursuits of her favorite fictional leads, but she’s an academic superstar, and as soon as she hears about Henry’s problems with his class reading material, she offers to help. Too bad being a private tutor isn’t exactly ideal given her own studies, job, book club, and the novel she’s trying to write. But new experiences are the key to beating her writer’s block, and Henry’s promising to be the one to give them to her. They just need to stick to their rule book. Oh, and not fall in love.",
        "link": "https://play.google.com/store/books/details?id=10_dEAAAQBAJ",
    },
    {
        "title": "It Ends with Us",
        "director": "Author: Colleen Hoover",
        "year": "2018",
        "duration": "368 pages",
        "cover": "https://m.media-amazon.com/images/I/813aV273-rL._SY466_.jpg",
        "plot": "From the author of the Slammed and Hopeless series. A novel about making the right choices in the most difficult situations. Things haven't always been easy for Lily, but that's never stopped her from achieving her dream life. She's come a long way since her childhood in a small town in Maine: she graduated in marketing, moved to Boston and opened her own store. So when she finds herself attracted to a handsome neurosurgeon named Ryle Kincaid, everything seems too perfect to be true. Ryle is confident, stubborn, maybe even a little arrogant, and he's attracted to Lily. However, his great aversion to relationships is disturbing. As well as being overwhelmed with questions about her new relationship, Lily can't get Atlas Corrigan out of her head - her first love and the link to her past that she left behind. He was her protector, someone with whom she had a great affinity. When Atlas suddenly reappears, everything Lily has built with Ryle is at risk. With a daring and extremely personal book, Colleen Hoover tells a shattering but also groundbreaking story that is not afraid to discuss issues such as abuse and domestic violence. An unforgettable story about a love that costs too much.",
        "link": "https://play.google.com/store/books/details?id=AKJGDwAAQBAJ&source=gbs_api",
    },
    {
        "title": "It Starts with Us",
        "director": "Author: Colleen Hoover",
        "year": "2022",
        "duration": "336 pages",
        "cover": "https://m.media-amazon.com/images/I/51VC+Vru96L._SY445_SX342_.jpg",
        "plot": "Before It Ends with Us, it started with Atlas. Colleen Hoover tells fan favorite Atlas’s side of the story and shares what comes next in this long-anticipated sequel to the “glorious and touching” (USA TODAY) #1 New York Times bestseller and major motion picture It Ends with Us. Lily and her ex-husband, Ryle, have just settled into a civil coparenting rhythm when she suddenly bumps into her first love, Atlas, again. After nearly two years separated, she is elated that for once, time is on their side, and she immediately says yes when Atlas asks her on a date. But her excitement is quickly hampered by the knowledge that, though they are no longer married, Ryle is still very much a part of her life—and Atlas Corrigan is the one man he will hate being in his ex-wife and daughter’s life. Switching between the perspectives of Lily and Atlas, It Starts with Us picks up right where the epilogue for the “gripping, pulse-pounding” (Sarah Pekkanen, author of Perfect Neighbors) bestselling phenomenon It Ends with Us left off. Revealing more about Atlas’s past and following Lily as she embraces a second chance at true love while navigating a jealous ex-husband, it proves that “no one delivers an emotional read like Colleen Hoover” (Anna Todd, New York Times bestselling author).",
        "link": "https://play.google.com/store/books/details?id=zlNdEAAAQBAJ&source=gbs_api",
    },
    {
        "title": "The Women",
        "director": "Author: Kristin Hannah",
        "year": "2024",
        "duration": "464 pages",
        "cover": "https://m.media-amazon.com/images/I/913C+MR3S5L._SY466_.jpg",
        "plot": "The Women is the story of one woman gone to war, but it shines a light on all women who put themselves in harm’s way and whose sacrifice and commitment to their country has too often been forgotten. A novel about deep friendships and bold patriotism, The Women is a richly drawn story with a memorable heroine whose idealism and courage under fire will come to define an era.",
        "link": "https://www.google.com.br/books/edition/The_Women/0Ua4EAAAQBAJ?hl=pt-BR&gbpv=0",
    },
    {
        "title": "The Housemaid",
        "director": "Author: Freida McFadden",
        "year": "2022",
        "duration": "334 pages",
        "cover": "https://m.media-amazon.com/images/I/51Bo1tzfcBL._SY445_SX342_.jpg",
        "plot": "In the heart of a seemingly perfect suburban neighborhood, a sinister secret lurks beneath the pristine facade of a wealthy family's home. When a new housemaid, desperate for a fresh start, arrives to work for the family, she quickly discovers that nothing is as it seems. As she delves deeper into the family's lives, she uncovers a web of lies, deceit, and danger. Haunted by unsettling occurrences and a growing sense of unease, the housemaid must decide whether to expose the truth or risk her own safety.",
        "link": "http://books.google.com.br/books?id=c2kjzwEACAAJ&dq=THE+HOUSEMAID&hl=&source=gbs_api",
    },
    {
        "title": "A Court of Thorns and Roses",
        "director": "Author: Sarah J. Maas",
        "year": "2015",
        "duration": "451 pages",
        "cover": "https://m.media-amazon.com/images/I/51ZvROcTcfL._SY445_SX342_.jpg",
        "plot": "The sexy, action-packed first book in the #1 New York Times bestselling Court of Thorns and Roses series from Sarah J. Maas. When nineteen-year-old huntress Feyre kills a wolf in the woods, a terrifying creature arrives to demand retribution. Dragged to a treacherous magical land she knows about only from legends, Feyre discovers that her captor is not truly a beast, but one of the lethal, immortal faeries who once ruled her world. At least, he's not a beast all the time. As she adapts to her new home, her feelings for the faerie, Tamlin, transform from icy hostility into a fiery passion that burns through every lie she's been told about the beautiful, dangerous world of the Fae. But something is not right in the faerie lands. An ancient, wicked shadow is growing, and Feyre must find a way to stop it, or doom Tamlin-and his world-forever. From bestselling author Sarah J. Maas comes a seductive, breathtaking book that blends romance, adventure, and faerie lore into an unforgettable read.",
        "link": "https://play.google.com/store/books/details?id=E-kdBQAAQBAJ&source=gbs_api",
    },
    {
        "title": "Iron Flame",
        "director": "Author: Rebecca Yarros",
        "year": "2023",
        "duration": "639 pages",
        "cover": "https://m.media-amazon.com/images/I/5128O6TZNQL._SY445_SX342_.jpg",
        "plot": "Against all odds, Violet Sorrengail made it through her first year at Basgiath War College, but now, the real training begins. The stakes are higher than ever, and a determination to survive won't be enough this time. When a powerful new enemy threatens everything she cares about, including the man she loves, Violet must do whatever it takes to keep their secrets safe. One wrong move could have horrifying consequences - and as the web of lies spun by those in charge starts to unravel, nothing, not even dragon fire, may be enough to save them in the end.",
        "link": "https://www.google.com.br/books/edition/Iron_Flame/hEKjEAAAQBAJ?hl=pt-BR&gbpv=0",
    },
    {
        "title": "Demon Copperhead: A Novel",
        "director": "Author: Barbara Kingsolver",
        "year": "2022",
        "duration": "548 pages",
        "cover": "https://m.media-amazon.com/images/I/918DFDx5ZRL._SY466_.jpg",
        "plot": "Set in the mountains of southern Appalachia, Demon Copperhead is the story of a boy born to a teenaged single mother in a single-wide trailer, with no assets beyond his dead father’s good looks and copper-colored hair, a caustic wit, and a fierce talent for survival. Relayed in his own unsparing voice, Demon braves the modern perils of foster care, child labor, derelict schools, athletic success, addiction, disastrous loves, and crushing losses. Through all of it, he reckons with his own invisibility in a popular culture where even the superheroes have abandoned rural people in favor of cities. Many generations ago, Charles Dickens wrote David Copperfield from his experience as a survivor of institutional poverty and its damages to children in his society. Those problems have yet to be solved in ours. Dickens is not a prerequisite for readers of this novel, but he provided its inspiration. In transposing a Victorian epic novel to the contemporary American South, Barbara Kingsolver enlists Dickens’ anger and compassion, and above all, his faith in the transformative powers of a good story. Demon Copperhead speaks for a new generation of lost boys, and all those born into beautiful, cursed places they can’t imagine leaving behind.",
        "link": "https://www.amazon.com.br/Flame-Empyrean-English-Rebecca-Yarros-ebook/dp/B0BQQXS64D/ref=sr_1_1?crid=3J4G390IVD730&dib=eyJ2IjoiMSJ9.4gq5Tp0NOVtckmpI7tUxzhlMgSjD3l6itijzoJAdbqYhwrT8kO5BohiLxCjOidp0e4tGkJqL3QC2hZyqFQUKMS01xDEkRdt8yDPbV9Xn_e46jUFtXKCF9KRlyiC0UROMMvux_nNs0lbAAHzq8D_gZAe2kcXhYVCqCMasw4aXSi3UKjDCYroqwQNHzz-jk0corCYktfeVr0LqD81sfAWlvZs5i-JXI75q0fZ11cKgfzQ.dO2VMveWHodCVvj3HtB_B6V3LQPqeWPVlVqT-voE0x4&dib_tag=se&keywords=iron+flame&qid=1725575210&s=digital-text&sprefix=iron%2Cdigital-text%2C262&sr=1-1",
    },
    {
        "title": "The Dark Wives",
        "director": "Author: Ann Cleeves",
        "year": "2024",
        "duration": "336 pages",
        "cover": "https://books.google.com/books/publisher/content/images/frontcover/Z8rpEAAAQBAJ?fife=w240-h345",
        "plot": "The man’s body is found in the early morning light by a local dog walker in the park outside Rosebank, a home for troubled teens in the coastal village of Longwater. The victim is Josh, a staff member, who was due to work the previous night but never showed up.",
        "link": "https://play.google.com/store/books/details?id=Z8rpEAAAQBAJ",
    },
    {
        "title": "By Any Other Name",
        "director": "Author: Jodi Picoult",
        "year": "2024",
        "duration": "545 pages",
        "cover": "https://m.media-amazon.com/images/I/515q3HejbGL._SY445_SX342_.jpg",
        "plot": "In 16th century England, Emilia Bassano, a talented playwright, has her works performed under William Shakespeare's name due to societal restrictions against women writing plays. Fast forward to the present, where Melina Green, a contemporary playwright, faces similar challenges and opts for a male pseudonym to get her work produced.",
        "link": "https://play.google.com/store/books/details?id=DVjnEAAAQBAJ&source=gbs_api",
    }
]