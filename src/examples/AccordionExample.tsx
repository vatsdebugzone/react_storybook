import { Accordion, AccordionItem } from '../components';
import { Gear, ShieldCheck, Bell, Palette } from '@phosphor-icons/react';

/**
 * Accordion Component — Usage Examples
 *
 * Variants: default | bordered | elevated | flat
 * Features: icons, subtitles, nested accordions, colors, sizes
 * 
 * Accordion uses children-based API with <AccordionItem> components.
 */
export default function AccordionExample() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', padding: '2rem', maxWidth: 700 }}>

      {/* ── Basic FAQ ── */}
      <section>
        <h3>FAQ (Default Variant)</h3>
        <Accordion>
          <AccordionItem id="q1" title="How do I install the library?">
            Run <code>npm install vatsdebugzone-wd-react-sb</code> in your project directory and import the components you need.
          </AccordionItem>
          <AccordionItem id="q2" title="Does it support dark mode?">
            Yes! Most components adapt to dark backgrounds using the glass variant or custom CSS variables.
          </AccordionItem>
          <AccordionItem id="q3" title="Can I customize the theme?" subtitle="Theming & Branding">
            Absolutely. Override the CSS custom properties or modify the SCSS source files to match your brand.
          </AccordionItem>
          <AccordionItem id="q4" title="Is TypeScript supported?" disabled>
            All components ship with full TypeScript type definitions out of the box.
          </AccordionItem>
        </Accordion>
      </section>

      {/* ── With Icons — Elevated + Primary Color ── */}
      <section>
        <h3>Settings (Elevated + Icons)</h3>
        <Accordion variant="elevated" color="primary">
          <AccordionItem id="general" title="General Settings" subtitle="App preferences" startContent={<Gear size={20} weight="duotone" />}>
            Configure language, timezone, and notification preferences for your account.
          </AccordionItem>
          <AccordionItem id="security" title="Security" subtitle="Authentication & privacy" startContent={<ShieldCheck size={20} weight="duotone" />}>
            Manage two-factor authentication, trusted devices, and session history.
          </AccordionItem>
          <AccordionItem id="notifications" title="Notifications" startContent={<Bell size={20} weight="duotone" />}>
            Choose which events trigger email, push, or in-app notifications.
          </AccordionItem>
          <AccordionItem id="theme" title="Appearance" startContent={<Palette size={20} weight="duotone" />}>
            Switch between light, dark, or system theme and adjust accent colors.
          </AccordionItem>
        </Accordion>
      </section>

      {/* ── Bordered Variant ── */}
      <section>
        <h3>Bordered</h3>
        <Accordion variant="bordered">
          <AccordionItem id="b1" title="Section One">Content for section one.</AccordionItem>
          <AccordionItem id="b2" title="Section Two">Content for section two.</AccordionItem>
          <AccordionItem id="b3" title="Section Three">Content for section three.</AccordionItem>
        </Accordion>
      </section>

      {/* ── Multiple Open ── */}
      <section>
        <h3>Allow Multiple Open</h3>
        <Accordion allowMultiple defaultExpandedKeys={['m1']}>
          <AccordionItem id="m1" title="Initially Open">This section starts expanded.</AccordionItem>
          <AccordionItem id="m2" title="Also Openable">Multiple sections can be open at once.</AccordionItem>
          <AccordionItem id="m3" title="Third Section">Try opening all three!</AccordionItem>
        </Accordion>
      </section>

      {/* ── Small Size + Flat ── */}
      <section>
        <h3>Small Size (Flat)</h3>
        <Accordion size="sm" variant="flat">
          <AccordionItem id="s1" title="Compact Item 1">Small, compact content area.</AccordionItem>
          <AccordionItem id="s2" title="Compact Item 2">Another compact section.</AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
