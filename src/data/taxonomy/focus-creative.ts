import type { TaxonomyNode } from '../types'

export const creativeFocusNodes: TaxonomyNode[] = [
  // ── NICHE: Image Generation & Editing (app-creative-visual-imagegen) ────────
  {
    id: 'app-f-vis-imagegen-brand',
    parentId: 'app-creative-visual-imagegen',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Brand-Consistent Image Generators',
    description:
      'AI that enforces logo colors and hex rules for every social image, maintaining strict visual identity across all generated assets.',
    order: 1,
    sources: [{ label: 'Forbes AI 50', url: 'https://www.forbes.com/lists/ai50/' }],
  },
  {
    id: 'app-f-vis-imagegen-product-photo',
    parentId: 'app-creative-visual-imagegen',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Product Photography Pipelines',
    description:
      'Tools turning a smartphone photo into a professional studio advertisement, automating background replacement and lighting correction.',
    order: 2,
  },
  {
    id: 'app-f-vis-imagegen-fashion-viz',
    parentId: 'app-creative-visual-imagegen',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Body-Type Fashion Visualizers',
    description:
      'AI placing a dress design onto a wide range of body-type model representations, enabling inclusive size and fit previews.',
    order: 3,
  },
  {
    id: 'app-f-vis-imagegen-svg-autopilot',
    parentId: 'app-creative-visual-imagegen',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Icon & Vector Auto-Pilots',
    description:
      'AI generating clean, editable SVGs for websites from a single-word or short-phrase prompt.',
    order: 4,
  },
  {
    id: 'app-f-vis-imagegen-ad-variants',
    parentId: 'app-creative-visual-imagegen',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Marketing Image Scaling Agents',
    description:
      'AI taking one hero image and producing hundreds of ad size variants optimized for different placements and platforms.',
    order: 5,
  },
  {
    id: 'app-f-vis-imagegen-moodboard',
    parentId: 'app-creative-visual-imagegen',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Concept Art Mood Board Generators',
    description:
      'Rapid AI tools for directors and creative leads that sketch dozens of distinct visual directions in under an hour.',
    order: 6,
  },
  {
    id: 'app-f-vis-imagegen-staging',
    parentId: 'app-creative-visual-imagegen',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Virtual Room Staging Tools',
    description:
      'AI taking an empty room photo and rendering it with contextually appropriate furniture and decor for real estate listings.',
    order: 7,
  },
  {
    id: 'app-f-vis-imagegen-layout-copilot',
    parentId: 'app-creative-visual-imagegen',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Graphic Design Layout Copilots',
    description:
      'Design tools that handle the tedious alignment, spacing, and typographic hierarchy portions of layout work.',
    order: 8,
  },

  // ── NICHE: UI & Product Design (app-creative-visual-uidesign) ───────────────
  {
    id: 'app-f-vis-uid-design-tokens',
    parentId: 'app-creative-visual-uidesign',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Design System Token Managers',
    description:
      'AI ensuring every button, color, and spacing value on a site consistently matches the design system across all pages.',
    order: 1,
  },
  {
    id: 'app-f-vis-uid-figma-gen',
    parentId: 'app-creative-visual-uidesign',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Figma Component Generators',
    description:
      'AI plugins that build Figma layers and component sets from a natural language text description.',
    order: 2,
  },
  {
    id: 'app-f-vis-uid-accessibility',
    parentId: 'app-creative-visual-uidesign',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'UI Accessibility Audit Agents',
    description:
      'AI flagging low-vision issues such as small tap targets or insufficient text contrast throughout an interface.',
    order: 3,
  },
  {
    id: 'app-f-vis-uid-journey-board',
    parentId: 'app-creative-visual-uidesign',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'User Journey Storyboarders',
    description:
      'AI visualizing the complete path a user takes through an app, from landing page to checkout, surfacing friction points.',
    order: 4,
  },
  {
    id: 'app-f-vis-uid-ab-variants',
    parentId: 'app-creative-visual-uidesign',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'UI A/B Variant Generators',
    description:
      'AI suggesting multiple header and button design alternatives to determine which layout converts best.',
    order: 5,
  },
  {
    id: 'app-f-vis-uid-mobile-ui',
    parentId: 'app-creative-visual-uidesign',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Mobile App UI Code Engines',
    description:
      'AI taking a screen design and generating production-ready React Native or SwiftUI code.',
    order: 6,
  },
  {
    id: 'app-f-vis-uid-tailwind-gen',
    parentId: 'app-creative-visual-uidesign',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Design-to-Tailwind Generators',
    description:
      'AI converting pixel-perfect visual designs into clean, professional Tailwind CSS markup.',
    order: 7,
    sources: [{ label: 'Product Hunt Vibe Coding', url: 'https://www.producthunt.com/categories/vibe-coding' }],
  },
  {
    id: 'app-f-vis-uid-proto-builder',
    parentId: 'app-creative-visual-uidesign',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Conversational UI Prototype Builders',
    description:
      'AI building interactive, clickable mockups you can navigate and converse with before a single line of production code is written.',
    order: 8,
  },

  // ── NICHE: Music Composition (app-creative-audio-composition) ───────────────
  {
    id: 'app-f-aud-comp-text-to-track',
    parentId: 'app-creative-audio-composition',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Text-to-Track Music Engines',
    description:
      'AI generating full songs from a simple mood or genre prompt, including melody, harmony, and arrangement.',
    order: 1,
  },
  {
    id: 'app-f-aud-comp-copyright-safe',
    parentId: 'app-creative-audio-composition',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Copyright-Safe Creator Music',
    description:
      'AI building custom music guaranteed free from copyright strikes for content creators uploading to YouTube and streaming platforms.',
    order: 2,
  },
  {
    id: 'app-f-aud-comp-sonic-brand',
    parentId: 'app-creative-audio-composition',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Sonic Brand Jingle Creators',
    description:
      'AI building short, distinctive audio logos and brand sounds that function as sonic identities for companies.',
    order: 3,
  },
  {
    id: 'app-f-aud-comp-adaptive-game',
    parentId: 'app-creative-audio-composition',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Adaptive Game Music Systems',
    description:
      'Music that dynamically intensifies or shifts mood based on real-time in-game player actions and context.',
    order: 4,
  },
  {
    id: 'app-f-aud-comp-co-composer',
    parentId: 'app-creative-audio-composition',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Music Theory Co-Composers',
    description:
      'AI suggesting bridges, chord progressions, or transitions for a songwriter\'s unfinished song based on music theory analysis.',
    order: 5,
  },
  {
    id: 'app-f-aud-comp-drum-gen',
    parentId: 'app-creative-audio-composition',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Unique Drum & Loop Generators',
    description:
      'AI building entirely novel drum samples and rhythmic loops that producers can use without licensing concerns.',
    order: 6,
  },
  {
    id: 'app-f-aud-comp-vocal-layer',
    parentId: 'app-creative-audio-composition',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Vocal Layering & Choir Agents',
    description:
      'AI taking a single recorded human voice and constructing harmonized multi-part choir arrangements around it.',
    order: 7,
  },
  {
    id: 'app-f-aud-comp-style-emulator',
    parentId: 'app-creative-audio-composition',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Historical Style Emulators',
    description:
      'AI that writes new compositions in the structural and tonal style of a specific historical genre or era.',
    order: 8,
  },

  // ── NICHE: Sound Design (app-creative-audio-sounddesign) ────────────────────
  {
    id: 'app-f-aud-sfx-text-to-sfx',
    parentId: 'app-creative-audio-sounddesign',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Text-to-SFX Film Tools',
    description:
      'AI generating unique, production-ready sound effects for film and games from a natural language description.',
    order: 1,
  },
  {
    id: 'app-f-aud-sfx-foley-auto',
    parentId: 'app-creative-audio-sounddesign',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Foley Automation Agents',
    description:
      'AI analyzing video content and automatically adding contextually appropriate sound effects synced to on-screen actions.',
    order: 2,
  },
  {
    id: 'app-f-aud-sfx-audio-restore',
    parentId: 'app-creative-audio-sounddesign',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Location Audio Restoration Units',
    description:
      'AI making noisy outdoor or interview recordings sound studio-quality by removing wind, background hum, and interference.',
    order: 3,
  },
  {
    id: 'app-f-aud-sfx-filler-editor',
    parentId: 'app-creative-audio-sounddesign',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Filler Word Removal Editors',
    description:
      'AI automatically detecting and removing filler words from long-form podcast or interview recordings.',
    order: 4,
    sources: [{ label: 'Product Hunt Best of 2025', url: 'https://www.producthunt.com/leaderboard/yearly/2025/all' }],
  },
  {
    id: 'app-f-aud-sfx-voice-transfer',
    parentId: 'app-creative-audio-sounddesign',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Voice Style-Transfer Agents',
    description:
      'AI allowing an actor to speak naturally while transforming their voice into a creature, character, or stylized persona with preserved emotion.',
    order: 5,
  },
  {
    id: 'app-f-aud-sfx-adr-assist',
    parentId: 'app-creative-audio-sounddesign',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'ADR Lip-Sync Assistance Tools',
    description:
      'AI helping actors re-record dialogue lines while automatically matching timing and mouth movements to the original footage.',
    order: 6,
  },
  {
    id: 'app-f-aud-sfx-spatial-mix',
    parentId: 'app-creative-audio-sounddesign',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Spatial Audio Mixers',
    description:
      'AI automatically placing and panning sounds in 3D space for Dolby Atmos, theater, or immersive XR audio systems.',
    order: 7,
  },
  {
    id: 'app-f-aud-sfx-voice-editor',
    parentId: 'app-creative-audio-sounddesign',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Voice-Driven Text Editors',
    description:
      'Writing tools optimized for users who speak their first draft, with AI cleaning and structuring the transcribed output.',
    order: 8,
    sources: [{ label: 'Product Hunt Best of 2025', url: 'https://www.producthunt.com/leaderboard/yearly/2025/all' }],
  },

  // ── NICHE: Video Production (app-creative-video-production) ─────────────────
  {
    id: 'app-f-vid-prod-clip-extract',
    parentId: 'app-creative-video-production',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Viral Clip Extractors',
    description:
      'AI analyzing long-form video content and identifying the highest-engagement moments for repurposing as short-form clips.',
    order: 1,
  },
  {
    id: 'app-f-vid-prod-avatar-host',
    parentId: 'app-creative-video-production',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'No-Camera Talking-Head Avatars',
    description:
      'AI generating realistic video of a person speaking with natural gestures, eliminating the need for a physical camera setup.',
    order: 2,
    sources: [{ label: 'Forbes AI 50', url: 'https://www.forbes.com/lists/ai50/' }],
  },
  {
    id: 'app-f-vid-prod-storyboard',
    parentId: 'app-creative-video-production',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Script-to-Storyboard Visualizers',
    description:
      'AI taking a screenplay and generating a sequential comic-book-style visual breakdown for pre-production planning.',
    order: 3,
  },
  {
    id: 'app-f-vid-prod-greenscreen',
    parentId: 'app-creative-video-production',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Angle-Matched Background Compositors',
    description:
      'AI placing a person into photorealistic 3D environments that precisely match the camera angle and lighting of the original shot.',
    order: 4,
  },
  {
    id: 'app-f-vid-prod-broll-search',
    parentId: 'app-creative-video-production',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'AI B-Roll Search Agents',
    description:
      'AI automatically finding and inserting the best matching stock or generated footage whenever a narrator mentions a specific keyword.',
    order: 5,
  },
  {
    id: 'app-f-vid-prod-dubbing',
    parentId: 'app-creative-video-production',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Video Dubbing & Lip-Sync Tools',
    description:
      'AI translating and re-voicing actors in their own voice for international audiences with synchronized lip movement.',
    order: 6,
    sources: [{ label: 'Product Hunt Best of 2025', url: 'https://www.producthunt.com/leaderboard/yearly/2025/all' }],
  },
  {
    id: 'app-f-vid-prod-ad-maker',
    parentId: 'app-creative-video-production',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Product Ad Video Generators',
    description:
      'AI taking product photos and generating polished short-form commercial video with motion, music, and copy.',
    order: 7,
    sources: [{ label: 'Product Hunt Best of 2025', url: 'https://www.producthunt.com/leaderboard/yearly/2025/all' }],
  },
  {
    id: 'app-f-vid-prod-screen-polish',
    parentId: 'app-creative-video-production',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Screen Recording Beauty Editors',
    description:
      'AI transforming raw, unpolished screen recordings into clean, professional product demos with automated editing and enhancement.',
    order: 8,
    sources: [{ label: 'Product Hunt Best of 2025', url: 'https://www.producthunt.com/leaderboard/yearly/2025/all' }],
  },

  // ── NICHE: Animation & Motion (app-creative-video-animation) ────────────────
  {
    id: 'app-f-vid-anim-2d-char',
    parentId: 'app-creative-video-animation',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: '2D Character Auto-Animators',
    description:
      'AI taking a flat illustration and generating a full walking, talking, or emoting animation sequence.',
    order: 1,
  },
  {
    id: 'app-f-vid-anim-mocap',
    parentId: 'app-creative-video-animation',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Smartphone Motion Capture Retargeting',
    description:
      'AI turning smartphone dance or performance videos into retargeted 3D skeletal animations ready for game engines.',
    order: 2,
  },
  {
    id: 'app-f-vid-anim-lipsync',
    parentId: 'app-creative-video-animation',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Audio-Driven Avatar Lip-Sync',
    description:
      'AI analyzing audio tracks and automatically driving a character\'s mouth and facial animation to match speech.',
    order: 3,
  },
  {
    id: 'app-f-vid-anim-slide-to-video',
    parentId: 'app-creative-video-animation',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Slide Deck to Explainer Animation',
    description:
      'AI converting static PowerPoint or slide presentations into animated explainer videos with narration and motion graphics.',
    order: 4,
  },
  {
    id: 'app-f-vid-anim-procedural-bg',
    parentId: 'app-creative-video-animation',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Procedural Background Generators',
    description:
      'AI generating looping animated environments such as swaying foliage, flowing water, or drifting clouds for use as scene backgrounds.',
    order: 5,
  },
  {
    id: 'app-f-vid-anim-logo-motion',
    parentId: 'app-creative-video-animation',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Logo Motion Graphics Generators',
    description:
      'AI taking an SVG or static logo and producing a short animated intro sequence with customizable style and timing.',
    order: 6,
  },
  {
    id: 'app-f-vid-anim-face-avatar',
    parentId: 'app-creative-video-animation',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Real-Time Expression Avatar Streamers',
    description:
      'AI tracking a streamer\'s facial expressions in real time and mirroring them onto a custom 3D avatar for live broadcast.',
    order: 7,
  },
  {
    id: 'app-f-vid-anim-physics-tuner',
    parentId: 'app-creative-video-animation',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cloth & Physics Simulation Tuners',
    description:
      'AI configuring physics engine parameters so that cloth, hair, and fluid simulations behave convincingly in animated scenes.',
    order: 8,
  },

  // ── NICHE: Fiction & Narrative (app-creative-writing-fiction) ───────────────
  {
    id: 'app-f-writ-fic-plot-analyzer',
    parentId: 'app-creative-writing-fiction',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Plot Structure Analyzers',
    description:
      'AI identifying pacing problems, act imbalances, and structural weaknesses across a full manuscript draft.',
    order: 1,
  },
  {
    id: 'app-f-writ-fic-continuity',
    parentId: 'app-creative-writing-fiction',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Character Continuity Lore Guards',
    description:
      'AI maintaining a persistent memory of character details, traits, and relationships across hundreds of pages to prevent contradictions.',
    order: 2,
  },
  {
    id: 'app-f-writ-fic-voice-ghost',
    parentId: 'app-creative-writing-fiction',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Author Voice Ghost-Writers',
    description:
      'AI that analyzes an author\'s existing prose and generates new chapters that match their distinctive style and vocabulary.',
    order: 3,
  },
  {
    id: 'app-f-writ-fic-branching',
    parentId: 'app-creative-writing-fiction',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Branching Interactive Fiction Engines',
    description:
      'AI building non-linear narratives where each player\'s choices generate unique story paths and outcomes.',
    order: 4,
  },
  {
    id: 'app-f-writ-fic-genre-buddy',
    parentId: 'app-creative-writing-fiction',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Genre Writing Buddies',
    description:
      'AI specialized in the narrative conventions, tropes, and pacing rules of specific genres such as thriller, romance, or horror.',
    order: 5,
  },
  {
    id: 'app-f-writ-fic-sensitivity',
    parentId: 'app-creative-writing-fiction',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Sensitivity & Trope Reviewers',
    description:
      'AI flagging harmful stereotypes, offensive tropes, and cultural misrepresentations in fiction manuscripts before publication.',
    order: 6,
  },
  {
    id: 'app-f-writ-fic-worldbuild',
    parentId: 'app-creative-writing-fiction',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Worldbuilding Wiki Generators',
    description:
      'AI extracting lore, geography, factions, and history from a novel draft to generate a structured reference wiki.',
    order: 7,
  },
  {
    id: 'app-f-writ-fic-collab-studio',
    parentId: 'app-creative-writing-fiction',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Collaborative Writing Studios',
    description:
      'AI-mediated platforms allowing multiple authors to co-write within a shared universe while enforcing consistent facts and continuity.',
    order: 8,
  },

  // ── NICHE: Screenwriting & Scripts (app-creative-writing-screenwriting) ──────
  {
    id: 'app-f-writ-scr-scene-desc',
    parentId: 'app-creative-writing-screenwriting',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Scene Description Assistants',
    description:
      'AI helping screenwriters craft visually evocative action lines that translate clearly to a director\'s shot list.',
    order: 1,
  },
  {
    id: 'app-f-writ-scr-punchup',
    parentId: 'app-creative-writing-screenwriting',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Dialogue Punch-Up Tools',
    description:
      'AI sharpening comedic timing, wit, and subtext in dialogue lines based on the scene\'s tone and character voice.',
    order: 2,
  },
  {
    id: 'app-f-writ-scr-coverage',
    parentId: 'app-creative-writing-screenwriting',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Script Coverage Generators',
    description:
      'AI reading a full screenplay and producing executive-ready coverage reports including logline, synopsis, and marketability assessment.',
    order: 3,
  },
  {
    id: 'app-f-writ-scr-tv-bible',
    parentId: 'app-creative-writing-screenwriting',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'TV Show Bible Planners',
    description:
      'AI tracking character arcs, seasonal themes, and story logic across multi-season television series planning documents.',
    order: 4,
  },
  {
    id: 'app-f-writ-scr-logline',
    parentId: 'app-creative-writing-screenwriting',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Logline & Pitch Generators',
    description:
      'AI distilling a feature-length screenplay into a one-sentence logline and a polished pitch document for industry submissions.',
    order: 5,
  },
  {
    id: 'app-f-writ-scr-shot-list',
    parentId: 'app-creative-writing-screenwriting',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Script-to-Shot List Automators',
    description:
      'AI breaking down each scene into a detailed shot list specifying camera angles, movements, and coverage requirements.',
    order: 6,
  },
  {
    id: 'app-f-writ-scr-budget',
    parentId: 'app-creative-writing-screenwriting',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Scene Breakdown Budgeters',
    description:
      'AI estimating production costs for specific scenes based on location, cast, stunts, and effects requirements.',
    order: 7,
  },
  {
    id: 'app-f-writ-scr-rhythm',
    parentId: 'app-creative-writing-screenwriting',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Comedy Rhythm & Joke Analyzers',
    description:
      'AI analyzing a script\'s comedic structure to identify where jokes land, where they fall flat, and how to reposition them for maximum impact.',
    order: 8,
  },

  // ── NICHE: Asset Generation (app-creative-gamedev-assets) ───────────────────
  {
    id: 'app-f-game-asset-char-pipe',
    parentId: 'app-creative-gamedev-assets',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Sketch-to-3D Character Pipelines',
    description:
      'AI taking a concept sketch or description and producing a fully rigged, game-ready 3D character model.',
    order: 1,
  },
  {
    id: 'app-f-game-asset-sprite-sheet',
    parentId: 'app-creative-gamedev-assets',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Pixel Art Sprite Sheet Generators',
    description:
      'AI generating complete animation frame sets for 2D characters including walk, run, jump, and attack cycles.',
    order: 2,
  },
  {
    id: 'app-f-game-asset-auto-rig',
    parentId: 'app-creative-gamedev-assets',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Auto-Rigging Tools',
    description:
      'AI automatically adding a bone skeleton and weight painting to any 3D model, making it immediately animation-ready.',
    order: 3,
  },
  {
    id: 'app-f-game-asset-prop-gen',
    parentId: 'app-creative-gamedev-assets',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Text-to-Prop Generators',
    description:
      'AI generating textured 3D props and items — weapons, furniture, tools — ready for import into Unreal or Unity.',
    order: 4,
  },
  {
    id: 'app-f-game-asset-modular-gen',
    parentId: 'app-creative-gamedev-assets',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Modular Vehicle & Weapon Generators',
    description:
      'AI building complex objects like spaceships or firearms with interchangeable modular components for gameplay customization.',
    order: 5,
  },
  {
    id: 'app-f-game-asset-tileset',
    parentId: 'app-creative-gamedev-assets',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Environment Tileset Builders',
    description:
      'AI generating cohesive sets of floor, wall, and ceiling tiles for a specific game world aesthetic.',
    order: 6,
  },
  {
    id: 'app-f-game-asset-texture',
    parentId: 'app-creative-gamedev-assets',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'PBR Texture & Material Libraries',
    description:
      'AI generating physically based rendering texture sets that react correctly to game lighting conditions.',
    order: 7,
  },
  {
    id: 'app-f-game-asset-variants',
    parentId: 'app-creative-gamedev-assets',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Procedural Asset Variant Units',
    description:
      'AI taking a single base asset and producing dozens of unique variations with controlled randomization to populate large game worlds.',
    order: 8,
  },

  // ── NICHE: Level & World Design (app-creative-gamedev-level) ────────────────
  {
    id: 'app-f-game-lvl-encounter',
    parentId: 'app-creative-gamedev-level',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Adaptive Encounter Generators',
    description:
      'AI building unique combat encounters and challenges calibrated to a player\'s current skill level and progression state.',
    order: 1,
  },
  {
    id: 'app-f-game-lvl-biome',
    parentId: 'app-creative-gamedev-level',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Biome & Ecosystem Designers',
    description:
      'AI placing rivers, deserts, forests, and other ecosystems across large game worlds with ecological plausibility.',
    order: 2,
  },
  {
    id: 'app-f-game-lvl-puzzle',
    parentId: 'app-creative-gamedev-level',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Puzzle Difficulty Tuners',
    description:
      'AI generating logic puzzles and iteratively testing them to ensure they are challenging but solvable for the target audience.',
    order: 3,
  },
  {
    id: 'app-f-game-lvl-npc-density',
    parentId: 'app-creative-gamedev-level',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'NPC Density Optimizers',
    description:
      'AI determining optimal NPC placement and population density for towns and areas to create believable life and activity.',
    order: 4,
  },
  {
    id: 'app-f-game-lvl-narrative-world',
    parentId: 'app-creative-gamedev-level',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Narrative World Generators',
    description:
      'AI constructing cities and settlements whose architecture and layout reflect their in-game history and lore.',
    order: 5,
  },
  {
    id: 'app-f-game-lvl-economy-sim',
    parentId: 'app-creative-gamedev-level',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Game Economy Simulators',
    description:
      'AI playtesting an economy thousands of times to detect and flag overpowered items, exploits, or progression imbalances.',
    order: 6,
  },
  {
    id: 'app-f-game-lvl-quest-gen',
    parentId: 'app-creative-gamedev-level',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Dynamic Quest Generators',
    description:
      'AI creating contextually relevant side quests that reflect and respond to the player\'s choices in the main narrative.',
    order: 7,
  },
  {
    id: 'app-f-game-lvl-ambient',
    parentId: 'app-creative-gamedev-level',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Ambient Life Orchestrators',
    description:
      'AI coordinating weather patterns, wildlife behavior, and ambient sounds to make open worlds feel continuously alive.',
    order: 8,
  },

  // ── NICHE: 3D Model Generation (app-creative-3d-model-gen) ──────────────────
  {
    id: 'app-f-3d-model-product-bot',
    parentId: 'app-creative-3d-model-gen',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'AR Try-On Product 3D Bots',
    description:
      'AI converting flat product photos into accurate 3D models suitable for augmented reality try-on experiences on e-commerce sites.',
    order: 1,
  },
  {
    id: 'app-f-3d-model-nerf-recon',
    parentId: 'app-creative-3d-model-gen',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'NeRF Photo Reconstruction Models',
    description:
      'AI taking a small set of photographs and reconstructing a highly accurate 3D model with full geometry and texture.',
    order: 2,
    sources: [{ label: 'Forbes AI 50', url: 'https://www.forbes.com/lists/ai50/' }],
  },
  {
    id: 'app-f-3d-model-arch-lib',
    parentId: 'app-creative-3d-model-gen',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Architectural Element Libraries',
    description:
      'AI generating style-consistent sets of architectural components — doors, windows, columns — for use in building design workflows.',
    order: 3,
  },
  {
    id: 'app-f-3d-model-organic',
    parentId: 'app-creative-3d-model-gen',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Organic Nature Asset Generators',
    description:
      'AI building rocks, trees, and terrain features with natural imperfections that avoid the sterile look of typical procedural generation.',
    order: 4,
  },
  {
    id: 'app-f-3d-model-scan-bim',
    parentId: 'app-creative-3d-model-gen',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Scan-to-BIM Converters',
    description:
      'AI processing laser scan point clouds of physical spaces and outputting structured Building Information Models.',
    order: 5,
  },
  {
    id: 'app-f-3d-model-sculpt-copilot',
    parentId: 'app-creative-3d-model-gen',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: '3D Sculpting Copilots',
    description:
      'AI assisting digital sculptors with detail refinement, symmetry correction, and surface smoothing suggestions in real time.',
    order: 6,
  },
  {
    id: 'app-f-3d-model-mesh-optimize',
    parentId: 'app-creative-3d-model-gen',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Mobile Mesh Optimization Agents',
    description:
      'AI reducing polygon counts and texture sizes to make complex 3D models performant on mobile and WebGL platforms.',
    order: 7,
  },
  {
    id: 'app-f-3d-model-showroom',
    parentId: 'app-creative-3d-model-gen',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Virtual Showroom Builders',
    description:
      'AI generating interactive 3D gallery spaces to showcase brand products or digital art collections online.',
    order: 8,
  },

  // ── NICHE: Environment & Scene Creation (app-creative-3d-environments) ───────
  {
    id: 'app-f-3d-env-open-world',
    parentId: 'app-creative-3d-environments',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Open World Biome Builders',
    description:
      'AI generating vast outdoor environments with thousands of unique terrain features, vegetation clusters, and geological formations.',
    order: 1,
  },
  {
    id: 'app-f-3d-env-interior',
    parentId: 'app-creative-3d-environments',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Auto-Layout Interior Scene Generators',
    description:
      'AI placing furniture, decor, and lighting within a 3D room according to design principles and spatial flow.',
    order: 2,
  },
  {
    id: 'app-f-3d-env-lighting',
    parentId: 'app-creative-3d-environments',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Atmosphere & Lighting Bots',
    description:
      'AI selecting and configuring the optimal time of day, weather, and light setup to achieve the intended mood for a 3D scene.',
    order: 3,
  },
  {
    id: 'app-f-3d-env-shader-gen',
    parentId: 'app-creative-3d-environments',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Material & Shader Generators',
    description:
      'AI writing shader code and material definitions that accurately represent how surfaces like rust, water, or fabric appear under light.',
    order: 4,
  },
  {
    id: 'app-f-3d-env-city-block',
    parentId: 'app-creative-3d-environments',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Urban City Block Generators',
    description:
      'AI building complete city blocks with buildings, street furniture, vehicles, and environmental detail in a single operation.',
    order: 5,
  },
  {
    id: 'app-f-3d-env-physics',
    parentId: 'app-creative-3d-environments',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Environmental Physics Tuners',
    description:
      'AI configuring how wind, gravity, and fluid dynamics affect scene elements so environmental behavior looks physically convincing.',
    order: 6,
  },
  {
    id: 'app-f-3d-env-xr-scene',
    parentId: 'app-creative-3d-environments',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'XR Scene Generators',
    description:
      'AI building 3D environments optimized for virtual and augmented reality platforms including meeting spaces and virtual stages.',
    order: 7,
  },
  {
    id: 'app-f-3d-env-digital-twin',
    parentId: 'app-creative-3d-environments',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Live-Data Digital Twin Integration',
    description:
      'Real-time 3D models of physical environments that ingest live sensor and IoT data to reflect current real-world conditions.',
    order: 8,
  },

  // ── NICHE: Automated Video Production Pipelines (app-creative-automation-pipeline)
  {
    id: 'app-f-auto-pipe-topic-video',
    parentId: 'app-creative-automation-pipeline',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Topic-to-Video Engines',
    description:
      'AI taking a headline or topic brief and autonomously generating a full video including script, voiceover, and visuals.',
    order: 1,
    sources: [{ label: 'Product Hunt Best of 2025', url: 'https://www.producthunt.com/leaderboard/yearly/2025/all' }],
  },
  {
    id: 'app-f-auto-pipe-faceless-ch',
    parentId: 'app-creative-automation-pipeline',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Faceless Channel Automation',
    description:
      'AI running YouTube channels autonomously by sourcing trending topics, producing content, and scheduling daily posts without human input.',
    order: 2,
  },
  {
    id: 'app-f-auto-pipe-doc-tutorial',
    parentId: 'app-creative-automation-pipeline',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Documentation-to-Tutorial Generators',
    description:
      'AI converting software documentation or manuals into structured, narrated tutorial videos with screen recordings.',
    order: 3,
  },
  {
    id: 'app-f-auto-pipe-finance-viz',
    parentId: 'app-creative-automation-pipeline',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Financial Data Visualization Videos',
    description:
      'AI explaining daily market movements, earnings reports, or economic trends through automatically generated animated graphics and narration.',
    order: 4,
  },
  {
    id: 'app-f-auto-pipe-review-video',
    parentId: 'app-creative-automation-pipeline',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Product Review Video Pilots',
    description:
      'AI aggregating user reviews and product specifications to produce balanced, narrated review videos.',
    order: 5,
  },
  {
    id: 'app-f-auto-pipe-podcast-video',
    parentId: 'app-creative-automation-pipeline',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Podcast-to-Video Creators',
    description:
      'AI converting audio podcast episodes into engaging video formats with waveform visualizations, guest images, and captions.',
    order: 6,
  },
  {
    id: 'app-f-auto-pipe-channel-mgr',
    parentId: 'app-creative-automation-pipeline',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'YouTube Channel Manager Units',
    description:
      'AI handling the operational layer of a YouTube channel including optimal post scheduling, title optimization, and tag generation.',
    order: 7,
  },
  {
    id: 'app-f-auto-pipe-breaking-news',
    parentId: 'app-creative-automation-pipeline',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Breaking News Alert Video Agents',
    description:
      'AI generating short-form news summary videos within minutes of a major event breaking, for immediate distribution.',
    order: 8,
  },

  // ── NICHE: Multi-Platform Content Distribution (app-creative-automation-distribution)
  {
    id: 'app-f-auto-dist-clip-extract',
    parentId: 'app-creative-automation-distribution',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Viral Moment Clip Extractors',
    description:
      'AI identifying and cutting the highest-engagement segments from long-form videos for repurposing across short-form platforms.',
    order: 1,
  },
  {
    id: 'app-f-auto-dist-captions',
    parentId: 'app-creative-automation-distribution',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Dynamic Caption Stylers',
    description:
      'AI generating animated, platform-native captions with dynamic motion styles optimized for retention on TikTok and Reels.',
    order: 2,
  },
  {
    id: 'app-f-auto-dist-format',
    parentId: 'app-creative-automation-distribution',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Format Optimizer Tools',
    description:
      'AI intelligently reframing and cropping horizontal video content to vertical formats without losing the key subject.',
    order: 3,
  },
  {
    id: 'app-f-auto-dist-scheduler',
    parentId: 'app-creative-automation-distribution',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Cross-Platform Post Schedulers',
    description:
      'AI determining the optimal posting time for each platform based on audience activity patterns and historical engagement data.',
    order: 4,
  },
  {
    id: 'app-f-auto-dist-thumbnail',
    parentId: 'app-creative-automation-distribution',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Thumbnail A/B Auto-Pilots',
    description:
      'AI generating multiple thumbnail variants and automatically cycling through them to identify which drives the highest click-through rate.',
    order: 5,
  },
  {
    id: 'app-f-auto-dist-hashtag',
    parentId: 'app-creative-automation-distribution',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Trend-Matching Hashtag & SEO Units',
    description:
      'AI analyzing live platform trends to recommend the most effective tags and metadata for maximum content discoverability.',
    order: 6,
  },
  {
    id: 'app-f-auto-dist-geo-personal',
    parentId: 'app-creative-automation-distribution',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Geo-Aware Content Personalization Agents',
    description:
      'AI serving localized video variants to different geographic audiences, adjusting language, cultural references, and visual elements.',
    order: 7,
  },
  {
    id: 'app-f-auto-dist-community',
    parentId: 'app-creative-automation-distribution',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Community Response Assistants',
    description:
      'AI helping creators respond to high comment volumes while preserving their unique voice and maintaining authentic audience relationships.',
    order: 8,
  },

  // ── NICHE: AI Identity Creation & Consistency (app-creative-synthetic-identity)
  {
    id: 'app-f-syn-id-lora-train',
    parentId: 'app-creative-synthetic-identity',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Character LoRA Training Pipelines',
    description:
      'AI fine-tuning image models on a fixed character to ensure visual consistency across all generated content and contexts.',
    order: 1,
    sources: [{ label: 'a16z 100 Gen AI Apps (5th)', url: 'https://a16z.com/100-gen-ai-apps-5/' }],
  },
  {
    id: 'app-f-syn-id-multi-style',
    parentId: 'app-creative-synthetic-identity',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Style Character Generators',
    description:
      'AI rendering a single persona across different artistic styles — anime, photoreal, cartoon — while maintaining recognizable identity.',
    order: 2,
  },
  {
    id: 'app-f-syn-id-voice-pair',
    parentId: 'app-creative-synthetic-identity',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Mood-Aware Voice-Character Pairing Bots',
    description:
      'AI ensuring a synthetic persona\'s voice tone, pitch, and cadence consistently matches their emotional state and brand personality.',
    order: 3,
  },
  {
    id: 'app-f-syn-id-ip-protect',
    parentId: 'app-creative-synthetic-identity',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Character IP Protection Units',
    description:
      'AI continuously scanning the web and content platforms to detect unauthorized use or imitation of proprietary AI characters.',
    order: 4,
  },
  {
    id: 'app-f-syn-id-2d-to-3d',
    parentId: 'app-creative-synthetic-identity',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: '2D-to-3D Avatar Converters',
    description:
      'AI converting 2D character illustrations into fully rigged 3D avatars deployable in VR and metaverse environments.',
    order: 5,
  },
  {
    id: 'app-f-syn-id-age-progress',
    parentId: 'app-creative-synthetic-identity',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Age-Progression Character Tools',
    description:
      'AI generating plausible visual variations of a character across different life stages for narrative or marketing storytelling.',
    order: 6,
  },
  {
    id: 'app-f-syn-id-lora-market',
    parentId: 'app-creative-synthetic-identity',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Custom LoRA Marketplaces',
    description:
      'Platforms where creators can buy, sell, and license fine-tuned character style models for use in their own content generation.',
    order: 7,
  },
  {
    id: 'app-f-syn-id-brand-suite',
    parentId: 'app-creative-synthetic-identity',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Multi-Avatar Brand Identity Suites',
    description:
      'Dashboards for managing the visual identity, scheduling, and content consistency of multiple AI brand ambassadors simultaneously.',
    order: 8,
  },

  // ── NICHE: AI Influencer Management (app-creative-synthetic-management) ──────
  {
    id: 'app-f-syn-mgmt-comment-bot',
    parentId: 'app-creative-synthetic-management',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Lore-Aware Fan Comment Bots',
    description:
      'AI replying to fan comments and questions while maintaining strict in-character consistency with the persona\'s established lore.',
    order: 1,
  },
  {
    id: 'app-f-syn-mgmt-localizer',
    parentId: 'app-creative-synthetic-management',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Persona Localizers',
    description:
      'AI adapting an AI influencer\'s content, language, and cultural references for different regional audiences and languages.',
    order: 2,
  },
  {
    id: 'app-f-syn-mgmt-brand-insert',
    parentId: 'app-creative-synthetic-management',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Brand Sponsorship Insertion Agents',
    description:
      'AI seamlessly integrating sponsor products into an AI influencer\'s generated photos and videos in a contextually authentic way.',
    order: 3,
  },
  {
    id: 'app-f-syn-mgmt-benchmark',
    parentId: 'app-creative-synthetic-management',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Influence Performance Benchmarking Tools',
    description:
      'AI providing agencies with detailed engagement analytics and performance comparisons across AI personas and campaigns.',
    order: 4,
  },
  {
    id: 'app-f-syn-mgmt-policy-mon',
    parentId: 'app-creative-synthetic-management',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Platform Policy Monitors',
    description:
      'AI ensuring synthetic media content continuously complies with evolving platform policies on AI-generated and deepfake content.',
    order: 5,
    sources: [{ label: 'Product Hunt Golden Kitty', url: 'https://www.producthunt.com/newsletters/archive/9835-golden-kitty-winners' }],
  },
  {
    id: 'app-f-syn-mgmt-agency-dash',
    parentId: 'app-creative-synthetic-management',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'AI Talent Agency Dashboards',
    description:
      'Software for managing large rosters of AI personas including content scheduling, brand deal tracking, and performance reporting.',
    order: 6,
  },
  {
    id: 'app-f-syn-mgmt-auth-detect',
    parentId: 'app-creative-synthetic-management',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Audience Authenticity Detectors',
    description:
      'AI helping brands verify that an AI influencer\'s follower base consists of genuine human users rather than bot accounts.',
    order: 7,
  },
  {
    id: 'app-f-syn-mgmt-story-gen',
    parentId: 'app-creative-synthetic-management',
    layerId: 'application',
    depth: 4,
    depthLabel: 'focus',
    name: 'Influencer Daily Story Generators',
    description:
      'AI building a full day\'s worth of photos, stories, and posts to maintain consistent audience engagement for an AI persona.',
    order: 8,
  },
]
