// ArticleList.js
import React from 'react';
import ArticleComponents from './ArticleComponents';

const ArticleList = ({ articles }) => {
  return (
    <div>
      {articles.map((article, index) => (
        <div key={index} className={index !== articles.length - 1 ? 'mb-6' : ''}>
          <ArticleComponents titre={article.titre} auteurs={article.auteurs} />
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
