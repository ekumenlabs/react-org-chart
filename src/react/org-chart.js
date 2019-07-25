const { createElement, PureComponent } = require('react')
const { init } = require('../chart')

class OrgChart extends PureComponent {

  static defaultProps = {
    id: 'react-org-chart'
  }

  render() {
    const { id } = this.props

    return createElement('div', {
      id
    })
  }

  componentDidMount() {
    const { id, tree, ...options } = this.props

    init({ id: `#${id}`, data: tree, ...options })
  }
}

module.exports = OrgChart
