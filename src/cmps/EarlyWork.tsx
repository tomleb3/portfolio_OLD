import React from 'react';

import { Work } from '../services/workService';
import { WorkList } from './WorkList';

export const EarlyWork = ({ works }: { readonly works: readonly Work[] }) => {
    const earlyWorks = works.filter(work => work.category === 'early');

    return (
        <section className='main-layout early-work'>
            <strong>Earlier Works</strong>
            <p>Also, a few projects from my beginnings</p>
            <WorkList works={earlyWorks} />
        </section>
    );
};
