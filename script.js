// Massively expanded and modular data pools for generating absurd LinkedIn posts
const names = [
	// Tech Bros/Startuppers
	"Chad Synergist",
	"Brittany Disruptor",
	"Kyle Maximizer",
	"Madison Optimizer",
	"Hunter Strategist",
	"Blake Evangelist",
	"Taylor Transformer",
	"Jordan Accelerator",
	"Cameron Pioneer",
	"Riley Facilitator",
	"Skylar Amplifier",
	"Quinn Orchestrator",
	"Sage Cultivator",
	"River Curator",
	"Phoenix Architect",
	"Rowan Navigator",
	"Aspen Connector",
	"Bryce Blockchain",
	"Zara Ecosystem",
	"Nova Authentic",
	"Cruz Algorithm",
	"Piper Solutions",
	"Eden Bandwidth",
	"Atlas Framework",
	"Luna Paradigm",
	"Orion Metrics",
	"Ivy Scalable",
	"Felix Agile",
	"Dakota Leverage",
	"Sage Mindfulness",

	// More absurd combinations
	"Blaze Synergizer",
	"Rain Optimizer",
	"Storm Facilitator",
	"Ocean Disruptor",
	"Sky Transformer",
	"River Catalyst",
	"Forest Navigator",
	"Mountain Evangelist",
	"Valley Pioneer",
	"Desert Amplifier",
	"Thunder Orchestrator",
	"Lightning Curator",
	"Tornado Architect",
	"Hurricane Connector",
	"Tsunami Cultivator",
	"Avalanche Strategist",
	"Earthquake Innovator",
	"Volcano Visionary",
	"Glacier Accelerator",
	"Comet Framework",
	"Nebula Solutions",
	"Galaxy Ecosystem",
	"Universe Authentic",
	"Cosmos Algorithm",
	"Infinity Bandwidth",
	"Quantum Paradigm",
	"Fusion Metrics",
	"Matrix Scalable",
	"Vector Agile",
	"Cipher Leverage",
	"Pixel Synergizer",
	"Binary Optimizer",
	"Code Facilitator",
	"Data Disruptor",
	"Cloud Transformer",
	"Server Catalyst",
	"Network Navigator",
	"Protocol Evangelist",
	"Firewall Pioneer",
	"Database Amplifier",
	"Algorithm Orchestrator",
	"API Curator",
	"Framework Architect",
	"Library Connector",
	"Repository Cultivator",
];

const jobTitles = [
	// Traditional Corporate Nonsense
	"Chief Happiness Officer & Synergy Evangelist",
	"VP of Authentic Disruption at MindfulTech Solutions",
	"Senior Growth Hacker & Thought Leadership Consultant",
	"Principal Innovation Catalyst at Blockchain Wellness Corp",
	"Director of Human-Centered AI Optimization",
	"Lead Digital Transformation Ninja at StartupUnicorn Inc",
	"Executive Coach for Millennial Entrepreneurs",
	"Chief Storytelling Officer & Brand Whisperer",
	"Senior Consultant of Disruptive Mindfulness",
	"VP of Scalable Empathy Solutions",
	"Principal Architect of Authentic Engagement",
	"Director of Conscious Capitalism Initiatives",
	"Chief Experience Optimization Strategist",
	"Lead Evangelist for Sustainable Innovation",
	"Senior Manager of Purpose-Driven Analytics",
	"Executive Director of Holistic Business Intelligence",
	"Chief Culture Transformation Officer",
	"Principal Designer of Human-Centric Workflows",
	"VP of Intentional Network Effects",
	"Director of Mindful Revenue Optimization",

	// More absurd titles
	"Chief Vibes Officer & Quantum Alignment Specialist",
	"Senior Emotional Architect at Paradigm Shift Dynamics",
	"VP of Cosmic Business Intelligence & Soul Metrics",
	"Director of Chakra-Based Revenue Optimization",
	"Principal Manifestation Engineer at Universe Corp",
	"Chief Aura Consultant & Energy Flow Manager",
	"Lead Mindfulness Hacker at Consciousness Solutions Inc",
	"Executive Spirit Animal Coach for C-Suite Leaders",
	"Senior Oracle of Disruption & Future Whisperer",
	"VP of Interdimensional Customer Experience",
	"Principal Wizard of Digital Alchemy Solutions",
	"Director of Karmic Supply Chain Management",
	"Chief Unicorn Wrangler & Rainbow Analytics Officer",
	"Lead Butterfly Effect Specialist at Chaos Theory LLC",
	"Senior Prophet of Market Disruption & Tea Leaf Reader",
	"VP of Telepathic User Experience Design",
	"Principal Shaman of Agile Transformation",
	"Director of Astral Project Management Office",
	"Chief Dream Catcher & Vision Quest Facilitator",
	"Senior Ninja of Cross-Dimensional Team Building",
	"VP of Holographic Brand Strategy & Quantum Marketing",
	"Principal Guru of Exponential Enlightenment",
	"Director of Sacred Geometry Business Models",
	"Chief Alchemist of Customer Journey Transmutation",
	"Lead Time Traveler & Historical User Research Analyst",
	"Senior Wizard of Blockchain Meditation Practices",
	"VP of Intergalactic Partnership Development",
	"Principal Jedi Master of Lean Startup Methodologies",
	"Director of Telepathic Market Research & Mind Reading",
	"Chief Superhero of Authentic Personal Branding",
];

const timeStamps = ["2m", "5m", "12m", "23m", "1h", "2h", "4h", "6h", "8h", "12h", "1d", "2d", "3d", "5d", "1w", "2w"];

// Absurd scenarios that lead to business lessons - MASSIVELY EXPANDED
const absurdScenarios = [
	// Food/Kitchen Disasters
	"I accidentally ordered 10,000 rubber ducks instead of 10 for my bathtub",
	"I tried to make toast and somehow set off the fire alarm in the entire building",
	"I mistook salt for sugar and served margarita-flavored coffee to clients",
	"I ordered a salad and they brought me a live chicken instead",
	"My food delivery app glitched and I received 47 identical sandwiches",
	"I tried to impress a date by ordering in French and got 17 desserts",
	"I accidentally put hot sauce in my coffee thinking it was vanilla syrup",
	"My microwave exploded while reheating leftover pizza and triggered the sprinkler system",
	"I tried to make breakfast and somehow ended up with purple scrambled eggs",
	"My attempt at making homemade bread resulted in what can only be described as concrete",
	"I accidentally used dog food instead of coffee grounds in my espresso machine",
	"My smart refrigerator ordered 50 pounds of kale without my permission",
	"I tried to make ice cream and created what scientists are calling 'anti-matter dairy'",
	"My dinner party guests got food poisoning from my 'gourmet' mac and cheese",
	"I accidentally fermented my lunch and created a new species of bacteria",

	// Tech/Digital Disasters
	"My cat knocked over my laptop during a board meeting",
	"I accidentally joined a Zoom call while wearing a face mask",
	"My virtual background froze on my shocked face during a client call",
	"My toddler nephew hacked into my LinkedIn and posted baby photos",
	"My smart home turned against me and locked me out for 'suspicious activity'",
	"My phone autocorrected 'budget' to 'budgie' in an email to investors",
	"I accidentally live-streamed my entire morning routine to 10,000 followers",
	"My AI assistant developed an attitude and started insulting my business decisions",
	"I accidentally sent a voice message of me singing in the shower to my entire team",
	"My smart toilet started tweeting my bathroom habits without consent",
	"My fitness tracker called 911 during a particularly intense Netflix binge",
	"My password manager locked me out of everything and demanded a ransom in Bitcoin",
	"I accidentally joined my ex's family Zoom call thinking it was a board meeting",
	"My autocorrect changed my resignation letter into a marriage proposal to my boss",
	"My smart doorbell started livestreaming my neighbors and I became an accidental voyeur",
	"I tried to update my LinkedIn status and accidentally posted my therapy session notes",
	"My voice assistant recorded me practicing my TED talk and auto-posted it as a podcast",
	"I accidentally enabled 'drunk mode' on my phone and it started ordering random things",
	"My computer's predictive text started writing my emails in Shakespearean English",
	"I fell asleep on my keyboard and accidentally wrote a 40-page proposal in gibberish",

	// Transportation/Travel Mishaps
	"My Uber driver turned out to be my high school bully",
	"My GPS led me to a petting zoo instead of a Fortune 500 company",
	"I tried to parallel park and somehow ended up in someone's backyard",
	"I got lost in IKEA for 3 hours and missed my wedding",
	"I accidentally got on a school bus thinking it was public transport to my job interview",
	"My rental car's GPS was set to 'adventure mode' and led me through a corn maze",
	"I took the wrong train and ended up at a Renaissance festival in full business attire",
	"My taxi driver decided to give me a life coaching session instead of driving to my destination",
	"I accidentally boarded a party bus instead of the company shuttle",
	"My flight was delayed so long that I aged out of the 'young professional' demographic",
	"I tried to use a bike-share and somehow ended up part of a cycling club's 50-mile journey",
	"My navigation app directed me through a drive-through wedding chapel by mistake",
	"I got stuck in a revolving door for 20 minutes while late for the biggest meeting of my career",
	"My rideshare driver was actually an escape room enthusiast and locked me in his car with puzzles",
	"I accidentally joined a funeral procession thinking it was a business convoy",

	// Social/Personal Disasters
	"I got stuck in an elevator for 6 hours with my worst enemy",
	"I showed up to a black-tie event in my pajamas",
	"I accidentally sent a love letter to my entire team instead of my partner",
	"I accidentally wore two different shoes to a job interview",
	"I got locked out of my house in my underwear during a neighborhood BBQ",
	"I fell asleep during my own product launch presentation",
	"I accidentally dyed my hair green the night before meeting the CEO",
	"I accidentally wore my shirt inside-out to give a TED talk",
	"I accidentally challenged my boss's 8-year-old daughter to arm wrestling",
	"I accidentally attended my own surprise birthday party 3 days early",
	"My delivery driver and I accidentally swapped identical packages",
	"I tried to be cool and order off-menu, ended up with a bowl of ice cubes",
	"I tried to look sophisticated by ordering wine and got grape juice",
	"I accidentally showed up to casual Friday in a full tuxedo",
	"I tried to give a motivational speech and accidentally quoted a cereal commercial",
	"I accidentally walked into the wrong conference room and gave a presentation about cats to lawyers",
	"I tried to network at a party and accidentally joined a support group for people afraid of success",
	"I accidentally went to my high school reunion thinking it was a business conference",
	"I tried to make a grand entrance and got stuck in the automatic doors",
	"I accidentally applied to be on a reality TV show thinking it was a job application",

	// Weird Skill-Based Disasters
	"My grandmother beat me at Call of Duty in front of my gaming buddies",
	"My dog ate my presentation notes 5 minutes before the biggest pitch of my life",
	"I tried to do yoga and got stuck in a pose for 45 minutes",
	"I accidentally superglued my fingers to my keyboard during a hackathon",
	"I tried to learn juggling during lunch and accidentally knocked out the CFO",
	"I attempted meditation and fell asleep so hard that security thought I was dead",
	"I tried to learn magic tricks and made my quarterly reports disappear permanently",
	"I attempted to learn guitar and somehow summoned the fire department with my playing",
	"I tried to learn photography and accidentally documented my coworker's affair",
	"I attempted stand-up comedy at the office party and cleared the entire room",
	"I tried to learn coding and accidentally launched a missile defense system",
	"I attempted parkour in the office and destroyed the water cooler",
	"I tried to learn origami and somehow created a paper airplane that achieved sentience",
	"I attempted to learn Spanish and accidentally ordered a mariachi band for the board meeting",
	"I tried to learn chess and my opponent was a 7-year-old who destroyed my will to live",

	// Completely Absurd Situations
	"I accidentally joined a flash mob thinking it was a team-building exercise",
	"My houseplant grew so large it took over my home office and I had to conduct meetings from the garden",
	"I tried to be eco-friendly and my compost pile achieved consciousness and started giving me business advice",
	"I accidentally adopted 12 cats thinking they were business consultants in disguise",
	"My meditation app became self-aware and started charging me for emotional labor",
	"I accidentally time-traveled to 1992 during a conference call and had to explain the internet to cavemen",
	"My shadow started attending meetings without me and made better decisions than I did",
	"I accidentally switched bodies with my accountant and had to pretend to understand taxes",
	"My coffee mug developed separation anxiety and wouldn't let me leave the house",
	"I accidentally became the mayor of a small town by clicking 'accept' on the wrong Terms of Service",
];

const businessLessons = [
	"B2B sales strategy",
	"customer retention",
	"market penetration",
	"thought leadership",
	"disruptive innovation",
	"agile methodology",
	"digital transformation",
	"synergistic partnerships",
	"scalable growth",
	"authentic leadership",
	"emotional intelligence",
	"data-driven decision making",
	"user experience optimization",
	"supply chain management",
	"brand positioning",
	"stakeholder engagement",
	"change management",
	"competitive advantage",
	"revenue diversification",
	"talent acquisition",
	"corporate culture",
	"strategic planning",
	"risk mitigation",
	"performance metrics",
	"customer journey mapping",
	"value proposition design",
	"market research",
	"product-market fit",
	"organizational behavior",
	"cross-functional collaboration",
	"lean startup methodology",
	"growth hacking",
	"customer success",
	"business model innovation",
	"digital marketing",
	"influencer partnerships",
	"content strategy",
	"social media engagement",
	"community building",
	"network effects",
	"viral marketing",
	"conversion optimization",
	"customer lifecycle management",
	"retention strategies",
	"churn reduction",
	"lifetime value optimization",
	"acquisition cost management",
	"funnel optimization",
];

const intros = [
	"I'm humbled to announce that",
	"This might be controversial, but",
	"After 15 years of silent grinding,",
	"I wasn't going to share this, but",
	"This one's deeply personal.",
	"Against all odds,",
	"Plot twist:",
	"I know this sounds crazy, but",
	"Here's something I've never told anyone:",
	"This will probably get me canceled, but",
	"I'm literally shaking as I write this.",
	"My therapist said I should share this.",
	"I debated posting this for weeks.",
	"This happened to me yesterday and I can't stop thinking about it.",
	"I'm about to get vulnerable with you.",
	"This is going to sound made up, but",
	"I was today years old when I learned",
	"Unpopular opinion:",
	"Real talk:",
	"I'm going to be brutally honest here.",
	"This changed my entire worldview.",
	"I never thought I'd be the person to post this, but",
	"Hear me out.",
	"I'm still processing what happened to me.",
	"This is my most vulnerable post yet.",
	"I promised myself I'd share this story when the time was right.",
	"Three years ago, if you told me this would happen, I'd have laughed.",
	"I'm breaking my social media silence to share this.",
	"This is the story I never thought I'd have the courage to tell.",
	"I've been hesitating to post this for months.",
	"My mom always said this day would come, and here we are.",
];

const reflections = [
	// Classic LinkedIn Wisdom
	"This taught me that vulnerability is the ultimate currency of authentic leadership.",
	"The biggest lesson? Sometimes you have to embrace the chaos to find your true north.",
	"It reminded me that every setback is actually a setup for a comeback in disguise.",
	"This experience showed me that our greatest failures are our most valuable teachers.",
	"I learned that success isn't about avoiding obstacles—it's about dancing with them.",
	"The real growth happens when you're comfortable being uncomfortable.",
	"This proved that authenticity isn't just a buzzword—it's a competitive advantage.",
	"I realized that the magic happens outside your comfort zone, but so does growth.",
	"This taught me that resilience isn't about bouncing back—it's about bouncing forward.",
	"The universe has a funny way of teaching us exactly what we need to learn.",
	"This experience reminded me that every 'no' is redirecting you to your destined 'yes.'",
	"I learned that your network becomes your net worth, but your mindset determines both.",
	"This showed me that innovation comes from the intersection of preparation and chaos.",
	"The biggest insight? Your biggest breakthroughs come disguised as breakdowns.",
	"This taught me that leadership isn't about having all the answers—it's about asking better questions.",
	"I realized that success is less about the destination and more about who you become along the journey.",
	"This experience proved that your mindset is your most valuable asset in any market condition.",
	"The lesson here is that every expert was once a beginner who refused to give up.",
	"This reminded me that the best business strategies often come from life's most unexpected moments.",
	"I learned that true influence comes from serving others, not serving yourself.",
	"This showed me that disruption isn't just about technology—it's about mindset transformation.",
	"The real revelation? Your biggest competitor isn't your rival—it's your former self.",
	"This taught me that scalability isn't just about systems—it's about sustainable mindset shifts.",
	"I realized that customer success is really about creating emotional connections, not just transactions.",

	// More Absurd Wisdom
	"This experience taught me that chaos is just creativity wearing a disguise.",
	"I discovered that embarrassment is just excellence taking the scenic route.",
	"The truth hit me: failure is just success practicing its acceptance speech.",
	"This moment revealed that awkwardness is simply authenticity without makeup.",
	"I learned that disasters are just opportunities cosplaying as problems.",
	"The epiphany struck: confusion is clarity's way of building suspense.",
	"This taught me that mistakes are just masterpieces in their rough draft phase.",
	"I realized that panic is just excitement forgetting to breathe properly.",
	"This experience showed me that overwhelm is just underwhelm trying too hard.",
	"The lesson became clear: stress is just success doing cardio.",
	"This moment taught me that anxiety is just anticipation with a pessimistic attitude.",
	"I discovered that procrastination is just perfectionism wearing sweatpants.",
	"The truth emerged: imposter syndrome is just competence being modest.",
	"This taught me that burnout is just passion taking an unscheduled power nap.",
	"I learned that uncertainty is just certainty playing hard to get.",
	"This experience revealed that overthinking is just underthinking with a PhD.",
	"The insight hit: self-doubt is just self-confidence going through puberty.",
	"This showed me that failure is just feedback wearing a scary costume.",
	"I realized that rejection is just redirection with better GPS coordinates.",
	"This moment taught me that obstacles are just opportunities doing CrossFit.",
	"The lesson crystallized: setbacks are just comebacks doing their pre-game warmup.",
	"This experience proved that chaos is just order taking an improv class.",
	"I discovered that mistakes are just lessons refusing to wear name tags.",
	"The truth became apparent: struggle is just strength going to the gym.",
	"This taught me that pressure is just diamonds asking for a resume update.",
];

const hashtags = [
	"#blessed #growthmindset #entrepreneurlife #thoughtleadership #authenticity",
	"#disruptiveinnovation #futureofwork #digitalminimalism #consciouscapitalism",
	"#leadershipdevelopment #personalbrand #networking #mindfulness #gratitude",
	"#startuplife #founderjourney #scalability #customerexperience #innovation",
	"#emotionalintelligence #worklifeintegration #sustainablebusiness #agile",
	"#storytelling #brandnarrative #communitybuilding #socialimpact #purpose",
	"#resilience #adaptability #changeleadership #organizationalculture",
	"#digitaltransformation #futureready #sustainableleadership #authenticity",
	"#growthhacking #customerjourney #datadriven #userexperience #conversion",
	"#thoughtprovoking #vulnerability #transparency #humancentered #empathy",
	"#motivationmonday #inspiration #success #mindsetshift #breakthrough",
	"#leadership #management #strategy #productivity #efficiency #optimization",
	"#creativity #innovation #disruption #transformation #evolution #progress",
	"#networking #relationships #collaboration #teamwork #partnerships",
	"#wellness #balance #mindfulness #selfcare #mentalhealth #burnout",
	"#diversity #inclusion #equity #belonging #culture #values #ethics",
	"#technology #AI #automation #digitization #modernization #advancement",
	"#sustainability #environment #green #renewable #circular #responsible",
	"#education #learning #development #growth #skill #knowledge #wisdom",
	"#communication #influence #persuasion #negotiation #conflict #resolution",
];

// Complex post structures with different formats
const postTemplates = [
	{
		type: "numbered",
		structure: (scenario, lesson) => generateNumberedPost(scenario, lesson),
	},
	{
		type: "bullets",
		structure: (scenario, lesson) => generateBulletPost(scenario, lesson),
	},
	{
		type: "paragraph",
		structure: (scenario, lesson) => generateParagraphPost(scenario, lesson),
	},
	{
		type: "story",
		structure: (scenario, lesson) => generateStoryPost(scenario, lesson),
	},
	{
		type: "revelation",
		structure: (scenario, lesson) => generateRevelationPost(scenario, lesson),
	},
];

// Generate numbered list post
function generateNumberedPost(scenario, lesson) {
	const intro = getRandomItem(intros);
	const reflection = getRandomItem(reflections);
	const businessInsights = generateBusinessInsights(lesson);

	return `${intro} ${scenario}.

Here's what it taught me about ${lesson}:

${businessInsights.map((insight, index) => `${index + 1}. **${insight.title}**: ${insight.description}`).join("\n\n")}

${reflection}

The bottom line: Every failure is just success in progress. 

${getRandomItem(hashtags)}`;
}

// Generate bullet point post
function generateBulletPost(scenario, lesson) {
	const intro = getRandomItem(intros);
	const reflection = getRandomItem(reflections);
	const bulletPoints = generateBulletInsights(lesson);

	return `${intro} ${scenario}.

Here's what this experience taught me about ${lesson}:

${bulletPoints.map((point) => `• ${point}`).join("\n\n")}

Key takeaway: ${reflection}

What's your biggest "accidental" learning moment? Drop it in the comments! 👇

${getRandomItem(hashtags)}`;
}

// Generate paragraph-style post
function generateParagraphPost(scenario, lesson) {
	const intro = getRandomItem(intros);
	const reflection = getRandomItem(reflections);

	return `${intro} ${scenario}.

At first, I was mortified. But then I realized something profound about ${lesson}: ${generateParagraphInsight()}.

${reflection}

This experience completely shifted my perspective on how we approach challenges in business. Sometimes our greatest disasters become our most valuable teachers.

${generateCallToAction()}

${getRandomItem(hashtags)}`;
}

// Generate story-style post
function generateStoryPost(scenario, lesson) {
	const intro = getRandomItem(intros);
	const reflection = getRandomItem(reflections);
	const storyBeats = generateStoryBeats(scenario, lesson);

	return `${intro} ${scenario}.

Here's how it unfolded:

**The Setup**: ${storyBeats.setup}

**The Plot Twist**: ${storyBeats.twist}

**The Revelation**: ${storyBeats.revelation}

${reflection}

Sometimes the universe has a sense of humor about teaching us exactly what we need to learn.

${getRandomItem(hashtags)}`;
}

// Generate revelation-style post
function generateRevelationPost(scenario, lesson) {
	const intro = getRandomItem(intros);
	const reflection = getRandomItem(reflections);

	return `${intro} ${scenario}.

And in that moment, I had a profound realization about ${lesson}:

${generateRevelationInsight()}

${reflection}

### Here's what I learned:

${generateLessonsList()
	.map((lesson, index) => `**${lesson.category}**: ${lesson.insight}`)
	.join("\n\n")}

The best business lessons come from the most unexpected places. What's the weirdest situation that taught you something valuable?

${getRandomItem(hashtags)}`;
}

// Helper functions for generating content
function generateBusinessInsights(lesson) {
	const insights = [
		{
			title: "Authenticity Over Perfection",
			description:
				"Being genuine resonates more than polished presentations. Customers connect with real stories, not manufactured personas.",
		},
		{
			title: "Adaptability is Everything",
			description:
				"The ability to pivot quickly separates thriving businesses from failing ones. Embrace change as your competitive advantage.",
		},
		{
			title: "Relationships Drive Revenue",
			description: "Every interaction is an opportunity to build trust. Invest in people, and profits will follow naturally.",
		},
		{
			title: "Failure is Market Research",
			description:
				"Every mistake teaches you something your customers need. Turn embarrassment into empathy and watch your solutions improve.",
		},
		{
			title: "Simplicity Scales",
			description: "Complex systems break down. Simple, elegant solutions create sustainable growth and happy customers.",
		},
		{
			title: "Timing Beats Talent",
			description: "The best idea at the wrong time fails. Great timing with a good idea wins every time.",
		},
	];

	return shuffleArray(insights).slice(0, Math.floor(Math.random() * 3) + 3);
}

function generateBulletInsights(lesson) {
	const insights = [
		`The power of ${lesson} lies in embracing unexpected moments as learning opportunities`,
		"Sometimes our biggest 'failures' create our most authentic connections with others",
		"Vulnerability in leadership isn't weakness—it's the ultimate strength multiplier",
		"The best business strategies often emerge from life's most chaotic moments",
		"Every embarrassing moment is just character development in disguise",
		"Authenticity cuts through noise faster than any marketing campaign ever could",
		"Your network becomes your net worth when you lead with genuine human experiences",
		"The stories we're most ashamed to tell are often the ones people need to hear most",
		"Innovation happens when we stop trying to control outcomes and start embracing possibilities",
	];

	return shuffleArray(insights).slice(0, Math.floor(Math.random() * 3) + 3);
}

function generateParagraphInsight() {
	const insights = [
		"the most powerful connections happen when we drop our professional masks and show up as imperfect humans",
		"authentic leadership isn't about having all the answers—it's about being willing to share your questions",
		"our greatest competitive advantage isn't our expertise, it's our willingness to be genuinely vulnerable",
		"the stories that make us cringe are exactly the ones that make us relatable",
		"breakthrough innovations rarely come from boardrooms—they come from bathroom moments of clarity",
		"customer empathy is just self-awareness wearing a business suit",
	];

	return getRandomItem(insights);
}

// Modular story components to eliminate repetitive patterns
const storySetups = [
	"I thought I had everything under control. Classic overconfidence, right?",
	"Everything was going according to plan. Famous last words, obviously.",
	"I walked in feeling like I owned the world. Spoiler alert: I didn't.",
	"I was absolutely convinced this would be my moment to shine.",
	"I had rehearsed this scenario a thousand times in my head.",
	"I felt like I was finally ready for anything life could throw at me.",
	"I strutted in with the confidence of someone who clearly hadn't learned from past mistakes.",
	"I was riding high on the success of my morning coffee not being terrible.",
	"I had mentally prepared for every possible outcome. Except this one.",
	"I felt like I was in complete control of my destiny. The universe laughed.",
	"I was channeling my inner CEO energy. It turns out I was channeling my inner disaster instead.",
	"I thought I was playing 4D chess while everyone else was playing checkers.",
	"I was feeling invincible, which should have been my first red flag.",
	"I had my game face on and my confidence level set to 'insufferable.'",
	"I was ready to show everyone how it's done. They definitely saw how something was done.",
];

const storyTwists = [
	"Then reality hit like a freight train carrying humble pie. The universe had other plans.",
	"But life had different ideas, and they were apparently written by a comedy writer.",
	"That's when the universe decided to teach me a lesson in humility.",
	"Then everything went sideways faster than my attempts at work-life balance.",
	"But karma showed up fashionably late and decided to make an entrance.",
	"That's when I realized I was the main character in someone else's cautionary tale.",
	"But the universe said 'hold my beer' and proceeded to humble me spectacularly.",
	"Then chaos entered the chat and decided to livestream the entire experience.",
	"That's when I discovered I was starring in an episode of 'When Keeping It Real Goes Wrong.'",
	"But reality had other plans that definitely weren't in my five-year strategic roadmap.",
	"Then life decided to give me a masterclass in 'expect the unexpected.'",
	"That's when I realized I was about to become the before photo in a transformation story.",
	"But the simulation glitched and I found myself in an alternate timeline.",
	"Then Murphy's Law decided to personally oversee my entire experience.",
	"That's when I learned that confidence and competence are not the same thing.",
];

const storyRevelations = [
	"Suddenly everything clicked about {lesson}. Sometimes you need chaos to see clarity.",
	"That's when it hit me like a revelation wrapped in embarrassment about {lesson}.",
	"In that moment of pure chaos, {lesson} finally made perfect sense.",
	"Amidst the disaster, I had an epiphany about {lesson} that changed everything.",
	"The lightbulb moment about {lesson} came right when I least expected it.",
	"Through the fog of mortification, the truth about {lesson} became crystal clear.",
	"That's when the universe decided to download all its wisdom about {lesson} directly into my brain.",
	"In my moment of greatest failure, I discovered the secret to {lesson}.",
	"The breakthrough about {lesson} hit me harder than the reality of my situation.",
	"Right there in the middle of my disaster, {lesson} revealed itself to me.",
	"That's when I realized {lesson} was the missing piece I'd been searching for all along.",
	"The answer to {lesson} was literally staring me in the face the entire time.",
	"In that moment of beautiful catastrophe, {lesson} became my new religion.",
	"The teachings of {lesson} appeared to me like a business guru in my darkest hour.",
	"That's when {lesson} slapped me across the face with its profound wisdom.",
];

function generateStoryBeats(scenario, lesson) {
	return {
		setup: getRandomItem(storySetups),
		twist: getRandomItem(storyTwists),
		revelation: getRandomItem(storyRevelations).replace("{lesson}", lesson),
	};
}

function generateRevelationInsight() {
	const insights = [
		"We spend so much time optimizing our processes that we forget to optimize our humanity.",
		"The best customer experiences come from employees who feel safe to be imperfect.",
		"Innovation isn't about avoiding mistakes—it's about making them faster and cheaper than your competition.",
		"Your brand isn't what you say about yourself; it's what people say about you after you mess up.",
		"The future belongs to companies brave enough to be awkward in public.",
		"Authenticity is the only sustainable competitive advantage in a world of infinite options.",
	];

	return getRandomItem(insights);
}

function generateLessonsList() {
	const lessons = [
		{ category: "Leadership", insight: "True leaders aren't afraid to look foolish while learning something new." },
		{ category: "Innovation", insight: "The best ideas come from combining unrelated failures in creative ways." },
		{ category: "Customer Experience", insight: "People remember how you handle disasters, not how you handle success." },
		{ category: "Team Building", insight: "Shared embarrassment builds stronger bonds than shared victories." },
		{ category: "Strategy", insight: "Plans are useless, but planning is everything—especially when everything goes wrong." },
	];

	return shuffleArray(lessons).slice(0, Math.floor(Math.random() * 2) + 3);
}

function generateCallToAction() {
	const ctas = [
		"What's your most cringe-worthy business lesson? Share it below—let's normalize learning through failure! 💪",
		"Drop a 🙋‍♀️ if you've ever learned something valuable from an epic fail!",
		"Tell me in the comments: What's the weirdest situation that taught you something about business?",
		"Who else has a story about accidental wisdom? Let's build a thread of beautiful disasters! 👇",
		"Share your own 'oops to opportunity' story—I know you have one! 🤝",
	];

	return getRandomItem(ctas);
}

// Utility functions
function getRandomItem(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function shuffleArray(array) {
	const shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}

function generateRandomNumbers() {
	return {
		likes: Math.floor(Math.random() * 5000) + 50,
		comments: Math.floor(Math.random() * 300) + 5,
		reposts: Math.floor(Math.random() * 150) + 2,
	};
}

// Main generation function
function generatePost() {
	const scenario = getRandomItem(absurdScenarios);
	const lesson = getRandomItem(businessLessons);
	const template = getRandomItem(postTemplates);

	const name = getRandomItem(names);
	const jobTitle = getRandomItem(jobTitles);
	const timestamp = getRandomItem(timeStamps);
	const numbers = generateRandomNumbers();

	// Generate post content
	const postContent = template.structure(scenario, lesson);

	// Update DOM elements
	document.getElementById("profileName").textContent = name;
	document.getElementById("profileSubtitle").textContent = jobTitle;
	document.getElementById("postTime").textContent = timestamp + " •";
	document.getElementById("postText").innerHTML = formatPostText(postContent);
	document.getElementById("likeCount").textContent = numbers.likes.toLocaleString();
	document.getElementById("commentCount").textContent = numbers.comments + " comments";
	document.getElementById("repostCount").textContent = numbers.reposts + " reposts";

	// Set random profile picture
	const pfpNumber = Math.floor(Math.random() * 5) + 1;
	document.getElementById("profilePic").src = `assets/pfps/pfp${pfpNumber}.svg`;

	// Set random post image
	const postNumber = Math.floor(Math.random() * 5) + 1;
	document.getElementById("postImage").src = `assets/posts/post${postNumber}.svg`;
}

function formatPostText(text) {
	// Convert hashtags to clickable links
	text = text.replace(/#(\w+)/g, '<span class="hashtag">#$1</span>');

	// Add emphasis to key phrases
	text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

	// Convert markdown-style headings
	text = text.replace(/### (.*?)$/gm, "<h3>$1</h3>");

	return text;
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
	generatePost(); // Generate initial post

	document.getElementById("refreshBtn").addEventListener("click", generatePost);

	// Add some interactive elements
	document.querySelectorAll(".action-btn").forEach((btn) => {
		btn.addEventListener("click", (e) => {
			e.preventDefault();
			btn.style.color = "#0a66c2";
			setTimeout(() => {
				btn.style.color = "#666666";
			}, 1000);
		});
	});
});

// Generate a new post every 30 seconds for demo purposes (optional)
// setInterval(generatePost, 30000);
