export interface ArticleNode {
    type: 'body-text' | 'image-single' | 'image-double' | 'playlist' | 'header-image';
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

export interface Playlist extends ArticleNode {
    type: 'playlist',
    content: string
}

export interface IArticle {
    name: string,
    image: string,
    headerContent: string;
    bodyContent: Array<Array<BodyText | ImageSingle | ImageDouble | Playlist | HeaderImage>>;
}

export const articles: Record<string, IArticle> = {
    'drugs':     {
        name: 'drugs',
        image: 'https://articulate.gallery/hobo-about-drugs.jpeg',
        headerContent: `This issue is about drugs.  \n  \nSorry mom.`,
        bodyContent: [
            [
                {
                    type: 'header-image',
                    content: {
                        url: 'https://articulate.gallery/hobo.jpg'
                    }
                },
                {
                    type: 'body-text',
                    content: `No question receives as inadequate an answer as “how was it?” to a slow-thinking, blissed-out, directly-post-acid friend in the early evening hours after their trip. Their meandering memories are unordered, epiphanies inarticulate, warmth radiated out and smoked up like the incense they toppled over stumbling up to stretch.  \n  \nIn their baked and fuzzy haze, thoughts become tantric mantras: abstract, unarguable phrases chanted until they achieve natural truth. If printed on a natural fiber tee tumble-wash-eroded to a roughsoft nap, or a bumper sticker faded dry by road trips through All-American deserts (Vermont winter, Texas tumbleweed, Joshua Tree summer, Brooklyn asphalt), those mantras would be rendered in [Hobo](https://fonts.adobe.com/fonts/hobo).`
                },
                {
                    type: 'image-double',
                    content: [{
                        url: 'https://articulate.gallery/hobo-autumn.jpeg',
                        widthPercentage: 46.4,
                    }, {
                        url: 'https://articulate.gallery/hobo-after-hours.jpeg',
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
                        url: 'https://articulate.gallery/hobo-pear.jpeg',
                        widthPercentage: 50
                    }, {
                        url: 'https://articulate.gallery/hobo-mushrooms.jpeg',
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
                        url: 'https://articulate.gallery/hobo-party-posters.gif'
                    }
                },
                {
                    type: 'body-text',
                    content: `Hobo enjoys drugs, she half-heartedly self-assures while trudging through dopamine valleys, because receiving feeling is the truest form of honesty. The bitter cynicism lurking behind Hobo's fears is that she's merely a ripe target for projection. After all, isn’t her soft, smooth brain the perfect palette for the soaring emotional arcs of a trip? And her sincere and silent tight-lipped smile, allegedly beautiful - isn’t that just a safe haven for the hurt souls who seek her audience?`
                },
                {
                    type: 'image-double',
                    content: [{
                        url: 'https://articulate.gallery/hobo-about-drugs.jpeg',
                        widthPercentage: 40.5
                    }, {
                        url: 'https://articulate.gallery/hobo-bebop-deluxe.jpeg',
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
            [
                {
                    type: 'header-image',
                    content: {
                        url: 'https://articulate.gallery/shatter.jpg'
                    }
                },
                {
                    type: 'body-text',
                    content: `[Shatter's](https://freefontsdownload.net/free-shatterplain-font-150998.htm) rib cage pokes through their pale skin. Any fat Shatter once had was burned long ago from sweaty nights dancing and muscles shivering and thoughts spinning so fast that Shatter forgot to eat. Shatter is completely burnt, gnashing and grinding until the friction rips them into ash and smoke and acrid fumes.`
                },
                {
                    type: 'image-double',
                    content: [{
                        url: 'https://articulate.gallery/shatter-suicide.jpeg',
                        widthPercentage: 50,
                    }, {
                        url: 'https://articulate.gallery/shatter-acdc.jpeg',
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
                        url: 'https://articulate.gallery/shatter-schizo.jpeg',
                        widthPercentage: 50,
                    }, {
                        url: 'https://articulate.gallery/shatter-death-riders.jpeg',
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
                        url: 'https://articulate.gallery/shatter-retreat-from-sanity.jpeg',
                        widthPercentage: 47.9,
                    }, {
                        url: 'https://articulate.gallery/shatter-psychopath-test.jpeg',
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
            ]
        ]
    },
    'born-in-the-wrong-era': {
        name: 'born in the wrong era',
        image: 'https://articulate.gallery/moore-computer-computer-programming.jpeg',
        headerContent: 'this issue is about fonts born in the wrong era: 1) a child prodigy who found fun in retirement 2) a twee teen nostalgic for a time she never knew 3) an old soul that took decades to find his youth',
        bodyContent: [
            [
                {
                    type: 'body-text',
                    content: `Moore Computer (they/them) was part of a wave of fonts designed to be detected by magnetic ink character recognition (MICR). You know the first one - [E-13B](https://www.digitalcheck.com/what-is-e13b-font/), the numbers-only font that lets machines read the digits at the bottom of your checks. Its characteristic traits - right angles, square holes, tumorous strokes, variably cramped and cavernous spacing - started as a practical necessity but grew to be a symbol of "technology."
    
                    Somewhere between then and now, though, that image got flipped on its head. Moore Computer, once a vision of modernity, now speaks completely in the retro tense. How?`
                }
            ],
        ]
    }
}
