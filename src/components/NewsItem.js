import React, { Fragment } from 'react';
import Moment from 'react-moment';
import arrow from '../grayarrow2x.gif';

export default function NewsItem({
  details
}) {
  
  const num = (ind) => {
   return ind+=1;
  }
  
  return (
    <Fragment>
      {details && details.map((detail, index) => <div>

        <div className="media text-muted">
          <p className="index">{num(index)}.</p>
          <img src={arrow} className="arrow" />
          <p className="mb-0 small text-dark lh-125 mt-1 ml-1">
            {detail.title}{' '}
            <span className="text-gray text-wrap">({detail.url})</span>
          <div className="">
            <p className="">{detail.score} points by {detail.by.id} {' '}
              <a href="#"><Moment fromNow>{detail.by.createdISO}</Moment></a> | hide | {detail.descendants} comments</p>
          </div>
          </p>
        </div>
      </div>
      )}
    </Fragment>
  )
}
