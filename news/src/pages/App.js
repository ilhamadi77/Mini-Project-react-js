import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Container from '../components/Container'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { useParams } from 'react-router-dom'
import {getNews} from "../services/getNews"
import NewList from '../components/NewsList'

function App() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const {id} = useParams()
  const DEFAULT_SEARCH_QUERY= "technology"

  useEffect(()=> {
    const fetchTechNews = async () =>{
      setLoading(true)
      const res = await getNews({
        searchQuery: id || DEFAULT_SEARCH_QUERY
      })

      if(!res){
        setLoading(false)
        setError(true)
        return
      }
      setLoading(false)
      setArticles(res.articles)
    }

    fetchTechNews()
  },[id])


  return (
    <>
    <Navbar />
    <Container>
      {loading && <Loading />}
      {error && <Error />}
      {(!loading && articles.length > 0) && (
        <NewList articles={articles} />
      )}
    </Container>
    </>

  )
}

export default App