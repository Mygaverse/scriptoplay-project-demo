import { Button } from '@/components/Button';
import { Badge } from '@/components/Badge';
import { Card } from '@/components/Card';
import { PhaseTag, type Phase } from '@/components/PhaseTag';
import { StateBadge, type SpecState } from '@/components/StateBadge';

const PHASES: Phase[] = [
  'concept',
  'world-bible',
  'character-vault',
  'synopsis',
  'treatment',
  'outline',
  'first-draft',
  'revision',
  'final-draft',
];

const STATES: SpecState[] = [
  'prompting',
  'processing',
  'previewing',
  'comparing',
  'regenerating',
  'approving',
  'error-recovery',
];

export default function Home() {
  return (
    <main className="min-h-screen p-token-8">
      <div className="mx-auto max-w-3xl space-y-token-6">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">
            Scriptoplay Design System — Token Pipeline Demo
          </h1>
          <p className="mt-2 text-sm text-text-secondary">
            Every value on this page is generated from <code>tokens/*.json</code>{' '}
            via Style Dictionary. See <code>src/styles/tokens.css</code> for the
            generated output, and <code>/storybook</code> (via the &quot;storybook&quot;
            script) for the component catalog.
          </p>
        </div>

        <Card className="space-y-token-4">
          <div className="flex items-center gap-token-4">
            <Button>Generate</Button>
            <Button variant="secondary">Cancel</Button>
          </div>
          <div className="flex items-center gap-token-4">
            <Badge tone="success">Approved</Badge>
            <Badge tone="warning">In review</Badge>
            <Badge tone="danger">Failed</Badge>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-text-secondary">
              Nine-phase pipeline
            </p>
            <div className="flex flex-wrap gap-2">
              {PHASES.map((phase) => (
                <PhaseTag key={phase} phase={phase} />
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-text-secondary">
              Component spec states
            </p>
            <div className="flex flex-wrap gap-2">
              {STATES.map((state) => (
                <StateBadge key={state} state={state} />
              ))}
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}
