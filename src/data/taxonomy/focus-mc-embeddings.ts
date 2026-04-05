import type { TaxonomyNode } from "../types"

export const focusMcEmbeddingsNodes: TaxonomyNode[] = [
  // ─── mc-emb-te-dense (Dense Embedding APIs) ──────────────────────────────────
  {
    id: "mc-emb-te-d-voyage4-retrieval",
    parentId: "mc-emb-te-dense",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Voyage-4 State-of-the-Art Retrieval",
    description:
      "API achieving highest accuracy on the MTEB leaderboard for complex multi-page retrieval tasks. Voyage-4 targets enterprise RAG pipelines where precision matters more than cost.",
    order: 1,
    sources: [
      {
        label: "Voyage AI Embedding Models",
        url: "https://www.voyageai.com/",
      },
    ],
  },
  {
    id: "mc-emb-te-d-cohere-1bit-compression",
    parentId: "mc-emb-te-dense",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Cohere Embed v4 with 1-Bit Compression",
    description:
      "Embeddings compressed to 1-bit or int8 for massive scale with minimal accuracy loss. This pattern dramatically reduces vector storage and memory costs for high-volume retrieval systems.",
    order: 2,
    sources: [
      {
        label: "Best Embedding Models for RAG",
        url: "https://www.openxcell.com/blog/best-embedding-models/",
      },
    ],
  },
  {
    id: "mc-emb-te-d-jina-v5-small",
    parentId: "mc-emb-te-dense",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Jina-Embeddings-v5-Text-Small",
    description:
      "Specialized nano embedding model designed for edge deployment and ultra-fast local semantic search. Enables on-device retrieval without relying on cloud inference endpoints.",
    order: 3,
    sources: [
      {
        label: "Jina Models Elasticsearch Guide",
        url: "https://www.elastic.co/search-labs/blog/jina-models-elasticsearch-guide",
      },
    ],
  },
  {
    id: "mc-emb-te-d-instruction-aware",
    parentId: "mc-emb-te-dense",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Instruction-Aware Embedding Pipelines",
    description:
      "API pattern where each query is accompanied by a natural language instruction to refine the embedding space and improve retrieval relevance. Allows a single model to serve multiple distinct retrieval tasks.",
    order: 4,
  },
  {
    id: "mc-emb-te-d-domain-legal-medical",
    parentId: "mc-emb-te-dense",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Domain-Specific Legal/Medical Embeddings",
    description:
      "Access to models like Voyage-Legal pre-trained on millions of specialized documents for high-precision retrieval within regulated industries. Outperforms general-purpose embeddings on terminology-heavy corpora.",
    order: 5,
    sources: [
      {
        label: "Best Embedding Model for RAG in 2026",
        url: "https://www.reddit.com/r/Rag/comments/1rcba6y/whats_the_best_embedding_model_for_rag_in_2026_my/",
      },
    ],
  },
  {
    id: "mc-emb-te-d-long-doc-8k",
    parentId: "mc-emb-te-dense",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "8k+ Context Long-Document Embeddings",
    description:
      "Entire 50-page documents embedded as a single vector without losing local semantic detail, eliminating the need for chunking. Simplifies RAG pipelines where document structure and continuity are critical.",
    order: 6,
  },
  {
    id: "mc-emb-te-d-binary-quantized-storage",
    parentId: "mc-emb-te-dense",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Binary and Quantized Vector Storage Optimization",
    description:
      "Developer pattern reducing vector database costs by applying the latest binary and scalar quantization techniques to dense embeddings. Enables 32x storage reduction with acceptable recall trade-offs.",
    order: 7,
    sources: [
      {
        label: "Best Embedding Models for RAG",
        url: "https://www.openxcell.com/blog/best-embedding-models/",
      },
    ],
  },
  {
    id: "mc-emb-te-d-multilingual-alignment",
    parentId: "mc-emb-te-dense",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Multilingual Semantic Alignment APIs",
    description:
      "API patterns ensuring a query in German can accurately retrieve the most relevant document written in Mandarin Chinese within a shared vector space. Critical for global enterprise knowledge bases.",
    order: 8,
    sources: [
      {
        label: "How to Choose an Embedding Model for RAG in 2026",
        url: "https://milvus.io/blog/choose-embedding-model-rag-2026.md",
      },
    ],
  },

  // ─── mc-emb-te-sparse (Sparse & Hybrid Embeddings) ───────────────────────────
  {
    id: "mc-emb-te-sp-pinecone-splade",
    parentId: "mc-emb-te-sparse",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Pinecone SPLADE Sparse Vector Indexing",
    description:
      "Using learned sparse representations to ensure exact keyword matching is combined with semantic search in a single retrieval pass. SPLADE vectors capture term importance while preserving the efficiency of inverted indexes.",
    order: 1,
    sources: [
      {
        label: "PostgreSQL as a Vector Database: pgvector vs Pinecone vs Weaviate",
        url: "https://dev.to/polliog/postgresql-as-a-vector-database-when-to-use-pgvector-vs-pinecone-vs-weaviate-4kfi",
      },
    ],
  },
  {
    id: "mc-emb-te-sp-weaviate-bm25-fusion",
    parentId: "mc-emb-te-sparse",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Weaviate Native BM25 + Vector Fusion",
    description:
      "API pattern automatically combining keyword BM25 scores and vector similarity using Reciprocal Rank Fusion (RRF) within a single query. Reduces engineering overhead compared to manually orchestrating two separate retrieval systems.",
    order: 2,
    sources: [
      {
        label: "PostgreSQL as a Vector Database: pgvector vs Pinecone vs Weaviate",
        url: "https://dev.to/polliog/postgresql-as-a-vector-database-when-to-use-pgvector-vs-pinecone-vs-weaviate-4kfi",
      },
    ],
  },
  {
    id: "mc-emb-te-sp-elasticsearch-abstraction",
    parentId: "mc-emb-te-sparse",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Elasticsearch Retriever Abstraction Layers",
    description:
      "Developer tool simplifying the logic of stacking BM25, kNN, and RRF into a single complex search query. Abstracts away the verbose Elasticsearch DSL required for advanced hybrid retrieval pipelines.",
    order: 3,
  },
  {
    id: "mc-emb-te-sp-keyword-weighted",
    parentId: "mc-emb-te-sparse",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Keyword-Weighted Sparse Representations",
    description:
      "API feature allowing developers to manually boost the importance of specific technical terms in a search query before generating sparse vectors. Essential for domains with critical acronyms or product codes.",
    order: 4,
  },
  {
    id: "mc-emb-te-sp-oov-terms",
    parentId: "mc-emb-te-sparse",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Sparse Vectors for OOV Terms",
    description:
      "Using sparse embeddings to handle brand names or product IDs not present in the base model training set. Sparse approaches guarantee exact-match recall for out-of-vocabulary tokens that dense models cannot represent.",
    order: 5,
  },
  {
    id: "mc-emb-te-sp-multi-tenant-saas",
    parentId: "mc-emb-te-sparse",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Hybrid Search for Multi-Tenant SaaS",
    description:
      "Pattern for building isolated per-customer search indexes while maintaining performance at scale using hybrid sparse-dense retrieval. Ensures data isolation and consistent latency across thousands of tenants.",
    order: 6,
    sources: [
      {
        label: "Vector Database for RAG",
        url: "https://aimultiple.com/vector-database-for-rag",
      },
    ],
  },
  {
    id: "mc-emb-te-sp-ecommerce-contextual",
    parentId: "mc-emb-te-sparse",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Contextual Sparse Encoding for E-commerce",
    description:
      "User queries like red dress are automatically expanded to include synonymous terms such as crimson in the sparse index at encoding time. Improves recall for color, style, and category synonyms without requiring manual curation.",
    order: 7,
  },
  {
    id: "mc-emb-te-sp-gpu-sparse-dense-merge",
    parentId: "mc-emb-te-sparse",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Efficient Sparse-Dense Merging on GPU",
    description:
      "Infrastructure pattern using specialized GPU kernels to perform hybrid search fusion at millisecond latencies. Enables real-time hybrid retrieval without sacrificing throughput at scale.",
    order: 8,
    sources: [
      {
        label: "PostgreSQL as a Vector Database: pgvector vs Pinecone vs Weaviate",
        url: "https://dev.to/polliog/postgresql-as-a-vector-database-when-to-use-pgvector-vs-pinecone-vs-weaviate-4kfi",
      },
    ],
  },

  // ─── mc-emb-te-mrl (Matryoshka (MRL) Embeddings) ─────────────────────────────
  {
    id: "mc-emb-te-mrl-openai-truncation",
    parentId: "mc-emb-te-mrl",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "OpenAI Text-Embedding-3-Large Truncation",
    description:
      "API pattern where a 3072-dimensional embedding is truncated to 256 dimensions to reduce storage costs with minimal accuracy loss. Made possible by Matryoshka training which ensures lower dimensions remain semantically coherent.",
    order: 1,
    sources: [
      {
        label: "How to Choose an Embedding Model for RAG in 2026",
        url: "https://milvus.io/blog/choose-embedding-model-rag-2026.md",
      },
    ],
  },
  {
    id: "mc-emb-te-mrl-voyage35-adaptive",
    parentId: "mc-emb-te-mrl",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Voyage-3.5-MRL for Adaptive Precision",
    description:
      "Embeddings allowing coarse-to-fine search using 128 dimensions for initial candidate filtering and 1024 dimensions for final ranking. Delivers full-precision accuracy at a fraction of the compute cost.",
    order: 2,
    sources: [
      {
        label: "Voyage AI Embedding Models",
        url: "https://www.voyageai.com/",
      },
    ],
  },
  {
    id: "mc-emb-te-mrl-jina-v4-flexibility",
    parentId: "mc-emb-te-mrl",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Jina-Embeddings-v4-MRL Flexibility",
    description:
      "API letting developers choose any output dimension from 2048 down to 64 at query time without reindexing. Enables cost and latency tuning without infrastructure changes.",
    order: 3,
    sources: [
      {
        label: "Jina Models Elasticsearch Guide",
        url: "https://www.elastic.co/search-labs/blog/jina-models-elasticsearch-guide",
      },
    ],
  },
  {
    id: "mc-emb-te-mrl-storage-optimized-db",
    parentId: "mc-emb-te-mrl",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Storage-Optimized Vector Database Design",
    description:
      "Vector database pattern storing only the first 128 dimensions in memory while keeping the full vector on disk for reranking. Reduces RAM requirements dramatically while preserving final-stage retrieval quality.",
    order: 4,
  },
  {
    id: "mc-emb-te-mrl-mobile-on-device",
    parentId: "mc-emb-te-mrl",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "MRL for Mobile On-Device Search",
    description:
      "Using the smallest truncated dimensions of a Matryoshka model to enable semantic search directly on smartphones. Avoids cloud round-trips for privacy-sensitive or offline search scenarios.",
    order: 5,
  },
  {
    id: "mc-emb-te-mrl-dimension-agnostic-rerank",
    parentId: "mc-emb-te-mrl",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Dimension-Agnostic Reranking Pipelines",
    description:
      "Developer workflow where the retrieval model and the reranking model can operate on different vector dimensions without compatibility constraints. MRL embeddings make it safe to mix retrieval at 256 dims with reranking at 1024.",
    order: 6,
  },
  {
    id: "mc-emb-te-mrl-dynamic-dimension-scaling",
    parentId: "mc-emb-te-mrl",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Dynamic Dimension Scaling based on Complexity",
    description:
      "Routing simple queries to a 64-dimensional search index and complex analytical queries to a 2048-dimensional index at runtime. Optimizes cost and latency proportionally to query difficulty.",
    order: 7,
  },
  {
    id: "mc-emb-te-mrl-hierarchical-billions",
    parentId: "mc-emb-te-mrl",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Hierarchical Indexing for Billions of Vectors",
    description:
      "Using 32-dimensional MRL sketches to perform lightning-fast initial candidate selection before full-resolution scoring at scale. Enables ANN search across billion-vector collections with sub-100ms latency.",
    order: 8,
  },

  // ─── mc-emb-mm-clip-style (Cross-Modal Retrieval) ────────────────────────────
  {
    id: "mc-emb-mm-cr-gemini2-unified",
    parentId: "mc-emb-mm-clip-style",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Gemini Embedding 2 Unified Modality Space",
    description:
      "Single API endpoint mapping text, image, video, and audio into one shared vector space for cross-modal retrieval. Eliminates the need for separate embedding pipelines per modality.",
    order: 1,
  },
  {
    id: "mc-emb-mm-cr-jina-clip-v2-text-image",
    parentId: "mc-emb-mm-clip-style",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Jina CLIP v2 Text-to-Image Search",
    description:
      "Infrastructure pattern for building visual product discovery where users search using natural language to find relevant images. Enables e-commerce and media catalog search without manual image tagging.",
    order: 2,
    sources: [
      {
        label: "Jina Models Elasticsearch Guide",
        url: "https://www.elastic.co/search-labs/blog/jina-models-elasticsearch-guide",
      },
    ],
  },
  {
    id: "mc-emb-mm-cr-openai-clip-v3-zeroshot",
    parentId: "mc-emb-mm-clip-style",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "OpenAI CLIP v3 Zero-Shot Classification",
    description:
      "Using multimodal embeddings to categorize millions of images into custom taxonomies without any labeled training data. Reduces image annotation costs while maintaining competitive classification accuracy.",
    order: 3,
  },
  {
    id: "mc-emb-mm-cr-nomic-embed-vision-v2",
    parentId: "mc-emb-mm-clip-style",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Nomic Embed-Vision-V2 Open-Weights API",
    description:
      "Accessing high-performance multimodal embeddings with open commercial licensing for on-premise search deployments. Enables organizations with strict data residency requirements to run CLIP-style retrieval without vendor lock-in.",
    order: 4,
  },
  {
    id: "mc-emb-mm-cr-cross-modal-recommendation",
    parentId: "mc-emb-mm-clip-style",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Cross-Modal Recommendation Engines",
    description:
      "Pattern where a user browsing history of text articles is used to recommend related videos via shared cross-modal embeddings. Enables a unified recommendation signal across heterogeneous content types.",
    order: 5,
  },
  {
    id: "mc-emb-mm-cr-image-to-text-reverse",
    parentId: "mc-emb-mm-clip-style",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Image-to-Text Reverse Search for Designers",
    description:
      "Finding all text-based design guidelines and documentation that semantically match a specific visual reference image. Bridges the gap between design artifacts and written specifications in creative workflows.",
    order: 6,
  },
  {
    id: "mc-emb-mm-cr-modality-gap-mitigation",
    parentId: "mc-emb-mm-clip-style",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Modality-Gap Mitigation Techniques",
    description:
      "API patterns using learned bridges to ensure text and image embeddings are correctly aligned in the shared vector space. Addresses the well-known modality gap problem that causes CLIP-style models to cluster by type rather than semantics.",
    order: 7,
    sources: [
      {
        label: "How to Choose an Embedding Model for RAG in 2026",
        url: "https://milvus.io/blog/choose-embedding-model-rag-2026.md",
      },
    ],
  },
  {
    id: "mc-emb-mm-cr-industrial-qc",
    parentId: "mc-emb-mm-clip-style",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Multimodal Search for Industrial QC",
    description:
      "Using CLIP-style models to find previous instances of visual defects that match a live camera feed on a manufacturing line. Enables instant retrieval of historical repair logs and defect classifications for quality control workflows.",
    order: 8,
  },

  // ─── mc-emb-multimodal-video (Video & Audio Embeddings) ──────────────────────
  {
    id: "mc-emb-mm-va-twelve-labs-unified",
    parentId: "mc-emb-multimodal-video",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Twelve Labs Embed API for Unified Video Vectors",
    description:
      "Generating vectors that capture visual, audio, and speech content in a single unified representation per video segment. Enables semantic search across all modalities of a video without separate audio and visual pipelines.",
    order: 1,
  },
  {
    id: "mc-emb-mm-va-aws-titan-multimodal",
    parentId: "mc-emb-multimodal-video",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "AWS Bedrock Titan Multimodal Embeddings",
    description:
      "Enterprise-grade API for embedding images and short video clips for marketing asset management within the AWS ecosystem. Provides a managed, scalable solution for organizations already standardized on AWS infrastructure.",
    order: 2,
  },
  {
    id: "mc-emb-mm-va-audio-video-semantic",
    parentId: "mc-emb-multimodal-video",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Audio-to-Video Semantic Matching",
    description:
      "Finding the perfect video B-roll to match the emotional tone and content of a podcast segment using cross-modal embeddings. Automates the most time-consuming step in video production workflows.",
    order: 3,
  },
  {
    id: "mc-emb-mm-va-joint-av-security",
    parentId: "mc-emb-multimodal-video",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Joint Audio-Visual Embedding for Security",
    description:
      "API for identifying events where both a specific sound and a matching visual movement occur simultaneously in a video stream. Enables high-confidence anomaly detection that single-modality approaches cannot achieve.",
    order: 4,
  },
  {
    id: "mc-emb-mm-va-proprietary-library-search",
    parentId: "mc-emb-multimodal-video",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Semantic Search over Proprietary Video Libraries",
    description:
      "Infrastructure for media companies to index decades of video content and enable instant semantic retrieval by natural language query. Unlocks the value of large unlabeled archives without manual metadata tagging.",
    order: 5,
  },
  {
    id: "mc-emb-mm-va-scene-chunk-embedding",
    parentId: "mc-emb-multimodal-video",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Fine-Grained Video Scene Embedding",
    description:
      "API providing a distinct vector for every 5-second chunk of video to enable granular temporal search within long recordings. Allows users to locate specific moments rather than just relevant videos.",
    order: 6,
  },
  {
    id: "mc-emb-mm-va-audio-mood-tempo",
    parentId: "mc-emb-multimodal-video",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Audio Mood and Tempo Embedding",
    description:
      "Specialized API for music libraries allowing search by emotional state or technical musical characteristics such as BPM and key. Enables mood-based playlist generation and sync licensing workflows.",
    order: 7,
  },
  {
    id: "mc-emb-mm-va-multimodal-benchmarking",
    parentId: "mc-emb-multimodal-video",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Multimodal Embedding Benchmarking",
    description:
      "Developer tool for evaluating how well different multimodal embedding APIs perform on domain-specific video and audio data before committing to a provider. Provides standardized metrics for recall, latency, and cost trade-offs.",
    order: 8,
    sources: [
      {
        label: "How to Choose an Embedding Model for RAG in 2026",
        url: "https://milvus.io/blog/choose-embedding-model-rag-2026.md",
      },
    ],
  },

  // ─── mc-emb-rer-cross-encoder (Cross-Encoder Reranking APIs) ─────────────────
  {
    id: "mc-emb-rer-cohere-rerank-v35",
    parentId: "mc-emb-rer-cross-encoder",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Cohere Rerank v3.5 with 128k Context",
    description:
      "API re-ordering search results by passing both the query and full document text into a massive cross-encoder with 128k context. Enables reranking of lengthy technical documents without chunking or truncation.",
    order: 1,
    sources: [
      {
        label: "Jina Models Elasticsearch Guide",
        url: "https://www.elastic.co/search-labs/blog/jina-models-elasticsearch-guide",
      },
    ],
  },
  {
    id: "mc-emb-rer-jina-reranker-v3-multilingual",
    parentId: "mc-emb-rer-cross-encoder",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Jina Reranker v3 Multilingual Specialist",
    description:
      "High-precision reranking API for global businesses where queries and documents may be in different languages. Outperforms monolingual rerankers on cross-lingual retrieval benchmarks.",
    order: 2,
    sources: [
      {
        label: "Jina Models Elasticsearch Guide",
        url: "https://www.elastic.co/search-labs/blog/jina-models-elasticsearch-guide",
      },
    ],
  },
  {
    id: "mc-emb-rer-voyage-rerank-25-lite",
    parentId: "mc-emb-rer-cross-encoder",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Voyage-Rerank-2.5-Lite for Cost-Efficiency",
    description:
      "API providing state-of-the-art reranking precision for smaller RAG systems without the latency overhead of full-size cross-encoders. Targets startups and cost-sensitive pipelines that cannot afford Cohere-class inference costs.",
    order: 3,
    sources: [
      {
        label: "Voyage AI Embedding Models",
        url: "https://www.voyageai.com/",
      },
    ],
  },
  {
    id: "mc-emb-rer-reranking-as-proxy",
    parentId: "mc-emb-rer-cross-encoder",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Reranking-as-a-Proxy",
    description:
      "Infrastructure pattern where a reranker sits in front of a legacy keyword search engine to provide modern AI-level relevance without replacing the existing index. Extends the lifespan of traditional search infrastructure.",
    order: 4,
  },
  {
    id: "mc-emb-rer-instruction-follower",
    parentId: "mc-emb-rer-cross-encoder",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Instruction-Follower Rerankers",
    description:
      "Reranking models that reorder results according to specific user-provided criteria, such as rank these by technical depth or prioritize recent publications. Enables personalized result ordering without custom model training.",
    order: 5,
    sources: [
      {
        label: "Voyage AI Embedding Models",
        url: "https://www.voyageai.com/",
      },
    ],
  },
  {
    id: "mc-emb-rer-function-selection",
    parentId: "mc-emb-rer-cross-encoder",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Cross-Encoder for Function-Selection",
    description:
      "Specialized reranking pattern for AI agents that must select the best tool from a catalog of 100 or more candidates. Cross-encoders dramatically outperform embedding similarity on tool-selection accuracy.",
    order: 6,
    sources: [
      {
        label: "Jina Models Elasticsearch Guide",
        url: "https://www.elastic.co/search-labs/blog/jina-models-elasticsearch-guide",
      },
    ],
  },
  {
    id: "mc-emb-rer-long-horizon-planning",
    parentId: "mc-emb-rer-cross-encoder",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Reranking for Long-Horizon Planning",
    description:
      "Agent generates 50 possible next action steps and uses a cross-encoder to select the single best one before execution. Improves plan quality in agentic systems by applying high-precision scoring at decision points.",
    order: 7,
  },
  {
    id: "mc-emb-rer-llm-as-reranker",
    parentId: "mc-emb-rer-cross-encoder",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "LLM-as-Reranker Zero-Shot Patterns",
    description:
      "Using expensive frontier language models as a final sanity-check reranker for the top 5 retrieved results. Maximizes end-to-end retrieval precision for high-stakes applications where cost is secondary to accuracy.",
    order: 8,
  },

  // ─── mc-emb-li-colbert (ColBERT-Style Late Interaction) ──────────────────────
  {
    id: "mc-emb-li-cb-jina-colbert-v2",
    parentId: "mc-emb-li-colbert",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Jina-ColBERT-v2 Multilingual Retrieval",
    description:
      "API storing one 128-dimensional vector per token to enable multi-faceted token-level matching across languages. Captures nuanced multi-aspect relevance that single-vector dense models cannot express.",
    order: 1,
    sources: [
      {
        label: "Jina Models Elasticsearch Guide",
        url: "https://www.elastic.co/search-labs/blog/jina-models-elasticsearch-guide",
      },
    ],
  },
  {
    id: "mc-emb-li-cb-ragatouille-library",
    parentId: "mc-emb-li-colbert",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "RAGatouille Library for ColBERT Simplification",
    description:
      "Developer framework making it easy to index and query ColBERT models with a simple Python interface, removing low-level PLAID index management. Dramatically reduces the engineering effort to adopt late interaction retrieval.",
    order: 2,
    sources: [
      {
        label: "PLAID: An Efficient Engine for Late Interaction Retrieval",
        url: "https://arxiv.org/html/2407.01449v4",
      },
    ],
  },
  {
    id: "mc-emb-li-cb-vespa-enterprise-scale",
    parentId: "mc-emb-li-colbert",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Vespa Multi-Vector Search for Enterprise Scale",
    description:
      "Infrastructure for running ColBERT-style retrieval at the scale of billions of tokens with low-latency MaxSim operators. Vespa natively supports multi-vector documents, making it the leading open platform for late interaction at scale.",
    order: 3,
  },
  {
    id: "mc-emb-li-cb-multi-hop-qa",
    parentId: "mc-emb-li-colbert",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Late Interaction for Multi-Hop QA",
    description:
      "Pattern where a ColBERT model simultaneously matches against disparate parts of a long document to answer a single complex multi-hop question. Outperforms single-vector retrieval on tasks requiring evidence from multiple sections.",
    order: 4,
  },
  {
    id: "mc-emb-li-cb-code-search",
    parentId: "mc-emb-li-colbert",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "ColBERT for Domain-Specific Code Search",
    description:
      "Token-level late interaction used to find specific variable usages, function signatures, or API patterns across a large codebase. Handles the multi-keyword nature of code queries better than dense retrieval alone.",
    order: 5,
  },
  {
    id: "mc-emb-li-cb-asymmetric-retrieval",
    parentId: "mc-emb-li-colbert",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Asymmetric Late Interaction Retrieval",
    description:
      "Training the query encoder to be more expressive than the document encoder to improve retrieval precision while keeping indexing costs low. Enables richer query representations without increasing the document index size.",
    order: 6,
  },
  {
    id: "mc-emb-li-cb-storage-optimized-multivec",
    parentId: "mc-emb-li-colbert",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Storage-Optimized Multi-Vector Indexes",
    description:
      "Using residual quantization to reduce the massive storage footprint of ColBERT multi-vectors by up to 10x. Makes late interaction retrieval economically viable for organizations with billion-token corpora.",
    order: 7,
  },
  {
    id: "mc-emb-li-cb-cross-lingual-knowledge",
    parentId: "mc-emb-li-colbert",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Late Interaction for Cross-Lingual Knowledge",
    description:
      "Matching English queries against the fine-grained token structure of Mandarin documents using multilingual ColBERT representations. Token-level alignment provides more accurate cross-lingual retrieval than single-vector methods.",
    order: 8,
  },

  // ─── mc-emb-li-colpali (ColPali Multimodal Late Interaction) ─────────────────
  {
    id: "mc-emb-li-cp-colpali-visual-doc",
    parentId: "mc-emb-li-colpali",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "ColPali Visual Document Retrieval",
    description:
      "API pattern embedding document pages as images, completely bypassing OCR to preserve layout, charts, and visual structure. Achieves state-of-the-art retrieval on visually rich documents where text extraction fails.",
    order: 1,
    sources: [
      {
        label: "VisionRAG with ColPali",
        url: "https://github.com/yYorky/VisionRAG",
      },
    ],
  },
  {
    id: "mc-emb-li-cp-byaldi-wrapper",
    parentId: "mc-emb-li-colpali",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Byaldi Wrapper for ColPali Integration",
    description:
      "Developer tool providing a RAG-like interface for indexing entire PDF libraries via vision-based late interaction without low-level model management. Reduces ColPali adoption from weeks of engineering to a few lines of Python.",
    order: 2,
    sources: [
      {
        label: "VisionRAG with ColPali",
        url: "https://github.com/yYorky/VisionRAG",
      },
    ],
  },
  {
    id: "mc-emb-li-cp-patch-embeddings-pdf",
    parentId: "mc-emb-li-colpali",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Multi-Vector Patch Embeddings for PDF Search",
    description:
      "Each 32x32 pixel patch of a document page is stored as an individual vector, enabling fine-grained visual matching at sub-region granularity. Allows queries to match against specific charts or table cells within a page.",
    order: 3,
    sources: [
      {
        label: "Beyond Text: Building Intelligent Document Agents with VLMs and ColPali",
        url: "https://dev.to/aws/beyond-text-building-intelligent-document-agents-with-vision-language-models-and-colpali-and-oc",
      },
    ],
  },
  {
    id: "mc-emb-li-cp-visual-table-chart-query",
    parentId: "mc-emb-li-colpali",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Visual Table and Chart Querying",
    description:
      "API pattern allowing users to ask natural language questions about a graph or data table without converting it to text first. Preserves the spatial and visual encoding of information that OCR-based pipelines lose.",
    order: 4,
    sources: [
      {
        label: "Beyond Text: Building Intelligent Document Agents with VLMs and ColPali",
        url: "https://dev.to/aws/beyond-text-building-intelligent-document-agents-with-vision-language-models-and-colpali-and-oc",
      },
    ],
  },
  {
    id: "mc-emb-li-cp-financial-10k-analysis",
    parentId: "mc-emb-li-colpali",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "ColPali for Financial 10-K Analysis",
    description:
      "Workflow for parsing complex financial reports where traditional OCR-based RAG typically fails due to multi-column layouts, footnotes, and embedded charts. Enables accurate retrieval from SEC filings and annual reports.",
    order: 5,
    sources: [
      {
        label: "VisionRAG with ColPali",
        url: "https://github.com/yYorky/VisionRAG",
      },
    ],
  },
  {
    id: "mc-emb-li-cp-attention-map-explainability",
    parentId: "mc-emb-li-colpali",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Attention-Map Explainability for Visual Search",
    description:
      "API returning a visual heatmap showing exactly which region of a document page contributed most to matching the query. Provides interpretable retrieval results essential for auditable enterprise workflows.",
    order: 6,
    sources: [
      {
        label: "VisionRAG with ColPali",
        url: "https://github.com/yYorky/VisionRAG",
      },
    ],
  },
  {
    id: "mc-emb-li-cp-quantized-edge-cloud",
    parentId: "mc-emb-li-colpali",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "Quantized ColPali for Edge-Cloud Search",
    description:
      "Document page patches stored at low precision on an edge device for fast initial candidate selection before cloud-side full-resolution reranking. Enables responsive document search in low-bandwidth environments.",
    order: 7,
    sources: [
      {
        label: "VisionRAG with ColPali",
        url: "https://github.com/yYorky/VisionRAG",
      },
    ],
  },
  {
    id: "mc-emb-li-cp-vidore-benchmark",
    parentId: "mc-emb-li-colpali",
    layerId: "model-consumption",
    depth: 4,
    depthLabel: "focus",
    name: "ViDoRe Benchmark for Visual Retrieval",
    description:
      "Developer tool for testing and scoring different ColPali-based systems on visually rich document retrieval datasets. Provides a standardized leaderboard for comparing visual document retrieval systems across document types.",
    order: 8,
    sources: [
      {
        label: "ViDoRe: The Visual Document Retrieval Benchmark",
        url: "https://openreview.net/forum?id=ogjBpZ8uSi",
      },
    ],
  },
]
