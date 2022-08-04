// Here, you'll create the 'database' of information that will be used
// to populate the website with information for each character

// Use the main Overwatch site as your reference for hero information
// https://playoverwatch.com/en-us/heroes/

// The value for the "img" key refers to the name of the image file
// in the "assets" folder. Feel free to use the ones provided, or
// download your own!

// 1) Create 3 of the following 6 objects based on the corresponding hero:
// sombra, doomfist, mercy, lucio, orisa, dVa 
// Note: The first hero is provided for you

// The structure for each hero object is as follows:
// NOTE: the "abilities" key stores an array of objects!

// const someHero = {
//     name:"someName",
//     type:"offense, defense, tank, or support",
//     difficulty:"1/3",
//     img:"somePic.png",
//     saying:"blah blah some saying",
//     story:"blah blah some story",
//     abilities:[
//         {
//             name:"ability1",
//             description:"blah blah about ability1"
//         },
//         {
//             name:"ability2",
//             description:"blah blah about ability2"
//         }
//     ]
// }

const sombra = {
    name:"sombra",
    type:"offense",
    difficulty:"3/3",
    img:"sombra.png",
    saying:"EVERYTHING CAN BE HACKED… AND EVERYONE.",
    story:"One of the world's most notorious hackers, Sombra uses information to manipulate those in power.Long before she took up the alias 'Sombra,' ░░░░░░ was among the thousands of children who were left orphaned in the aftermath of the Omnic Crisis. With much of her country's infrastructure destroyed, she survived by utilizing her natural gifts with hacking and computers. After ░░░░░░ was taken in by Mexico's Los Muertos gang, she aided it in its self-styled revolution against the government. Los Muertos believed that the rebuilding of Mexico had primarily benefited the rich and the influential, leaving behind those who were most in need of assistance. Following her many conquests, ░░░░░░ was supremely confident in her skills, but she was caught unprepared when she stumbled into the web of a global conspiracy—one that had also noticed her. With her security irreparably compromised, ░░░░░░ was forced to delete all traces of her identity and went into hiding. She later reemerged as Sombra, upgraded and determined to find out the truth behind the conspiracy she had uncovered. Sombra launched an even more audacious string of hacks, and her exploits earned her no shortage of admirers, including Talon. She joined the organization's ranks and is believed to have contributed to its massive cyberattacks against corporations with strong ties to their governments. These efforts incited a popular revolution in Mexico against LumériCo and breached the security of Volskaya Industries, the manufacturing arm of Russia's anti-omnic defense. Now, with Talon's extensive resources to call upon, Sombra can focus on her true goal: to unravel the conspiracy and use the power behind it to her own ends.",
    abilities:[
        {
            name:"MACHINE PISTOL",
            description:"Sombra’s fully-automatic machine pistol fires in a short-range spread."
        },
        {
            name:"HACK",
            description:"Sombra hacks enemies to temporarily stop them from using their abilities, or hacks first aid kits to make them useless to her opponents."
        },
        {
            name:"STEALTH",
            description:"Sombra becomes invisible for a short period of time, during which her speed is boosted considerably. Attacking, using offensive abilities, or taking damage disables her camouflage."
        },
        {
            name:"TRANSLOCATOR",
            description:"Sombra tosses out a translocator beacon. She can instantly return to the beacon’s location while it is active (including when it’s in mid-flight)."
        },
        {
            name:"EMP",
            description:"Sombra discharges electromagnetic energy in a wide radius, destroying enemy barriers and shields and hacking all opponents caught in the blast."
        },
        {
            name:"MACHINE PISTOL",
            description:"Sombra’s fully-automatic machine pistol fires in a short-range spread."
        }
    ]
}

const Hanzo = {
    name:"Hanzo",
    type:"offense",
    difficulty:"3/3",
    img: "https://th.bing.com/th/id/R.e8a8d7a38d948909cf2e3dca03a477ef?rik=%2bGwCav9BrzN9Qw&pid=ImgRaw&r=0",
    saying:"WITH EVERY DEATH COMES HONOR. WITH HONOR, REDEMPTION",
    story:"The Shimada family was established centuries ago, a clan of assassins whose power grew over the years, enabling them to build a vast criminal empire that profited from lucrative trade in arms and illegal substances. As the eldest son of the family's head, Hanzo was bound by duty to succeed his father and rule the Shimada empire. From a young age, he was trained for that responsibility, displaying a natural aptitude for leadership and possessing an innate understanding of strategy and tactics. He also excelled in more practical areas: he was a prodigy in martial arts, swordplay, and bowmanship.Upon the death of his father, the clan elders instructed Hanzo to straighten out his wayward younger brother so that he, too, might help rule the Shimada empire. When his brother refused, Hanzo was forced to kill him. This act broke Hanzo's heart and drove him to reject his father's legacy, ultimately leading him to abandon the clan and all that he had worked so hard to attain.Now, Hanzo travels the world, perfecting his skills as a warrior, attempting to restore his honor and put the ghosts of his past to rest.",
    abilities:[
        {
            name: "Storm Bow",
            description: "Hold to charge then release to launch arrows further",
        },
        
        {
            name: "Storm Arrows",
            description: "The next 5 arrows fir instantly at reduced damage",
        },
       
        {
            name: "Sonic Arrow",
            description:"Reveals enemies for a short time upon impact",
        },
        
        {
            name: "Lunge",
            description: "Double Jump",
        },
        
        {
            name: "Dragon Strike",
            description: "Launch a deadly Dragon Spirit that devastates enemies it passes through",
        },
        
        {
            name: "Wall Climb",
            description: "Jump at walls to climb up them",
        }
    ]
}

const genji= {
    name:"Genji",
    type:"offense",
    difficulty:"3/3",
img: "https://www.iconspng.com/images/genji.jpg",
saying: "EVEN IF I SACRIFICE MY BODY, I WILL NEVER SACRIFICE MY HONOR.",
story:"The cyborg Genji Shimada has made peace with the augmented body he once rejected, and in doing so, he has discovered a higher humanity. As the youngest son of the master of the Shimada ninja clan, Genji lived a life of luxury and privilege. He had little interest in the family's illegal businesses, and although he excelled at and enjoyed his ninja training, he spent most of his time pursuing a playboy lifestyle. Many within the clan considered the carefree Genji to be a dangerous liability, and they resented his father for coddling and protecting him. Following the clan leader's untimely death, Genji's older brother, Hanzo, demanded that Genji take a more active role in their late father's empire. Genji refused, enraging Hanzo. The tension between the brothers built to a violent confrontation that left Genji on the verge of dying. Hanzo believed that he had killed his brother, but Genji was rescued by Overwatch and the intervention of Dr. Angela Ziegler. The global security force saw Genji as a potential asset in its ongoing operations to combat the Shimada clan. As Genji's injuries left him clinging to life, Overwatch offered to rebuild his body in exchange for his help. He was put through an extensive process of cyberization, which enhanced his natural speed and agility and augmented his superlative ninja skills. Transformed into a living weapon, Genji single-mindedly set about the task of dismantling his family's criminal empire. But as time passed, Genji felt increasingly at war with himself. He was repulsed by the mechanical parts of his body and could not come to grips with what he had become. When his mission was complete, he abandoned Overwatch and wandered the world in search of meaning. He drifted for many years before crossing paths with the omnic monk Zenyatta. Though Genji initially rejected Zenyatta's wisdom, the benevolent omnic would not be deterred. In time, Zenyatta became his mentor, and under the monk's tutelage, Genji reconciled his dual existence as both man and machine. He learned to accept that although he had a cyborg body, his human soul was intact, and he came to see his new form as a gift and a unique strength. Now, for the first time in his life, Genji is free. Even he cannot say where his path will ultimately lead.",
abilities:[
    {
        name:"DEFLECT",
        description:"Deflect incoming projectiles towards the direction you are aiming and block melee attacks."
    },
    {
        name:"SWIFT STRIKE",
        description:"Rapidly dash forward and inflict damage on enemies. Eliminations reset the cooldown."
    },
    {
          name:"DRAGONBLADE ",
        description:"Unsheathe a deadly melee weapon. "
    },
    {
        name:"CYBER-AGILITY",
        description:"Climb on walls and double jump."
    },
   ]
}

let heroes= [const genji= {
        name:"Genji",
        type:"offense",
        difficulty:"3/3",
    img: "https://www.iconspng.com/images/genji.jpg",
    saying: "EVEN IF I SACRIFICE MY BODY, I WILL NEVER SACRIFICE MY HONOR.",
    story:"The cyborg Genji Shimada has made peace with the augmented body he once rejected, and in doing so, he has discovered a higher humanity. As the youngest son of the master of the Shimada ninja clan, Genji lived a life of luxury and privilege. He had little interest in the family's illegal businesses, and although he excelled at and enjoyed his ninja training, he spent most of his time pursuing a playboy lifestyle. Many within the clan considered the carefree Genji to be a dangerous liability, and they resented his father for coddling and protecting him. Following the clan leader's untimely death, Genji's older brother, Hanzo, demanded that Genji take a more active role in their late father's empire. Genji refused, enraging Hanzo. The tension between the brothers built to a violent confrontation that left Genji on the verge of dying. Hanzo believed that he had killed his brother, but Genji was rescued by Overwatch and the intervention of Dr. Angela Ziegler. The global security force saw Genji as a potential asset in its ongoing operations to combat the Shimada clan. As Genji's injuries left him clinging to life, Overwatch offered to rebuild his body in exchange for his help. He was put through an extensive process of cyberization, which enhanced his natural speed and agility and augmented his superlative ninja skills. Transformed into a living weapon, Genji single-mindedly set about the task of dismantling his family's criminal empire. But as time passed, Genji felt increasingly at war with himself. He was repulsed by the mechanical parts of his body and could not come to grips with what he had become. When his mission was complete, he abandoned Overwatch and wandered the world in search of meaning. He drifted for many years before crossing paths with the omnic monk Zenyatta. Though Genji initially rejected Zenyatta's wisdom, the benevolent omnic would not be deterred. In time, Zenyatta became his mentor, and under the monk's tutelage, Genji reconciled his dual existence as both man and machine. He learned to accept that although he had a cyborg body, his human soul was intact, and he came to see his new form as a gift and a unique strength. Now, for the first time in his life, Genji is free. Even he cannot say where his path will ultimately lead.",
    abilities:[
        {
            name:"DEFLECT",
            description:"Deflect incoming projectiles towards the direction you are aiming and block melee attacks."
        },
        {
            name:"SWIFT STRIKE",
            description:"Rapidly dash forward and inflict damage on enemies. Eliminations reset the cooldown."
        },
        {
              name:"DRAGONBLADE ",
            description:"Unsheathe a deadly melee weapon. "
        },
        {
            name:"CYBER-AGILITY",
            description:"Climb on walls and double jump."
        },
       ]
}]


// 2) Create an array called "heroes" and store all of the hero object in the array

// 3) In "index.html", create a form that allows the user to create 
// and add a new hero (add it under the "#gridDiv").
// For simplicity, the form should just include: name, type, difficulty, and saying
// The form should have a "Submit" button

// 4) At the bottom of "events.js", give the "Submit" button an on click event handler 


// BONUS: add 3 more Overwatch heroes from Overwatch (remember to add 
// them to the "heroes" array!)

// BONUS: Since the "type" only has 4 valid options, try using a
// radio button instead of the standard text input
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio

// BONUS: In "style.css", style your form to look more like the rest
// of the website
