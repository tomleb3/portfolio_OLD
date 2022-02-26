import React from 'react';

import { WorkPreview } from './WorkPreview';
import { Work } from '../services/workService';
import { useUserSettings, View } from '../services/userSettingsService';
import { Spinner } from './Spinner';

export const WorkList = ({ works }: { works: Work[] }) => {
  const { view } = useUserSettings();
  const isListView: boolean = view === View.List;

  if (works.length === 0) {
    return (
      <article className='txt-center'>
        <Spinner />
      </article>
    );
  }

  return (
    <div className={['work-list', isListView ? 'list-view' : 'grid-view'].join(' ')}>
      {works.map(work => {
        return <WorkPreview work={work} key={work._id} />;
      })}
    </div>
  );
};
