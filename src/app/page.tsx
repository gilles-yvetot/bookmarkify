'use client';
import { ChangeEvent, ReactNode, useCallback, useState } from 'react';
import styles from './page.module.css';

const wrapCode = (code: String) => `javascript:(function(){${code}}())`;

export default function Home() {
  const [name, setName] = useState(``);
  const [code, setCode] = useState(``);

  const [bookmarkLink, setBookmarkLink] = useState<ReactNode>(null);

  const generate = useCallback(() => {
    setBookmarkLink(
      <>
        <a href={wrapCode(code)}>{name || `Bookmark`}</a>
      </>,
    );
  }, [code, name]);

  return (
    <main className={styles.main}>
      <h2>Bookmarkify</h2>
      {bookmarkLink}
      <div className={styles.center}>
        <input
          placeholder='Name'
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <textarea
          placeholder='document.querySelector("body").click()'
          value={code}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setCode(e.target.value)
          }
        ></textarea>
        <button disabled={!code} onClick={generate}>
          Generate bookmark
        </button>
      </div>
    </main>
  );
}
