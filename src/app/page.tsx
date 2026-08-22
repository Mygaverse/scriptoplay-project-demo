import { Button } from '@/components/Button';
import { Badge } from '@/components/Badge';
import { Card } from '@/components/Card';
import { PhaseTag, type Phase } from '@/components/PhaseTag';
import { StateBadge, type ClipStatus } from '@/components/StateBadge';
import { ThemeToggle } from '@/components/ThemeToggle';

const PHASES: Phase[] = [
  'concept',
  'world_bible',
  'character_vault',
  'synopsis',
  'treatment',
  'outline',
  'first_draft',
  'revision',
  'final_draft',
];

const STATES: ClipStatus[] = [
  'idle',
  'generating',
  'polling',
  'pending_qa',
  'approved',
  'killed',
  'failed',
];

// Written as literal class strings (not template-composed) so Tailwind's
// static content scanner actually finds and generates them.
const TINTS = [
  { label: '10%', className: 'bg-brand-tint-10' },
  { label: '15%', className: 'bg-brand-tint-15' },
  { label: '30%', className: 'bg-brand-tint-30' },
  { label: '40%', className: 'bg-brand-tint-40' },
];

export default function Home() {
  return (
    <main className="min-h-screen p-token-8">
      <div className="mx-auto max-w-3xl space-y-token-6">
        <div className="flex items-start justify-between gap-token-4">
          <div>
            <h1 className="text-heading text-text-primary">
              Scriptoplay Design System — Token Pipeline Demo
            </h1>
            <p className="mt-2 text-body text-text-secondary">
              Every value on this page is generated from <code>tokens.json</code>{' '}
              via Style Dictionary. See <code>src/styles/tokens-light.css</code> /{' '}
              <code>tokens-dark.css</code> for the generated output, and{' '}
              <code>/storybook</code> (via the &quot;storybook&quot; script) for the
              component catalog.
            </p>
          </div>
          <ThemeToggle />
        </div>

        <Card className="space-y-token-4">
          <div className="flex items-center gap-token-4">
            <Button>Generate</Button>
            <Button variant="secondary">Cancel</Button>
            <Button variant="gradient">Launch New IP</Button>
          </div>
          <div className="flex items-center gap-token-4">
            <Badge tone="success">Approved</Badge>
            <Badge tone="warning">In review</Badge>
            <Badge tone="danger">Failed</Badge>
          </div>
          <div>
            <p className="mb-2 text-label uppercase tracking-wide text-text-secondary">
              Nine-phase pipeline
            </p>
            <div className="flex flex-wrap gap-2">
              {PHASES.map((phase) => (
                <PhaseTag key={phase} phase={phase} />
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-label uppercase tracking-wide text-text-secondary">
              AI clip-generation states
            </p>
            <div className="flex flex-wrap gap-2">
              {STATES.map((state) => (
                <StateBadge key={state} state={state} />
              ))}
            </div>
          </div>
        </Card>

        <Card className="space-y-token-2">
          <p className="text-label uppercase tracking-wide text-text-secondary">
            Layout / grid — resize the window to see it switch
          </p>
          <p className="text-body text-text-primary">
            Current breakpoint:{' '}
            <span className="font-semibold tablet:hidden">Mobile (4-col grid)</span>
            <span className="hidden font-semibold tablet:inline web:hidden">
              Tablet (8-col grid)
            </span>
            <span className="hidden font-semibold web:inline">Web (12-col grid)</span>
          </p>
          <div className="grid grid-cols-4 gap-token-4 tablet:grid-cols-8 web:grid-cols-12">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className={`h-8 rounded-token-sm bg-surface-border ${i >= 8 ? 'hidden web:block' : i >= 4 ? 'hidden tablet:block' : ''}`}
              />
            ))}
          </div>
        </Card>

        <Card className="space-y-token-4">
          <div>
            <p className="mb-2 text-label uppercase tracking-wide text-text-secondary">
              Brand tint scale
            </p>
            <div className="flex items-center gap-token-2">
              {TINTS.map(({ label, className }) => (
                <div
                  key={label}
                  className={`flex h-16 w-16 items-center justify-center rounded-token-md border border-brand-primary text-caption text-brand-text ${className}`}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-label uppercase tracking-wide text-text-secondary">
              Overlay / scrim
            </p>
            <div className="relative flex h-24 items-center justify-center overflow-hidden rounded-token-md bg-surface-border">
              <div className="absolute inset-0 flex items-center justify-center bg-surface-scrim">
                <span className="text-title text-white">Modal scrim over content</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}
