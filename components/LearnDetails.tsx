import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Clock, Brain, Users, Target, RefreshCw } from 'lucide-react';

export default function K12LifeSkillsProgression() {
  const [expandedDomain, setExpandedDomain] = useState('self-regulation');
  const [selectedBand, setSelectedBand] = useState('all');

  const gradeBands = [
    { id: 'k-2', label: 'K-2', color: 'bg-emerald-500', lightColor: 'bg-emerald-50', borderColor: 'border-emerald-300' },
    { id: '3-5', label: '3-5', color: 'bg-blue-500', lightColor: 'bg-blue-50', borderColor: 'border-blue-300' },
    { id: '6-8', label: '6-8', color: 'bg-purple-500', lightColor: 'bg-purple-50', borderColor: 'border-purple-300' },
    { id: '9-12', label: '9-12', color: 'bg-orange-500', lightColor: 'bg-orange-50', borderColor: 'border-orange-300' },
  ];

  const domains = [
    {
      id: 'self-regulation',
      name: 'Self-Regulation',
      icon: Brain,
      color: 'text-rose-600',
      bgColor: 'bg-rose-100',
      description: 'Managing attention, emotions, and behavior',
      progression: {
        'k-2': [
          'Sits and attends for 10-15 minutes with support',
          'Follows 2-3 step directions',
          'Uses simple calming strategies (deep breaths)',
          'Waits for short periods with reminders',
          'Identifies basic emotions in self'
        ],
        '3-5': [
          'Sustains focus for 20-30 minutes independently',
          'Manages transitions between activities',
          'Uses multiple self-calming strategies',
          'Delays gratification for near-term rewards',
          'Recognizes emotional triggers'
        ],
        '6-8': [
          'Focuses for full class periods despite distractions',
          'Manages frustration during challenging tasks',
          'Self-monitors attention and redirects',
          'Plans for and resists temptations (phone, games)',
          'Regulates emotions in social situations'
        ],
        '9-12': [
          'Sustains deep focus for extended projects',
          'Manages stress during high-stakes situations',
          'Independently identifies and corrects attention drift',
          'Balances competing priorities and impulses',
          'Models emotional regulation for others'
        ]
      }
    },
    {
      id: 'organization',
      name: 'Organization',
      icon: Clock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      description: 'Managing time, materials, and information',
      progression: {
        'k-2': [
          'Keeps personal materials in designated spots',
          'Follows a visual daily schedule',
          'Completes short tasks within time given',
          'Uses simple checklists with pictures',
          'Brings materials to/from school with support'
        ],
        '3-5': [
          'Maintains organized desk, backpack, binder',
          'Uses agenda/planner for daily assignments',
          'Estimates time needed for familiar tasks',
          'Takes basic notes (lists, keywords)',
          'Breaks 2-day assignments into steps'
        ],
        '6-8': [
          'Manages multiple class materials/systems',
          'Uses Cornell or structured note-taking',
          'Creates weekly schedules independently',
          'Breaks multi-week projects into milestones',
          'Organizes digital files and folders'
        ],
        '9-12': [
          'Manages complex schedules (school, work, activities)',
          'Uses sophisticated note systems (mapping, synthesis)',
          'Plans backwards from deadlines',
          'Balances short and long-term priorities',
          'Maintains organized digital and physical systems'
        ]
      }
    },
    {
      id: 'learning-strategies',
      name: 'Learning Strategies',
      icon: BookOpen,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      description: 'Techniques for effective studying and retention',
      progression: {
        'k-2': [
          'Looks at speaker, listens actively',
          'Asks questions when confused',
          'Retells/summarizes stories or lessons',
          'Uses pictures to support understanding',
          'Practices skills through repetition'
        ],
        '3-5': [
          'Uses reading strategies (predict, visualize, question)',
          'Self-quizzes instead of just re-reading',
          'Connects new learning to prior knowledge',
          'Identifies main ideas vs. details',
          'Uses graphic organizers for comprehension'
        ],
        '6-8': [
          'Applies retrieval practice systematically',
          'Uses spaced repetition for retention',
          'Generates own study questions',
          'Creates summaries and concept maps',
          'Identifies optimal study conditions for self'
        ],
        '9-12': [
          'Selects strategies based on content type',
          'Interleaves practice across topics',
          'Teaches concepts to others to deepen learning',
          'Synthesizes information across sources',
          'Transfers learning to novel contexts'
        ]
      }
    },
    {
      id: 'metacognition',
      name: 'Metacognition',
      icon: RefreshCw,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      description: 'Thinking about thinking and self-awareness',
      progression: {
        'k-2': [
          'Says "I don\'t understand" when confused',
          'Shows thumbs up/down for understanding',
          'Identifies what was easy vs. hard',
          'Compares work to examples/models',
          'Talks about what they learned'
        ],
        '3-5': [
          'Rates own understanding accurately (1-5)',
          'Identifies specific points of confusion',
          'Explains thinking process to others',
          'Notices when comprehension breaks down',
          'Sets simple learning goals'
        ],
        '6-8': [
          'Predicts performance before assessments',
          'Analyzes errors to find patterns',
          'Selects strategies based on task demands',
          'Monitors comprehension during reading/listening',
          'Reflects on what worked after assessments'
        ],
        '9-12': [
          'Accurately calibrates confidence with performance',
          'Conducts systematic post-assessment analysis',
          'Adjusts learning approach based on results',
          'Identifies personal learning strengths/weaknesses',
          'Plans skill development independently'
        ]
      }
    },
    {
      id: 'collaboration',
      name: 'Collaboration',
      icon: Users,
      color: 'text-amber-600',
      bgColor: 'bg-amber-100',
      description: 'Working effectively with others',
      progression: {
        'k-2': [
          'Takes turns and shares materials',
          'Listens when others speak',
          'Works with a partner on simple tasks',
          'Uses kind words to disagree',
          'Helps classmates when able'
        ],
        '3-5': [
          'Contributes ideas in group discussions',
          'Builds on others\' ideas ("I agree and...")',
          'Takes on roles in group work',
          'Resolves minor conflicts with peers',
          'Gives specific positive feedback'
        ],
        '6-8': [
          'Facilitates group discussions',
          'Considers multiple perspectives',
          'Gives and receives constructive criticism',
          'Navigates disagreements productively',
          'Holds self and others accountable to group goals'
        ],
        '9-12': [
          'Leads and participates flexibly based on context',
          'Synthesizes diverse viewpoints',
          'Mentors younger students or peers',
          'Manages group dynamics and conflict',
          'Collaborates across differences (background, opinion)'
        ]
      }
    },
    {
      id: 'adaptive-mindset',
      name: 'Adaptive Mindset',
      icon: Target,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
      description: 'Resilience, growth orientation, and agency',
      progression: {
        'k-2': [
          'Tries again after mistakes with encouragement',
          'Says "I can\'t do it YET"',
          'Celebrates effort, not just outcomes',
          'Asks for help when stuck',
          'Shows curiosity about new things'
        ],
        '3-5': [
          'Views mistakes as learning opportunities',
          'Persists through frustration independently',
          'Sets and tracks personal goals',
          'Identifies role models and aspirations',
          'Takes on challenges outside comfort zone'
        ],
        '6-8': [
          'Connects daily work to future goals',
          'Recovers from setbacks within days',
          'Advocates for own learning needs',
          'Seeks feedback to improve',
          'Maintains motivation during difficult units'
        ],
        '9-12': [
          'Pursues challenges that risk failure',
          'Maintains long-term vision despite setbacks',
          'Takes ownership of educational path',
          'Demonstrates grit on multi-year goals',
          'Inspires growth mindset in others'
        ]
      }
    }
  ];

  const toggleDomain = (domainId) => {
    setExpandedDomain(expandedDomain === domainId ? null : domainId);
  };

  const filteredBands = selectedBand === 'all' 
    ? gradeBands 
    : gradeBands.filter(b => b.id === selectedBand);

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">K-12 Life Skills Progression Map</h1>
          <p className="text-sm text-gray-600">Developmental expectations across six domains</p>
        </div>

        {/* Grade Band Filter */}
        <div className="flex justify-center gap-2 mb-6">
          <button
            onClick={() => setSelectedBand('all')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              selectedBand === 'all'
                ? 'bg-gray-800 text-white'
                : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-100'
            }`}
          >
            All Grades
          </button>
          {gradeBands.map(band => (
            <button
              key={band.id}
              onClick={() => setSelectedBand(band.id)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                selectedBand === band.id
                  ? `${band.color} text-white`
                  : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              Grades {band.label}
            </button>
          ))}
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-4 mb-6 text-xs">
          {gradeBands.map(band => (
            <div key={band.id} className="flex items-center gap-1">
              <div className={`w-3 h-3 rounded ${band.color}`}></div>
              <span className="text-gray-600">Grades {band.label}</span>
            </div>
          ))}
        </div>

        {/* Domains */}
        <div className="space-y-3">
          {domains.map(domain => {
            const Icon = domain.icon;
            const isExpanded = expandedDomain === domain.id;
            
            return (
              <div key={domain.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                {/* Domain Header */}
                <button
                  onClick={() => toggleDomain(domain.id)}
                  className={`w-full px-4 py-3 flex items-center justify-between ${domain.bgColor} hover:opacity-90 transition-all`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={domain.color} size={22} />
                    <div className="text-left">
                      <h2 className={`font-bold ${domain.color}`}>{domain.name}</h2>
                      <p className="text-xs text-gray-600">{domain.description}</p>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="text-gray-500" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-500" size={20} />
                  )}
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="p-4">
                    <div className={`grid gap-4 ${selectedBand === 'all' ? 'md:grid-cols-4' : 'md:grid-cols-1 max-w-md mx-auto'}`}>
                      {filteredBands.map(band => (
                        <div key={band.id} className={`${band.lightColor} ${band.borderColor} border rounded-lg p-3`}>
                          <div className={`${band.color} text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block`}>
                            Grades {band.label}
                          </div>
                          <ul className="space-y-2">
                            {domain.progression[band.id].map((skill, idx) => (
                              <li key={idx} className="text-xs text-gray-700 flex items-start gap-2">
                                <span className={`${band.color} text-white rounded-full w-4 h-4 flex items-center justify-center flex-shrink-0 text-xs mt-0.5`}>
                                  {idx + 1}
                                </span>
                                <span>{skill}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center text-xs text-gray-500">
          <p>Skills build progressively—each grade band assumes mastery of prior levels.</p>
          <p className="mt-1">Click any domain to expand/collapse. Filter by grade band above.</p>
        </div>
      </div>
    </div>
  );
}
