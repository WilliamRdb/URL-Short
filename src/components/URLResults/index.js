import React from 'react';
import './style.scss';

const URLResults = ({ data }) => {
  return (
    <div className="url-result">
      {(data.length !== 0) ? (
        data.map((result) => (
          <ul className="url-result__lists">
          <li className="url-result__lists__item">
            <p className="url-result__lists__item__content">{result.original_link}</p>
            <a href="#" className="url-result__lists__item__link">{result.full_short_link}</a>
            <button
              className="url-result__lists__item__button"
              type="button"
              value={result.full_short_link}
              onClick={() => {navigator.clipboard.writeText(result.full_short_link)}}
            >
              Copy
            </button>
          </li>
        </ul>
        ))
      ) : ''}
    </div>
  );
}
export default URLResults;
