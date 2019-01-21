import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

class WritingCategory extends PureComponent {
  render() {
    const { categoryTitle, entries } = this.props
    return (
      <div className="writing_category">
        <h3>{categoryTitle}</h3>
        {entries.map(({ title, date, link, description, isLinkExternal }) =>
          <div key={title} className="writing_entry">
            <h4>
              {isLinkExternal && <a href={link}>{title}</a>}
              {!isLinkExternal && <Link to={link}>{title}</Link>}
            </h4>
            <p className="date">{date}</p>
            <p>{description}</p>
          </div>
        )}
      </div>
    )
  }
}

WritingCategory.propsTypes = {
  categoryTitle: PropTypes.string.isRequired,
  entries: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.node.isRequired,
    date: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    description: PropTypes.node.isRequired,
    isLinkExternal: PropTypes.bool.isRequired
  }).isRequired).isRequired
}

export default WritingCategory
