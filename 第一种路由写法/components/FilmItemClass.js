import React, { Component } from 'react'
import withRouter from './withRouter';

 class FilmItemClass extends Component {
  goDetail (id) {
    this.props.history.navigate('/detail/'+id)

  }
  render() {
    const { item } = this.props
    return (
      <li key={item.filmId} onClick={() => this.goDetail(item.filmId)}>
        <img style={{ width: '100px' }} alt={item.name} src={item.poster}></img>
        <p>{item.name}</p>
      </li>
    )
  }
}
export default withRouter(FilmItemClass)
