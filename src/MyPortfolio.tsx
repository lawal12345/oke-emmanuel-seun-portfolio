/*
 * The former Oke Emmanuel Seun portfolio is intentionally disabled for this
 * takeover page. Its previous sections and interactions are no longer
 * rendered.
 */

import { useRef, useState } from 'react'

export default function MyPortfolio() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [needsPlay, setNeedsPlay] = useState(false)

  function tryAudiblePlayback() {
    videoRef.current?.play().then(() => setNeedsPlay(false)).catch(() => setNeedsPlay(true))
  }

  return (
    <main className="takeover-page">
      <div className="error-corner error-corner-top" aria-hidden="true">404 / 404 / 404</div>
      <div className="error-corner error-corner-bottom" aria-hidden="true">PAGE_NOT_FOUND</div>

      <section className="error-panel" aria-labelledby="error-title">
        <p className="error-code">ERROR 404 — SITE DOWN</p>
        <h1 id="error-title">Nothing to<br /><span>see here.</span></h1>
        <p className="error-copy">
          This portfolio has been taken offline. The requested page does not
          exist, or it has been moved somewhere else.
        </p>

        <div className="video-frame">
          <div className="video-label">/ SYSTEM MESSAGE /</div>
          <video
            autoPlay
            controls
            loop
            playsInline
            preload="auto"
            src="/take-down.mp4"
            aria-label="Site takeover video"
            ref={videoRef}
            onCanPlay={tryAudiblePlayback}
          >
            Your browser does not support embedded video.
          </video>
          {needsPlay && (
            <button className="video-play-button" type="button" onClick={tryAudiblePlayback}>
              Tap to play with sound ↗
            </button>
          )}
          <div className="video-status">AUTOPLAY // SOUND ON // LOOP</div>
        </div>

        <p className="error-footer">
          <span>ERR_NOT_FOUND</span>
          <span>RETURN CODE: 404</span>
        </p>
      </section>
    </main>
  )
}
