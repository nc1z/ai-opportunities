import type { TaxonomyNode } from '../types'

export const consumerFocusNodes: TaxonomyNode[] = [
  // ── NICHE: AI Tutoring (app-consumer-education-tutoring) ──────────────────
  {
    id: 'app-f-edu-tutor-neurodivergent',
    parentId: 'app-consumer-education-tutoring',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Neurodivergent Learning Companions',
    description:
      'Specialized tutoring interfaces that adjust pacing, sensory input, and reward mechanisms for students with ADHD, dyslexia, or ASD.',
    order: 1,
    sources: [{ label: 'Remarkable Disability Tech', url: 'https://www.remarkable.org/startups' }],
  },
  {
    id: 'app-f-edu-tutor-trade-skill',
    parentId: 'app-consumer-education-tutoring',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Trade Skill Simulation Tutors',
    description:
      'Step-by-step AI guidance for vocational training (plumbing, electrical) using computer vision to provide real-time feedback on manual tasks.',
    order: 2,
  },
  {
    id: 'app-f-edu-tutor-community',
    parentId: 'app-consumer-education-tutoring',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Embedded Community Tutors',
    description:
      'Subject-specific AI agents that live within student Discord or Reddit communities to facilitate peer-to-peer study sessions.',
    order: 3,
  },
  {
    id: 'app-f-edu-tutor-vr-language',
    parentId: 'app-consumer-education-tutoring',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'VR Language Immersion Coaches',
    description:
      'AI avatars in virtual reality that simulate high-stakes social scenarios to practice language fluency in specific cultural contexts.',
    order: 4,
    sources: [{ label: 'Remarkable Disability Tech', url: 'https://www.remarkable.org/startups' }],
  },
  {
    id: 'app-f-edu-tutor-preschool',
    parentId: 'app-consumer-education-tutoring',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Preschool Cognitive Playmates',
    description:
      'AI-powered physical toys that engage toddlers in developmental speech and logic games through natural conversation.',
    order: 5,
    sources: [
      {
        label: 'Insightace AI in Childcare',
        url: 'https://www.insightaceanalytic.com/report/ai-in-childcare-and-parenting-market/2730',
      },
    ],
  },
  {
    id: 'app-f-edu-tutor-certification',
    parentId: 'app-consumer-education-tutoring',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Adult Certification Strategy Coaches',
    description:
      'Targeted prep tools for professional certifications (CFA, PMP, AWS) that identify knowledge gaps through mock exam analysis.',
    order: 6,
    sources: [
      {
        label: 'a16z AI Apps Podcast',
        url: 'https://podcasts.apple.com/sg/podcast/the-top-100-most-used-ai-apps-in-2025/id842818711?i=1000723704374',
      },
    ],
  },
  {
    id: 'app-f-edu-tutor-curriculum',
    parentId: 'app-consumer-education-tutoring',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Dynamic Standardized Curriculum Mapping',
    description:
      'Tools that convert a student\'s unique interests (e.g., sports, gaming) into a custom curriculum meeting national education standards.',
    order: 7,
    sources: [
      {
        label: 'BVP State of AI 2025',
        url: 'https://www.bvp.com/atlas/the-state-of-ai-2025',
      },
    ],
  },
  {
    id: 'app-f-edu-tutor-bilingual',
    parentId: 'app-consumer-education-tutoring',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Bilingual Bridge Tutors',
    description:
      'Real-time translation agents for ESL students that synthesize classroom lectures while building localized academic glossaries.',
    order: 8,
  },

  // ── NICHE: Study Tools (app-consumer-education-study) ────────────────────
  {
    id: 'app-f-edu-study-lab-converter',
    parentId: 'app-consumer-education-study',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Lecture-to-Simulated Lab Converters',
    description:
      'Software that ingests video lectures and generates interactive 3D simulations to reinforce abstract scientific or mathematical concepts.',
    order: 1,
  },
  {
    id: 'app-f-edu-study-citation',
    parentId: 'app-consumer-education-study',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Academic Citation & Integrity Agents',
    description:
      'Automated bibliography managers that scan for accidental plagiarism and ensure adherence to the latest APA/MLA/Chicago standards.',
    order: 2,
  },
  {
    id: 'app-f-edu-study-spaced-rep',
    parentId: 'app-consumer-education-study',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Spaced-Repetition Knowledge Mappers',
    description:
      'Note-taking assistants that automatically map connections between concepts and schedule review sessions based on forgetting curves.',
    order: 3,
  },
  {
    id: 'app-f-edu-study-group-research',
    parentId: 'app-consumer-education-study',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Collaborative Group-Research Summarizers',
    description:
      'Multi-user interfaces that synthesize hundreds of research papers into a single structured knowledge base for team projects.',
    order: 4,
    sources: [
      {
        label: 'Product Hunt Best of 2025',
        url: 'https://www.producthunt.com/leaderboard/yearly/2025/all',
      },
    ],
  },
  {
    id: 'app-f-edu-study-socratic',
    parentId: 'app-consumer-education-study',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Socratic Argumentation Essay Coaches',
    description:
      'Writing assistants that utilize probing questions to help students clarify logic and improve argumentative flow without writing for them.',
    order: 5,
  },
  {
    id: 'app-f-edu-study-latex',
    parentId: 'app-consumer-education-study',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Whiteboard-to-LaTeX Digitizers',
    description:
      'Mobile apps utilizing computer vision to convert complex handwritten math or chemistry equations on physical boards into editable digital code.',
    order: 6,
    sources: [
      {
        label: 'YCombinator ML Companies',
        url: 'https://www.ycombinator.com/companies/industry/machine-learning',
      },
    ],
  },
  {
    id: 'app-f-edu-study-voice-quiz',
    parentId: 'app-consumer-education-study',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Voice-First Commuting Quiz Companions',
    description:
      'Audio-only tools that allow students to test themselves on material via high-quality synthetic speech during transit.',
    order: 7,
    sources: [
      {
        label: 'StartupBlink Top AI',
        url: 'https://www.startupblink.com/blog/top-ai-startups/',
      },
    ],
  },
  {
    id: 'app-f-edu-study-calendar',
    parentId: 'app-consumer-education-study',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Assignment-Density Calendar Optimizers',
    description:
      'Scheduling tools that break down large projects into daily tasks based on an individual student\'s past work velocity and upcoming deadlines.',
    order: 8,
  },

  // ── NICHE: Mental Health & Therapy (app-consumer-health-mental) ───────────
  {
    id: 'app-f-health-mental-grief',
    parentId: 'app-consumer-health-mental',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Grief and Legacy Support Companions',
    description:
      'Empathetic AI interfaces designed to help users process loss through structured journaling and legacy-sharing protocols.',
    order: 1,
    sources: [
      {
        label: 'a16z AI Apps Podcast',
        url: 'https://podcasts.apple.com/sg/podcast/the-top-100-most-used-ai-apps-in-2025/id842818711?i=1000723704374',
      },
    ],
  },
  {
    id: 'app-f-health-mental-panic',
    parentId: 'app-consumer-health-mental',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Real-Time Panic Grounding Tools',
    description:
      'Voice-guided assistants that detect physiological signs of anxiety via wearables and initiate immediate grounding exercises.',
    order: 2,
  },
  {
    id: 'app-f-health-mental-burnout',
    parentId: 'app-consumer-health-mental',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'High-Stress Profession Burnout Monitors',
    description:
      'Specialized agents for healthcare workers or teachers that monitor work patterns and proactively suggest micro-breaks and stress-relief techniques.',
    order: 3,
  },
  {
    id: 'app-f-health-mental-sobriety',
    parentId: 'app-consumer-health-mental',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Sobriety Habit-Change Accountability Partners',
    description:
      'Check-in bots that use behavioral science to provide personalized "nudges" during high-risk relapse periods.',
    order: 4,
  },
  {
    id: 'app-f-health-mental-sleep',
    parentId: 'app-consumer-health-mental',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Sleep Architecture Optimization Coaches',
    description:
      'AI that analyzes wearable data (Oura/Whoop) to suggest hyper-specific adjustments to room temperature, light, and routine.',
    order: 5,
    sources: [
      {
        label: 'Crunchbase Funding Rounds',
        url: 'https://news.crunchbase.com/venture/biggest-funding-rounds-ai-defense-wearables-energy-saronic/',
      },
    ],
  },
  {
    id: 'app-f-health-mental-social-anxiety',
    parentId: 'app-consumer-health-mental',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Social Anxiety Performance Arenas',
    description:
      'Safe, simulated environments where users can rehearse difficult professional or personal conversations with reactive AI personas.',
    order: 6,
  },
  {
    id: 'app-f-health-mental-minimalism',
    parentId: 'app-consumer-health-mental',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Digital Mindfulness Minimalism Mentors',
    description:
      'AI that monitors screen-time and app usage patterns to help users break addictive scrolling habits through mindful friction.',
    order: 7,
  },
  {
    id: 'app-f-health-mental-philosophical',
    parentId: 'app-consumer-health-mental',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Philosophical and Spiritual Mentors',
    description:
      'Non-clinical AI companions trained on philosophical texts to help users navigate existential crises or life transitions.',
    order: 8,
  },

  // ── NICHE: Fitness & Nutrition (app-consumer-health-fitness) ─────────────
  {
    id: 'app-f-health-fitness-cv-form',
    parentId: 'app-consumer-health-fitness',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Computer Vision Technique Correction',
    description:
      'Mobile platforms utilizing the smartphone camera to provide real-time audio corrections for lifting form or yoga poses.',
    order: 1,
    sources: [
      {
        label: 'a16z AI Apps Podcast',
        url: 'https://podcasts.apple.com/sg/podcast/the-top-100-most-used-ai-apps-in-2025/id842818711?i=1000723704374',
      },
    ],
  },
  {
    id: 'app-f-health-fitness-post-surgical',
    parentId: 'app-consumer-health-fitness',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Post-Surgical Physical Therapy Assistants',
    description:
      'Post-op apps that track range-of-motion progress and ensure home exercise compliance through visual verification.',
    order: 2,
  },
  {
    id: 'app-f-health-fitness-metabolic',
    parentId: 'app-consumer-health-fitness',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Condition-Specific Metabolic Dietitians',
    description:
      'Nutrition planners tailored for specific conditions like PCOS, Type 2 Diabetes, or IBS through meal-blood glucose sync.',
    order: 3,
    sources: [
      {
        label: 'a16z AI Apps Podcast',
        url: 'https://podcasts.apple.com/sg/podcast/the-top-100-most-used-ai-apps-in-2025/id842818711?i=1000723704374',
      },
    ],
  },
  {
    id: 'app-f-health-fitness-bio-grocery',
    parentId: 'app-consumer-health-fitness',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Bio-Integrated Intelligent Grocery Assistants',
    description:
      'Shopping tools that recommend foods based on real-time continuous glucose monitor (CGM) or HRV data response.',
    order: 4,
  },
  {
    id: 'app-f-health-fitness-athlete',
    parentId: 'app-consumer-health-fitness',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Amateur Athlete Performance Directors',
    description:
      'AI training blocks for runners or cyclists that adapt based on weather, terrain, and cumulative fatigue metrics.',
    order: 5,
  },
  {
    id: 'app-f-health-fitness-interaction',
    parentId: 'app-consumer-health-fitness',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Interaction Checking Wellness Advisors',
    description:
      'Tools that cross-reference over-the-counter supplements and vitamins with medications to avoid adverse reactions.',
    order: 6,
  },
  {
    id: 'app-f-health-fitness-visual-nutrient',
    parentId: 'app-consumer-health-fitness',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Visual Nutrient Recognition Loggers',
    description:
      'One-click photo-to-nutrient extraction that estimates portion sizes and caloric density from single images.',
    order: 7,
    sources: [
      {
        label: 'BVP State of AI 2025',
        url: 'https://www.bvp.com/atlas/the-state-of-ai-2025',
      },
    ],
  },
  {
    id: 'app-f-health-fitness-longevity',
    parentId: 'app-consumer-health-fitness',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Biological Age and Longevity Trackers',
    description:
      'Platforms synthesizing blood markers, wearable data, and lifestyle logs to provide actionable longevity roadmaps.',
    order: 8,
  },

  // ── NICHE: AI Companions & Characters (app-consumer-entertainment-companions)
  {
    id: 'app-f-ent-companions-legacy',
    parentId: 'app-consumer-entertainment-companions',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Decadal Memory Legacy Avatars',
    description:
      'Companions that learn a user\'s life history and personality over years, acting as a digital biographer for future generations.',
    order: 1,
    sources: [
      {
        label: 'BVP State of AI 2025 Slides',
        url: 'https://www.bvp.com/assets/uploads/2025/08/Final_PDF_State_of_AI_2025_slides_Bessemer_Venture_Partners.pdf',
      },
    ],
  },
  {
    id: 'app-f-ent-companions-elderly',
    parentId: 'app-consumer-entertainment-companions',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Elderly Companionship & Health Bots',
    description:
      'Voice-first AI providing daily check-ins, medication reminders, and cognitive stimulation for isolated seniors.',
    order: 2,
  },
  {
    id: 'app-f-ent-companions-creator',
    parentId: 'app-consumer-entertainment-companions',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Creator-Centric Fan Interaction Avatars',
    description:
      'AI versions of popular influencers that fans can interact with for lore questions or personalized advice.',
    order: 3,
    sources: [
      {
        label: 'a16z 100 Gen AI Apps (5th)',
        url: 'https://a16z.com/100-gen-ai-apps-5/',
      },
    ],
  },
  {
    id: 'app-f-ent-companions-neuro-social',
    parentId: 'app-consumer-entertainment-companions',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Neurodivergent Social Skill Roleplay',
    description:
      'Safe environments for practicing eye contact, social cues, and subtext interpretation through simulated conversation.',
    order: 4,
  },
  {
    id: 'app-f-ent-companions-family',
    parentId: 'app-consumer-entertainment-companions',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Shared AI Family Members',
    description:
      'Multi-user companions participating in family group chats to track shared history and manage collective logistics.',
    order: 5,
    sources: [
      {
        label: 'BVP State of AI 2025',
        url: 'https://www.bvp.com/atlas/the-state-of-ai-2025',
      },
    ],
  },
  {
    id: 'app-f-ent-companions-ai-pets',
    parentId: 'app-consumer-entertainment-companions',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Emergent Behavior AI Pets',
    description:
      'Digital entities that "evolve" personalities based on the frequency and quality of user interaction.',
    order: 6,
  },
  {
    id: 'app-f-ent-companions-fiction',
    parentId: 'app-consumer-entertainment-companions',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Interactive Fiction Universe Immersion',
    description:
      'Licensed characters from popular media franchises allowing fans to explore "off-screen" narrative life.',
    order: 7,
    sources: [
      {
        label: 'a16z 100 Gen AI Apps (5th)',
        url: 'https://a16z.com/100-gen-ai-apps-5/',
      },
    ],
  },
  {
    id: 'app-f-ent-companions-historical',
    parentId: 'app-consumer-entertainment-companions',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Historical Mentor Simulators',
    description:
      'AI models of historical figures (e.g., Marcus Aurelius) providing advice based on documented philosophical writings.',
    order: 8,
  },

  // ── NICHE: AI in Gaming (app-consumer-entertainment-gaming) ──────────────
  {
    id: 'app-f-ent-gaming-dungeon-master',
    parentId: 'app-consumer-entertainment-gaming',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Procedural AI Dungeon Masters',
    description:
      'Dynamic narrative engines for tabletop-style RPGs that generate maps, dialogue, and world-state in real-time.',
    order: 1,
    sources: [
      {
        label: 'a16z AI Apps Podcast',
        url: 'https://podcasts.apple.com/sg/podcast/the-top-100-most-used-ai-apps-in-2025/id842818711?i=1000723704374',
      },
    ],
  },
  {
    id: 'app-f-ent-gaming-modding',
    parentId: 'app-consumer-entertainment-gaming',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Natural Language Game Modding Suites',
    description:
      'Tools allowing players to describe new mechanics or assets to be generated and integrated into existing games.',
    order: 2,
  },
  {
    id: 'app-f-ent-gaming-biometric',
    parentId: 'app-consumer-entertainment-gaming',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Biometric Adaptive Difficulty Tuners',
    description:
      'Real-time engines monitoring player stress (via HRV or input) to adjust enemy behavior and maintain flow state.',
    order: 3,
  },
  {
    id: 'app-f-ent-gaming-voice-creation',
    parentId: 'app-consumer-entertainment-gaming',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Voice-to-Game Creation Engines',
    description:
      'Platforms where users "describe" worlds and mechanics to build interactive experiences without code (Roblox for AI).',
    order: 4,
  },
  {
    id: 'app-f-ent-gaming-lore',
    parentId: 'app-consumer-entertainment-gaming',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Personalized Lore & History Generators',
    description:
      'Systems that track unique player choices and generate a world chronicle document at the campaign\'s conclusion.',
    order: 5,
  },
  {
    id: 'app-f-ent-gaming-qa-bots',
    parentId: 'app-consumer-entertainment-gaming',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Scalable Game QA Bot Fleets',
    description:
      'Agents that "play" games 24/7 to identify bugs, balance issues, and navigation blockers before release.',
    order: 6,
    sources: [
      {
        label: 'Product Hunt Best of 2025',
        url: 'https://www.producthunt.com/leaderboard/yearly/2025/all',
      },
    ],
  },
  {
    id: 'app-f-ent-gaming-localization',
    parentId: 'app-consumer-entertainment-gaming',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Emotionally Resonant Dialogue Localization',
    description:
      'Localization tools providing high-quality, tonally-consistent dubbing in any language during runtime.',
    order: 7,
  },
  {
    id: 'app-f-ent-gaming-npc-llm',
    parentId: 'app-consumer-entertainment-gaming',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'In-Game NPC Conversational Layers',
    description:
      'Replacing dialogue trees with LLMs, allowing players to have open-ended voice conversations with game characters.',
    order: 8,
    sources: [
      {
        label: 'a16z AI Apps Podcast',
        url: 'https://podcasts.apple.com/sg/podcast/the-top-100-most-used-ai-apps-in-2025/id842818711?i=1000723704374',
      },
    ],
  },

  // ── DOMAIN: AI Companions & Social (app-consumer-companions) depth-2 ──────
  {
    id: 'app-f-companions-social-media',
    parentId: 'app-consumer-companions',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'AI-Native Social Media Platforms',
    description:
      'Networks where human and AI entities coexist, with agents generating content and acting as community facilitators.',
    order: 1,
    sources: [
      {
        label: 'BVP State of AI 2025',
        url: 'https://www.bvp.com/atlas/the-state-of-ai-2025',
      },
    ],
  },
  {
    id: 'app-f-companions-matchmaking',
    parentId: 'app-consumer-companions',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'AI Matchmaking Compatibility Protocols',
    description:
      'Systems where a user\'s AI "interviews" another\'s to determine compatibility before a real-world date occurs.',
    order: 2,
  },
  {
    id: 'app-f-companions-group-chat',
    parentId: 'app-consumer-companions',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Group Chat Consensus Facilitators',
    description:
      'AI members in group chats that suggest meetups, settle logistics, or provide context for shared discussions.',
    order: 3,
    sources: [
      {
        label: 'Product Hunt Best of 2025',
        url: 'https://www.producthunt.com/leaderboard/yearly/2025/all',
      },
    ],
  },
  {
    id: 'app-f-companions-dating-coach',
    parentId: 'app-consumer-companions',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Dating Interaction Performance Coaches',
    description:
      'AI that analyzes dating app profiles and threads to offer "ghost-writing" and feedback on social signals.',
    order: 4,
  },
  {
    id: 'app-f-companions-community-mgmt',
    parentId: 'app-consumer-companions',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Community Management Auto-Pilots',
    description:
      'Advanced agents for Discord/Reddit that handle onboarding, conflict resolution, and event scheduling.',
    order: 5,
  },
  {
    id: 'app-f-companions-memory-doc',
    parentId: 'app-consumer-companions',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Digital Life Memory Documentarians',
    description:
      'Agents that automatically curate a user\'s social and private media into coherent monthly "story" books.',
    order: 6,
  },
  {
    id: 'app-f-companions-anxiety-rehearsal',
    parentId: 'app-consumer-companions',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Social Anxiety Rehearsal Environments',
    description:
      'Simulated "cocktail parties" or "board meetings" where users practice networking and social entry skills.',
    order: 7,
  },
  {
    id: 'app-f-companions-pen-pal',
    parentId: 'app-consumer-companions',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multilingual Pen Pal Bridges',
    description:
      'AI partners facilitating language learning through persistent, culturally-aware text and voice correspondence.',
    order: 8,
  },

  // ── DOMAIN: Personal Finance AI (app-consumer-personal-finance) depth-2 ───
  {
    id: 'app-f-finance-spending-nudges',
    parentId: 'app-consumer-personal-finance',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Hyper-Personalized Spending Nudges',
    description:
      'Real-time alerts that intervene during a purchase to show the impact on specific long-term financial goals.',
    order: 1,
  },
  {
    id: 'app-f-finance-freelancer-tax',
    parentId: 'app-consumer-personal-finance',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Freelancer Automated Tax Deduction Scouts',
    description:
      'AI that scans transactions to identify potential gig-worker write-offs and pre-fills tax forms.',
    order: 2,
    sources: [
      {
        label: 'YC AI Startups 2025',
        url: 'https://www.scribd.com/document/841517869/Generative-AI-Startups-funded-by-Y-Combinator-YC-2025-Y-Combinator',
      },
    ],
  },
  {
    id: 'app-f-finance-debt-snowball',
    parentId: 'app-consumer-personal-finance',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Autonomous Debt Repayment Snowballers',
    description:
      'Agents that move money between accounts to execute the most efficient interest-avoidance strategy.',
    order: 3,
  },
  {
    id: 'app-f-finance-bill-negotiation',
    parentId: 'app-consumer-personal-finance',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'AI Bill Negotiation Agents',
    description:
      'Autonomous tools that call or chat with providers to lower monthly rates using a database of competitor offers.',
    order: 4,
  },
  {
    id: 'app-f-finance-zombie-subs',
    parentId: 'app-consumer-personal-finance',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Zombie Subscription Audit Guards',
    description:
      'Proactive monitors flagging unused subscriptions and handling the multi-step cancellation process.',
    order: 5,
  },
  {
    id: 'app-f-finance-teen-literacy',
    parentId: 'app-consumer-personal-finance',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Gamified Teen Financial Literacy Mentors',
    description:
      'Companions helping teenagers manage allowances while teaching compounding interest through simulation.',
    order: 6,
  },
  {
    id: 'app-f-finance-estate-planning',
    parentId: 'app-consumer-personal-finance',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Estate and Will Planning Assistants',
    description:
      'Conversational tools documenting assets and preferences to generate legally-compliant estate documents.',
    order: 7,
    sources: [
      {
        label: 'BVP State of AI 2025',
        url: 'https://www.bvp.com/atlas/the-state-of-ai-2025',
      },
    ],
  },
  {
    id: 'app-f-finance-portfolio-explain',
    parentId: 'app-consumer-personal-finance',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Investment Portfolio Natural-Language Explainers',
    description:
      'Tools that "translate" complex brokerage statements and market movements into plain English.',
    order: 8,
  },

  // ── DOMAIN: Photo & Video Editing (app-consumer-photo-video) depth-2 ──────
  {
    id: 'app-f-photo-video-highlights',
    parentId: 'app-consumer-photo-video',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'One-Click Cinematic Event Highlights',
    description:
      'AI that scans raw footage to edit 60-second recap videos for weddings or travel.',
    order: 1,
    sources: [
      {
        label: 'BVP State of AI 2025 Slides',
        url: 'https://www.bvp.com/assets/uploads/2025/08/Final_PDF_State_of_AI_2025_slides_Bessemer_Venture_Partners.pdf',
      },
    ],
  },
  {
    id: 'app-f-photo-video-outfit-tryon',
    parentId: 'app-consumer-photo-video',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Generative Virtual Outfit Try-On',
    description:
      'Tools allowing users to take a selfie and see themselves in any e-commerce garment before buying.',
    order: 2,
    sources: [
      {
        label: 'a16z 100 Gen AI Apps (5th)',
        url: 'https://a16z.com/100-gen-ai-apps-5/',
      },
    ],
  },
  {
    id: 'app-f-photo-video-studio-bg',
    parentId: 'app-consumer-photo-video',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Virtual Studio Background Stylers',
    description:
      'Consumer tools placing subjects in photorealistic "studio" environments for professional headshots.',
    order: 3,
  },
  {
    id: 'app-f-photo-video-family-mgr',
    parentId: 'app-consumer-photo-video',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Local-First Family Photo Managers',
    description:
      'AI that organizes decades of photos by person and event on-device without cloud data transfer.',
    order: 4,
  },
  {
    id: 'app-f-photo-video-restoration',
    parentId: 'app-consumer-photo-video',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Old Photo Restoration & High-Fidelity Colorization',
    description:
      'High-resolution agents repairing physical damage and adding historical color to archival photos.',
    order: 5,
    sources: [
      {
        label: 'Forbes AI 50',
        url: 'https://www.forbes.com/lists/ai50/',
      },
    ],
  },
  {
    id: 'app-f-photo-video-vibe-presets',
    parentId: 'app-consumer-photo-video',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Social Media Aesthetic "Vibe" Presets',
    description:
      'Generative filters that re-style photos to match trending aesthetics on TikTok or Instagram.',
    order: 6,
  },
  {
    id: 'app-f-photo-video-dubbing',
    parentId: 'app-consumer-photo-video',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Personalized Video Dubbing & Lip-Sync',
    description:
      'Apps allowing users to dub their own videos into foreign languages while matching lip movements.',
    order: 7,
    sources: [
      {
        label: 'a16z 100 Gen AI Apps (6th)',
        url: 'https://a16z.com/100-gen-ai-apps-6/',
      },
    ],
  },
  {
    id: 'app-f-photo-video-photobook',
    parentId: 'app-consumer-photo-video',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'AI-Powered Narrative Photo Book Curators',
    description:
      'Software that selects the best 5% of a photo set to build a narrative print-ready book.',
    order: 8,
  },

  // ── NICHE: Shopping Research & Comparison (app-consumer-commerce-research) ─
  {
    id: 'app-f-commerce-research-review',
    parentId: 'app-consumer-commerce-research',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multimodal Review Verdict Agents',
    description:
      'Tools synthesizing thousands of video/text reviews to answer specific logistical questions.',
    order: 1,
    sources: [
      {
        label: 'Product Hunt Best of 2025',
        url: 'https://www.producthunt.com/leaderboard/yearly/2025/all',
      },
    ],
  },
  {
    id: 'app-f-commerce-research-discovery',
    parentId: 'app-consumer-commerce-research',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Personalized "Find Me X" Discovery Scouts',
    description:
      'Natural language search for products meeting multi-factor requirements (e.g., "Ethical, under $100, waterproof").',
    order: 2,
  },
  {
    id: 'app-f-commerce-research-ethical',
    parentId: 'app-consumer-commerce-research',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Ethical and Sustainability Scorecard Extensions',
    description:
      'Browser tools providing instant impact or labor practice scores for any product.',
    order: 3,
  },
  {
    id: 'app-f-commerce-research-matrix',
    parentId: 'app-consumer-commerce-research',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: "High-Consideration Buyer's Matrix Generators",
    description:
      "AI building custom comparison tables for appliances based on a user's specific household constraints.",
    order: 4,
  },
  {
    id: 'app-f-commerce-research-fit',
    parentId: 'app-consumer-commerce-research',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Selfie-Based Fit Prediction Engines',
    description:
      'Agents using mirror photos to recommend exact sizes across different clothing brands with 95% accuracy.',
    order: 5,
    sources: [
      {
        label: 'a16z 100 Gen AI Apps (5th)',
        url: 'https://a16z.com/100-gen-ai-apps-5/',
      },
    ],
  },
  {
    id: 'app-f-commerce-research-secondhand',
    parentId: 'app-consumer-commerce-research',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Second-Hand Market Scrapers',
    description:
      'Real-time monitors for eBay and Depop finding vintage items matching a user\'s unique "style profile."',
    order: 6,
  },
  {
    id: 'app-f-commerce-research-timing',
    parentId: 'app-consumer-commerce-research',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Optimal Purchase-Time Predictors',
    description:
      'Prediction models advising users on the best time to buy based on seasonal cycles and competitor drops.',
    order: 7,
  },
  {
    id: 'app-f-commerce-research-allergen',
    parentId: 'app-consumer-commerce-research',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Allergen and Ingredient Transparency Agents',
    description:
      'Food commerce assistants flagging hidden ingredients in grocery carts.',
    order: 8,
  },

  // ── NICHE: Autonomous Purchase Execution (app-consumer-commerce-execution) ─
  {
    id: 'app-f-commerce-exec-replenish',
    parentId: 'app-consumer-commerce-execution',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Predictive Household Replenishment Agents',
    description:
      'Systems monitoring consumable usage (detergent, diapers) and handling autonomous reordering and payment.',
    order: 1,
  },
  {
    id: 'app-f-commerce-exec-flash-deal',
    parentId: 'app-consumer-commerce-execution',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Limited-Edition Flash-Deal Snipers',
    description:
      'Agents monitoring drops and executing purchases in milliseconds for fans to compete with scalpers.',
    order: 2,
  },
  {
    id: 'app-f-commerce-exec-gift',
    parentId: 'app-consumer-commerce-execution',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Birthday Gift Fulfillment Pilots',
    description:
      'AI remembering birthdays and autonomously selecting, wrapping, and shipping gifts within pre-approved budgets.',
    order: 3,
  },
  {
    id: 'app-f-commerce-exec-returns',
    parentId: 'app-consumer-commerce-execution',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Returns and Dispute Management Assistants',
    description:
      'AI handling the multi-step return process, including label generation and carrier pickup scheduling.',
    order: 4,
  },
  {
    id: 'app-f-commerce-exec-delegated',
    parentId: 'app-consumer-commerce-execution',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Spending-Policy Delegated Agents',
    description:
      'Integration allowing employees to delegate purchasing power to an AI within strict corporate card guardrails.',
    order: 5,
  },
  {
    id: 'app-f-commerce-exec-ticket',
    parentId: 'app-consumer-commerce-execution',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Event Ticket Queue Monitors',
    description:
      'Agents waiting in virtual queues for concerts and completing checkout immediately upon access.',
    order: 6,
  },
  {
    id: 'app-f-commerce-exec-airline-credit',
    parentId: 'app-consumer-commerce-execution',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Airline Credit Recovery Monitors',
    description:
      'Tools scanning inboxes for unused travel vouchers and applying them to the next relevant booking.',
    order: 7,
  },
  {
    id: 'app-f-commerce-exec-price-drop',
    parentId: 'app-consumer-commerce-execution',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Post-Purchase Price Drop Reclaimers',
    description:
      'Agents monitoring price changes after a sale and autonomously requesting price-match refunds.',
    order: 8,
  },

  // ── NICHE: Trip Planning & Booking (app-consumer-travel-planning) ─────────
  {
    id: 'app-f-travel-plan-pace',
    parentId: 'app-consumer-travel-planning',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Pace-Aware Multi-City Itineraries',
    description:
      'Planning tools balancing sightseeing density with rest days based on traveler energy history.',
    order: 1,
  },
  {
    id: 'app-f-travel-plan-cheapest-route',
    parentId: 'app-consumer-travel-planning',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cheapest-Viable Route Optimizers',
    description:
      'Agents finding the lowest-cost paths between cities using a mix of budget rail, air, and coach.',
    order: 2,
  },
  {
    id: 'app-f-travel-plan-visa',
    parentId: 'app-consumer-travel-planning',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Real-Time Visa Requirement Checkers',
    description:
      "Monitors for changing travel regulations tailored to a traveler's specific passport and destination path.",
    order: 3,
  },
  {
    id: 'app-f-travel-plan-local-exp',
    parentId: 'app-consumer-travel-planning',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Anti-Tourist Local Experience Curators',
    description:
      'Agents using local social media to find restaurants and hidden spots missing from guidebooks.',
    order: 4,
  },
  {
    id: 'app-f-travel-plan-accommodation',
    parentId: 'app-consumer-travel-planning',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Hidden Red-Flag Accommodation Vetters',
    description:
      'Agents cross-referencing Airbnb photos with reviews to find issues like poor Wi-Fi or noise.',
    order: 5,
  },
  {
    id: 'app-f-travel-plan-group',
    parentId: 'app-consumer-travel-planning',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Group Consensus Trip Facilitators',
    description:
      'Collaborative bots polling friends on dates and budgets to find the group\'s "Pareto optimal" vacation.',
    order: 6,
  },
  {
    id: 'app-f-travel-plan-accessibility',
    parentId: 'app-consumer-travel-planning',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Accessibility-Prioritized Itinerary Builders',
    description:
      'Planners focusing on wheelchair access and low-sensory environments for neurodivergent travelers.',
    order: 7,
  },
  {
    id: 'app-f-travel-plan-niche-agents',
    parentId: 'app-consumer-travel-planning',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Travel Style-Aware Specialized Agents',
    description:
      'Niche agents for "Digital Nomads" or "Solo Luxury Travelers" with domain-specific knowledge.',
    order: 8,
  },

  // ── NICHE: Real-Time Travel Operations (app-consumer-travel-realtime) ─────
  {
    id: 'app-f-travel-rt-rebooker',
    parentId: 'app-consumer-travel-realtime',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Autonomous Flight Delay Rebookers',
    description:
      'Systems detecting delays and instantly presenting/booking the best alternative flight before public announcements.',
    order: 1,
  },
  {
    id: 'app-f-travel-rt-transit',
    parentId: 'app-consumer-travel-realtime',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Step-by-Step Local Transit Navigators',
    description:
      'Real-time guides for foreign metro systems providing visual cues and tap-to-pay instructions.',
    order: 2,
  },
  {
    id: 'app-f-travel-rt-etiquette',
    parentId: 'app-consumer-travel-realtime',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Context-Aware Cultural Etiquette Coaches',
    description:
      'Location-based alerts providing the right gesture or phrase for a specific venue or city.',
    order: 3,
  },
  {
    id: 'app-f-travel-rt-lost-doc',
    parentId: 'app-consumer-travel-realtime',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Lost Document Emergency Pilots',
    description:
      'Step-by-step guidance for replacing passports, including embassy location and form pre-filling.',
    order: 4,
  },
  {
    id: 'app-f-travel-rt-safety',
    parentId: 'app-consumer-travel-realtime',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Hyper-Local Safety Sentiment Alerts',
    description:
      'Real-time monitoring of news/social media to alert travelers of protests or weather events in their immediate vicinity.',
    order: 5,
  },
  {
    id: 'app-f-travel-rt-restaurant',
    parentId: 'app-consumer-travel-realtime',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Impossible-Restaurant Cancellation Agents',
    description:
      'Bots waiting for cancellations at booked-out venues and grabbing them for the traveler instantly.',
    order: 6,
  },
  {
    id: 'app-f-travel-rt-journal',
    parentId: 'app-consumer-travel-realtime',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'GPS-Aware Travel Journal Generators',
    description:
      'Narrative tools using GPS data and photos to draft daily blog posts or private memory entries.',
    order: 7,
  },
  {
    id: 'app-f-travel-rt-translation',
    parentId: 'app-consumer-travel-realtime',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Low-Latency Translation Earbud Interfaces',
    description:
      'Near-zero lag face-to-face translation for deep interaction with locals.',
    order: 8,
    sources: [
      {
        label: 'StartupBlink Top AI',
        url: 'https://www.startupblink.com/blog/top-ai-startups/',
      },
    ],
  },

  // ── NICHE: Infant Monitoring & Development (app-consumer-parenting-monitoring)
  {
    id: 'app-f-parenting-mon-cry',
    parentId: 'app-consumer-parenting-monitoring',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cry Pattern Interpretation Algorithms',
    description:
      'Software differentiating "hunger," "tired," and "pain" cries with over 90% accuracy.',
    order: 1,
    sources: [
      {
        label: 'AI Baby Monitors Rise',
        url: 'https://unitedceres.edu.sg/the-rise-of-ai-powered-baby-monitors-transforming-parenting-in-the-digital-age/',
      },
    ],
  },
  {
    id: 'app-f-parenting-mon-nap',
    parentId: 'app-consumer-parenting-monitoring',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Predictive Nap Window Optimizers',
    description:
      'AI analyzing light and movement data to suggest the ideal window for the next sleep to avoid overtiredness.',
    order: 2,
    sources: [
      {
        label: 'AI Baby Monitors Market',
        url: 'https://www.intelmarketresearch.com/ai-baby-monitors-market-35944',
      },
    ],
  },
  {
    id: 'app-f-parenting-mon-malnutrition',
    parentId: 'app-consumer-parenting-monitoring',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Single-Image Malnutrition Assessment Tools',
    description:
      'Smartphone apps estimating child height/weight to track growth in underserved regions.',
    order: 3,
    sources: [
      {
        label: 'AI Child Growth Monitoring',
        url: 'https://aiforgood.itu.int/meet-revolutionaize-the-ai-startup-revolutionizing-child-growth-monitoring-for-accessible-healthcare/',
      },
    ],
  },
  {
    id: 'app-f-parenting-mon-sids',
    parentId: 'app-consumer-parenting-monitoring',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Camera-Based SIDS Prevention Monitors',
    description:
      'Non-wearable systems utilizing computer vision to monitor chest rise and sleep environment safety.',
    order: 4,
    sources: [
      {
        label: 'AI Baby Monitors Market',
        url: 'https://www.intelmarketresearch.com/ai-baby-monitors-market-35944',
      },
    ],
  },
  {
    id: 'app-f-parenting-mon-milestone',
    parentId: 'app-consumer-parenting-monitoring',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Developmental Milestone Auto-Loggers',
    description:
      'AI scanning smartphone video to "flag" and save a child\'s first roll, crawl, or step.',
    order: 5,
    sources: [
      {
        label: 'Business Research Insights Parenting',
        url: 'https://www.businessresearchinsights.com/market-reports/parenting-apps-market-113806',
      },
    ],
  },
  {
    id: 'app-f-parenting-mon-voice-log',
    parentId: 'app-consumer-parenting-monitoring',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Hands-Free Feeding & Diaper Voice Assistants',
    description:
      'Voice-input tools for parents to log data while their hands are full.',
    order: 6,
    sources: [
      {
        label: 'Business Research Insights Parenting',
        url: 'https://www.businessresearchinsights.com/market-reports/parenting-apps-market-113806',
      },
    ],
  },
  {
    id: 'app-f-parenting-mon-digital-twin',
    parentId: 'app-consumer-parenting-monitoring',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Infant Health Longitudinal Digital Twins',
    description:
      'Data models combining sleep, feeding, and medical records to help pediatricians spot early chronic trends.',
    order: 7,
  },
  {
    id: 'app-f-parenting-mon-analytics',
    parentId: 'app-consumer-parenting-monitoring',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Real-Time Baby Wellness Analytics',
    description:
      'Dashboards providing weekly summaries of infant health data compared to WHO developmental curves.',
    order: 8,
  },

  // ── NICHE: Parenting Guidance & Coordination (app-consumer-parenting-guidance)
  {
    id: 'app-f-parenting-guide-content',
    parentId: 'app-consumer-parenting-guidance',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Age-Specific Content Filter Curators',
    description:
      "Agents selecting educational media based on a child's current developmental stage and parent boundaries.",
    order: 1,
    sources: [
      {
        label: 'Insightace AI in Childcare',
        url: 'https://www.insightaceanalytic.com/report/ai-in-childcare-and-parenting-market/2730',
      },
    ],
  },
  {
    id: 'app-f-parenting-guide-tantrum',
    parentId: 'app-consumer-parenting-guidance',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Tantrum De-escalation Coaching Bots',
    description:
      "Real-time advice for parents on behavioral techniques based on a child's specific temperament profile.",
    order: 2,
  },
  {
    id: 'app-f-parenting-guide-logistics',
    parentId: 'app-consumer-parenting-guidance',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'AI Family Logistics Hub',
    description:
      'Shared bots managing carpools, doctor appointments, and school calendars across multiple caregivers.',
    order: 3,
  },
  {
    id: 'app-f-parenting-guide-handoff',
    parentId: 'app-consumer-parenting-guidance',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Caregiver Handoff Briefing Automators',
    description:
      'Summaries for babysitters including recent meals, naps, and specific "mood reports."',
    order: 4,
  },
  {
    id: 'app-f-parenting-guide-teen-checkin',
    parentId: 'app-consumer-parenting-guidance',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Teen Emotional Check-In Companions',
    description:
      'Non-intrusive AI gauging teen well-being via text and flagging concerns to parents.',
    order: 5,
  },
  {
    id: 'app-f-parenting-guide-readiness',
    parentId: 'app-consumer-parenting-guidance',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'School Readiness Interactive Play',
    description:
      'Apps evaluating literacy and numeracy through play to provide a "readiness score" for kindergarten.',
    order: 6,
  },
  {
    id: 'app-f-parenting-guide-coparenting',
    parentId: 'app-consumer-parenting-guidance',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Co-Parenting Conflict Buffering Agents',
    description:
      'AI "neutralizing" emotional language in messages between divorced parents to focus on logistics.',
    order: 7,
    sources: [
      {
        label: 'Business Research Insights Parenting',
        url: 'https://www.businessresearchinsights.com/market-reports/parenting-apps-market-113806',
      },
    ],
  },
  {
    id: 'app-f-parenting-guide-browser',
    parentId: 'app-consumer-parenting-guidance',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: "Safe Children's Research Browsers",
    description:
      "Kid-safe AI browsers synthesizing answers appropriate for a child's reading level.",
    order: 8,
    sources: [
      {
        label: 'YCombinator ML Companies',
        url: 'https://www.ycombinator.com/companies/industry/machine-learning',
      },
    ],
  },
]
