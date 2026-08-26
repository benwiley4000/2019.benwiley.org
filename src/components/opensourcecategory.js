import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class OpenSourceCategory extends PureComponent {
  render() {
    const { categoryTitle, entries } = this.props
    return (
      <div className="opensource_category">
        <h3>{categoryTitle}</h3>
        {entries.map(
          ({
            projectName,
            description,
            programmingLanguages,
            repositoryLink,
            site,
            img,
          }) => (
            <div key={projectName} className="opensource_entry">
              <h4>
                <a href={site || repositoryLink}>{projectName}</a>
              </h4>
              {img && <img src={img} width={300} />}
              <p className="description">{description}</p>
              <p className="languages">
                <strong>Programming languages: </strong>
                {programmingLanguages.join(', ')}
                {site && (
                  <>
                    <br />
                    <small>
                      <a href={repositoryLink}>Open source repository</a>
                    </small>
                  </>
                )}
              </p>
            </div>
          )
        )}
      </div>
    )
  }
}

OpenSourceCategory.propsTypes = {
  categoryTitle: PropTypes.string.isRequired,
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      projectName: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      programmingLanguages: PropTypes.arrayOf(PropTypes.string.isRequired)
        .isRequired,
      repositoryLink: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default OpenSourceCategory
