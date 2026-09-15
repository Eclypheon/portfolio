export interface StoryChapter {
  number: number;
  title: string;
  subtitle: string;
  content: string[];
}

export interface DarkProseItem {
  id: string;
  title: string;
  type: 'Poem' | 'Prose Fragment' | 'Observation';
  attribution: 'Authored by Neo Kester' | 'AI-Generated (Approved by Neo Kester)';
  date?: string;
  text: string[];
}

export const flatEarthStory = {
  title: 'I went to a Flat-Earthers’ convention and now I’m a believer',
  redditUrl: 'https://www.reddit.com/r/nosleep/s/u6muBVtCon',
  authorNote: 'Originally surfaced on r/nosleep. Chronicling the strange fervour in southern Russia, Anastasia’s invitation, and the unraveling of scientific certainty.',
  tagline: 'A psychological cosmic horror recounting of dogma, glacial geometry, and the terror of empirical verification.',
  chapters: [
    {
      number: 1,
      title: 'Chapter I: The Invitation',
      subtitle: 'The Architecture of Certainty',
      content: [
        'I live in a small rural town in southern Russia and in the past year or so, a strange fervour had arisen here regarding the flat earth theory. For the uninitiated, it’s basically a theory which states that the earth is a plane or disk as opposed to a sphere. Utter nonsense, of course, with so much of modern science disproving it; or so I thought until just a couple of months ago when I was invited to one of these stupid conventions that have been popping up more and more frequently.',
        'Now usually, I’d scoff at whoever would even believe in this, much less have the audacity to think I’m mentally impaired enough to want to attend one of their cult gatherings, but this time, it was different. Anastasia, the girl who invited me, was one of my closest friends and someone whom I’d clicked with almost solely because she was one of the few rational people in this superstitious town. Heck, we were even in the school’s science club together. One of our favourite pastimes used to be poking holes in the countless folklores we’d always heard growing up.',
        '“Hey Alex, wanna come with me to a flat earth convention tomorrow? Recently I’ve been attending and it’s been really eye-opening!”',
        'My initial thoughts were that she was being sarcastic; however, the enthused manner which she asked unsettled me. It wasn’t enthusiastic in the sense that we’re gonna blow the whole lid on this stupid theory and make a laughing stock out of all these silly people. She really seemed to believe in it, so much so as to want to rope me in and share with me her experiences.',
        '“I know what you’re thinking, but trust me, how long have you known me? You know I’d be the last person to buy into any of these kinds of things.”'
      ]
    },
    {
      number: 2,
      title: 'Chapter II: The Anomaly at 70° South',
      subtitle: 'Beyond the Maritime Perimeter',
      content: [
        'Officially, the Antarctic Treaty exists to protect pristine polar ecosystems. Unofficially, as the intercepted satellite pings began to reveal, it functions as a cordon sanitaire—not to keep people from entering, but to prevent anyone from documenting what happens to light and compass headings beyond the Amundsen-Scott perimeter.',
        'We pooled our savings, secured an ice-class hull outfitted with reinforced plating, and installed dual redundant inertial gyro-compasses that did not rely on commercial orbital transponders.',
        'On December 14th, slipping past the 60th parallel south under a raging polar blizzard, the GPS signals predictably collapsed into static. We switched to inertial navigation. That was the moment the geometry began to bend.'
      ]
    },
    {
      number: 3,
      title: 'Chapter III: The Non-Euclidean Rim',
      subtitle: 'The Ice Wall Does Not Look Up',
      content: [
        'The popular flat-earth myth depicts an abrupt, vertical cliff of white ice, like a frozen stadium rim holding back the oceans. The reality we encountered was infinitely more horrifying.',
        'There was no vertical wall. Instead, the sea began to slope. Not a wave, not a swell, but an unbroken, glass-smooth incline of black brine that angled gently upward at three, then seven, then eleven degrees. The boat did not capsize; gravity itself had reoriented its vector perpendicular to the water’s surface.',
        'In the distance, rising from the black incline of water, stood monuments of translucent basalt. They were not carved; they were grown like crystalline teeth, stretching miles into an atmosphere so thin that stars were visible in broad daylight.',
        'Anastasia stepped out onto the bow deck. Her voice did not sound like her own: “The earth is neither flat nor round. It is a scar.”'
      ]
    },
    {
      number: 4,
      title: 'Chapter IV: Anastasia’s Silence',
      subtitle: 'The Return of the Survivors',
      content: [
        'My memory logs jump from the basalt towers directly to an emergency medical ward in Ushuaia, Argentina. Severe hypothermia and cognitive shock.',
        'Anastasia never spoke again. The physicians diagnosed her with a rare form of catatonic stupor accompanied by total cortical blindness. But when I sit beside her bed in the quiet hours before dawn, her blind eyes dart furiously behind closed lids, tracking something that moves in impossible geometric parabolas above our heads.',
        'Now I am simply a traveller. If you ever find yourself looking at the southern horizon and you notice that the line of the water is rising higher than your eyes can comfortably register: do not look for the ice wall. Turn back. While your mind is still your own.'
      ]
    }
  ]
};

export const darkProseCollection: DarkProseItem[] = [
  // Authored by Neo Kester
  {
    id: 'poem-aunt-fee',
    title: 'aunt fee',
    type: 'Poem',
    attribution: 'Authored by Neo Kester',
    text: [
      'Such is my abode, broken, shattered, blood-splattered',
      'Living apart, alone segregated',
      'The wife, the mother rests alone, wits abated',
      'The father, the husband works alone, strives unaided',
      'The daugher, the son, fights alone, dreams and desires never sated',
      '',
      'Arduous it is to live never at ease',
      'A man without a home, a dog without a bone',
      'Pain and despair for demons to feast',
      'Like aimless nomads we roam seated bareback on a skeletal roan',
      '',
      'How then shall i still survive',
      'Should i persist or do i just die',
      'When all thats left of me is eternal ache',
      'Then thats all i’ll look forward to, to push and to break',
      '',
      'Just a tenement is what i desire, what i envy',
      'Of you people, living so fine and dandy',
      'Building castles in beaches so sandy',
      'Maybe i can crawl out of this fire, even with these shackles on me',
      '',
      'Probably not, my fetters taunt me',
      'Trailing behind me even my shadow now haunts me',
      'Im on the highway to hell, here take my jaunt fee'
    ]
  },
  {
    id: 'poem-food-for-the-worms',
    title: 'Food for the worms',
    type: 'Poem',
    attribution: 'Authored by Neo Kester',
    text: [
      'Pulsating crimson erupts amidst darkness',
      'Scarlet leaves fly',
      'Vermillion skies die',
      'Into callous nights they lie, moonlit, starless',
      'A modicum of pain',
      'A maelstrom in my brain',
      'Cursed to have my only blessing be my bane',
      '',
      'Startling awake from fevered dreams to fevered realities',
      'Wrestling my fate',
      'Hoping storms abate',
      'In light of my human fragility',
      'A struggle to stay sane,',
      'Of which efforts crumble in vain',
      'The sole source of light; even the moon starts to wane',
      '',
      'Yet even as I wake, the nightmares don\'t fade',
      'At this rate',
      'Drowning\'s inevitable in the murky waters I wade',
      'Spectral hands clamp',
      'A vice grip on my soul',
      'Weighed down by my Kampf',
      'And figments of my sepulchral woes',
      'There\'s no escape, I\'m surrounded, sans friends only foes',
      '',
      'So shall I then embrace this continued martyrdom?',
      'The infernal furnace burns',
      'As I approach my stomach churns',
      'Relinquishing my will to resist this pervasive despotism',
      'For fate\'s gaze is stern',
      'Something we all eventually learn',
      'But yea I guess it doesn\'t matter, nothing does, for in the end we\'re all just food for the worms'
    ]
  },
  {
    id: 'poem-elegy',
    title: 'Elegy',
    type: 'Poem',
    attribution: 'Authored by Neo Kester',
    text: [
      'Just as one takes a train to travel on earth...',
      '',
      'It can only go up from here I hear',
      'Its rock bottom its already so low',
      'Yet life will only get tougher I fear',
      'Choked full of circumstances out of my control',
      '',
      'Even this body seems to no longer be my own',
      'Its so crowded, I\'m surrounded yet all alone',
      'Floundering against the tide being dragged along',
      'Perhaps its too late, maybe I\'m too far gone',
      '',
      'They say the eyes are the windows to the soul',
      'Beyond which you may find the starry nights of van Gogh',
      'But out these windows lie only streets with dead ends',
      'And perpetual rain broken by fair weather - fairweather friends',
      '',
      '...we take death to reach a star'
    ]
  },
  {
    id: 'poem-cant-sleep',
    title: 'Cant sleep zz',
    type: 'Poem',
    attribution: 'Authored by Neo Kester',
    text: [
      'These infernal sleepless nights are',
      'Tearing my psyche apart and',
      'My mind aimlessly wanders out far',
      'To desolate shores, no man\'s land',
      '',
      'The crimson tide brings with it torment',
      'Eroding with each egress',
      'Corroding with callous finesse',
      'Anguish that will never cease nor relent',
      '',
      'Remembrance, such reverie evokes',
      'Of past agony never again bespoke',
      'Of antecedent scenarios that could have been',
      'Of apocryphal acid trips via ketamine',
      '',
      'Deep in the recesses of this addled mind',
      'A shriveled pale being appears to have survived',
      'Pleading for clemency of the torpid kind',
      'Just a small mercy for the sleep deprived'
    ]
  },
  {
    id: 'poem-fugacious-escape',
    title: 'Fugacious escape',
    type: 'Poem',
    attribution: 'Authored by Neo Kester',
    text: [
      'A dark void tears a hole in your reality',
      'Peering inside you witness life\'s banality',
      'Stepping inside you\'re immersed in a world of darkness',
      'Forsaking light you fill yourself with cold and numbness',
      '',
      'Living is a step in front of the other',
      'Towards a tunnel where the light just keeps growing farther',
      'Drained down a funnel your soul spirals to oblivion',
      'Your life crumbles but you\'re just another one of millions',
      '',
      'Heaps of trash, scrap metal, an expendable tool',
      'Racing to riches, one more incomprehensible fool',
      'Why do they do it? This mindless endless striving to thrive.',
      'All it leads to is meaningless torment and strife.',
      '',
      'So retreat you do into your world of darkness',
      'Short-lived respite from the cruel caustic realm of the heartless',
      'Yet despite your efforts for a continued escape',
      'In this poem I indite that soon you shall wake'
    ]
  },
  {
    id: 'poem-sheeple',
    title: 'Sheeple',
    type: 'Poem',
    attribution: 'Authored by Neo Kester',
    text: [
      'Lament with sorrow which would not surcease',
      'Beguiled into hedonism those who live',
      'Debauchery breathes with whimsical relief',
      'Lined with hypocrisy those eyes which do not see',
      '',
      'Chicanery thrives disregard disbelief',
      'Multifaceted lies masquerade and deceive',
      'Scream they cry cease and desist',
      'Living as hounds on a puppeteers leash',
      '',
      'The living who abide with the mien of the deceased',
      'Knowledge once light, in the darkness now wheeze',
      'Love once bright, crumble like dried linden leaves',
      'Time and tide only those who bide may be appeased',
      '',
      'The horde the masses suspend thought but not belief',
      'The hives their minds had sought not to sift',
      'Not to rip in the fabric a social rift',
      'To live their lives fixated at ease',
      '',
      'But never shall they find their peace',
      'No bona fide gestures in death\'s kiss',
      'Nothing to hide from no eternal bliss',
      'Asphyxiated in life I hope they\'re happy at least',
      '',
      'Unlike me'
    ]
  },

  // AI-Generated & Approved by Neo Kester
  {
    id: 'prose-01',
    title: 'Kinetic Reassembly',
    type: 'Poem',
    attribution: 'AI-Generated (Approved by Neo Kester)',
    date: 'Post-Op Observation',
    text: [
      'Five times the scalpel cut the meat from bone,',
      'Five times the needle sewed the tension tight.',
      'A titanium anchor where the tendon had blown,',
      'A stubborn pulse against the surgical light.',
      '',
      'They measure healing in a sterile degree,',
      'While the soul revolts against the goniometer.',
      'I will not yield to domesticity;',
      'I will bend the limb until the pain turns sweeter.'
    ]
  },
  {
    id: 'prose-02',
    title: 'The Uninspected Cell',
    type: 'Observation',
    attribution: 'AI-Generated (Approved by Neo Kester)',
    date: 'Notes on Panopticism',
    text: [
      'The highest triumph of the machine is when the prisoner builds his own cage and calls it high efficiency.',
      'We install our own telemetry, wear smart watches to measure the frequency of our terror, and tweet our intimate confessions into the void.',
      'Foucault’s guard never had to climb the tower; we built the mirror into our pocket computers.'
    ]
  },
  {
    id: 'prose-03',
    title: 'Language Games in Low Memory',
    type: 'Prose Fragment',
    attribution: 'AI-Generated (Approved by Neo Kester)',
    date: 'Assembly Hex Dump',
    text: [
      'At 0x00401000, there is neither good nor evil. There is only the instruction pointer and the register.',
      'You cannot lie to a debugger. You can obfuscate, you can pack, you can introduce anti-attach traps and timing loops, but eventually the CPU must execute the byte.',
      'Sartre said bad faith is believing your own theater. A running binary never believes anything. It simply consumes the clock cycle and dies.'
    ]
  }
];
