import React from 'react'
import styles from "./NewsList.module.css"
import NewsCard from "../NewsCard"

const NewList = ({ articles }) => {
  return (
    <div className={styles.newsList}>
        {articles.map((article, index, arr)=>{
          if(!article.urlToImage || !article.author || !article.content){
            return null
          }

          return (
            <NewsCard 
              key={index}
              src={article.urlToImage}
              title={article.title}
              publishedAt={article.publishedAt}
              author= {article.author}
              sourceName ={article.sourceName}
              description= {article.description}
              url = {article.url}
              notLashChild= {!(arr.length === index + 1)}
            />
          )
        })}
    </div>
  )
}

export default NewList