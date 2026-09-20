import { useEffect, useRef } from 'react';

import { Loader } from '../Loader';

import styles from './InfinityScroll.module.scss';

const PRELOAD_OFFSET_PX = 100;

type Props = {
  children: React.ReactNode;
  onReachEnd: () => void;
  hasNext: boolean;
  isLoadingMore?: boolean;
};

export const InfinityScroll = (props: Props) => {
  const { children, onReachEnd, hasNext, isLoadingMore = false } = props;

  const sentinelRef = useRef<HTMLDivElement>(null);
  const onReachEndRef = useRef(onReachEnd);

  useEffect(() => {
    onReachEndRef.current = onReachEnd;
  });

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !hasNext) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onReachEndRef.current();
        }
      },
      {
        rootMargin: `0px 0px ${PRELOAD_OFFSET_PX}px 0px`
      }
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [hasNext]);

  return (
    <>
      {children}

      {isLoadingMore && (
        <div className={styles.loader_wrapper}>
          <Loader size='small' />
        </div>
      )}

      <div
        ref={sentinelRef}
        className={styles.sentinel}
      />
    </>
  );
};
