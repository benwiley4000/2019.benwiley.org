import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class OpenSourceCategory extends PureComponent {
  render() {
    const { categoryTitle, entries } = this.props
    return (
      <div className="opensource_category">
        <h3>{categoryTitle}</h3>
        {entries.map(({
          projectName,
          description,
          programmingLanguages,
          repositoryLink
        }) =>
          <div key={projectName} className="opensource_entry">
            <h4>
              <a href={repositoryLink}>{projectName}</a>
            </h4>
            <p className="description">{description}</p>
            <p className="languages">
              <strong>Programming languages: </strong>
              {programmingLanguages.join(', ')}
            </p>
          </div>
        )}
      </div>
    )
  }
}

OpenSourceCategory.propsTypes = {
  categoryTitle: PropTypes.string.isRequired,
  entries: PropTypes.arrayOf(PropTypes.shape({
    projectName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    programmingLanguages: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    repositoryLink: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default OpenSourceCategory
