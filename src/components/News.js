import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Navbar from './Navbar';
import Footer from './Footer';
import NewsItem from './NewsItem';

const NEWS_QUERY = gql`
  query($limit: Int, $offset: Int){
    hn{
      topStories(limit: $limit, offset: $offset){
        id
        type
        by{
          id
          createdISO
        }
        time
        url
        score
        title
        descendants
      }
    }
  }
`

export class News extends Component {
  render() {
    const limit = 30;
    const offset = 1;

    return (
      <Fragment>
        <Query
          query={NEWS_QUERY}
          variables={{ limit, offset }}
        >
          {
            ({ loading, error, data }) => {
              if (loading) return <h4 className="container">Loading...</h4>
              if (error) console.log(error)

              const newsItems = data.hn.topStories.map((newsItem) => {
                if (newsItem) {
                  return {
                    id: newsItem.id,
                    type: newsItem.type,
                    by: newsItem.by,
                    time: newsItem.time,
                    url: newsItem.url,
                    score: newsItem.score,
                    title: newsItem.title,
                    descendants: newsItem.descendants
                  };
                }

                return false;
              });

              return <main role="main" className="container">
                <Navbar />
                <div className="bg-orange rounded shadow-sm pt-2 pb-4">
                  <NewsItem details={newsItems} />
                  <Footer />
                </div>
              </main>
            }
          }
        </Query>
      </Fragment>
    )
  }
}

export default News
