
"use client";

import { useState } from "react";
import {
  AudioWaveform,
  ArrowUpRight,
  Music2,
  Search,
  Clock3,
  Disc3,
  ExternalLink,
  ChevronRight,
  Zap,
} from "lucide-react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const tracks = [
    { time: "00:00", name: "Waiting for analysis", artist: "SETFINDER", type: "ready" },
  ];

  function analyseSet() {
    setError("");

    if (!url.trim()) {
      setError("Please enter a YouTube URL.");
      return;
    }

    try {
      const parsed = new URL(url);
      const valid =
        parsed.hostname === "youtube.com" ||
        parsed.hostname === "www.youtube.com" ||
        parsed.hostname === "youtu.be" ||
        parsed.hostname === "m.youtube.com";

      if (!valid) {
        setError("Please enter a valid YouTube URL.");
        return;
      }
    } catch {
      setError("Please enter a valid URL.");
      return;
    }

    setLoading(true);
    setError(
      "The recognition engine is not connected yet. This is the frontend preview."
    );
    setLoading(false);
  }

  return (
    <main className="main">
      <nav className="navbar">
        <a href="#" className="brand">
          <AudioWaveform size={23} />
          SETFINDER<span>.</span>
        </a>

        <div className="nav-right">
          <span className="status-dot" />
          <span className="nav-label">BETA ACCESS</span>
          <a href="#about" className="nav-link">
            ABOUT <ArrowUpRight size={13} />
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="eyebrow">
          <span className="gold-line" />
          THE DJ SET IDENTIFICATION PLATFORM
          <span className="gold-line" />
        </div>

        <h1>
          EVERY SET.
          <br />
          EVERY <span>TRACK.</span>
        </h1>

        <p className="subtitle">
          Discover the music hidden inside your favourite DJ sets.
          <br />
          Identify tracks, uncover IDs and find every timestamp.
        </p>

        <div className="analyser">
          <div className="input-label">
            <Disc3 size={15} />
            PASTE YOUR DJ SET
          </div>

          <div className="input-row">
            <input
              type="url"
              placeholder="https://www.youtube.com/watch?v=..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && analyseSet()}
            />

            <button onClick={analyseSet} disabled={loading}>
              {loading ? "ANALYSING..." : "ANALYSE SET"}
              <ChevronRight size={17} />
            </button>
          </div>

          {error && <p className="error-message">{error}</p>}

          <div className="input-footer">
            <span><Zap size={12} /> POWERED BY AUDIO INTELLIGENCE</span>
            <span>YOUTUBE LINKS SUPPORTED</span>
          </div>
        </div>

        <div className="feature-strip">
          <div className="feature">
            <Search size={19} />
            <div>
              <strong>TRACK RECOGNITION</strong>
              <small>Identify every song</small>
            </div>
          </div>

          <div className="feature">
            <Clock3 size={19} />
            <div>
              <strong>EXACT TIMESTAMPS</strong>
              <small>Find the exact moment</small>
            </div>
          </div>

          <div className="feature">
            <Music2 size={19} />
            <div>
              <strong>ID DETECTION</strong>
              <small>Discover unreleased music</small>
            </div>
          </div>
        </div>
      </section>

      <section className="results">
        <div className="section-heading">
          <div>
            <span className="section-overline">YOUR DISCOVERIES</span>
            <h2>TRACKLIST <span>PREVIEW</span></h2>
          </div>
          <span className="track-count">01 / TRACKLIST</span>
        </div>

        <div className="track-table">
          <div className="table-header">
            <span># / TIME</span>
            <span>TRACK INFORMATION</span>
            <span>TYPE</span>
            <span />
          </div>

          {tracks.map((track, index) => (
            <div className="track-row" key={index}>
              <span className="track-time">{track.time}</span>
              <div className="track-info">
                <strong>{track.name}</strong>
                <small>{track.artist}</small>
              </div>
              <span className="track-type">PREVIEW</span>
              <span className="track-action">
                <ExternalLink size={15} />
              </span>
            </div>
          ))}

          <div className="empty-state">
            <AudioWaveform size={32} />
            <p>Your next discovery starts here.</p>
            <small>Paste a DJ set URL above to get started.</small>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <span className="section-overline">BUILT FOR MUSIC DISCOVERY</span>
        <h2>THE MUSIC NEVER STOPS.</h2>
        <p>
          From festival headliners to underground warehouse sets.
          Find the tracks, edits, mashups and unreleased IDs that
          make every set unforgettable.
        </p>
      </section>

      <footer>
        <a href="#" className="footer-brand">
          SETFINDER<span>.</span>
        </a>
        <span>IDENTIFY. DISCOVER. REPEAT.</span>
        <span>© 2026 SETFINDER</span>
      </footer>
    </main>
  );
}

