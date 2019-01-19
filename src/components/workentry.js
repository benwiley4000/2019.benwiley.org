import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'

class WorkEntry extends PureComponent {
  render() {
    const {
      employer,
      title,
      location,
      startDate,
      endDate,
      contract,
      bulletPoints
    } = this.props
    return (
      <div className="work_entry">
        <h3>{employer} - {title}</h3>
        <p className="time_and_place">
          {startDate} - {endDate || 'present'}
          {(location || contract) &&
            <Fragment>
              <br />
              {location} {contract && '(contract)'}
            </Fragment>}
        </p>
        <ul>{bulletPoints.map(point => <li>{point}</li>)}</ul>
      </div>
    )
  }
}

WorkEntry.propsTypes = {
  employer: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  contract: PropTypes.bool.isRequired,
  bulletPoints: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired
}

export default WorkEntry
