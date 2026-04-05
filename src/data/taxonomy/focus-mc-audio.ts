import type { TaxonomyNode } from "../types"

export const focusMcAudioNodes: TaxonomyNode[] = [
  // ─── mc-as-stt-real-time (Real-Time Transcription) ───────────────────────────
  {
    id: "mc-as-stt-rt-deepgram-nova3",
    parentId: "mc-as-stt-real-time",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Deepgram Nova-3 Sub-300ms Streaming",
    description:
      "API optimized for conversational AI with near-instantaneous transcription and word-level timestamps.",
    order: 1,
    sources: [
      {
        label: "Gladia: AssemblyAI vs Deepgram",
        url: "https://www.gladia.io/blog/assemblyai-vs-deepgram",
      },
    ],
  },
  {
    id: "mc-as-stt-rt-assemblyai-u3-pro",
    parentId: "mc-as-stt-real-time",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "AssemblyAI Universal-3 Pro Streaming",
    description:
      "High-accuracy real-time transcription handling complex multi-speaker diarization and sentiment analysis as a stream.",
    order: 2,
    sources: [
      {
        label: "Gladia: AssemblyAI vs Deepgram",
        url: "https://www.gladia.io/blog/assemblyai-vs-deepgram",
      },
    ],
  },
  {
    id: "mc-as-stt-rt-medical-scribes",
    parentId: "mc-as-stt-real-time",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Real-Time Medical Transcription for Scribes",
    description:
      "Specialized API pattern tuned for pharmaceutical names and clinical shorthand during live consultations.",
    order: 3,
    sources: [
      {
        label: "Deepgram: AssemblyAI vs Deepgram",
        url: "https://deepgram.com/learn/assemblyai-vs-deepgram",
      },
    ],
  },
  {
    id: "mc-as-stt-rt-multilingual-code-switch",
    parentId: "mc-as-stt-real-time",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Multilingual Real-Time Code-Switching",
    description:
      "API transcribing a speaker who switches between English and Spanish mid-sentence without losing accuracy.",
    order: 4,
    sources: [
      {
        label: "Gladia: AssemblyAI vs Deepgram",
        url: "https://www.gladia.io/blog/assemblyai-vs-deepgram",
      },
    ],
  },
  {
    id: "mc-as-stt-rt-barge-in-vad",
    parentId: "mc-as-stt-real-time",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Barge-In Detection via VAD",
    description:
      "Low-latency voice activity detection pattern telling a voice agent exactly when the user has started speaking over it.",
    order: 5,
    sources: [
      {
        label: "Portkey: AI Gateway Solutions",
        url: "https://portkey.ai/buyers-guide/ai-gateway-solutions",
      },
    ],
  },
  {
    id: "mc-as-stt-rt-custom-vocab-injection",
    parentId: "mc-as-stt-real-time",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Custom Vocabulary Injection for Real-Time STT",
    description:
      "API feature allowing hot-swapping of technical terms to improve accuracy without retraining the model.",
    order: 6,
    sources: [
      {
        label: "Deepgram: AssemblyAI vs Deepgram",
        url: "https://deepgram.com/learn/assemblyai-vs-deepgram",
      },
    ],
  },
  {
    id: "mc-as-stt-rt-live-captioning-broadcast",
    parentId: "mc-as-stt-real-time",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Low-Latency Live Captioning for Broadcasting",
    description:
      "Infrastructure pattern providing sub-second captions for live news with high accuracy.",
    order: 7,
    sources: [
      {
        label: "Index.dev: Whisper vs AssemblyAI vs Deepgram",
        url: "https://www.index.dev/skill-vs-skill/ai-whisper-vs-assemblyai-vs-deepgram",
      },
    ],
  },
  {
    id: "mc-as-stt-rt-speaker-attribution-live",
    parentId: "mc-as-stt-real-time",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Speaker Attribution for Live Meeting Transcripts",
    description:
      "Identifying who said what in a live video call using audio and visual cues in real-time.",
    order: 8,
  },

  // ─── mc-as-stt-batch (Batch Transcription) ───────────────────────────────────
  {
    id: "mc-as-stt-bt-lemur-intelligence",
    parentId: "mc-as-stt-batch",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "AssemblyAI LeMUR Audio Intelligence",
    description:
      "API pattern applying LLMs directly to 10-hour audio batches for summarization and insight extraction.",
    order: 1,
    sources: [
      {
        label: "Gladia: AssemblyAI vs Deepgram",
        url: "https://www.gladia.io/blog/assemblyai-vs-deepgram",
      },
    ],
  },
  {
    id: "mc-as-stt-bt-deepgram-120x",
    parentId: "mc-as-stt-batch",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Deepgram 120x Real-Time Batch Processing",
    description:
      "High-throughput transcription for massive media archives, processing an hour of audio in 30 seconds.",
    order: 2,
    sources: [
      {
        label: "Gladia: AssemblyAI vs Deepgram",
        url: "https://www.gladia.io/blog/assemblyai-vs-deepgram",
      },
    ],
  },
  {
    id: "mc-as-stt-bt-pii-redaction-calls",
    parentId: "mc-as-stt-batch",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Bulk PII Redaction for Call Compliance",
    description:
      "Workflow automatically identifying and muting credit card numbers in millions of call recordings for compliance.",
    order: 3,
    sources: [
      {
        label: "AssemblyAI: Best Speech-to-Text APIs",
        url: "https://www.assemblyai.com/blog/best-speech-to-text-apis-startups",
      },
    ],
  },
  {
    id: "mc-as-stt-bt-auto-chapters-keyphrase",
    parentId: "mc-as-stt-batch",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Auto-Chapters and Key-Phrase Extraction",
    description:
      "API taking a raw MP3 and returning a structured table of contents with semantic timestamps.",
    order: 4,
    sources: [
      {
        label: "AssemblyAI: Best Speech-to-Text APIs",
        url: "https://www.assemblyai.com/blog/best-speech-to-text-apis-startups",
      },
    ],
  },
  {
    id: "mc-as-stt-bt-tone-emotion-metadata",
    parentId: "mc-as-stt-batch",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Transcription with Tone & Emotion Metadata",
    description:
      "Output includes emotional tags like excited or frustrated to provide context alongside the transcribed text.",
    order: 5,
    sources: [
      {
        label: "Gladia: AssemblyAI vs Deepgram",
        url: "https://www.gladia.io/blog/assemblyai-vs-deepgram",
      },
    ],
  },
  {
    id: "mc-as-stt-bt-legal-deposition",
    parentId: "mc-as-stt-batch",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Legal-Grade Deposition Transcription",
    description:
      "Specialized batch API ensuring high accuracy for multi-party legal proceedings with complex cross-talk.",
    order: 6,
  },
  {
    id: "mc-as-stt-bt-multilingual-dub-prep",
    parentId: "mc-as-stt-batch",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Multilingual Batch Dubbing Prep",
    description:
      "Automatically transcribing and time-aligning a video file in the source language to prepare for machine translation.",
    order: 7,
  },
  {
    id: "mc-as-stt-bt-academic-search-index",
    parentId: "mc-as-stt-batch",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Academic Research Audio Search Index",
    description:
      "Pattern transcribing thousands of hours of field interviews into a searchable vector database.",
    order: 8,
  },

  // ─── mc-as-tts-neural-voice (Neural Voice Synthesis) ─────────────────────────
  {
    id: "mc-as-tts-nv-elevenlabs-emotion",
    parentId: "mc-as-tts-neural-voice",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "ElevenLabs High-Fidelity Emotion Tags",
    description:
      "API allowing fine-grained control over vocal delivery using tags like whisper or shout for expressive synthesis.",
    order: 1,
    sources: [
      {
        label: "Gladia: AssemblyAI vs Deepgram",
        url: "https://www.gladia.io/blog/assemblyai-vs-deepgram",
      },
    ],
  },
  {
    id: "mc-as-tts-nv-openai-realtime-stream",
    parentId: "mc-as-tts-neural-voice",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "OpenAI Realtime TTS Streaming",
    description:
      "Generating expressive voice output with less than 200ms latency for interactive assistants.",
    order: 2,
    sources: [
      {
        label: "Gladia: AssemblyAI vs Deepgram",
        url: "https://www.gladia.io/blog/assemblyai-vs-deepgram",
      },
    ],
  },
  {
    id: "mc-as-tts-nv-cartesia-sonic",
    parentId: "mc-as-tts-neural-voice",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Cartesia Sonic Ultra-Fast TTS",
    description:
      "Infrastructure-optimized TTS model achieving sub-100ms latency for conversational loops.",
    order: 3,
  },
  {
    id: "mc-as-tts-nv-playht-filler",
    parentId: "mc-as-tts-neural-voice",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Play.ht Conversational Filler Generation",
    description:
      "TTS model adding um, ah, or breath sounds to make the AI sound more human during natural conversation.",
    order: 4,
  },
  {
    id: "mc-as-tts-nv-longform-audiobook",
    parentId: "mc-as-tts-neural-voice",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Long-Form Narration for Audiobooks",
    description:
      "API optimized for 10-hour sessions maintaining consistent character voices across an entire book.",
    order: 5,
  },
  {
    id: "mc-as-tts-nv-ssml-prosody",
    parentId: "mc-as-tts-neural-voice",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Dynamic Prosody Control via SSML",
    description:
      "Advanced pattern for developers to control pitch and rate at the syllable level for technical explanations.",
    order: 6,
  },
  {
    id: "mc-as-tts-nv-regional-accent",
    parentId: "mc-as-tts-neural-voice",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Regional Accent Specialist APIs",
    description:
      "Accessing a library of 100+ native regional accents for localized customer support applications.",
    order: 7,
  },
  {
    id: "mc-as-tts-nv-game-npc-voice",
    parentId: "mc-as-tts-neural-voice",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Neural Voice Design for Video Games",
    description:
      "Tool for game developers to programmatically generate unique voices for thousands of NPCs.",
    order: 8,
  },

  // ─── mc-as-tts-voice-cloning (Voice Cloning) ─────────────────────────────────
  {
    id: "mc-as-tts-vc-elevenlabs-instant",
    parentId: "mc-as-tts-voice-cloning",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "ElevenLabs Instant 1-Minute Voice Cloning",
    description:
      "API creating a high-quality vocal clone from a 60-second audio sample for personalized messaging.",
    order: 1,
    sources: [
      {
        label: "Gladia: AssemblyAI vs Deepgram",
        url: "https://www.gladia.io/blog/assemblyai-vs-deepgram",
      },
    ],
  },
  {
    id: "mc-as-tts-vc-professional-actor",
    parentId: "mc-as-tts-voice-cloning",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Professional Voice Cloning (PVC) for Actors",
    description:
      "High-fidelity cloning requiring 30+ minutes of audio and explicit legal consent for commercial use.",
    order: 2,
  },
  {
    id: "mc-as-tts-vc-identity-translation",
    parentId: "mc-as-tts-voice-cloning",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Voice Identity Preservation for Translation",
    description:
      "Cloned voices speaking 29+ languages while maintaining the original speaker's timbre and character.",
    order: 3,
    sources: [
      {
        label: "Gladia: AssemblyAI vs Deepgram",
        url: "https://www.gladia.io/blog/assemblyai-vs-deepgram",
      },
    ],
  },
  {
    id: "mc-as-tts-vc-legacy-reconstruction",
    parentId: "mc-as-tts-voice-cloning",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Legacy Voice Reconstruction for Estates",
    description:
      "Ethical API pattern for recreating voices of deceased individuals using historical recordings.",
    order: 4,
  },
  {
    id: "mc-as-tts-vc-dynamic-brand-voice",
    parentId: "mc-as-tts-voice-cloning",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Dynamic Brand Voice APIs",
    description:
      "Infrastructure where a company owns a custom vocal clone for all customer-facing AI interactions.",
    order: 5,
  },
  {
    id: "mc-as-tts-vc-creator-morph",
    parentId: "mc-as-tts-voice-cloning",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Voice Morphing for Content Creators",
    description:
      "API allowing a creator to reskin their own voice while maintaining a natural performance feel.",
    order: 6,
  },
  {
    id: "mc-as-tts-vc-consent-marketplace",
    parentId: "mc-as-tts-voice-cloning",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Consent-Verified Voice Licensing Marketplace",
    description:
      "Infrastructure where actors can license their vocal clones with automated royalty tracking per use.",
    order: 7,
  },
  {
    id: "mc-as-tts-vc-anti-spoofing",
    parentId: "mc-as-tts-voice-cloning",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Security-First Voice ID Anti-Spoofing",
    description:
      "API patterns designed to detect and block deepfake voices during phone-based authentication flows.",
    order: 8,
  },

  // ─── mc-as-tts-s2s (Speech-to-Speech Translation) ────────────────────────────
  {
    id: "mc-as-tts-s2s-heygen-dubbing",
    parentId: "mc-as-tts-s2s",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "HeyGen Real-Time Dubbing for Video Calls",
    description:
      "Live speech-to-speech translation with synchronized video lip-sync for international meetings.",
    order: 1,
    sources: [
      {
        label: "Gladia: AssemblyAI vs Deepgram",
        url: "https://www.gladia.io/blog/assemblyai-vs-deepgram",
      },
    ],
  },
  {
    id: "mc-as-tts-s2s-papercup-enterprise",
    parentId: "mc-as-tts-s2s",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Papercup Enterprise Dubbing API",
    description:
      "Workflow for high-volume video localization translating and dubbing content for global media platforms.",
    order: 2,
  },
  {
    id: "mc-as-tts-s2s-simultaneous-interpretation",
    parentId: "mc-as-tts-s2s",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Simultaneous Interpretation for Live Events",
    description:
      "Low-latency translation for conferences where attendees hear the native language in real-time.",
    order: 3,
  },
  {
    id: "mc-as-tts-s2s-personalized-traveler",
    parentId: "mc-as-tts-s2s",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Personalized Voice Translators for Travelers",
    description:
      "Mobile API pattern allowing a user to speak and have the translation played back in their own voice.",
    order: 4,
  },
  {
    id: "mc-as-tts-s2s-emotion-transfer",
    parentId: "mc-as-tts-s2s",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Cross-Language Emotion Transfer",
    description:
      "Ensuring urgency in an English speaker's voice is preserved when translated into Japanese speech.",
    order: 5,
  },
  {
    id: "mc-as-tts-s2s-film-revoicing",
    parentId: "mc-as-tts-s2s",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "AI-Powered Film Re-voicing",
    description:
      "Actor performance in one language perfectly mapped to a new language for international film distribution.",
    order: 6,
  },
  {
    id: "mc-as-tts-s2s-song-dubbing",
    parentId: "mc-as-tts-s2s",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Multilingual Song Dubbing with Melody Preservation",
    description:
      "API translating lyrics and re-singing them while maintaining the original singer's style and pitch.",
    order: 7,
  },
  {
    id: "mc-as-tts-s2s-context-aware-training",
    parentId: "mc-as-tts-s2s",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Context-Aware Dubbing for Training",
    description:
      "Dubbing technical manuals where specialized terms are translated with 100% precision and consistency.",
    order: 8,
  },

  // ─── mc-as-au-classification (Audio Classification & Event Detection) ─────────
  {
    id: "mc-as-au-cls-env-sound-security",
    parentId: "mc-as-au-classification",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Environmental Sound Classification for Security",
    description:
      "Detecting specific sounds like breaking glass or alarms in live security audio streams.",
    order: 1,
  },
  {
    id: "mc-as-au-cls-emotion-acoustic",
    parentId: "mc-as-au-classification",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Emotion Recognition from Acoustic Features",
    description:
      "Classifying a speaker's emotional state (stressed, calm, frustrated) from tone rather than words.",
    order: 2,
  },
  {
    id: "mc-as-au-cls-speaker-id-verification",
    parentId: "mc-as-au-classification",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Speaker Identification and Verification (SIV)",
    description:
      "Identifying who is speaking from voice biometrics to secure sensitive account access.",
    order: 3,
  },
  {
    id: "mc-as-au-cls-music-genre-mood",
    parentId: "mc-as-au-classification",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Music Genre and Mood Classification API",
    description:
      "Categorizing massive music libraries by genre, tempo, and emotional character for streaming services.",
    order: 4,
  },
  {
    id: "mc-as-au-cls-acoustic-anomaly-industry",
    parentId: "mc-as-au-classification",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Acoustic Anomaly Detection for Industry",
    description:
      "Detecting unusual machinery sounds to predict failures before they occur in a factory setting.",
    order: 5,
  },
  {
    id: "mc-as-au-cls-audioset-broad",
    parentId: "mc-as-au-classification",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Google AudioSet Broad Sound Classification",
    description:
      "APIs built on the AudioSet ontology for identifying over 500 different types of everyday sounds.",
    order: 6,
  },
  {
    id: "mc-as-au-cls-laughter-nonverbal",
    parentId: "mc-as-au-classification",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Laughter and Non-Verbal Cue Detection",
    description:
      "Identifying laughs, sighs, and hesitations to improve the conversational flow of voice agents.",
    order: 7,
  },
  {
    id: "mc-as-au-cls-urban-soundscape-safety",
    parentId: "mc-as-au-classification",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Industrial Soundscape Analysis for Public Safety",
    description:
      "Analyzing urban audio for car crashes, sirens, or crowds to assist emergency responders.",
    order: 8,
  },

  // ─── mc-as-na-glass-to-glass (Glass-to-Glass Inference) ──────────────────────
  {
    id: "mc-as-na-g2g-openai-realtime-ws",
    parentId: "mc-as-na-glass-to-glass",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "OpenAI Realtime API WebSocket Protocol",
    description:
      "Building sub-300ms latency voice-to-voice applications using stateful WebSocket connections.",
    order: 1,
    sources: [
      {
        label: "Intuition Labs: LLM API Pricing Comparison 2025",
        url: "https://intuitionlabs.ai/articles/llm-api-pricing-comparison-2025",
      },
    ],
  },
  {
    id: "mc-as-na-g2g-gemini-live-multimodal",
    parentId: "mc-as-na-glass-to-glass",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Google Gemini Live Multi-Modal Session",
    description:
      "API pattern where the model sees the user's camera and hears their voice in a single real-time stream.",
    order: 2,
    sources: [
      {
        label: "Gemini Release Notes",
        url: "https://gemini.google/release-notes/",
      },
    ],
  },
  {
    id: "mc-as-na-g2g-moshi-token-modeling",
    parentId: "mc-as-na-glass-to-glass",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Moshi Native Audio Token Modeling",
    description:
      "Models performing joint text-audio token modeling to eliminate intermediate transcription latency.",
    order: 3,
  },
  {
    id: "mc-as-na-g2g-inworld-npc",
    parentId: "mc-as-na-glass-to-glass",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Inworld Realtime NPC Audio API",
    description:
      "Low-latency audio model specifically designed for real-time interaction with non-player characters in video games.",
    order: 4,
  },
  {
    id: "mc-as-na-g2g-barge-in-support",
    parentId: "mc-as-na-glass-to-glass",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Barge-In Support for Conversational Flow",
    description:
      "Model ability to instantly stop and process new user input when interrupted mid-response.",
    order: 5,
    sources: [
      {
        label: "Portkey: AI Gateway Solutions",
        url: "https://portkey.ai/buyers-guide/ai-gateway-solutions",
      },
    ],
  },
  {
    id: "mc-as-na-g2g-turn-taking-protocol",
    parentId: "mc-as-na-glass-to-glass",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Turn-Taking Protocol Configuration",
    description:
      "Tuning VAD and silence-detection parameters to create a more natural conversational rhythm.",
    order: 6,
  },
  {
    id: "mc-as-na-g2g-full-duplex-classroom",
    parentId: "mc-as-na-glass-to-glass",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Full-Duplex Voice for Virtual Classrooms",
    description:
      "Infrastructure allowing students to talk naturally with an AI tutor with zero push-to-talk requirements.",
    order: 7,
  },
  {
    id: "mc-as-na-g2g-edge-orchestration",
    parentId: "mc-as-na-glass-to-glass",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Low-Latency Edge Orchestration for Voice",
    description:
      "Co-locating native audio models in edge data centers to minimize speed-of-light delay for voice applications.",
    order: 8,
  },

  // ─── mc-as-na-emotion-preserving (Tone & Emotion Preservation) ───────────────
  {
    id: "mc-as-na-em-paralinguistic-pipeline",
    parentId: "mc-as-na-emotion-preserving",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Paralinguistic Signal Retention Pipeline",
    description:
      "Ensuring hesitation, emphasis, and vocal fry are preserved through the entire audio processing chain.",
    order: 1,
  },
  {
    id: "mc-as-na-em-emotional-response-conditioning",
    parentId: "mc-as-na-emotion-preserving",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Emotional Response Conditioning for Agents",
    description:
      "Generating audio responses that match the emotional register (empathy, urgency) of the user's input.",
    order: 2,
  },
  {
    id: "mc-as-na-em-stress-urgency-emergency",
    parentId: "mc-as-na-emotion-preserving",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Stress and Urgency Detection for Emergency Services",
    description:
      "Responding differently to a distressed call versus a routine information request based on vocal cues.",
    order: 3,
  },
  {
    id: "mc-as-na-em-nonverbal-intent",
    parentId: "mc-as-na-emotion-preserving",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Non-Verbal Signal Interpretation as Intent",
    description:
      "Using laughs or sighs as signals to continue, stop, or clarify a response in conversation.",
    order: 4,
  },
  {
    id: "mc-as-na-em-acoustic-empathy-modeling",
    parentId: "mc-as-na-emotion-preserving",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Acoustic Empathy Modeling",
    description:
      "Adjusting model response prosody based on the detected user emotional state to build rapport.",
    order: 5,
  },
  {
    id: "mc-as-na-em-emotion-eval-benchmarks",
    parentId: "mc-as-na-emotion-preserving",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Evaluation Benchmarks for Audio Emotion",
    description:
      "Using datasets to measure how much emotional context is lost in cascaded versus native audio pipelines.",
    order: 6,
  },
  {
    id: "mc-as-na-em-vocal-fry-emphasis",
    parentId: "mc-as-na-emotion-preserving",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Vocal Fry and Emphasis Translation",
    description:
      "Ensuring speaker-specific emphasis on a word in English is correctly mapped to translated speech.",
    order: 7,
  },
  {
    id: "mc-as-na-em-tone-aware-rag",
    parentId: "mc-as-na-emotion-preserving",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Tone-Aware RAG for Voice Applications",
    description:
      "Retrieving content that matches the vibe of the user's vocal query, distinguishing informal from formal.",
    order: 8,
  },

  // ─── mc-as-mg-text-to-music (Text-to-Music Synthesis) ────────────────────────
  {
    id: "mc-as-mg-ttm-suno-v4",
    parentId: "mc-as-mg-text-to-music",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Suno v4 Full-Song Generation API",
    description:
      "API generating a 4-minute song with lyrics, vocals, and complex instrumentation from one text prompt.",
    order: 1,
    sources: [
      {
        label: "eWeek: Sora Alternatives & AI Video Tools 2026",
        url: "https://www.eweek.com/news/sora-alternatives-ai-video-tools-2026/",
      },
    ],
  },
  {
    id: "mc-as-mg-ttm-udio-daw-integration",
    parentId: "mc-as-mg-text-to-music",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Udio Professional Audio Workstation Integration",
    description:
      "Providing music generation as a plugin for professional musicians to generate inspiration tracks.",
    order: 2,
  },
  {
    id: "mc-as-mg-ttm-meta-musicgen-broll",
    parentId: "mc-as-mg-text-to-music",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Meta MusicGen for Commercial B-Roll",
    description:
      "Access to open-weight music models generating background tracks for social media ads with no royalty fees.",
    order: 3,
  },
  {
    id: "mc-as-mg-ttm-google-lyria-cinematic",
    parentId: "mc-as-mg-text-to-music",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Google Lyria for Cinematic Scoring",
    description:
      "Specialized API for generating orchestral scores that respond to the emotional beats of a provided video.",
    order: 4,
    sources: [
      {
        label: "Google Cloud AI Announcements 2025",
        url: "https://cloud.google.com/blog/products/ai-machine-learning/what-google-cloud-announced-in-ai-this-month-2025",
      },
    ],
  },
  {
    id: "mc-as-mg-ttm-hum-to-song",
    parentId: "mc-as-mg-text-to-music",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Prompting by Melody (Hum-to-Song)",
    description:
      "User hums a melody and the model generates a fully produced pop track around it.",
    order: 5,
  },
  {
    id: "mc-as-mg-ttm-brand-jingle",
    parentId: "mc-as-mg-text-to-music",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Style-Conditioned Brand Jingles",
    description:
      "API generating 5-second audio logos based on a brand's specific sonic identity guidelines.",
    order: 6,
  },
  {
    id: "mc-as-mg-ttm-ethical-licensing",
    parentId: "mc-as-mg-text-to-music",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Ethical AI Music Licensing Frameworks",
    description:
      "Models trained only on licensed data with rights-holders receiving micro-payment for every generation.",
    order: 7,
  },
  {
    id: "mc-as-mg-ttm-dynamic-game-soundtrack",
    parentId: "mc-as-mg-text-to-music",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Dynamic Soundtrack APIs for Video Games",
    description:
      "Music changing its tempo and instrumentation in real-time based on player health or proximity to enemies.",
    order: 8,
    sources: [
      {
        label: "eWeek: Sora Alternatives & AI Video Tools 2026",
        url: "https://www.eweek.com/news/sora-alternatives-ai-video-tools-2026/",
      },
    ],
  },

  // ─── mc-as-mg-stem-export (Stem Export & Scene-Aware Audio) ──────────────────
  {
    id: "mc-as-mg-se-multi-stem-gen",
    parentId: "mc-as-mg-stem-export",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Simultaneous Multi-Stem Generation",
    description:
      "API feature exporting separate high-quality WAV files for vocals, drums, and melody in a single call.",
    order: 1,
  },
  {
    id: "mc-as-mg-se-scene-aware-soundscape",
    parentId: "mc-as-mg-stem-export",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Scene-Aware Soundscape Generation",
    description:
      "Generating ambient audio that perfectly matches the visuals of an AI-generated video scene.",
    order: 2,
    sources: [
      {
        label: "eWeek: Sora Alternatives & AI Video Tools 2026",
        url: "https://www.eweek.com/news/sora-alternatives-ai-video-tools-2026/",
      },
    ],
  },
  {
    id: "mc-as-mg-se-stem-remixing",
    parentId: "mc-as-mg-stem-export",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Stem-Level Remixing APIs",
    description:
      "Tool taking an existing song and allowing a developer to swap out vocals for an AI-generated version via API.",
    order: 3,
  },
  {
    id: "mc-as-mg-se-lalal-source-separation",
    parentId: "mc-as-mg-stem-export",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Lalal.ai Professional Source Separation",
    description:
      "Using AI APIs to isolate clean vocals or specific instruments from legacy recordings.",
    order: 4,
  },
  {
    id: "mc-as-mg-se-adaptive-foley",
    parentId: "mc-as-mg-stem-export",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Adaptive Foley Generation for Film",
    description:
      "Footsteps or door creaks generated and time-aligned automatically to a video file.",
    order: 5,
  },
  {
    id: "mc-as-mg-se-spatial-audio-vr",
    parentId: "mc-as-mg-stem-export",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Dynamic 3D Spatial Audio for VR",
    description:
      "Generating audio stems pre-processed for binaural 3D placement in virtual reality environments.",
    order: 6,
  },
  {
    id: "mc-as-mg-se-music-video-sync",
    parentId: "mc-as-mg-stem-export",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Music-to-Video Synchronization APIs",
    description:
      "API analyzing a music track and providing a beat map to help video models align visual cuts with rhythm.",
    order: 7,
    sources: [
      {
        label: "eWeek: Sora Alternatives & AI Video Tools 2026",
        url: "https://www.eweek.com/news/sora-alternatives-ai-video-tools-2026/",
      },
    ],
  },
  {
    id: "mc-as-mg-se-podcast-bg-leveling",
    parentId: "mc-as-mg-stem-export",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Automated Podcast Background Music Leveling",
    description:
      "Workflow generating ambient music and automatically ducking volume whenever a speaker is talking.",
    order: 8,
  },
]
