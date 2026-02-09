import { History } from 'lucide-react';
import missionLogs from '@/app/data/missionLogs';

export default function MissionLogs() {
  const logs = [
    {
      id: 'LOG_006',
      title: 'System Design & Scale',
      description: 'Scaling backend infrastructure for millions of users.',
      status: 'Completed',
    },
    {
      id: 'LOG_005',
      title: 'LLMs in Production',
      description: 'Real-world deployment strategies for AI models.',
      status: 'Completed',
    },
    {
      id: 'LOG_004',
      title: 'Microservices Architecture',
      description: 'Building distributed systems with resilience patterns.',
      status: 'Completed',
    },
    {
      id: 'LOG_003',
      title: 'GraphQL at Scale',
      description: 'Advanced schema design and performance optimization.',
      status: 'Completed',
    },
    {
      id: 'LOG_002',
      title: 'Cloud Native Deployment',
      description: 'Kubernetes orchestration and container strategies.',
      status: 'Completed',
    },
    {
      id: 'LOG_001',
      title: 'Community Kickoff',
      description: 'First meetup establishing our engineering principles.',
      status: 'Completed',
    },
  ];

  return (
    <div className="md:col-span-3 lg:col-span-2 space-y-6">
      <h2 className="text-3xl font-bold flex items-center gap-2">
        <History className="w-6 h-6 text-dark-secondary" />
        Mission Logs
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {missionLogs.toReversed().map((log) => (
          <div
            key={log.id}
            className="bg-dark-card border border-dark-border rounded-2xl p-5 hover:border-dark-primary transition-colors cursor-pointer group"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex flex-col gap-2">
                <div className="text-xs font-mono text-dark-muted">
                  {log.id}
                </div>
                <div className="text-dark-secondary font-mono text-xs mb-2">
                  &gt;&gt; {log.timestamp}
                </div>
              </div>
              <span className="text-xs bg-dark-border px-2 py-1 rounded text-white">
                {log.status}
              </span>
            </div>
            <h3 className="font-bold text-lg mb-2 group-hover:text-dark-primary transition-colors">
              {log.title}
            </h3>
            <p className="text-sm text-dark-muted">{log.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
