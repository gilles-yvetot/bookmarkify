'use client';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import { ChangeEvent, ReactNode, useCallback, useState } from 'react';
import styles from './page.module.css';

const wrapCode = (code: String) => `javascript:(function(){${code}}())`;

export default function Home() {
  const [name, setName] = useState(``);
  const [code, setCode] = useState(``);

  const [bookmarkLink, setBookmarkLink] = useState<ReactNode>(null);

  const generate = useCallback(() => {
    setBookmarkLink(
      <div className={styles.full}>
        <h4>⬇️ Drag the link below into your bookmarks ⬇️</h4>
        <p />
        <a href={wrapCode(code)}>{name || `Bookmark`}</a>
      </div>,
    );
  }, [code, name]);

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h2>Bookmarkify</h2>
        {bookmarkLink}
        <Input
          autoFocus
          placeholder='Bookmark name'
          value={name}
          className={styles.full}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <Textarea
          className={styles.full}
          placeholder='document.querySelector("body").click()'
          value={code}
          style={{ fontFamily: 'var(--font-mono)' }}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setCode(e.target.value)
          }
        ></Textarea>
        <Button className={styles.full} disabled={!code} onClick={generate}>
          Generate bookmark
        </Button>
      </div>
    </main>
  );
}
