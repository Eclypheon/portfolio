export interface ReadingItem {
  id: string;
  title: string;
  author: string;
  category: 'Philosophy' | 'Sociology & Power' | 'Language & Mind' | 'Systems & Cybernetics' | 'Fiction & Lore';
  status: 'Essential Canon' | 'Foundational' | 'Active Exploration';
  coreConcept: string;
  reflection: string;
  quotes?: string[];
  tags: string[];
}

export const readingList: ReadingItem[] = [
  {
    id: 'stoicism-aurelius-epictetus',
    title: 'Meditations & The Enchiridion',
    author: 'Marcus Aurelius & Epictetus',
    category: 'Philosophy',
    status: 'Essential Canon',
    coreConcept: 'Mindful Emotional Governance & The Discipline of Assent (Not Apathy)',
    reflection: 'Uncontrolled emotion is the gravest human failure and systemic vulnerability—the worst cardinal sin against reason and agency. Yet genuine Stoicism is widely caricatured and misunderstood: it is emphatically NOT the cold discarding of all feelings into a state of numb apathy or anhedonia. Rather, it is cultivating relentless, lucid mindfulness of the visceral emotions that arise, withholding automated assent from reactive impulses, and actively, deliberately choosing how to wield and channel those emotions to your decisive tactical advantage in any situation.',
    quotes: [
      'You have power over your mind—not outside events. Realize this, and you will find strength.',
      'It is not what happens to you, but how you react to it that matters.',
      'Between stimulus and response there is a space. In that space lies our power to choose our response.'
    ],
    tags: ['Stoicism', 'Emotional Discipline', 'Mindfulness', 'Strategic Agency', 'Dichotomy of Control']
  },
  {
    id: 'camus-sisyphus',
    title: 'The Myth of Sisyphus',
    author: 'Albert Camus',
    category: 'Philosophy',
    status: 'Essential Canon',
    coreConcept: 'The Absurd & Lucid Revolt',
    reflection: 'The fundamental confrontation between the human appetite for transcendent meaning and the unreasonable silence of the cosmos. Camus rejects both physical suicide (cowardice) and philosophical suicide (religious or ideological delusion). Instead, one must stare directly into the void with lucid awareness and revolt. Sisyphus pushing his boulder is the ultimate rebel: "One must imagine Sisyphus happy."',
    quotes: [
      'There is only one really serious philosophical problem, and that is suicide.',
      'The struggle itself toward the heights is enough to fill a man\'s heart. One must imagine Sisyphus happy.'
    ],
    tags: ['Absurdism', 'Existentialism', 'Freedom', 'Revolt']
  },
  {
    id: 'sartre-bad-faith',
    title: 'Being and Nothingness (L\'Être et le Néant)',
    author: 'Jean-Paul Sartre',
    category: 'Philosophy',
    status: 'Essential Canon',
    coreConcept: 'Mauvaise Foi (Bad Faith) & Radical Authenticity',
    reflection: 'Bad faith is the self-deception by which individuals persuade themselves that they have no choice—collapsing their radical freedom into mere facticity. The waiter playing at being a waiter, adopting gestures like an automaton, surrenders their agency to societal expectations. Living authentically demands recognizing that existence precedes essence: we are condemned to be free, and every excuse is a theatrical evasion.',
    quotes: [
      'Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.',
      'To believe is to know that one believes, and to know that one believes is no longer to believe.'
    ],
    tags: ['Authenticity', 'Radical Freedom', 'Facticity', 'Phenomenology']
  },
  {
    id: 'plato-republic',
    title: 'The Republic (Politeia)',
    author: 'Plato',
    category: 'Philosophy',
    status: 'Foundational',
    coreConcept: 'The Allegory of the Cave & Socratic Dialectic',
    reflection: 'The allegory of the cave remains the defining metaphor for epistemic awakening. Chained prisoners mistake flickering 2D shadows projected on a stone wall for the totality of reality. Escaping into the blinding daylight of the Sun (The Form of the Good) is agonizing, disorienting, and alienating—returning to the cave to free others often invites ridicule or hostility. Socratic elenchus is not mere rhetoric, but a surgical instrument to excise unexamined dogma.',
    quotes: [
      'The unexamined life is not worth living.',
      'How could they see anything but the shadows if they were never allowed to move their heads?'
    ],
    tags: ['Epistemology', 'Socratic Method', 'Idealism', 'Political Philosophy']
  },
  {
    id: 'wittgenstein-investigations',
    title: 'Philosophical Investigations',
    author: 'Ludwig Wittgenstein',
    category: 'Language & Mind',
    status: 'Essential Canon',
    coreConcept: 'Language-Games (Sprachspiele) & Forms of Life',
    reflection: 'Words do not possess mystical, intrinsic referents; rather, "the meaning of a word is its use in the language." Language is an evolving set of interconnected games governed by social conventions and operational contexts. Philosophical dilemmas frequently evaporate once we recognize them as grammatical entanglements rather than profound metaphysical riddles.',
    quotes: [
      'The limits of my language mean the limits of my world.',
      'Philosophy is a battle against the bewitchment of our intelligence by means of language.'
    ],
    tags: ['Philosophy of Language', 'Linguistics', 'Epistemology', 'Pragmatism']
  },
  {
    id: 'sapir-whorf',
    title: 'Language, Thought, and Reality',
    author: 'Benjamin Lee Whorf & Edward Sapir',
    category: 'Language & Mind',
    status: 'Foundational',
    coreConcept: 'Linguistic Relativity & Cognitive Architecture',
    reflection: 'The structural grammar and lexical boundaries of the language we speak subtly shape how we perceive time, space, causality, and object permanence. Segues effortlessly from Wittgenstein\'s language-games into cognitive linguistics: if the vocabulary for a feeling or system does not exist, our ability to formulate thoughts around it is constrained.',
    quotes: [
      'We dissect nature along lines laid down by our native languages.'
    ],
    tags: ['Psycholinguistics', 'Cognitive Science', 'Relativity', 'Perception']
  },
  {
    id: 'foucault-panopticon',
    title: 'Discipline and Punish: The Birth of the Prison',
    author: 'Michel Foucault',
    category: 'Sociology & Power',
    status: 'Essential Canon',
    coreConcept: 'The Panopticon & Internalized Disciplinary Power',
    reflection: 'Jeremy Bentham\'s architectural inspection house converted by Foucault into a supreme sociopolitical diagnostic. When a subject knows they *might* be observed at any second without being able to verify the observer, surveillance ceases to require physical chains—the inmate internalizes the gaze of the warden and polices themselves. In our digital era of telemetry, algorithms, and social credit, we have constructed a planetary, invisible Panopticon.',
    quotes: [
      'Visibility is a trap.',
      'He who is subjected to a field of visibility, and who knows it, assumes responsibility for the constraints of power.'
    ],
    tags: ['Surveillance', 'Disciplinary Power', 'Sociology', 'Modernity']
  },
  {
    id: 'weber-rationalization',
    title: 'The Protestant Ethic and the Spirit of Capitalism',
    author: 'Max Weber',
    category: 'Sociology & Power',
    status: 'Foundational',
    coreConcept: 'The Iron Cage (Stahlhartes Gehäuse) & Disenchantment',
    reflection: 'Weber traces how rational bureaucracy, hyper-specialization, and ascetic calculation came to dominate Western institutional life. The pursuit of efficiency and material wealth, initially anchored in religious calling, became an inescapable, mechanized system—the "iron cage"—stripping modern human life of mystery and subjective wonder (Entzauberung der Welt / Disenchantment).',
    quotes: [
      'Specialists without spirit, sensualists without heart; this nullity is caught in the delusion that it has achieved a level of development never before attained.'
    ],
    tags: ['Bureaucracy', 'Rationalization', 'Disenchantment', 'Economics']
  },
  {
    id: 'goffman-presentation',
    title: 'The Presentation of Self in Everyday Life',
    author: 'Erving Goffman',
    category: 'Sociology & Power',
    status: 'Essential Canon',
    coreConcept: 'Dramaturgical Analysis & Front-Stage / Back-Stage Masks',
    reflection: 'Human social interaction operates precisely like theatrical performance. We manage impressions using "front stage" decorum, costumes, props, and vocal registers tailored to our specific audience. Only in the "back stage" can we drop the performance, relax our posture, and confess our exhaustion. The tragedy of modern hyper-specialization is that society expects us to wear only one costume for life.',
    quotes: [
      'All the world is not, of course, a stage, but the crucial ways in which it isn\'t are not easy to specify.',
      'To be a particular kind of person does not merely mean to possess the required attributes; it means to sustain the proper conduct.'
    ],
    tags: ['Dramaturgy', 'Masks', 'Social Theory', 'Identity']
  },
  {
    id: 'wiener-cybernetics',
    title: 'Cybernetics: Or Control and Communication in the Animal and the Machine',
    author: 'Norbert Wiener',
    category: 'Systems & Cybernetics',
    status: 'Foundational',
    coreConcept: 'Feedback Loops, Entropy, and Self-Regulating Systems',
    reflection: 'The foundational text uniting biological nervous systems, telecommunications, and automated machinery under the common mathematics of feedback loops and entropy reduction. Wiener foresaw the convergence of computation and living systems half a century before it arrived.',
    quotes: [
      'We are but whirlpools in a river of ever-flowing water. We are not stuff that abides, but patterns that perpetuate themselves.'
    ],
    tags: ['Cybernetics', 'Feedback Loops', 'Systems Thinking', 'Information Theory']
  }
];
