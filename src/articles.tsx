export interface ArticleNode {
    type: 'body-text' | 'image-single' | 'image-double' | 'image-triple' | 'playlist' | 'header-image' | 'custom-html';
    content: any,
}

export interface BodyText extends ArticleNode {
    type: 'body-text',
    content: string,
}

export interface ImageSingle extends ArticleNode {
    type: 'image-single',
    content: {
        url: string
    },
    caption?: string
}

export interface HeaderImage extends ArticleNode {
    type: 'header-image',
    content: {
        url: string
    }
}

export interface ImageDouble extends ArticleNode {
    type: 'image-double',
    content: Array<{
        url: string
        caption?: string
        widthPercentage: number
    }>,
    caption?: string
}

export interface ImageTriple extends ArticleNode {
    type: 'image-triple',
    content: Array<{
        url: string
        caption?: string
        widthPercentage: number
    }>,
    caption?: string
}

export interface Playlist extends ArticleNode {
    type: 'playlist',
    content: string
}

export interface CustomHtml extends ArticleNode {
    type: 'custom-html',
    content: string
}

export interface IArticle {
    name: string,
    image: string,
    headerContent: string;
    bodyContent: Array<Array<BodyText | ImageSingle | ImageDouble | ImageTriple | Playlist | HeaderImage | CustomHtml>>;
}

export const articles: Record<string, IArticle> = {
    'drugs':     {
        name: 'Drugs',
        image: '/hobo-about-drugs.jpeg',
        headerContent: `This issue is about drugs.  \n  \nSorry mom.`,
        bodyContent: [
            [
                // HOBO
                {
                    type: 'header-image',
                    content: {
                        url: '/hobo.jpg'
                    }
                },
                {
                    type: 'body-text',
                    content: `No question receives as inadequate an answer as “how was it?” to a slow-thinking, blissed-out, directly-post-acid friend in the early evening hours after their trip. Their meandering memories are unordered, epiphanies inarticulate, warmth radiated out and smoked up like the incense they toppled over stumbling up to stretch.  \n  \nIn their baked and fuzzy haze, thoughts become tantric mantras: abstract, unarguable phrases chanted until they achieve natural truth. If printed on a natural fiber tee tumble-wash-eroded to a roughsoft nap, or a bumper sticker faded dry by road trips through All-American deserts (Vermont winter, Texas tumbleweed, Joshua Tree summer, Brooklyn asphalt), those mantras would be rendered in [Hobo](https://fonts.adobe.com/fonts/hobo).`
                },
                {
                    type: 'image-double',
                    content: [{
                        url: '/hobo-autumn.jpeg',
                        widthPercentage: 46.4,
                    }, {
                        url: '/hobo-after-hours.jpeg',
                        widthPercentage: 53.6
                    }]
                },
                {
                    type: 'body-text',
                    content: `Hobo has, above all else, a flared flair. She is natural, organic, softly undulating. You can, if you go slowly enough to fit in the spliffs and deep conversations and naps, hike in bell bottom Lees. Hobo does. It’s dyed in her wool, after all. Hobo’s parents, those wonderful old hippies, will leave her a cash-poor inheritance comprised largely of one-of-a-kind hand-me-downs in corduroy, canvas, denim and leather.`
                },
                {
                    type: 'image-double',
                    content: [{
                        url: '/hobo-pear.jpeg',
                        widthPercentage: 50
                    }, {
                        url: '/hobo-mushrooms.jpeg',
                        widthPercentage: 50
                    }],
                    caption: 'Nature girlie'
                },
                {
                    type: 'body-text',
                    content: `Hobo always seems to be hanging around some new group. Maybe its because she’s easy going, though she worries it's because of her copious hallucinogen intake. She makes fast friends waiting at the bar, smoking a cigarette outside, and in line at the club. With these new friends her soft smile rarely parts to push words through, merely pursing and curling in response to the conversation around her.`
                },
                {
                    type: 'image-single',
                    content: {
                        url: '/hobo-party-posters.gif'
                    }
                },
                {
                    type: 'body-text',
                    content: `Hobo enjoys drugs, she half-heartedly self-assures while trudging through dopamine valleys, because receiving feeling is the truest form of honesty. The bitter cynicism lurking behind Hobo's fears is that she's merely a ripe target for projection. After all, isn’t her soft, smooth brain the perfect palette for the soaring emotional arcs of a trip? And her sincere and silent tight-lipped smile, allegedly beautiful - isn’t that just a safe haven for the hurt souls who seek her audience?`
                },
                {
                    type: 'image-double',
                    content: [{
                        url: '/hobo-about-drugs.jpeg',
                        widthPercentage: 40.5
                    }, {
                        url: '/hobo-bebop-deluxe.jpeg',
                        widthPercentage: 59.5
                    }],
                    caption: 'Scenes from (ego) death valley'
                },
                {
                    type: 'body-text',
                    content: `Jeez, that was a long trip. Hobo pauses, thumbing through her last 6 hours - happy, sad, radiant, shivering, lost, found, stretched, and now contently - truly contently - wrung out.  \n  \n“How was it?” you ask again.  \n  \n“Ohhhh, you knoooow,” replies Hobo, her arcing tone harmonizing with the past day’s still-reverberating feelings. “How are you?” she deflects.`
                },
                {
                    type: 'playlist',
                    content: '1ID6efZZM74MAVxxFS0bMm'
                }
            ],
            // SHATTER
            [
                {
                    type: 'header-image',
                    content: {
                        url: '/shatter.jpg'
                    }
                },
                {
                    type: 'body-text',
                    content: `[Shatter's](https://freefontsdownload.net/free-shatterplain-font-150998.htm) rib cage pokes through their pale skin. Any fat Shatter once had was burned long ago from sweaty nights dancing and muscles shivering and thoughts spinning so fast that Shatter forgot to eat. Shatter is completely burnt, gnashing and grinding until the friction rips them into ash and smoke and acrid fumes.`
                },
                {
                    type: 'image-double',
                    content: [{
                        url: '/shatter-suicide.jpeg',
                        widthPercentage: 50,
                    }, {
                        url: '/shatter-acdc.jpeg',
                        widthPercentage: 50
                    }]
                },
                {
                    type: 'body-text',
                    content: `Before falling face-first onto sharp rails of cocaine that Shattered them into jagged shards, they were a clean, orderly, crisp Helvetica. Looking at their pieces, angled forward and stuttering back, Shatter’s particularly handy and hopeful friends imagine they can put Shatter back together. Maybe they can. Never perfect, never seamless, never like they were - that Eden is gone - but together in some comfortable, human sobriety.`
                },
                {
                    type: 'image-double',
                    content: [{
                        url: '/shatter-schizo.jpeg',
                        widthPercentage: 50,
                    }, {
                        url: '/shatter-death-riders.jpeg',
                        widthPercentage: 50
                    }]
                },
                {
                    type: 'body-text',
                    content: `Some who have already tried to help, though, aren’t so sure. “The breaks might be too clean and complete,” they worry in hushed tones, “and I’m not sure there’s a surface for the glue to hold on to and bring Shatter back together.” If they’re right, if Shatter’s anxious feedback loop has become debilitatingly defeaning, the only way to quiet Shatter might be by unplugging them altogether. Full lobotomy.`
                },
                {
                    type: 'image-double',
                    content: [{
                        url: '/shatter-retreat-from-sanity.jpeg',
                        widthPercentage: 47.9,
                    }, {
                        url: '/shatter-psychopath-test.jpeg',
                        widthPercentage: 52.1
                    }]
                },
                {
                    type: 'body-text',
                    content: `For now, Shatter will remain suspended in the cracked acrylic amber of their panicked mania. A breaking point - one we try not talk about anymore - brought about their Shattering. One day, God willing, another will bring about their Recovery.`
                },
                {
                    type: 'playlist',
                    content: '2xYyw0fNAX1xkEZOb3sk9j'
                }
            ],
            // WEED
            [
                {
                    type: 'custom-html',
                    content: `<div className="header-text-wrapper"><p className="header-text">Weed</p><p className="subheader-text">multiple fonts</p></div>`
                },
                {
                    type: 'body-text',
                    content: `The modern cannabis consumer/connoisseur (MCC/C) knows there are three key data points (3-KDPs) to evaluate when selecting a giggle grass to mellow their harsh: delta-9-tetrahydrocannabinol (Δ-9-THC), CBD (CBD), and, crucially, brand identity.  \n  \nThanks to its wide popularity, weed has developed a moderate categorical diversity that gives consumers a feeling of control without the burden of creation. Run your eyes over the selection on the shelf: whispy scripts centered over washed out pastels, matte black blocks drilled into glossy precious metal, merry old tattoos inked on tan paper.`
                },
                {
                    type: 'image-double',
                    content: [{
                        url: '/weed_CID_Flower-Collective_Swag_Joint-Crutch.webp',
                        widthPercentage: 50,
                    }, {
                        url: '/weed_EMO_LeafsBySnoop_05.webp',
                        widthPercentage: 50
                    }],
                    caption: 'Weed is instructional'
                },
                {
                    type: 'body-text',
                    content: `Why the schisms in window dressing? Boomers bought things. Millennials bought experiences. Now, young folks purchase states of being - ideally visible ones. It’s natural for consumers to come of age, after all. Weed has. Marijuana’s polyamorous relationship with private equity and Pentagram design has led it to embrace its professional Brand Identity: relaxed, coherent, attractive, and pristine.`
                },
                {
                    type: 'image-double',
                    content: [{
                        url: '/weed_Berger-Fohr-Icon-Magazine-Rethink-01.webp',
                        widthPercentage: 50,
                    }, {
                        url: '/weed_Collage-Revision.webp',
                        widthPercentage: 50
                    }],
                    caption: 'Weed is medicinal'
                },
                {
                    type: 'body-text',
                    content: `If only those promises came true. Like drinking with your parents, smoking is fun in theory and hilarious in stories. But in reality, few are cool enough to do it without feeling a touch off. Both happened most in college, at high school grad parties, Thanksgivings back home, and second cousins’ weddings. They were narcotics to dull the lonely, low-grade pain that started acting up after flying (falling?) out of the nest.`
                },
                {
                    type: 'image-double',
                    content: [{
                        url: '/weed_1556123303847-Sundae-School-9_Phillip-Kim.jpg',
                        widthPercentage: 50,
                    }, {
                        url: '/weed_Sundae_Yuzu_Packaging.webp',
                        widthPercentage: 50
                    }],
                    caption: 'Weed is presentable'
                },
                {
                    type: 'body-text',
                    content: `There is no singular font for weed because weed has fully entered the public forum: a buyer’s market (confused, inebriated, unsatisfied buyers), and thus a marketer’s market. It is defined by the surface-level diversity pulling it in every direction and, ultimately, nowhere.`
                },
            ],
        ]
    },
    'born-in-the-wrong-era': {
        name: 'Born in the wrong era',
        image: '/moore-computer-computer-programming.webp',
        headerContent: 'these fonts were all born in the wrong era. they are a late bloomer, and old soul, and a child prodigy living his second life.',
        bodyContent: [
            // MOORE COMPUTER
            [
                {
                    type: 'header-image',
                    content: {
                        url: '/moore-computer.png'
                    }
                },
                {
                    type: 'body-text',
                    content: `Moore Computer (they/them) was part of a wave of fonts designed to be detected by magnetic ink character recognition (MICR). You know the first one, [E-13B](https://www.digitalcheck.com/what-is-e13b-font/), which is the numbers-only font that lets machines read the digits at the bottom of your checks. Its imbalanced spacing, right angles, square holes and tumorous strokes started as a practical necessity but grew to be a symbol of "technology."  \n  \nSomewhere between then and now, though, that image got flipped on its head. Moore Computer, once a vision of modernity, now speaks completely in the retro tense. How?`
                },
                {
                    type: 'image-double',
                    content: [{
                        url: '/moore-computer-appliance.webp',
                        widthPercentage: 50
                    }, {
                        url: '/moore-computer-computer-programming.webp',
                        widthPercentage: 50
                    }]
                },
                {
                    type: 'body-text',
                    content: `When viewed at a glance, a distant point on the horizon might resemble the future. But as time moves forward, that point comes nearer and nearer until one day you're looking at it in the unflattering, skin-wrinkling, belly-bloating rearview mirror. Fonts that articulate “the future” as a specific design inevitably meet this fate. Their vision for an upcoming reality may turn out right or wrong, but either way it turns out and fades away. Moore Computer is our witness.  \n  \nPredicting the future is hard work, though, and should be left in the professional hands of storefront psychics and insider traders. Once Moore Computer was released from the burden to be right and now, they were able to be themself.`
                },
                {
                    type: 'image-single',
                    content: {
                        url: '/moore-computer-odyssey.webp'
                    }
                },
                {
                    type: 'body-text',
                    content: `When I see Moore Computer hawking their wares in vintage Etsy stores and posing for selfies on '70s IG moodboards, I see a [playfulness](https://fontsinuse.com/uses/43460/pizza-planet-spaceport-entry-in-toy-story-199) that was missing when they were the spokesperson for [computer manuals](/moore-computer-computer-programming.webp) and [appliance advertisements](/moore-computer-appliance.webp). Their value isn't conditional on their technical abilities - people love them for who they are.  \n  \nLife moves fast and technology moves faster. It's a rare gift that Moore Computer was finally able to slow down and enjoy it.`
                },
                {
                    type: 'playlist',
                    content: '76MtDvorEZIOQ2qMrhbOyl'
                }
            ],
            // RECOLETA
            [
                {
                    type: "header-image",
                    content: {
                        url: '/recoleta.png'
                    }
                },
                {
                    type: 'body-text',
                    content: `Any given Saturday night, you'll find [Recoleta](https://www.myfonts.com/fonts/latinotype/recoleta/) in her bedroom (second floor, left of the stairs, if you hit the picture of Grandma and Grandpa in college you've gone too far). She's imagining a chiller life. Or maybe it's just different. But it certainly doesn't have the Common App website or follower counts or numbers at all for that matter. And certainly certainly not Tim.  \n  \nRecoleta may have been designed in the TikTok generation, but she was born in the wrong era. The 60s were for her. Or was it the 70s? When was Fleetwood Mac? Well… any of those times would be better than now. There'd be neighborhood kids, no one would ask her about college, she'd fit in, and days would pass like movie montages.`
                },
                {
                    type: 'image-single',
                    content: {
                        url: '/recoleta-black.png'
                    },
                    caption: `Recoleta's heaviest weight, poofy and present like facetiming in a groutfit.`
                },
                {
                    type: 'image-single',
                    content: {
                        url: '/recoleta-kate-bollinger.jpeg'
                    },
                    caption: `Windsor, Recoleta's style icon.`
                },
                {
                    type: 'body-text',
                    content: `Recoleta's type face is a spitting image of the fonts she looks up to. That angled stroke in her lowercase “e” - that's pure [Windsor](https://assets.fontsinuse.com/static/use-media-items/53/52451/upto-700xauto/5922b8cf/@2x/our-earth-our-cure.jpeg). Her rounded strokes and nib-y serifs could've been bought from [Cooper Black](https://fonts.adobe.com/fonts/cooper-black)'s Depop page. At lighter weights, she has a unaffected glamour that borders on waifish. At heavier weights, she flips to the other side of the juvenile coin and trades muted disinterest for unbothered goofiness.  \n  \nLike so many modern fonts in her generation, Recoleta is torn between a thousand things and she's expected to do it all. She needs to make sense printed on Instagram self-care how-to's, thrift shop totes, and [start-up dentists offices](https://www.hellotend.com/). Whatever happened to just letting fonts be kids? These code switches can be tiring for a young font still finding its own voice. So tiring, in fact, that Recoleta doesn't notice the skill she displays in making them.  \n  \nIf only she knew what her parents' friends say about her. How engaging she is. How she listens better than anyone her age should know how. And so elegant, too.  \n  \nShe'll get there soon.`
                },
                {
                    type: 'playlist',
                    content: '34Abfv2hm4VyxD4aZhjrU2'
                }
            ],
            // EGYPTIENNE
            [
                {
                    type: 'header-image',
                    content: {
                        url: '/egyptienne.png'
                    }
                },
                {
                    type: 'body-text',
                    content: `Egyptienne (he/him) peaked late. Not a 5th-year-senior, “I know all the moves,” slippery, suave, ["alright, alright, alright"](https://www.youtube.com/watch?v=EuER2Puym4I) late peak. Egyptienne was a [foreign exchange student from another time](https://www.youtube.com/watch?v=roRh_LqhgR4), lucky enough to be well received but never totally understood.  \n  \nNo one is quite sure when Egyptienne was born - [some say 1820, others 1851](https://fontsinuse.com/typefaces/4027/egyptienne). Egyptienne was designed in the time before birthdays, when people were too busy toiling in fields and being generally itchy to write down a birthdate. But after a century and a half in the flip-over pages of typeface catalogs, Egyptienne moved to the big city and blew up. All of a sudden, it was on album covers and movie posters and newsstands.  \n  \nWhy? Egyptienne is bold and self-assured. It has enough character to be interesting at large sizes. And yet it remains readable at small ones. When the Dutch celebrate Sinterklaas1 on Sinterklaas Eve, they give each other large chocolate bars in the shape of their initials. [Egyptienne is typically the font](https://en.wikipedia.org/wiki/Chocolate_letter#cite_note-Chocolate_letter_font-1). It's fun enough to fit a festive spirit, but legible enough to be printed in industrial quantities of melty, waxy chocolate.`
                },
                {
                    type: 'image-triple',
                    content: [{
                        url: '/New-York-Magazine-16-Aug-1976.webp',
                        widthPercentage: 34.1333,
                    }, {
                        url: '/NewYorkMagazine-1975-0317.jpeg',
                        widthPercentage: 31.7333
                    }, {
                        url: '/NewYorkMagazine-1968-0722.png',
                        widthPercentage: 34.1333
                    }],
                },
                {
                    type: 'body-text',
                    content: `Egyptienne reminds me of the suits men wore to the office in the 70s. While still formal, they were bolder than the white collar workwear of previous decades: wider lapels, flared legs, brighter colors. This balance between restrained formality and fashion-forward creativity makes sense in the contexts Egyptienne thrived: the covers of hip social commentary magazines like [New York Magazine](https://fontsinuse.com/uses/30730/new-york-magazine-1960s-1970s) and [Fact](https://fontsinuse.com/uses/16766/fact-magazine-covers). Intellectual but provocative, cerebral but visceral.  \n  \nIt's a good thing he waited those 150 years - when his time came, Egyptienne was a perfect fit.`
                }
            ]
        ]
    },
    'creativity-in-constraint': {
        name: 'Creativity in constraint',
        image: '/pilowlava-heiroglyphics.png',
        headerContent: 'this issue is about creativity within constraint. we hope it makes you think about your own struggle to stand out while fitting in.',
        bodyContent: [
            [
                // Pilowlava
                {
                    type: 'header-image',
                    content: {
                        url: '/pilowlava.jpg'
                    },
                },
                { 
                    type: 'body-text',
                    content: `When you read Pilowlava, the first thing you read is Pilowlava. Its bulbuous strokes jut out with a wonderfully haphazard and syncopated rhythm, and you've got to it read several times before you can tap your foot to it. Eventually you parse out its alphabet. There's a P, that's a W, what an interesting way to write an I. Only then do you actually read it. And in that latency between perceiving it and engaging with it, Pilowlava's attempt to communicate is lost.  \n  \nIn our time of tense high-stakes self-actualization, Pilowlava gets identity across effortlessly. It's great for applications where establishing and explaining oneself is the only goal: a sour beer's label, an upscale headshop's logo, a Pratt student's endearingly overdone web design portfolio. But once the sentence doesn't start with "I am," Pilowlava fumbles over its words. The letters dont quite fit in the eye, they certainly don't string together in a sentence, and when viewed as a large body of text they may as well be hieroglyphics.  \n  \nUse promo code RTICKUL8 to get 0% off a free download of Pilowlava. You should donate tho.`
                },
                {
                    type: 'custom-html',
                    content: `<table><colgroup><col><col><col></colgroup><thead><tr><th>Procilitivies and preferences</th><th>Who are they wearing</th><th>Airpod content</th></tr></thead><tbody><tr><td>Mexico City modern art scene<br><br>ENM, but only because their crush is</td><td>Bleached fuzzy red distressed wool cardigan<br><br>Steel<br><br>Cropped jeans<br><br>Black loafers</td><td>Silence<br><br>Foreign language podcasts<br><br>Unanswered phone calls</td></tr></tbody></table>`
                },
                {
                    type: 'playlist',
                    content: '0q9RrFkZjrEkr00ALAoxqQ'
                }
            ],
            [
                // Pilowlava
                {
                    type: 'header-image',
                    content: {
                        url: '/averia-serif.jpeg'
                    },
                },
                { 
                    type: 'body-text',
                    content: `Averia Serif's designer had a vision - that's obvious. Under caving-in ceilings, in a room somehow dry and musty, among 2007 LSAT prep books and Kurt Vonnegut reprints, lies a used book store's collection of pages at various stages of yellowing. The Averia Serif letters dyed into them are regular but imperfect. Any description other than "booky" feels partial and technocratic. Averia Serif is steeped in history: comfortable, human, personal.  \n  \nBut it's not. Averia Serif was generated by averaging all the glyphs on its creator's computer. It is brown, static noise, Switzerland in wartime. It is an automated product: completely indifferent, lazily magnanimous, and the lack of intention in letter and spirit.  \n  \nThat's the best part.  \n  \nTypefaces promise that you can fit in and still be yourself. To have a life, they must conform to legibility. But to justify it, they must be unique. No typeface does this better than Averia Serif. It's defined entirely through its relationship with its peers, but speaks with a particular, self-assured voice.  \n  \nYou can download Averia Serif here.`
                },
                {
                    type: 'custom-html',
                    content: `<table class="width-100p"><colgroup><col><col><col></colgroup><thead><tr><th>Grandparents, ranked</th><th>Tour of the clothing pile</th><th>Sunday self care</th></tr></thead><tbody><tr><td>Pop pop  \n  \nGrammie    \n  \nJeff  \n  \nMee maa  \n</td><td>Oversized, thrifted preppy<br><br>Kitchen scissor-sheared dungarees<br><br>The same stuff their friends wear</td><td>Lonely mornings, facetime nights<br><br>Staring emptily<br><br>Conscious smiles with good coffee and apologetically late friends</td></tr></tbody></table>`
                },
                {
                    type: 'playlist',
                    content: '2LTs3gh0K2EqCYOHEfrojt'
                }
            ],
            [
                // Forma
                {
                    type: 'header-image',
                    content: {
                        url: '/forma.jpeg'
                    },
                },
                { 
                    type: 'body-text',
                    content: `In my high school, hallways were wallpapered with edutaining posters about the uncanny numeric patterns of the natural world. Fibonacci, spiraling seashells, branching tree limbs. Like an English teacher rapping Shakespeare, these posters pled that math transcended #2 pencils and studyhall - that it was pure, vital, and essential.  \n  \nFrom what I've gathered, mid-century modern design is supposed to transcend in the same way. Chairs are tulips, tables are lilypads. As an aesthetic statement that's groan-inducing but not crazy. Look around, though - mid-century modern design has transcended beyond even the natural world to the purest realm known to myn: social status. All that matters now is commercial and cultural context.  \n  \nBut as Forma attests, that was always the case. In 1965, a major type foundry commissioned a team of 8 "to develop a more mature, humane interpretation of the Swiss sans serif trend". They wanted their Helvetica - the commerical runaway hit that defined the past decade's aesthetic - but updated to responsd to a decade of complaints about Helvetica's legibility and uniformity. Starting with Helvetica as the base, Forma:  \n  \n- has strokes with a slight flare (check the F)  \n  \n- has lower case letter with taller bodies and shorter stems (more legible)  \n  \n- has immpresively tight letter spacing - it feels like a freshly straightened desk  \n  \n- has some characters, like the lower case "e", that are tweaked to be more distinct from other letters (more legible)  \n  \nBut to the non-nerds, what's important is how Forma fits into its context. It's Helvetica enough to get on the shelf, and not Helvetica enough to be bought off it (which you can do here).`
                },
                {
                    type: 'custom-html',
                    content: `<table class="width-100p"><colgroup><col><col><col></colgroup><thead><tr><th>FMK</th><th>LA or NYC</th><th>Where'd their parents get their money?</th></tr></thead><tbody><tr><td>Fuck: Tulip Chair  \n  \n  \nMarry: Eames Recliner  \n  \nKill: Noguchi Coffee Table  \n  \n(Bonus) Mistress: MoMA Hoodie  \n</td><td>Milan :)</td><td>So I heard their mom's dad was Carlton Pepperidge of Pepperidge farm, but now the money is mostly tied up in art and their Foundation's real estate.</td></tr></tbody></table>`
                },
                {
                    type: 'playlist',
                    content: '3IzfqKuqQrT7XM0qsVip5j'
                }
            ]
        ]
    }
}
