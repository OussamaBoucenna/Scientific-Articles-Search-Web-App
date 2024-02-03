// ArticleList.js
import React from 'react';
import ArticleComponents from './ArticleComponents';
import { Link } from 'react-router-dom';

const ArticleList = () => {
  const articles = [
    { id : '2' , titre: 'Article 1', auteurs: ['Author 1', 'Author 2'] },
    { id : '3' , titre: 'Article 2', auteurs: ['Author 3', 'Author 4'] },
    { id : '4' , titre: 'Article 3', auteurs: ['Author 5', 'Author 6'] },
    { id : '5' , titre: 'Article 4', auteurs: ['Author 7', 'Author 8'] },
    { id : '6' , titre: 'Article 5', auteurs: ['Author 9', 'Author 10'] },
    { id : '7' , titre: 'Article 6', auteurs: ['Author 11', 'Author 12'] },
    { id : '8' , titre: 'Article 7', auteurs: ['Author 13', 'Author 14'] },
    // Add more articles as needed
  ];
  return (
    <div>
      {articles.map((article, index) => (
        <div key={index} className={index !== articles.length - 1 ? 'mb-6' : ''}>
         
         <ArticleComponents id={article.id} titre={article.titre} auteurs={article.auteurs} />  
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
