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
  date: string;
  text: string[];
}

export const flatEarthStory = {
  title: 'I was a priest of the Flat Earth Society and now I’m a traveller',
  authorNote: 'Originally surfaced on Alexei’s archived Reddit account. Chronicling the collapse of the Aparagodānīya sect, Anastasia’s condition, and the expedition past 70° South.',
  tagline: 'A cosmic horror recounting of dogma, glacial geometry, and the terror of empirical verification.',
  chapters: [
    {
      number: 1,
      title: 'Chapter I: The Aparagodānīya Sect',
      subtitle: 'The Architecture of Certainty',
      content: [
        'Hi everyone, my name is Igor and I was the leader of the Aparagodānīya sect of the Flat Earth Society. It has been two long years since the Incident and you may be wondering why or how I’m posting this on Alexei’s account. All of this will be made clear in due time. So much has happened in these past two years after Anastasia’s coma and the disbanding of the sect.',
        'To understand our conviction, you have to purge the caricatures you read in popular media. We were not uneducated zealots screaming into megaphones on street corners. Our inner circle included trained cartographers, telecommunications engineers, and classical philologists. We derived our name from the ancient Buddhist cosmology of Aparagodānīya—the great western continent where human beings lived in absolute harmony with cosmic geometry.',
        'We believed, with terrifying academic rigor, that modern astrophysics was an elaborate consensus hallucination—a collective bad faith engineered to obscure the true boundary of terrestrial habitation. For seven years, our community gathered in an isolated compound in northern Norway, calibrating custom theodolites, measuring atmospheric refraction across frozen fjords, and cross-referencing Soviet declassified naval logs.',
        'Anastasia was our chief geodesist. She had a brilliant, obsessive mind, capable of recalculating spatial drift in her head while the rest of us were still booting up our calculators. When she presented the seismic anomaly at 70° South, we did not view it as a curiosity. We viewed it as our calling.'
      ]
    },
    {
      number: 2,
      title: 'Chapter II: The Anomaly at 70° South',
      subtitle: 'Beyond the Maritime Perimeter',
      content: [
        'Officially, the Antarctic Treaty exists to protect pristine polar ecosystems. Unofficially, as our intercepted satellite pings began to reveal, it functions as a cordon sanitaire—not to keep people from entering, but to prevent anyone from documenting what happens to light and compass headings beyond the Amundsen-Scott perimeter.',
        'We pooled our life savings. We purchased a decommissioned Swedish ice-class trawler through three shell corporations, outfitted the hull with reinforced Kevlar plating, and installed dual redundant GPS and inertial gyro-compasses that did not rely on standard commercial satellites.',
        'There were five of us: Alexei, our diesel engineer; Anastasia; her younger brother Mikhail; myself; and Dr. Soren, a former oceanographer who had been stripped of his credentials after publishing an unapproved paper on tidal harmonics.',
        'On December 14th, we slipped past the 60th parallel south under a raging Antarctic blizzard. When the GPS signals predictably lost satellite lock, we switched to inertial navigation. That was the moment the geometry began to bend.'
      ]
    },
    {
      number: 3,
      title: 'Chapter III: The Non-Euclidean Rim',
      subtitle: 'The Ice Wall Does Not Look Up',
      content: [
        'The popular flat-earth myth depicts an abrupt, vertical cliff of white ice, like a frozen stadium rim holding back the oceans. The reality we encountered was infinitely more horrifying.',
        'There was no vertical wall. Instead, the sea began to slope. Not a wave, not a swell, but an unbroken, glass-smooth incline of black brine that angled gently upward at three, then seven, then eleven degrees. The boat did not capsize; gravity itself had reoriented its vector perpendicular to the water’s surface.',
        'Alexei rushed to the bridge, pointing a trembling hand at the horizon. The sun had ceased its circular arc. It hung frozen at eighteen degrees above the waterline, neither setting nor rising, pulsing with a faint ultraviolet strobe that caused our retinas to hum with a dry, metallic buzz.',
        'Anastasia stepped out onto the bow deck without her thermal gloves. I ran after her, shouting above the wind, but when I reached her, I saw what she was staring at. In the distance, rising from the black incline of water, stood monuments of translucent basalt. They were not carved; they were grown like crystalline teeth, stretching miles into an atmosphere so thin that stars were visible in broad daylight.',
        '"Igor," she whispered, and her voice did not sound like her own. It sounded like two magnetic tapes playing simultaneously at different speeds. "The earth is neither flat nor round. It is a scar."'
      ]
    },
    {
      number: 4,
      title: 'Chapter IV: Anastasia’s Silence',
      subtitle: 'The Return of the Survivors',
      content: [
        'I do not remember the voyage back through the Drake Passage. My memory logs jump from the basalt towers directly to an emergency medical ward in Ushuaia, Argentina. Alexei was treated for third-degree frostbite and severe hypothermia; Mikhail was never found.',
        'Anastasia never spoke again. The physicians diagnosed her with a rare form of catatonic stupor accompanied by total cortical blindness. But when I sit beside her bed in the quiet hours before dawn, her blind eyes dart furiously behind closed lids, tracking something that moves in impossible geometric parabolas above our heads.',
        'I resigned from the society. I burned our research papers, destroyed the hard drives, and severed ties with everyone I ever mentored. The Flat Earth Society is a nursery rhyme designed to comfort children who are afraid of the dark—because the alternative, the truth of what lies past the perimeter of human sanity, is an abyss with an appetite.',
        'Now I am simply a traveller. I move between cities, never staying in one port for more than three months, constantly watching the horizon. If you ever find yourself looking at the southern horizon and you notice that the line of the water is rising higher than your eyes can comfortably register: do not look for the ice wall. Turn back. While your mind is still your own.'
      ]
    }
  ]
};

export const darkProseCollection: DarkProseItem[] = [
  {
    id: 'prose-01',
    title: 'Kinetic Reassembly',
    type: 'Poem',
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
    date: 'Assembly Hex Dump',
    text: [
      'At 0x00401000, there is neither good nor evil. There is only the instruction pointer and the register.',
      'You cannot lie to a debugger. You can obfuscate, you can pack, you can introduce anti-attach traps and timing loops, but eventually the CPU must execute the byte.',
      'Sartre said bad faith is believing your own theater. A running binary never believes anything. It simply consumes the clock cycle and dies.'
    ]
  }
];
