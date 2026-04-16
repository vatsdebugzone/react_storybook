import { Paragraph } from '../components';

/**
 * Paragraph Component — Usage Examples
 *
 * Features: size variants, weight, color, alignment, italic, gradient, lineHeight
 */
export default function ParagraphExample() {
  const sampleText = 'The quick brown fox jumps over the lazy dog. This sentence demonstrates how the Paragraph component renders text with various styling options.';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem', maxWidth: 600 }}>

      {/* ── Default ── */}
      <Paragraph>{sampleText}</Paragraph>

      {/* ── Sizes ── */}
      <section>
        <h3>Sizes</h3>
        <Paragraph size="xs">Extra small — {sampleText}</Paragraph>
        <Paragraph size="sm">Small — {sampleText}</Paragraph>
        <Paragraph size="md">Medium (default) — {sampleText}</Paragraph>
        <Paragraph size="lg">Large — {sampleText}</Paragraph>
        <Paragraph size="xl">Extra large — {sampleText}</Paragraph>
      </section>

      {/* ── Weight & Color ── */}
      <section>
        <h3>Weight & Color</h3>
        <Paragraph weight="light" color="muted">Light muted paragraph</Paragraph>
        <Paragraph weight="bold" color="primary">Bold primary paragraph</Paragraph>
        <Paragraph weight="black" color="error">Black error paragraph</Paragraph>
        <Paragraph weight="semibold" color="success">Semibold success paragraph</Paragraph>
      </section>

      {/* ── Alignment ── */}
      <section>
        <h3>Alignment</h3>
        <Paragraph align="left">Left aligned text</Paragraph>
        <Paragraph align="center">Center aligned text</Paragraph>
        <Paragraph align="right">Right aligned text</Paragraph>
        <Paragraph align="justify">{sampleText}</Paragraph>
      </section>

      {/* ── Italic ── */}
      <Paragraph italic color="muted">This is an italic paragraph for emphasis or quotes.</Paragraph>

      {/* ── Gradient Text ── */}
      <Paragraph gradient weight="bold" size="xl">This text uses a premium gradient effect!</Paragraph>

      {/* ── Font Families ── */}
      <section>
        <h3>Font Families</h3>
        <Paragraph fontFamily="sans">Sans-serif (default)</Paragraph>
        <Paragraph fontFamily="serif">Serif font family</Paragraph>
        <Paragraph fontFamily="mono">Monospace font family</Paragraph>
      </section>

      {/* ── Line Height ── */}
      <section>
        <h3>Line Height</h3>
        <Paragraph lineHeight="tight">Tight line height — {sampleText}</Paragraph>
        <Paragraph lineHeight="relaxed">Relaxed line height — {sampleText}</Paragraph>
      </section>
    </div>
  );
}
