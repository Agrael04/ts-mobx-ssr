import * as React from 'react'
import { observer, inject } from 'mobx-react'
import Store from 'store'

const styles = require('./style.css')

interface IProps {
  store?: Store
}

@inject('store')
@observer
export default class Stars extends React.Component<IProps> {
  componentDidMount() {
    this.props.store.stars.loadStars()
  }

  render() {
    const { store } = this.props

    return (
      <div className={styles.stars}>
        { store.stars.isFetching ? 'Fetching Stars' : store.stars.count }
      </div>
    )
  }
}