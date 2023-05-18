import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import FilmItem from '../../components/FilmItemClass'

export default function NowPlaying () {
  
  const [list, setList] = useState([])
  const navigate=useNavigate()
  useEffect(() => {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=330100&pageNum=1&pageSize=10&type=1&k=9024294',
      method: 'get',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16833584094408599245750273","bc":"330100"}',
        'X-Host': 'mall.film-ticket.film.list',
      },
    }).then(res => setList(res.data.data.films))
  }, [])

  function goDetail (id) {
    
    console.log(id);
    // navigate('/detail?id='+id)
    navigate('/detail/'+id)

  }

  return <div>
    <ul style={{ overflow: 'hidden' }}>
      {
        list.map(item => <li key={item.filmId} onClick={() => goDetail(item.filmId)}>
          <img style={{ width: '100px' }} alt={item.name} src={item.poster}></img>
          <p>{item.name}</p>
        </li>)
        // list.map(item => <FilmItem key={item.filmId} item={item} />)
      }
    </ul>
  </div>

}
