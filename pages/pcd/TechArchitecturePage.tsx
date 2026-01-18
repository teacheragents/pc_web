import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const markdownContent = `## The Different Layers in the System

## Layer 4: The Foundation Pipelines (Planning & Preparation)
**The Challenge:** Ensuring AI content is grade-level appropriate and pedagogically sound.

**The Solution:** This layer represents the intensive planning phase where humans and AI operate as equal partners to establish "ground truth."

*   **Standards Decomposition (Concept Extraction):** Instead of ingesting raw textbooks, the team developed strategies to prompt AI to decompose complex State Standards into discrete, manageable concepts. Through iterative prompting—using specific "good and bad" examples—the AI extracts concepts which are then rigorously reviewed by human educators.
*   **Misconception Generation:** To predict where students will fail, teachers provide "seed" observations of common struggles. The AI creates a database of potential error modes (The "Error DB").
*   **Safety & Appropriateness:** By utilizing grade-level teaching materials as the source data and requiring human validation before data moves upstream, we ensure all content is aligned with curriculum standards.

## Layer 3: The Data Core (The Knowledge Engine)
This layer acts as the semantic bridge, housing the Misconceptions DB and Knowledge Graph. It distinguishes this system from generic AI tools by maintaining a persistent **Student Profile**. This profile tracks not just correct answers, but specific knowledge gaps and behavioral patterns, enabling the system to \"remember\" the student\'s unique learning journey.

## Layer 2: The Adaptive Engines (Differentiation & Pedagogy)
**The Challenge:** How is this better than traditional instruction?

**The Solution:** In a classroom of 30, a teacher cannot adjust the cognitive load for every student simultaneously. Layer 2 utilizes semi-autonomous agents to do exactly that.

*   **Precision Targeting:** Utilizing the extracted misconceptions from Layer 4, this engine filters student responses to identify specific misunderstandings, not just generic errors. It bridges gaps by addressing the root cause of the confusion.
*   **Cognitive Calibration:** This is the key differentiator. The AI monitors the student’s \"Capacity\" and dynamically adjusts the difficulty (Scaffolding). If a student is overwhelmed, the AI \"gears down\" the complexity to keep them in an optimal flow state—maintaining engagement without frustration.
*   **Experience Personalizer:** To ensure students can connect the lesson to their own experiences, this engine tunes the interface and content style based on learner preferences (e.g., gamified vs. textual).

## Layer 1: The Interaction Layer (Engagement)
The Session Manager ensures a seamless bidirectional flow. Students interact via a conversational interface that hides the complexity of the multi-agent processing.

*   **Engagement Evidence:** Pilot runs and demo videos show high student enthusiasm. Students are not passively consuming content; they are engaged in a dialogue that adapts to their inputs.

***

# Quality Assurance & Verification
Trust in AI is paramount. We implemented a rigorous verification protocol:

1.  **Human Oversight:** During the \"Foundation\" phase (Layer 4), every concept and misconception was reviewed by educators.
2.  **Interaction Analysis:** During the pilot, student interactions were captured and analyzed by teachers. We verified that the AI stayed on topic and correctly adjusted the cognitive load.
3.  **Result:** The outputs were found to be highly accurate regarding subject matter, with the primary \"hallucination\" risk mitigated by the strict constraints of the Knowledge Graph (Layer 3).

***

# Team Learning & Impact

**What we learned:**
Integrating AI into education is high-friction at the start but offers high-reward at scale. The team discovered that while the initial \"Foundation Pipelines\" require significant human effort (prompt engineering, data review), the payoff during the \"Deployment\" phase is immense. The AI acts as a tireless teaching assistant, scaling the teacher\'s best strategies to infinite students.

**Status:**
Pilot feedback indicates strong engagement. Formal assessments are planned following a semester-long implementation to measure longitudinal learning gains.

***

# Technical & Process Matrix

| Component | Method / Technology | Human / AI Roles |
| :--- | :--- | :--- |
| **Instructional Design** | State Standards Decomposition & LEARN Framework | **Human:** Strategy & Review <br> **AI:** Extraction & Classification |
| **Prompt Engineering** | Few-Shot Prompting (Good/Bad Examples) | **Human:** Iterative refinement of prompts <br> **AI:** Generation of variations |
| **Content Accuracy** | Human-in-the-Loop Validation | **Human:** Validates Concepts & Error DB <br> **AI:** Mines and expands seed data |
| **Differentiation** | Real-time Cognitive Load Adjustment | **Human:** Sets boundaries (Safety) <br> **AI:** Dynamic calibration per student |
| **Assessment** | Qualitative Analysis & Log Review | **Human:** Analyzes session logs for accuracy <br> **AI:** Tracks student proficiency gaps |
`;

const TechArchitecturePage: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Technical Architecture</h1>
        <p className="text-lg text-slate-600">
        This system introduces a hierarchical framework designed to deliver hyper-personalized education at scale, addressing a critical "granularity mismatch" in modern K-12 schooling. While traditional education operates on broad State Standards, genuine learning occurs at the level of discrete concepts and is often obstructed by persistent, specific misconceptions. 
        </p>
      </header>
      
      <div className="max-w-3xl">
        <img 
          src="/assets/tech_architecture.jpg" 
          alt="Technical Architecture Diagram" 
          className="rounded-lg shadow-md border border-slate-200"
        />
      </div>

      <div className="max-w-3xl prose prose-slate">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{markdownContent}</ReactMarkdown>
      </div>
    </div>
  );
};

export default TechArchitecturePage;
