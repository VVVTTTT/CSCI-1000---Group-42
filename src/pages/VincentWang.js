export default function VincentWang() {
  return (
    <div className='container'>
      <title>Vincent Wang | About Me</title>
      <link rel='icon' href='/favicon.ico' />

      <main>
        <div className='underline'>
          <h1 className='title'>Hi, I'm Vincent Wang</h1>
          <p className='subtitle'>CS Student · U.S. Army Veteran · Bilingual</p>
        </div>

        <section className='card'>
          <h2>About Me</h2>
          <p className='description'>
            I'm a Computer Science student at CU Boulder, and I live here in
            Colorado. Before coming back to school I served in the U.S. Army
            from 2018 to 2023 as a 68W Combat Medic and left as an E-5 Emergency
            Care NCO. I also hold an MBA in Finance and have worked in
            administrative and student services roles.
          </p>
        </section>

        <section className='card'>
          <h2>What I'm Working Toward</h2>
          <p className='description'>
            I'm interested in cybersecurity and plan to work in the defense and
            government technology space after I graduate. I like the idea of
            combining the discipline I learned in the military with technical
            skills to protect systems and people.
          </p>
        </section>

        <section className='card'>
          <h2>Fun Facts</h2>
          <ul className='list'>
            <li>🗣️ I speak Mandarin Chinese and English fluently.</li>
            <li>🏂 Snowboarding is my favorite way to enjoy Colorado winters.</li>
            <li>🏃 I run to clear my head.</li>
            <li>📜 I love reading about history.</li>
            <li>🎮 I play video games when I have downtime.</li>
          </ul>
        </section>

        <a className='button' href='/'>
          <p>&larr; Back to Home Page</p>
        </a>
      </main>

      <style jsx>{`
        .container { min-height: 100vh; padding: 0 1rem; display: flex; flex-direction: column; align-items: center; max-width: 50rem; margin: auto; }
        main { padding: 4rem 0; flex: 1; display: flex; flex-direction: column; align-items: center; width: 100%; }
        .underline { text-align: center; border-bottom: 3px solid #cfb87c; padding-bottom: 1rem; margin-bottom: 2rem; width: 100%; }
        .title { margin: 0; line-height: 1.15; font-size: 3.5rem; color: #1a1a1a; }
        .subtitle { margin: 0.75rem 0 0; font-size: 1.2rem; color: #565a5c; }
        .card { width: 100%; margin: 0.75rem 0; padding: 1.25rem 1.5rem; border: 1px solid #eaeaea; border-radius: 10px; background: #fafafa; }
        .card h2 { margin: 0 0 0.5rem; font-size: 1.5rem; color: #1a1a1a; }
        .description { margin: 0; line-height: 1.6; font-size: 1.15rem; }
        .list { margin: 0; padding-left: 0; list-style: none; line-height: 1.9; font-size: 1.15rem; }
        .button { margin-top: 2rem; padding: 0.25rem 1rem; color: inherit; text-decoration: none; border: 1px solid #eaeaea; border-radius: 10px; transition: color 0.15s ease, border-color 0.15s ease; }
        .button:hover, .button:focus, .button:active { color: #0070f3; border-color: #0070f3; }
        .button p { font-size: 1rem; font-weight: 600; }
        @media (max-width: 600px) { .title { font-size: 2.5rem; } }
      `}</style>

      <style jsx global>{`
        html, body { padding: 0; margin: 0; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
}
