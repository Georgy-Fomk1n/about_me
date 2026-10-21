import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import CaseStory from '@components/cases/CaseStory';
import cases from '@data/cases.json';
import SEO from '@utils/seo';

const CaseDetail = () => {
  const { slug } = useParams();
  const index = cases.cases.findIndex((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (index === -1) {
    return <Navigate to="/cases" replace />;
  }

  const caseItem = cases.cases[index];

  return (
    <>
      <SEO
        title={caseItem.title}
        description={caseItem.subtitle}
        path={`cases/${caseItem.slug}`}
      />
      <div className="page active">
        <CaseStory
          key={caseItem.slug}
          caseItem={caseItem}
          prev={cases.cases[index - 1]}
          next={cases.cases[index + 1]}
        />
      </div>
    </>
  );
};

export default CaseDetail;
