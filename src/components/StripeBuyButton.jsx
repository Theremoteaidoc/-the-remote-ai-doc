/**
 * SeaScope CDS — Stripe Buy Button (live mode).
 * Publishable key and button id are safe to expose (Stripe design).
 * Script loader is in index.html so the custom element is defined before mount.
 */
export default function StripeBuyButton({ className = '' }) {
  return (
    <div className={className}>
      <stripe-buy-button
        buy-button-id="buy_btn_1TNl4mAHTxcvujzDAFRCe4fQ"
        publishable-key="pk_live_51SyBeAAHTxcvujzDn1d4IuqQTiIYdftFakVVfCYWxhZEmr1rCfFQI9q8TcuTTwQQO5ZDXNPkjcUm20FyvHUNFzdn00XLYGiCGb"
      ></stripe-buy-button>
    </div>
  );
}
