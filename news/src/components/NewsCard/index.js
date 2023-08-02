import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types"

import styles from "./NewCard.module.css";
import { formatDate } from "../../utils/formatDate";

const NewCard = ({
  src,
  title,
  publishedAt,
  author,
  sourceName,
  description,
  url,
  noLastChild,
}) => {
  return (
    <>
      <div className={classnames(styles.newsCard, {
        [styles.newsCardGap]: noLastChild
      })}>
        <div className={styles.imgContainer}>
          <img
            className={styles.img}
            src={src}
            alt={`${title} thumbnail img`}
          />
          <p className={styles.imgContainer}>{title}</p>
        </div>

        <div>
          <p className={styles.newsCardContent}>{formatDate(publishedAt)}</p>
          <p className={styles.newsCardAuthor}>{`${author} | ${sourceName}`}</p>
          <p className={styles.newsCardDesc}>{description}</p>
          <a
            className={styles.url}
            href={url}
            target="_blank"
            rel="noreferrer noopener"
          >
            Go To website
          </a>
        </div>
      </div>
    </>
  );
};

NewCard.prototype = {
    src: PropTypes.string,
    title: PropTypes.string,
    publishedAt: PropTypes.string,
    author: PropTypes.string,
    sourceName: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    noLastChild: PropTypes.bool
}

export default NewCard;
