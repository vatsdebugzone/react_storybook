import { OTPInput } from '../components';

/**
 * OTPInput Component — Usage Examples
 *
 * Features: configurable length, auto-submit, mask, variants, error/loading
 */
export default function OTPInputExample() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', padding: '2rem', alignItems: 'center' }}>

      {/* ── Standard 6-digit OTP ── */}
      <section style={{ textAlign: 'center' }}>
        <h3>Enter Verification Code</h3>
        <p style={{ color: '#6b7280', marginBottom: 16 }}>We sent a 6-digit code to your email</p>
        <OTPInput
          length={6}
          onChange={(val) => console.log('OTP:', val)}
          onComplete={(code) => alert(`OTP verified: ${code}`)}
        />
      </section>

      {/* ── 4-digit PIN (masked) ── */}
      <section style={{ textAlign: 'center' }}>
        <h3>4-Digit PIN</h3>
        <OTPInput
          length={4}
          mask
          onChange={(val) => console.log('PIN:', val)}
          onComplete={(val) => alert(`PIN: ${val}`)}
        />
      </section>

      {/* ── Bordered Variant ── */}
      <section style={{ textAlign: 'center' }}>
        <h3>Bordered Variant</h3>
        <OTPInput
          length={6}
          variant="bordered"
          onChange={(val) => console.log(val)}
        />
      </section>

      {/* ── Error State ── */}
      <section style={{ textAlign: 'center' }}>
        <h3>Error State</h3>
        <OTPInput
          length={6}
          error
          onChange={(val) => console.log(val)}
        />
      </section>

      {/* ── Loading State ── */}
      <section style={{ textAlign: 'center' }}>
        <h3>Loading</h3>
        <OTPInput
          length={6}
          loading
          onChange={(val) => console.log(val)}
        />
      </section>
    </div>
  );
}
