import React from 'react';

import { Work } from '../services/workService';
import { utilService } from '../services/utilService';
import { AngularIcon } from './Icons/AngularIcon';
import { JavascriptIcon } from './Icons/JavascriptIcon';
import { ReactIcon } from './Icons/ReactIcon';
import { VueIcon } from './Icons/VueIcon';
import { Theme, useUserSettings, View } from '../services/userSettingsService';

const getFrameworkLogoUrl = (frameworkName: string | undefined) => {
  switch (frameworkName) {
    case 'react':
      return <ReactIcon />;
    case 'angular':
      return <AngularIcon />;
    case 'vue':
      return <VueIcon />;
    default:
      return <JavascriptIcon />;
  }
};

export const WorkPreview = ({ work }: { work: Work }) => {
  const { theme, view } = useUserSettings();

  let tagsContainer = (
    <div className='tags-container flex wrap a-end'>
      {work.tags.map((tag: string) => (
        <a
          key={utilService.makeId()}
          href={`//google.com/search?q=${tag}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          #{tag}
        </a>
      ))}
    </div>
  );

  return (
    <section
      className={[
        'work-preview',
        'flex',
        view === View.List ? 'list-view' : 'grid-view',
        theme === Theme.Dark ? 'dark-mode' : '',
      ].join(' ')}
    >
      <a className='img-container' href={work.linkUrl} target='_blank' rel='noopener noreferrer'>
        <img src={work.imgUrl} alt='Project' />
        <img src={`${process.env.PUBLIC_URL}/assets/imgs/eye.svg`} alt='View' />
        {work.inDevelopment && <div>In development</div>}
      </a>
      <div className='work-info flex col grow j-between'>
        <div className='flex j-between'>
          <div className='info-container flex col'>
            <a href={work.linkUrl} target='_blank' rel='noopener noreferrer'>
              <strong>{work.title}</strong>
            </a>
            <p>{work.desc}</p>
            <div className='flex pos-relative'>
              <a href={work.repoUrl} target='_blank' rel='noopener noreferrer'>
                Repository
              </a>
              <label className='fs16 d-none pointer' htmlFor={`tags-toggler-${work._id}`}>
                📜
              </label>
              <input id={`tags-toggler-${work._id}`} type='checkbox' className='d-none' />
              {tagsContainer}
            </div>
          </div>
          {getFrameworkLogoUrl(work.framework)}
        </div>
        <footer className='flex j-between'>
          {tagsContainer}
          <a className='flex a-self-end' href={work.linkUrl}>
            <button className='btn-visit'>Visit</button>
          </a>
        </footer>
      </div>
    </section>
  );
};
