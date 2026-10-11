import Image from "next/image";
import s from "./hero.module.css";

const C = { b: "#1d4ed8", t: "#2a9d8f", g: "#e8a94c", r: "#c96a4f", k: "#1a2332" } as const;
type Tile = `${string}:${keyof typeof C}:${keyof typeof C}`;

const MAIN: Tile[] = [
  "q2:g:k", "tl:b:k", "q4:t:k", "sq:r:k", "hb:b:t", "q1:g:k", "td:r:k", "hl:t:k",
  "q3:b:g", "tr:g:k", "q2:r:k", "hb:t:k", "sq:g:b", "q4:b:k", "tl:r:t", "q1:t:k",
];
const STRAP: Tile[] = [
  "q3:r:k", "ci:b:k", "tl:g:k", "q1:t:g", "hb:r:k", "q4:g:k", "ci:t:b", "tr:b:k", "q2:g:k", "hl:r:k",
];
const rot = <T,>(a: T[], n: number) => [...a.slice(n), ...a.slice(0, n)];

const GHOSTS = [
  { cls: s.g1, r: -18, sc: 0.78, shift: 3 },
  { cls: s.g2, r: 14, sc: 0.7, shift: 7 },
  { cls: s.g3, r: 17, sc: 0.72, shift: 10 },
  { cls: s.g4, r: -11, sc: 0.6, shift: 5 },
];

function Pattern({ tiles, className }: { tiles: Tile[]; className: string }) {
  return (
    <div className={className}>
      {tiles.map((t, i) => {
        const [shape, fg, bg] = t.split(":") as [string, keyof typeof C, keyof typeof C];
        return (
          <div key={i} className={s.tile} style={{ background: C[bg] }}>
            <i className={s[shape]} style={{ background: C[fg] }} />
          </div>
        );
      })}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className={s.hero}>
      {GHOSTS.map((g, i) => (
        <div key={i} className={`${s.ghost} ${g.cls}`} aria-hidden>
          <div
            className={s.ghostIn}
            style={{ "--r": `${g.r}deg`, "--s": g.sc } as React.CSSProperties}
          >
            <div className={s.ghostCard}>
              <Pattern tiles={rot(MAIN, g.shift)} className={s.ghostPattern} />
              <div className={s.hole} />
              <div className={s.ghostInfo}>
                <div className={s.name}>Gliezel Ann</div>
                <div className={s.role}>BS Computer Science</div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className={s.inner}>
        <div className={s.stage}>
          <div className={s.swing}>
            <div className={s.strap}>
              <Pattern
                tiles={[...rot(STRAP, 4), ...rot(STRAP, 2)].slice(0, 16)}
                className={s.strapPattern}
              />
            </div>
            <div className={s.clipBar} />
            <div className={s.clipHook} />
            <div className={s.card}>
              <Pattern tiles={MAIN} className={s.pattern} />
              <div className={s.hole} />
              <Image
                src="/assets/CS16.jpg"
                alt="Gliezel Ann Pajarilla"
                width={188}
                height={226}
                className={s.photo}
                priority
              />
              <div className={s.info}>
                <div>
                  <div className={s.name}>Gliezel Ann Pajarilla</div>
                  <div className={s.role}>BS in Computer Science</div>
                  <div className={s.school}>University of the Philippines Visayas</div>
                </div>
                <div className={s.links}>
                  <a href="#projects">Projects</a>
                  <a href="https://github.com/Geez-l" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gliezel-ann-pajarilla-1a80632a9/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={s.text}>
          <h1>Research-driven projects are the building blocks of our society</h1>
          <p>
            Extracting meaning and insights from data, creating projects that are
            building blocks to something that creates impact are my inspiration. I
            am enthusiastic about working on projects that promote welfare and
            development.
          </p>
          <div className={s.ctas}>
            <a href="/assets/Pajarilla_resume.pdf" download className={`${s.btn} ${s.primary}`}>
              Download CV
            </a>
            <a href="#contact" className={`${s.btn} ${s.ghostBtn}`}>
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
