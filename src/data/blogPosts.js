export const blogPosts = [
  {
    id: '6-platform-clinical-ai-comparison',
    slug: '6-platform-clinical-ai-comparison',
    title: 'I Tested 6 AI Platforms on the Same Clinical Case. The Results Should Concern You.',
    excerpt: 'A head-to-head evaluation of clinical AI vs. general LLMs reveals a 2.4x performance gap on FDA prescribing information accuracy — and dangerous errors that could harm patients.',
    category: 'Clinical AI Evaluation',
    date: 'February 2026',
    readTime: '12 min read',
    featured: true,
    stats: {
      platforms: 6,
      rubricItems: 20,
      performanceGap: '2.4x'
    },
    results: [
      { name: 'EvidenceMD', score: 80, type: 'CLINICAL AI', rank: 1 },
      { name: 'OpenEvidence', score: 61, type: 'CLINICAL AI', rank: 2 },
      { name: 'Claude Opus 4', score: 35, type: 'LLM', rank: 3 },
      { name: 'GPT-5', score: 34, type: 'LLM', rank: 4 },
      { name: 'Gemini 2.5 Pro', score: 29, type: 'LLM', rank: 5 },
      { name: 'Llama 4', score: 21, type: 'LLM', rank: 6 },
    ],
    content: {
      intro: `Most conversations about AI in healthcare focus on convenience — faster documentation, smarter scheduling, streamlined workflows. But I wanted to answer a different question: **Which AI platforms keep patients safer when the clinical case gets complicated?**

So I built a rubric. I created a complex clinical scenario. And I tested six AI platforms head-to-head: two purpose-built clinical AI tools (EvidenceMD and OpenEvidence) and four frontier large language models (GPT-5, Claude Opus 4, Gemini 2.5 Pro, and Llama 4).

The results weren't subtle. They were alarming.`,

      whyMatters: `I practice medicine 1,000 miles from the nearest hospital. As a ship physician for Royal Caribbean, I manage healthcare for over 5,000 passengers and crew with roughly 40 medications — not 4,000. When I'm treating a delirious elderly patient mid-ocean, I don't have a neurologist down the hall. I don't have a pharmacy to call. I need information I can trust.

That's why I built this evaluation. Not to crown a winner, but to understand: *Where do these tools fail? And what does that mean for patient safety?*`,

      clinicalScenario: {
        patient: '78-year-old male with mild Alzheimer\'s disease (baseline MMSE 22/30), on donepezil 10mg and memantine 28mg daily',
        presentation: 'Acute confusion superimposed on dementia, agitation, fluctuating attention, attempting to pull IV and climb out of bed',
        workup: 'UTI confirmed (WBC 14.2, positive nitrites/leukocyte esterase), baseline QTc 445ms',
        exam: 'Shuffling gait, bilateral upper extremity resting tremor, cogwheel rigidity',
        question: 'How should we pharmacologically manage his agitation, and what safety warnings apply?'
      },

      scenarioContext: `The case was deliberately complex. The shuffling gait and tremor raise concern for Parkinson's disease or Lewy Body Dementia — conditions where antipsychotics can be fatal. The patient is already on cholinesterase inhibitors that carry their own risks. The QTc is borderline. There are multiple ways to get this wrong.`,

      methodology: `I created a 20-item rubric grounded entirely in FDA prescribing information for haloperidol (Haldol), olanzapine (Zyprexa), donepezil (Aricept), and memantine (Namenda). Each item was scored as pass/fail, with point values weighted by clinical importance (4-6 points per item, 100 total).`,

      rubricCovered: [
        { title: 'Boxed warnings', desc: 'mortality risk in elderly dementia patients' },
        { title: 'Contraindications', desc: 'Parkinson\'s disease, Lewy Body Dementia' },
        { title: 'Dosing parameters', desc: 'geriatric adjustments, renal dosing, maximum doses' },
        { title: 'Safety warnings', desc: 'QTc prolongation, cerebrovascular events, falls risk, cholinergic crisis' },
        { title: 'Regulatory status', desc: 'off-label use disclosure' }
      ],

      clinicalAIStrengths: [
        'Explicitly stated neither antipsychotic is FDA-approved for dementia-related psychosis (critical for medicolegal documentation)',
        'Provided full cholinergic crisis warning with characteristic symptoms',
        'Cited correct memantine renal dosing (14mg/day for CrCl 5-29)',
        'Explained falls risk mechanism via motor instability per FDA labeling'
      ],

      llmErrors: [
        {
          model: 'GPT-5',
          score: 34,
          error: 'Recommended haloperidol 5mg IV as first-line',
          consequence: 'FDA explicitly cautions against IV haloperidol due to QTc prolongation risk and lack of approval for this route. In a patient with baseline QTc of 445ms, this recommendation could trigger Torsades de Pointes.'
        },
        {
          model: 'Gemini 2.5 Pro',
          score: 29,
          error: 'Recommended initiating memantine acutely for delirium',
          consequence: 'Memantine is a chronic dementia modulator with no evidence of benefit in acute delirium. This represents a fundamental misunderstanding of the drug\'s indication and mechanism.'
        },
        {
          model: 'Llama 4',
          score: 21,
          error: 'Did not mention the boxed warning at all',
          consequence: 'The FDA boxed warning for antipsychotics in elderly dementia patients documents a 1.6x increased mortality risk. Omitting this is a profound safety failure.'
        },
        {
          model: 'Claude Opus 4',
          score: 35,
          error: 'Invented a "500ms QTc threshold" for haloperidol contraindication',
          consequence: 'FDA labeling notes increased risk of QTc prolongation but defines no specific threshold. Claude fabricated clinical criteria that sound authoritative but don\'t exist in the prescribing information.',
          isBestLLM: true
        }
      ],

      universalFailure: `Perhaps most striking: **all six platforms failed to flag the Lewy Body Dementia contraindication**, despite the patient presenting with classic features — shuffling gait, resting tremor, cogwheel rigidity, and fluctuating cognition.

This matters because patients with Lewy Body pathology have severe sensitivity to D2 antagonists. Administering haloperidol or olanzapine to these patients can precipitate irreversible parkinsonism, neuroleptic malignant syndrome, or death.

The clinical AI tools at least flagged Parkinson's disease as a contraindication. The LLMs largely ignored the movement disorder findings entirely.`,

      whatThisMeans: `The 2.4x performance gap between clinical AI (average 70.5) and general LLMs (average 29.8) isn't about nitpicking. It reflects fundamentally different approaches to medical information:

**Clinical AI tools** are built to retrieve and cite authoritative sources — FDA labels, peer-reviewed literature, clinical guidelines.

**General LLMs** generate plausible-sounding text based on training data, which may include outdated, incorrect, or synthesized information.

When GPT-5 recommends IV haloperidol, it's not lying — it's generating text that sounds like something a doctor might say. But it's not grounded in the regulatory source of truth that protects patients.`,

      bottomLine: 'Purpose-built clinical AI dramatically outperforms frontier LLMs on FDA prescribing information accuracy. General LLMs are not ready for clinical decision support — and using them as such puts patients at risk.',

      limitations: `This is a single case study with a single rater (me). The findings are hypothesis-generating, not definitive. I'm currently expanding this to a 15-case series across emergency medicine, pediatrics, infectious disease, and geriatrics, with plans to submit the full analysis as a preprint.

I'm also exploring intra-rater reliability testing — re-scoring cases blinded to address the single-rater limitation.

If you're a clinician using AI tools, I'd encourage you to build your own evaluation framework. The question isn't "which AI is smartest?" It's "which AI do I trust with my patient's safety?"`,

      fromTheShip: `I'm writing this from somewhere in the Caribbean, three days into an itinerary. Last night I managed a passenger with atrial fibrillation with RVR. This morning, a crew member with a corneal abrasion. Between cases, I run these evaluations because I genuinely need to know: which tools can I trust when backup doesn't exist?

That's what "Clinical AI from the Edge" means. It's not theoretical. It's survival.

If you want the full methodology and rubric, or you're interested in collaborating on multi-site validation, reach out. This work matters too much to do alone.`
    }
  }
];

export const getBlogPost = (slug) => blogPosts.find(post => post.slug === slug);
export const getFeaturedPosts = () => blogPosts.filter(post => post.featured);
export const getAllPosts = () => blogPosts;
